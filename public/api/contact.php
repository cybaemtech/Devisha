<?php
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type');

if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit;
}

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require 'PHPMailer/Exception.php';
require 'PHPMailer/PHPMailer.php';
require 'PHPMailer/SMTP.php';

function getMailer() {
    $mail = new PHPMailer(true);
    $mail->isSMTP();
    $mail->Host       = 'mail.devishaindustries.com';
    $mail->SMTPAuth   = true;
    $mail->Username   = 'noreply@devishaindustries.com';
    $mail->Password   = 'Cyaebm@909#';
    $mail->SMTPSecure = PHPMailer::ENCRYPTION_SMTPS; // Port 465 implicit SSL
    $mail->Port       = 465;
    $mail->Timeout    = 8;
    $mail->CharSet    = 'UTF-8';

    // Disable SSL peer verification to fix cPanel/PHP SSL handshake issues
    $mail->SMTPOptions = array(
        'ssl' => array(
            'verify_peer'       => false,
            'verify_peer_name'  => false,
            'allow_self_signed' => true
        )
    );

    $mail->setFrom('noreply@devishaindustries.com', 'DEVISHA Industries');
    $mail->Sender = 'noreply@devishaindustries.com';
    return $mail;
}

function sendSingleEmail($to, $subject, $body, $replyToEmail = null, $replyToName = '', $attachments = []) {
    try {
        $mail = getMailer();
        $mail->addAddress($to);
        $mail->isHTML(true);
        $mail->Subject = $subject;
        $mail->Body    = $body;
        
        if ($replyToEmail) {
            $mail->addReplyTo($replyToEmail, $replyToName);
        }

        foreach ($attachments as $attachment) {
            if (isset($attachment['tmp_name']) && file_exists($attachment['tmp_name'])) {
                $mail->addAttachment($attachment['tmp_name'], $attachment['name']);
            }
        }
        
        $mail->send();
        return ['success' => true];
    } catch (Exception $e) {
        $primaryError = isset($mail) && !empty($mail->ErrorInfo) ? $mail->ErrorInfo : $e->getMessage();
        
        // cPanel Fallback 1: Try localhost SMTP on port 25/587 if external hostname failed
        try {
            $mailLocal = new PHPMailer(true);
            $mailLocal->isSMTP();
            $mailLocal->Host       = 'localhost';
            $mailLocal->SMTPAuth   = true;
            $mailLocal->Username   = 'noreply@devishaindustries.com';
            $mailLocal->Password   = 'Cyaebm@909#';
            $mailLocal->Port       = 25;
            $mailLocal->Timeout    = 5;
            $mailLocal->CharSet    = 'UTF-8';
            $mailLocal->SMTPOptions = array(
                'ssl' => array(
                    'verify_peer'       => false,
                    'verify_peer_name'  => false,
                    'allow_self_signed' => true
                )
            );
            $mailLocal->setFrom('noreply@devishaindustries.com', 'DEVISHA Industries');
            $mailLocal->Sender = 'noreply@devishaindustries.com';

            $mailLocal->addAddress($to);
            $mailLocal->isHTML(true);
            $mailLocal->Subject = $subject;
            $mailLocal->Body    = $body;
            if ($replyToEmail) {
                $mailLocal->addReplyTo($replyToEmail, $replyToName);
            }
            $mailLocal->send();
            return ['success' => true, 'via' => 'localhost_smtp'];
        } catch (\Throwable $tLocal) {
            // Continue to PHP mail() fallback
        }

        // cPanel Fallback 2: Native PHP mail() with strict envelope headers & cPanel Return-Path
        try {
            $headers  = "MIME-Version: 1.0\r\n";
            $headers .= "Content-type: text/html; charset=UTF-8\r\n";
            $headers .= "From: DEVISHA Industries <noreply@devishaindustries.com>\r\n";
            $headers .= "Sender: noreply@devishaindustries.com\r\n";
            $headers .= "Return-Path: noreply@devishaindustries.com\r\n";
            if ($replyToEmail) {
                $headers .= "Reply-To: " . ($replyToName ? "$replyToName <$replyToEmail>" : $replyToEmail) . "\r\n";
            }
            $headers .= "X-Mailer: PHP/" . phpversion();

            $mailSent = @mail($to, $subject, $body, $headers, "-fnoreply@devishaindustries.com");
            if ($mailSent) {
                return ['success' => true, 'via' => 'php_mail_fallback'];
            }
        } catch (\Throwable $t) {
            // Ignore fallback exception
        }

        return ['success' => false, 'error' => $primaryError];
    }
}

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Collect data
    $name = $_POST['name'] ?? '';
    $company = $_POST['company'] ?? '';
    $email = $_POST['email'] ?? '';
    $phone = $_POST['phone'] ?? '';
    $service = $_POST['service'] ?? '';
    $description = $_POST['description'] ?? '';
    $resource = $_POST['resource'] ?? '';
    $start = $_POST['start'] ?? '';
    $duration = $_POST['duration'] ?? '';

    // Handle file upload
    $attachments = [];
    if (isset($_FILES['file']) && $_FILES['file']['error'] === UPLOAD_ERR_OK) {
        $attachments[] = [
            'tmp_name' => $_FILES['file']['tmp_name'],
            'name' => $_FILES['file']['name']
        ];
    }

    if (empty($name) || empty($email)) {
        http_response_code(400);
        echo json_encode(['error' => 'Name and Email are required.']);
        exit;
    }

    // 1. Send details to Admin
    $adminEmail = 'info@devishaindustries.com';
    $adminSubject = "New Contact Form Submission from $name";
    $adminBody = "
        <div style='font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; color: #333;'>
            <h2 style='color: #0b132b; border-bottom: 2px solid #00b4d8; padding-bottom: 8px;'>New Contact Requirement Submission</h2>
            <table cellpadding='6' cellspacing='0' style='width: 100%; border-collapse: collapse;'>
                <tr><td style='width: 30%; font-weight: bold;'>Name:</td><td>" . htmlspecialchars($name) . "</td></tr>
                <tr><td style='font-weight: bold;'>Company:</td><td>" . htmlspecialchars($company) . "</td></tr>
                <tr><td style='font-weight: bold;'>Email:</td><td><a href='mailto:" . htmlspecialchars($email) . "'>" . htmlspecialchars($email) . "</a></td></tr>
                <tr><td style='font-weight: bold;'>Phone:</td><td>" . htmlspecialchars($phone) . "</td></tr>
                <tr><td style='font-weight: bold;'>Service:</td><td>" . htmlspecialchars($service) . "</td></tr>
                <tr><td style='font-weight: bold;'>Resource Type:</td><td>" . htmlspecialchars($resource) . "</td></tr>
                <tr><td style='font-weight: bold;'>Start Date:</td><td>" . htmlspecialchars($start) . "</td></tr>
                <tr><td style='font-weight: bold;'>Duration:</td><td>" . htmlspecialchars($duration) . "</td></tr>
                <tr><td style='font-weight: bold; vertical-align: top;'>Description:</td><td>" . nl2br(htmlspecialchars($description)) . "</td></tr>
            </table>
        </div>
    ";

    $adminResult = sendSingleEmail($adminEmail, $adminSubject, $adminBody, $email, $name, $attachments);

    if (!$adminResult['success']) {
        http_response_code(500);
        echo json_encode(['error' => 'Failed to send email to admin.', 'details' => $adminResult['error']]);
        exit;
    }

    // 2. Send Thank You confirmation to User from noreply@devishaindustries.com
    $userSubject = "Thank You for Contacting DEVISHA Industries - Requirement Received";
    $userBody = '
    <!DOCTYPE html>
    <html>
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Thank You for Contacting DEVISHA Industries</title>
    </head>
    <body style="font-family: Arial, Helvetica, sans-serif; background-color: #f4f6f9; margin: 0; padding: 20px; color: #333333;">
        <table align="center" border="0" cellpadding="0" cellspacing="0" width="100%" style="max-width: 600px; background-color: #ffffff; border-radius: 8px; overflow: hidden; box-shadow: 0 4px 12px rgba(0,0,0,0.1);">
            <!-- Header -->
            <tr>
                <td style="background-color: #0b132b; padding: 30px 20px; text-align: center; border-bottom: 3px solid #00b4d8;">
                    <h1 style="color: #ffffff; margin: 0; font-size: 24px; letter-spacing: 1px; font-weight: 700;">DEVISHA INDUSTRIES</h1>
                    <p style="color: #00b4d8; margin: 5px 0 0 0; font-size: 12px; text-transform: uppercase; letter-spacing: 1.5px;">Precision Engineering & Production Solutions</p>
                </td>
            </tr>
            
            <!-- Body Content -->
            <tr>
                <td style="padding: 30px 25px;">
                    <h2 style="color: #0b132b; font-size: 20px; margin-top: 0;">Thank You for Reaching Out!</h2>
                    <p style="font-size: 15px; line-height: 1.6; color: #4a5568;">
                        Dear <strong>' . htmlspecialchars($name) . '</strong>,
                    </p>
                    <p style="font-size: 15px; line-height: 1.6; color: #4a5568;">
                        Thank you for contacting DEVISHA Industries. We have successfully received your inquiry and requirement details.
                    </p>
                    <p style="font-size: 15px; line-height: 1.6; color: #4a5568;">
                        Our engineering and technical team is currently reviewing your request and will get back to you shortly (typically within 24 business hours).
                    </p>

                    <!-- Summary Box -->
                    <div style="background-color: #f8fafc; border-left: 4px solid #00b4d8; padding: 18px 20px; margin: 25px 0; border-radius: 4px;">
                        <h3 style="margin-top: 0; color: #0b132b; font-size: 15px;">Summary of Your Submission:</h3>
                        <table border="0" cellpadding="5" cellspacing="0" width="100%" style="font-size: 14px; color: #4a5568;">
                            ' . (!empty($company) ? '<tr><td width="35%" style="font-weight: bold;">Company:</td><td>' . htmlspecialchars($company) . '</td></tr>' : '') . '
                            ' . (!empty($service) ? '<tr><td width="35%" style="font-weight: bold;">Service Requested:</td><td>' . htmlspecialchars($service) . '</td></tr>' : '') . '
                            ' . (!empty($resource) ? '<tr><td width="35%" style="font-weight: bold;">Resource Type:</td><td>' . htmlspecialchars($resource) . '</td></tr>' : '') . '
                            ' . (!empty($start) ? '<tr><td width="35%" style="font-weight: bold;">Expected Start:</td><td>' . htmlspecialchars($start) . '</td></tr>' : '') . '
                            ' . (!empty($duration) ? '<tr><td width="35%" style="font-weight: bold;">Duration:</td><td>' . htmlspecialchars($duration) . '</td></tr>' : '') . '
                            ' . (!empty($description) ? '<tr><td width="35%" style="font-weight: bold; vertical-align: top;">Description:</td><td>' . nl2br(htmlspecialchars($description)) . '</td></tr>' : '') . '
                        </table>
                    </div>

                    <p style="font-size: 14px; line-height: 1.6; color: #718096;">
                        If you have any additional information or urgent questions, please feel free to reply to this email or write directly to <a href="mailto:info@devishaindustries.com" style="color: #00b4d8; text-decoration: none; font-weight: bold;">info@devishaindustries.com</a>.
                    </p>
                    
                    <br>
                    <p style="font-size: 15px; color: #0b132b; margin: 0; font-weight: bold;">Best Regards,</p>
                    <p style="font-size: 14px; color: #4a5568; margin: 4px 0 0 0;"><strong>DEVISHA Industries Team</strong></p>
                    <p style="font-size: 13px; color: #718096; margin: 2px 0 0 0;">Pune, Maharashtra, India | <a href="https://devishaindustries.com" style="color: #00b4d8; text-decoration: none;">www.devishaindustries.com</a></p>
                </td>
            </tr>
            
            <!-- Footer -->
            <tr>
                <td style="background-color: #f1f5f9; padding: 15px 20px; text-align: center; font-size: 12px; color: #94a3b8; border-top: 1px solid #e2e8f0;">
                    This is an automated confirmation email sent from <strong>noreply@devishaindustries.com</strong>.
                </td>
            </tr>
        </table>
    </body>
    </html>
    ';

    $userResult = sendSingleEmail($email, $userSubject, $userBody, 'info@devishaindustries.com', 'DEVISHA Industries');

    echo json_encode([
        'success' => true, 
        'message' => 'Requirement received.',
        'userMailSent' => $userResult['success'],
        'userMailError' => $userResult['error'] ?? null
    ]);
} else {
    http_response_code(405);
    echo json_encode(['error' => 'Method not allowed.']);
}
?>
