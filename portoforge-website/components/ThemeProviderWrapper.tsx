"use client";

import { ThemeProvider } from "next-themes";

export default function ThemeProviderWrapper({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider
      attribute="class"
      enableSystem={true}
      defaultTheme="system"
      enableColorScheme={false}
    >
      {children}
    </ThemeProvider>
  );
}
