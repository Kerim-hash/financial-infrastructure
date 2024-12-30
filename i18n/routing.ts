import { createNavigation } from "next-intl/navigation";
import { defineRouting } from "next-intl/routing";

export const routing = defineRouting({
  // A list of all locales that are supported
  locales: ["en", "ru"],

  // Used when no locale matches
  defaultLocale: "en",

  // Define localized routes
  pathnames: {
    "/contact": {
      en: "/contact-me",
      ru: "/contact-me"
    },
    "/about": {
      en: "/about-us",
      ru: "about-us"
    },
    "/services": {
      en: "/our-services",
      ru: "our-services"
    },
  },
});

// Lightweight wrappers around Next.js' navigation APIs
// that will consider the routing configuration
export type Locale = (typeof routing.locales)[number];
export const { Link, redirect, usePathname, useRouter } =
  createNavigation(routing);
