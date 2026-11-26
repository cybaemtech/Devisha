import nodemailer from "nodemailer";

async function testSmtp() {
  console.log("Testing SMTP connection to mail.devishaindustries.com...");

  const transporter = nodemailer.createTransport({
    host: "mail.devishaindustries.com",
    port: 465,
    secure: true, // Port 465
    auth: {
      user: "noreply@devishaindustries.com",
      pass: "Cyaebm@909#",
    },
    tls: {
      rejectUnauthorized: false,
    },
  });

  try {
    const verifyResult = await transporter.verify();
    console.log("SMTP Connection Verification SUCCESS:", verifyResult);

    console.log("Sending test email...");
    const info = await transporter.sendMail({
      from: '"DEVISHA Industries" <noreply@devishaindustries.com>',
      to: "info@devishaindustries.com",
      subject: "Test Email from SMTP Script",
      text: "This is a test email to verify SMTP configuration.",
    });

    console.log("Send Mail SUCCESS! MessageId:", info.messageId);
  } catch (error: any) {
    console.error("SMTP ERROR:", error);
  }
}

testSmtp();
