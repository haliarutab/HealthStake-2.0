// @/components/ui/cross-grid-pattern.tsx
import { cn } from "@/lib/utils";

interface CrossGridPatternProps {
  className?: string;
  opacity?: string;
}

export function CrossGridPattern({ 
  className, 
  opacity = "opacity-[0.2]" 
}: CrossGridPatternProps) {
  return (
    <div
      className={cn(
        "absolute inset-0 z-0 pointer-events-none",
        opacity,
        className
      )}
      style={{
        // Note: I kept the SVG stroke as white/0.4 so it remains visible against your bg-main
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4v-4H4v4H0v2h4v4h2v-4h4v-2H6zM36 4v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
      }}
      aria-hidden="true"
    />
  );
}