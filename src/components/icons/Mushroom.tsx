import { forwardRef } from "react";
import { LucideProps } from "lucide-react";

export const Mushroom = forwardRef<SVGSVGElement, LucideProps>((props, ref) => {
  return (
    <svg
      ref={ref}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="M17 12c0 5-10 5-10 0v-2a5 5 0 0 1 10 0v2z" />
      <path d="M12 12v8" />
      <path d="M9 18h6" />
      <path d="M9.5 10a.5.5 0 1 1-.5-.5c.28 0 .5.22.5.5z" />
      <path d="M14.5 10a.5.5 0 1 1-.5-.5c.28 0 .5.22.5.5z" />
    </svg>
  );
});

Mushroom.displayName = "Mushroom";