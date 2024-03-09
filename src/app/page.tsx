import { Box } from "@/components/box";
import Image from "next/image";

export default function Home() {
  return (
    <main className="container mx-auto py-16">
      <div className="grid grid-cols-3 gap-8">
        <Box className="row-span-2 bg-violet-200">
          <Image
            src="/logo.png"
            alt="ellya.dev logo"
            width={200}
            height={200}
            priority
            className="mx-auto"
          />
        </Box>
        <Box className="col-span-2 bg-red-200">01</Box>
        <Box className="bg-yellow-200">02</Box>
        <Box className="bg-blue-200">03</Box>
      </div>
    </main>
  );
}
