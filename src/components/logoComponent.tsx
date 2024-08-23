"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";
import logoImage from "@/assests/logo.jpg";
function Logo() {
  const router = useRouter();

  const navigateToPage = () => {
    router.push("/");
  };

  return (
    <div
      className="flex flex-row items-center justify-start gap-0"
      onClick={navigateToPage}
    >
      <Image
        src={logoImage.src}
        alt="company_logo"
        width={50}
        height={50}
        className="cursor-pointer"
      />
    </div>
  );
}

export default Logo;
