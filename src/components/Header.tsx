export const Header = () => {
  return (
    <header className="container mx-auto flex items-center justify-between h-[88px]">
      <a href="/" className="font-bold text-black">
        ellya.dev
      </a>
      <div className="flex gap-1">
        {/* <a href="/now">/now</a> */}
        <a href="/resume.pdf" target="_blank">
          /resume
        </a>
        <a href="https://github.com/ellyaaisyah" target="_blank">
          /github
        </a>
        <a
          href="https://www.linkedin.com/in/ellya-aisyah-bb657097"
          target="_blank"
        >
          /linkedin
        </a>
      </div>
    </header>
  );
};
