import type { Plugin } from "vite";
import nodemailer from "nodemailer";
import formidable from "formidable";

export function devContactApiPlugin(): Plugin {
  return {
    name: "dev-contact-api-plugin",
    configureServer(server) {
      server.middlewares.use((req, res, next) => {
        if (req.url === "/api/contact.php" && req.method === "POST") {
          const form = formidable({ multiples: false });

          form.parse(req, async (err, fields, files) => {
            if (err) {
              res.statusCode = 400;
              res.setHeader("Content-Type", "application/json");
              res.end(JSON.stringify({ error: "Invalid form submission." }));
              return;
            }

            const getField = (key: string) => {
              const val = fields[key];
              return Array.isArray(val) ? val[0] : val || "";
            };

            const name = getField("name");
            const company = getField("company");
            const email = getField("email");
            const phone = getField("phone");
            const service = getField("service");
            const description = getField("description");
            const resource = getField("resource");
            const start = getField("start");
            const duration = getField("duration");

            if (!name || !email) {
              res.statusCode = 400;
              res.setHeader("Content-Type", "application/json");
              res.end(JSON.stringify({ error: "Name and Email are required." }));
              return;
            }

            const attachments: Array<{ filename: string; path: string }> = [];
            const uploadedFile = files["file"];
            const singleFile = Array.isArray(uploadedFile) ? uploadedFile[0] : uploadedFile;

            if (singleFile && singleFile.filepath) {
              attachments.push({
                filename: singleFile.originalFilename || "attachment",
                path: singleFile.filepath,
              });
            }

            try {
              const transporter = nodemailer.createTransport({
                host: "mail.devishaindustries.com",
                port: 465,
                secure: true,
                auth: {
                  user: "noreply@devishaindustries.com",
                  pass: "Cyaebm@909#",
                },
                tls: {
                  rejectUnauthorized: false,
                },
              });

              // 1. Send details to Admin
              const adminSubject = `New Contact Form Submission from ${name}`;
              const adminBody = `
                <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; color: #333;">
                    <h2 style="color: #0b132b; border-bottom: 2px solid #00b4d8; padding-bottom: 8px;">New Contact Requirement Submission</h2>
                    <table cellpadding="6" cellspacing="0" style="width: 100%; border-collapse: collapse;">
                        <tr><td style="width: 30%; font-weight: bold;">Name:</td><td>${escapeHtml(name)}</td></tr>
                        <tr><td style="font-weight: bold;">Company:</td><td>${escapeHtml(company)}</td></tr>
                        <tr><td style="font-weight: bold;">Email:</td><td><a href="mailto:${escapeHtml(email)}">${escapeHtml(email)}</a></td></tr>
                        <tr><td style="font-weight: bold;">Phone:</td><td>${escapeHtml(phone)}</td></tr>
                        <tr><td style="font-weight: bold;">Service:</td><td>${escapeHtml(service)}</td></tr>
                        <tr><td style="font-weight: bold;">Resource Type:</td><td>${escapeHtml(resource)}</td></tr>
                        <tr><td style="font-weight: bold;">Start Date:</td><td>${escapeHtml(start)}</td></tr>
                        <tr><td style="font-weight: bold;">Duration:</td><td>${escapeHtml(duration)}</td></tr>
                        <tr><td style="font-weight: bold; vertical-align: top;">Description:</td><td>${escapeHtml(description).replace(/\n/g, "<br>")}</td></tr>
                    </table>
                </div>
              `;

              await transporter.sendMail({
                from: '"DEVISHA Industries" <noreply@devishaindustries.com>',
                to: "info@devishaindustries.com",
                replyTo: `"${name}" <${email}>`,
                subject: adminSubject,
                html: adminBody,
                attachments,
              });

              // 2. Send Thank You confirmation to User from noreply@devishaindustries.com
              const userSubject = "Thank You for Contacting DEVISHA Industries - Requirement Received";
              const userBody = `
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
                                  Dear <strong>${escapeHtml(name)}</strong>,
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
                                      ${company ? `<tr><td width="35%" style="font-weight: bold;">Company:</td><td>${escapeHtml(company)}</td></tr>` : ""}
                                      ${service ? `<tr><td width="35%" style="font-weight: bold;">Service Requested:</td><td>${escapeHtml(service)}</td></tr>` : ""}
                                      ${resource ? `<tr><td width="35%" style="font-weight: bold;">Resource Type:</td><td>${escapeHtml(resource)}</td></tr>` : ""}
                                      ${start ? `<tr><td width="35%" style="font-weight: bold;">Expected Start:</td><td>${escapeHtml(start)}</td></tr>` : ""}
                                      ${duration ? `<tr><td width="35%" style="font-weight: bold;">Duration:</td><td>${escapeHtml(duration)}</td></tr>` : ""}
                                      ${description ? `<tr><td width="35%" style="font-weight: bold; vertical-align: top;">Description:</td><td>${escapeHtml(description).replace(/\n/g, "<br>")}</td></tr>` : ""}
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
              `;

              let userMailSent = true;
              let userMailError = "";

              try {
                await transporter.sendMail({
                  from: '"DEVISHA Industries" <noreply@devishaindustries.com>',
                  to: email,
                  replyTo: '"DEVISHA Industries" <info@devishaindustries.com>',
                  subject: userSubject,
                  html: userBody,
                });
              } catch (userErr: any) {
                userMailSent = false;
                userMailError = userErr?.message || "User email sending failed";
                console.error("Error sending thank you email to user:", userErr);
              }

              res.statusCode = 200;
              res.setHeader("Content-Type", "application/json");
              res.end(
                JSON.stringify({
                  success: true,
                  message: "Requirement received.",
                  userMailSent,
                  userMailError: userMailSent ? null : userMailError,
                })
              );
            } catch (err: any) {
              console.error("Error sending contact email:", err);
              res.statusCode = 500;
              res.setHeader("Content-Type", "application/json");
              res.end(
                JSON.stringify({
                  error: "Failed to send email to admin.",
                  details: err?.message || String(err),
                })
              );
            }
          });
          return;
        }
        next();
      });
    },
  };
}

function escapeHtml(str?: string): string {
  return (str || "")
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}
