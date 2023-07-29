import React from "react";
import { Pill } from "./Pill";

type Props = {
  period: string;
  title: string;
  link: string;
  children: React.ReactNode;
  stack: string[];
};

export const JobExperience = ({
  period,
  title,
  link,
  children,
  stack,
}: Props) => {
  return (
    <div className="flex gap-4">
      <div className="flex-none w-25">{period}</div>
      <div>
        <h3 className="text-xl font-bold mb-2">
          <a href={link} target="_blank">
            {title}
          </a>
        </h3>
        <div className="mb-2">{children}</div>

        <div className="flex gap-2">
          {stack.map((s, i) => (
            <Pill key={i}>{s}</Pill>
          ))}
        </div>
      </div>
    </div>
  );
};
