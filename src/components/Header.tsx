import Link from "next/link";

export const Header = () => {
  return (
    <header className="container mx-auto flex items-center justify-between h-[88px]">
      <Link href="/" className="font-bold">
        ellya.dev
      </Link>
      <div className="flex gap-1">
        <Link href="/experience">/experience</Link>
        <Link href="https://github.com/ellyaaisyah" target="_blank">
          /github
        </Link>
        <Link
          href="https://www.linkedin.com/in/ellya-aisyah-bb657097"
          target="_blank"
        >
          /linkedin
        </Link>
      </div>
    </header>
  );
};
