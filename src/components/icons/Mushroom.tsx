import { LucideIcon } from "lucide-react";

export const Mushroom: LucideIcon = (props) => {
  return (
    <svg
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
      <path d="M12 2c-4.4 0-8 3.6-8 8c0 .4 0 .8.1 1.2C4.6 12.4 7.1 13 12 13s7.4-.6 7.9-1.8c.1-.4.1-.8.1-1.2c0-4.4-3.6-8-8-8z" />
      <path d="M12 13v9" />
      <path d="M8 20h8" />
    </svg>
  );
};