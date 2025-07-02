import { NextResponse } from "next/server";
import { VerificationToken } from "@/models/User";
import { User } from "@/models/User";
import { connectDB } from "@/lib/mongodb";

/**
 *
 * This api route handles the final step to finish user's registration
 *
 * @returns JSX
 */
export async function GET(req: Request) {
  await connectDB();

  const { searchParams } = new URL(req.url);
  const token = searchParams.get("token");

  if (!token) return NextResponse.redirect("/login");

  try {
    // Check if the token is valid
    const record = await VerificationToken.findOne({ token });

    if (!record || record.expires < new Date()) {
      return NextResponse.redirect("/login"); // Invalid or expired token
    }

    // Mark the user's email as verified
    await User.findByIdAndUpdate(record.userId, { emailVerified: true });

    // Remove the token to prevent re-use
    await VerificationToken.deleteOne({ _id: record._id });

    // Redirect to login page
    return NextResponse.redirect(new URL("/login?verified=1", req.url));
  } catch (e) {
    console.error("[EMAIL_VERIFY_ERROR]", e);
    return NextResponse.redirect(
      new URL("/login?error=verification-failed", req.url)
    );
  }
}
