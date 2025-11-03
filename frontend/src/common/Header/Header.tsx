'use client'
import { useState } from "react";
import { ArrowLeft, CloseSquare } from "iconsax-reactjs";
import Link from "next/link";

function Header() {
  const [showBanner, setShowBanner] = useState(true);

  return (
    <header className="w-full min-h-14">
      {/* Top Banner */}
      {showBanner && (
        <section className="bg-primary rounded-lg flex-center h-11 p-2.5">
          <Link href="/" className="flex-center gap-x-2 text-white flex-1">
            <span className="font-yekanBakh font-medium">
              تخفیف ها شروع شده همین الان خرید کن
            </span>
            <ArrowLeft size="24" color="white" variant="Outline" />
          </Link>
          <button
            aria-label="close banner"
            onClick={() => setShowBanner(false)}
            className="self-end ml-4 cursor-pointer"
          >
            <CloseSquare size="24" color="white" variant="Outline" />
          </button>
        </section>
      )}

      {/* Desktop */}

      {/* Mobile */}
    </header>
  );
}

export default Header;
