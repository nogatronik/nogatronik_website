import { CaptchaData } from "@/lib/types";

/**
 *  params: void
 *
 *  This gets the token required by reCaptcha to process the user's attemp to register
 *
 *  return: token as string
 */
export const getCaptchaToken = () => {
  return new Promise<string | null>((resolve) => {
    grecaptcha.ready(async () => {
      const siteKey = process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY;

      if (!siteKey) {
        return;
      }

      const token = await grecaptcha.execute(siteKey, {
        action: "register",
      });
      resolve(token);
    });
  });
};

/**
 *
 * @param token as string
 *
 *
 *
 * @returns null if res is malformed, or a success set to true if valid or a success
 *  set to false with error string if token is invalid
 */
export const verifyCaptchaToken = async (token: string) => {
  // Variables
  const secretKey = process.env.RECAPTCHA_SECRET_KEY;

  // If there is no key, throw error
  if (!secretKey) {
    throw new Error("No secret key found");
  }

  // Fetching action to validate token for recaptcha
  const url = new URL("https://www.google.com/recaptcha/api/siteverify");
  url.searchParams.append("secret", secretKey);
  url.searchParams.append("response", token);

  // fetch and saved response
  const res = await fetch(url.toString(), { method: "POST" });
  const captchaData: CaptchaData = await res.json();

  // if res's ok is set to false, return null
  if (!res.ok) return null;

  // else return res
  return captchaData;
};