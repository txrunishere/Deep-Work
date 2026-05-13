import React from "react";
import { cn } from "../lib/cn";

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: "default" | "outline";
  loading?: boolean;
};

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      children,
      variant = "default",
      className,
      disabled,
      loading,
      type = "button",
      ...props
    },
    ref,
  ) => {
    const baseStyles =
      "inline-flex items-center justify-center rounded-md px-4 py-3 text-sm font-semibold transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-purple-400 focus-visible:ring-offset-2 focus-visible:ring-offset-[#1b1b23] disabled:pointer-events-none disabled:cursor-not-allowed";

    const variants = {
      default:
        "bg-purple-300 text-purple-900 hover:bg-purple-400 disabled:bg-purple-300/60",

      outline:
        "border border-purple-300 text-purple-300 hover:bg-purple-400 hover:text-purple-900 disabled:border-purple-300/50 disabled:text-purple-300/50",
    };

    return (
      <button
        ref={ref}
        type={type}
        disabled={disabled || loading}
        className={cn(baseStyles, variants[variant], className)}
        {...props}
      >
        {loading ? "Loading..." : children}
      </button>
    );
  },
);

Button.displayName = "Button";
