import Image from "next/image";

/* eslint-disable react/no-unescaped-entities */
const links = [
  {
    label: "Resume",
    link: "/resume.pdf",
  },
  {
    label: "GitHub account",
    link: "https://www.linkedin.com/in/ellya-aisyah-bb657097",
  },
  {
    label: "LinkedIn account",
    link: "https://github.com/ellyaaisyah",
  },
];

export default function Home() {
  return (
    <main className="container mx-auto min-h-screen flex items-center justify-center flex-wrap text-center">
      <div>
        <div className="flex items-center bg-purple-200 p-6 rounded-xl shadow-md mx-auto mb-4 w-fit flex-wrap">
          <div>
            <Image
              src="/logo.png"
              alt="ellyaaisyah.github.io logo"
              width={80}
              height={80}
            />
          </div>
          <div className="typewriter">
            <h1 className="text-6xl">Hi, I'm Ellya</h1>
          </div>
        </div>

        <h2 className="text-2xl mb-2">
          Front End Developer based in The Netherlands
        </h2>

        {links.map((l, index) => (
          <p className="mb-2 last:mb-0" key={index}>
            Here is my{" "}
            <a
              href={l.link}
              target="_blank"
              className="text-purple-800 hover:underline"
            >
              {l.label}
            </a>
            .
          </p>
        ))}
      </div>
    </main>
  );
}
