import { cn } from '@/lib/utils';
import React from 'react';

export default function Button({ children, onClick, className, type, value, variant = "default", size = "sm" }) {
  // Define color styles for each variant
  const variantStyles = {
    default: "bg-black/90 text-white hover:bg-black",
    destructive: "bg-red-500 text-white hover:bg-red-700",
    muted: "bg-neutral-500 text-white hover:bg-neutral-600",
    outline: "border hover:bg-neutral-100"
  };

  // Get the color styles based on the variant type
  const colorStyles = variantStyles[variant] || variantStyles.default;
  const sizeStyles = size === "sm" ? "px-3 py-1.5 text-sm" : "lg" ? "px-4 py-1" : "";

  return (
    <button
      type={type}
      value={value}
      onClick={onClick}
      className={cn(
        "font-bold rounded-md shadow-md",
        colorStyles,
        sizeStyles,
        className
      )}
    >
      {children}
    </button >
  );
}
