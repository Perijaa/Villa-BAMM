import { cn } from "@/lib/utils";

interface SectionHeaderProps {
  label?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  className?: string;
}

export function SectionHeader({
  label,
  title,
  description,
  align = "center",
  className,
}: SectionHeaderProps) {
  return (
    <div
      className={cn(
        "flex flex-col gap-3 sm:gap-4",
        align === "center" && "items-center text-center",
        className
      )}
    >
      {label && (
        <span className="text-[0.65rem] font-medium tracking-[0.2em] uppercase text-muted-foreground sm:text-xs">
          {label}
        </span>
      )}
      <h2 className="font-heading text-2xl font-semibold tracking-tight sm:text-3xl md:text-4xl lg:text-5xl">
        {title}
      </h2>
      {description && (
        <p className="max-w-2xl text-[0.85rem] leading-relaxed text-muted-foreground sm:text-base lg:text-lg">
          {description}
        </p>
      )}
    </div>
  );
}
