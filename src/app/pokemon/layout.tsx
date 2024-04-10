import Menu from "@/components/pokemon/menu";
import Link from "next/link";

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex flex-col h-screen bg-slate-200">
      <Menu />
      <hr className="h-0.5 bg-black mx-20" />
      <br />
      {children}
    </div>
  );
}
