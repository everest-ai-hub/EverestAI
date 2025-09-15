"use client";

import { ThemeProvider } from "@/components/theme-provider";
import { OrganizationSchema } from "@/components/schemas/organization";

export function RootClientWrapper({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="light"
      enableSystem={false}
      disableTransitionOnChange
    >
      <OrganizationSchema />
      {children}
    </ThemeProvider>
  );
}