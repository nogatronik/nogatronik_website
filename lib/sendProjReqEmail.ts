import nodemailer from "nodemailer";

export async function sendProjReqEmail(
  email: string,
  subject: string,
  subtitle: string,
  message: string,
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
      // tls: {
      //   rejectUnauthorized: false,
      // },
    });
    const mailOptions = {
      from: '"Nogatronik" <solutions@nogatronik.com>',
      to: '"Nogatronik" <solutions@nogatronik.com>',
      replyTo: email,
      subject: `[Project Request] ${subject} — ${subtitle}`,

      text: `
            New Project Request

            From:
            ${email}

            Category:
            ${subject}

            Title:
            ${subtitle}

            Message:
            ${message}
      `,

      html: `
        <div style="font-family: Arial, sans-serif; color: #1f2937; line-height: 1.6;">
          <h2 style="margin-bottom: 4px;">New Project Request</h2>
          <p style="color: #6b7280; margin-top: 0;">
            A new project request has been submitted.
          </p>

          <hr style="border: none; border-top: 1px solid #e5e7eb; margin: 16px 0;" />

          <table style="width: 100%; border-collapse: collapse; margin-bottom: 16px;">
            <tr>
              <td style="font-weight: bold; padding: 4px 0; width: 120px;">From:</td>
              <td>${email}</td>
            </tr>
            <tr>
              <td style="font-weight: bold; padding: 4px 0;">Category:</td>
              <td>${subject}</td>
            </tr>
            <tr>
              <td style="font-weight: bold; padding: 4px 0;">Title:</td>
              <td>${subtitle}</td>
            </tr>
          </table>

          <div>
            <p style="font-weight: bold; margin-bottom: 6px;">Project Details</p>
            <div style="
              padding: 12px;
              background-color: #f9fafb;
              border: 1px solid #e5e7eb;
              border-radius: 6px;
              white-space: pre-wrap;
            ">
              ${message}
            </div>
          </div>

          <hr style="border: none; border-top: 1px solid #e5e7eb; margin: 20px 0;" />

          <p style="font-size: 12px; color: #6b7280;">
            Reply directly to this email to contact the requester.
          </p>
        </div>
      `,
    };
    await transporter.sendMail(mailOptions);
  } catch (e) {
    console.log("sendProjReqEmail", e);
  }
}
