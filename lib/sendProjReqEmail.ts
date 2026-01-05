import nodemailer from "nodemailer";

export async function sendProjReqEmail(
  email: string,
  subject: string,
  message: string
) {
  try {
    // Variables
    const transporter = nodemailer.createTransport({
      host: "smtp.mail.us-east-1.awsapps.com",
      port: 465,
      secure: true,
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });
    const mailOptions = {
      from: '"Nogatronik" <solutions@nogatronik.com>',
      to: '"Nogatronik" <solutions@nogatronik.com>',
      replyTo: email,
      subject: subject,
      text: `
              New project request received:

              From: ${email}

              Message:
              ${message}
                    `,
      html: `
                      <h2>New Project Request</h2>
                      <p><strong>From:</strong> ${email}</p>
                      <p><strong>Message:</strong></p>
                      <p>${message.replace(/\n/g, "<br />")}</p>
      `,
    };
    console.log(email, subject, message);
    // Send email
    await transporter.sendMail(mailOptions);
  } catch (e) {
    console.log("sendProjReqEmail", e);
  }
}
