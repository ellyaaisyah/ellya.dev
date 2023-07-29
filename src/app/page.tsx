import Image from "next/image";

/* eslint-disable react/no-unescaped-entities */

export default function Home() {
  return (
    <main className="flex items-center justify-center container mx-auto text-center h-[calc(100vh-88px)] mt-[-44px]">
      <div>
        <div className="flex items-center bg-purple-200 p-6 rounded-xl shadow-md mx-auto mb-4 w-fit flex-wrap">
          <div>
            <Image
              src="/logo.png"
              alt="ellya.dev logo"
              width={80}
              height={80}
            />
          </div>
          <div className="typewriter">
            <h1 className="text-6xl text-purple-800">Hi, I'm Ellya</h1>
          </div>
        </div>

        <h2 className="text-xl mb-2">
          Front End Developer based in The Netherlands
        </h2>
      </div>
    </main>
  );
}
