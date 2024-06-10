export { default } from "next-auth/middleware";

export const config = {
  matcher: [
    "/dashboard",
    "/stock",
    "/people",
    "/objects",
    "/profile",
    "/settings",
  ],
};
