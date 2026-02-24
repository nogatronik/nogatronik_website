import nodemailer from "nodemailer";

/**
 *
 * @param name: string
 * @param verificationUrl: string
 *
 * The function gets the user's name and verificationUrl to replace these values from the
 * verification_email.html to send to the user's email.
 *
 * @returns
 * html: the email content that will be sent to the user to verify email
 */
const getVerificationEmailHtml = async ({
  name,
  verificationUrl,
}: {
  name: string;
  verificationUrl: string;
}) => {
  try {
    const res = await fetch(
      `${process.env.VERIFICATION_URL_DOMAIN}/emailTemplates/verification_email.html`,
    );

    if (!res.ok) {
      throw new Error(`Failed to fetch template: ${res.status}`);
    }

    let html = await res.text();

    // Replace placeholders from html file
    html = html
      .replace(/{{name}}/g, name)
      .replace(/{{verificationUrl}}/g, verificationUrl);

    return html;
  } catch (e) {
    console.log("getVerificationEmailHtml", e);
  }
};

/**
 *
 * @param name: string
 * @param email: string
 * @param token: string
 *
 * The function sets the verficiationUrl and the transporter used by nodemailer to
 * send the verification email to the recently registered user.
 *
 */
export async function sendVerificationEmail(
  name: string,
  email: string,
  token: string,
) {
  try {
    // Variables
    const domain = process.env.VERIFICATION_URL_DOMAIN;
    const verificationUrl = `${domain}verify-email?token=${token}`;
    const transporter = nodemailer.createTransport({
      host: "smtp.mail.us-east-1.awsapps.com",
      port: 465,
      secure: true,
      tls: {
        rejectUnauthorized: false,
      },
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    // Gets the verification email and forms object to sent via sendMail
    const html = await getVerificationEmailHtml({ name, verificationUrl });
    const mailOptions = {
      from: '"Nogatronik" <solutions@nogatronik.com>',
      to: email,
      subject: "Email Verification",
      html,
    };

    // Send email
    await transporter.sendMail(mailOptions);
  } catch (e) {
    console.log("sendVerificationEmail", e);
  }
}
