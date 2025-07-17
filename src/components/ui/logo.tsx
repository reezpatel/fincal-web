import { cn } from "@/lib/utils";

export const Logo = ({
  className,
}: {
  size?: number;
  height?: number;
  width?: number;
  className?: string;
}) => {
  return (
    <img
      src="/logo-long.png"
      alt="Fincal"
      className={cn("object-contain", className)}
    />
  );
};
