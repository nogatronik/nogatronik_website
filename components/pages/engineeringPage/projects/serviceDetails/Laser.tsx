import SendProjectReqForm from "@/components/forms/SendProjectReqForm";
import { useSession } from "next-auth/react";
import Link from "next/link";
import React from "react";
import { RiLoginBoxFill } from "react-icons/ri";

const Laser = () => {
  const { data: session } = useSession();
  return (
    <div className="flex flex-col gap-5">
      <h3>Laser Cut/Engraving</h3>
      <p>
        At Nogatronik Engineering, we believe every idea deserves to take shape
        with <strong>precision</strong>, <strong>creativity</strong>, and{" "}
        <strong>craftsmanship</strong>. Our engraving and cutting solutions
        combine advanced technology with expert design, allowing us to transform
        materials like wood, leather, and acrylic into unique, high-quality
        pieces that stand out.
      </p>

      <h3>What We Offer</h3>
      <ul className="list-disc list-inside flex flex-col gap-2">
        <li className="text-secondary">
          <strong>Personalized Product Engraving:</strong> Add a personal touch
          with custom engravings on wood, leather, or acrylic. Perfect for
          nameplates, signage, awards, or one-of-a-kind gifts that make every
          event memorable.
        </li>
        <li className="text-secondary">
          <strong>Decor & Artistic Pieces:</strong> Create stunning wall panels,
          ornaments, and wooden artwork that bring warmth and character to
          homes, shops, and offices—or even to sell as exclusive online décor.
        </li>
        <li className="text-secondary">
          <strong>Prototypes & Scale Models:</strong> Support your design and
          engineering projects with precisely cut components for accurate{" "}
          <strong>prototypes</strong>, <strong>scale models</strong>, and{" "}
          <strong>engineering mock-ups</strong>.
        </li>
        <li className="text-secondary">
          <strong>DIY Assembly Kits:</strong> We design and cut fun, creative{" "}
          <strong>“Do It Yourself” kits</strong> for furniture, decorative
          pieces, and craft projects—perfect for hobbyists, makers, and gift
          shops.
        </li>
        <li className="text-secondary">
          <strong>Souvenirs & Custom Merchandising:</strong> Tailor-made
          promotional items and event souvenirs, engraved or cut with your logo
          or design, to strengthen branding and make a lasting impression.
        </li>
      </ul>

      <div className="relative">
        <hr className="line-break mt-0" />
      </div>

      <h2 className="m-auto">Ready to Start Your Project</h2>
      {session ? (
        <SendProjectReqForm subject={"Laser Cut/Engraving"} />
      ) : (
        <div className="m-auto flex flex-col gap-5 items-center">
          <p>In order to send a request, you need to login</p>
          <Link href={"/login"} className="button">
            <RiLoginBoxFill className="icon" />
            <small>Login</small>
          </Link>
        </div>
      )}
    </div>
  );
};

export default Laser;
