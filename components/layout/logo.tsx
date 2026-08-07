import Link from "next/link";
import Image from "next/image";

export function Logo() {
  return (
    <Link
      href="/"
      aria-label="Olajuwon Olasimbo home"
      className="inline-flex min-h-11 items-center"
    >
      <Image
        src="/pdlogo1.png"
        alt="Olajuwon Olasimbo"
        width={40}
        height={40}
        priority
        className="h-10 w-auto"
      />
    </Link>
  );
}
