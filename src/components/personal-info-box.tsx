"use client";

import { Box } from "@/components/box";
import { motion } from "framer-motion";
import Image from "next/image";

export const PersonalInfoBox = () => {
  return (
    <Box className="row-span-2 bg-violet-200">
      <motion.div
        initial={{ scale: 0 }}
        animate={{ rotate: 360, scale: 1 }}
        transition={{
          type: "spring",
          stiffness: 260,
          damping: 20,
        }}
      >
        <Image
          src="/logo.png"
          alt="ellya.dev logo"
          width={200}
          height={200}
          priority
          className="mx-auto"
        />
      </motion.div>
      <h1 className="text-6xl">Ellya Aisyah</h1>
      <p>Front End Developer based in The Netherlands</p>
    </Box>
  );
};
