import Link from "next/link";
import { Button } from "../ui/button";
import Menu from "./Menu";

export default function Navbar() {
  return (
    <div className="flex flex-row items-center justify-between">
      <Link href={"/"}>
        <span className="font-semibold">bitt</span>
      </Link>

      <Menu />

      <Button className="rounded-full">Sign in</Button>
    </div>
  );
}
