import { Box } from "@/components/box";
import { PersonalInfoBox } from "@/components/personal-info-box";

export default function Home() {
  return (
    <main className="container mx-auto py-16">
      <div className="grid grid-cols-3 gap-8">
        <PersonalInfoBox />
        <Box className="col-span-2 bg-red-200">01</Box>
        <Box className="bg-yellow-200">02</Box>
        <Box className="bg-blue-200">03</Box>
      </div>
    </main>
  );
}
