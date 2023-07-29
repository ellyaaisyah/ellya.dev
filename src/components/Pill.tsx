type Props = {
  children: string | React.ReactNode;
};

export const Pill = ({ children }: Props) => {
  return (
    <span className="bg-purple-900 text-white px-4 py-1 text-sm rounded-full">
      {children}
    </span>
  );
};
