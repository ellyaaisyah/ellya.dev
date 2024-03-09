import { cn } from "@/lib/utils";

type Props = {
  children: React.ReactNode;
  className?: string;
};

export const Box = ({ children, className }: Props) => {
  return (
    <div className={cn("rounded-lg min-h-[260px] p-8", className)}>
      {children}
    </div>
  );
};
