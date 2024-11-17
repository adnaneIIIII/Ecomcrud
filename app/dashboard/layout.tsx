import Image from "next/image";
import Link from "next/link";
import Menu from "../components/Menu";
import Navbar from "../components/Navbar";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { redirect } from "next/navigation";

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const { getUser } = getKindeServerSession();
  const user = await getUser();
  if (!user || user.email !== "adnane.elotmani@usmba.ac.ma") {
    return redirect("/");
  }
  return (
    <div className="flex h-screen">
      {/* Sidebar */}
      <div className=" w-[14%] md:w-[8%] lg:w-[16%] xl:w-[14%] bg-[#f6f6f8] ">
        <Link
          href="/"
          className="flex items-center justify-center lg:justify-start gap-2 p-3"
        >
          <Image src={"/logo.svg"} alt="logo" width={50} height={40} />
          <span className="hidden lg:block font-bold text-lg text-gray-800 ">
            GoldenShop
          </span>
        </Link>
        <Menu />
      </div>
      {/* Main content */}
      <div className="w-[86%] md:w-[92%] lg:w-[84%] xl:w-[86%] bg-#f6f6f8">
        <Navbar />
        {children}
      </div>
    </div>
  );
}
