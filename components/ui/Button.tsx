import { cn } from "@/lib/utils";
import { forwardRef } from "react";
import type { AnchorHTMLAttributes, ButtonHTMLAttributes, ReactNode } from "react";

type Variant = "primary" | "secondary" | "ghost";
type Size = "sm" | "md" | "lg";

interface BaseProps {
  variant?: Variant;
  size?: Size;
  children: ReactNode;
  className?: string;
  fullWidth?: boolean;
}

const base =
  "group relative inline-flex items-center justify-center gap-2 rounded-full font-medium transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/40 focus-visible:ring-offset-2 focus-visible:ring-offset-black disabled:cursor-not-allowed disabled:opacity-60";

const variants: Record<Variant, string> = {
  primary:
    "bg-white text-black hover:bg-white/95 active:scale-[0.98] shadow-[0_10px_30px_-10px_rgba(255,255,255,0.35)]",
  secondary:
    "border border-white/12 bg-white/[0.03] text-white/90 hover:border-white/25 hover:bg-white/[0.06]",
  ghost: "text-white/80 hover:bg-white/[0.04] hover:text-white",
};

const sizes: Record<Size, string> = {
  sm: "px-3.5 py-1.5 text-[13px]",
  md: "px-5 py-2.5 text-[14.5px]",
  lg: "px-6 py-3 text-[15px]",
};

type ButtonProps = BaseProps &
  ButtonHTMLAttributes<HTMLButtonElement> & { as?: "button" };
type AnchorProps = BaseProps &
  AnchorHTMLAttributes<HTMLAnchorElement> & { as: "a"; href: string };

export type Props = ButtonProps | AnchorProps;

const Button = forwardRef<HTMLButtonElement | HTMLAnchorElement, Props>(
  function Button(props, ref) {
    const {
      variant = "primary",
      size = "md",
      className,
      fullWidth,
      children,
      ...rest
    } = props;

    const classes = cn(
      base,
      variants[variant],
      sizes[size],
      fullWidth && "w-full",
      className
    );

    if ("href" in rest && rest.href !== undefined) {
      const { href, ...anchorRest } = rest as AnchorHTMLAttributes<HTMLAnchorElement>;
      return (
        <a
          ref={ref as React.Ref<HTMLAnchorElement>}
          href={href}
          className={classes}
          {...anchorRest}
        >
          {children}
        </a>
      );
    }

    return (
      <button
        ref={ref as React.Ref<HTMLButtonElement>}
        className={classes}
        {...(rest as ButtonHTMLAttributes<HTMLButtonElement>)}
      >
        {children}
      </button>
    );
  }
);

export default Button;
