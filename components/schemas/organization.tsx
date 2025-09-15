"use client";

import { jsonLdScriptProps } from "react-schemaorg";
import { Organization } from "schema-dts";

export function OrganizationSchema() {
  return (
    <script
      {...jsonLdScriptProps<Organization>({
        "@context": "https://schema.org",
        "@type": "Organization",
        name: "EverestAI Hub",
        url: "https://everestai.vercel.app",
        logo: "https://everestai.vercel.app/logo.png",
        description: "Nepal's leading AI transformation company offering cutting-edge artificial intelligence solutions and enterprise AI consulting.",
        address: {
          "@type": "PostalAddress",
          addressCountry: "Nepal",
          addressLocality: "Kathmandu",
        },
        sameAs: [
          "https://twitter.com/EverestAIHub",
          "https://linkedin.com/company/everestai-hub",
          // Add other social media links
        ],
        contactPoint: {
          "@type": "ContactPoint",
          telephone: "your-phone-number",
          contactType: "customer service",
          email: "contact@everestai.com",
        },
      })}
    />
  );
}