import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const badgeVariants = cva(
  "inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-xs font-semibold transition-colors",
  {
    variants: {
      variant: {
        default: "border border-sky-500/30 bg-sky-500/10 text-sky-300",
        orange: "border border-orange-500/30 bg-orange-500/10 text-orange-300",
        green: "border border-green-500/30 bg-green-500/10 text-green-300",
        amber: "border border-amber-500/30 bg-amber-500/10 text-amber-300",
        outline: "border border-white/10 bg-white/[0.04] text-white/60",
      },
    },
    defaultVariants: { variant: "default" },
  }
);

export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {}

function Badge({ className, variant, ...props }: BadgeProps) {
  return <div className={cn(badgeVariants({ variant }), className)} {...props} />;
}

export { Badge, badgeVariants };
