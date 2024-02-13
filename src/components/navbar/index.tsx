import React from "react";
import { ModeToggle } from "./mode-toggle";
import { Button } from "@ui/button";
import Link from "next/link";

const Navbar = () => {
  return (
    <header className="w-full">
      <div className="container p-4 sm:p-6 flex items-center justify-between">
        <Link href="/">
          <h2 className="text-2xl font-bold">Next Level UI</h2>
        </Link>

        <div className="flex items-center gap-3">
          <Button asChild>
            <Link href="/login">Login</Link>
          </Button>
          <ModeToggle />
        </div>
      </div>
    </header>
  );
};

export default Navbar;
