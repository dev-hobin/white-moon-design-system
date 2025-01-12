"use client";

import { ReactNode } from "react";

export interface ButtonProps {
  children: ReactNode;
  className?: string;
  appName: string;
}

export const Button = ({ children, appName }: ButtonProps) => {
  return (
    <button
      className={"text-black border border-black p-2"}
      onClick={() => alert(`Hello from your ${appName} app!`)}
    >
      {children}
    </button>
  );
};
