import { cookies } from "next/headers";

export const ADMIN_COOKIE = "bf_admin";

// The cookie's value is checked against the same ADMIN_PASSWORD used to
// log in. It's httpOnly + secure, so client-side JS and other sites can
// never read it — good enough for a single-owner internal tool, though
// swapping in a separate random session token would be a nice upgrade
// later if this ever needs to be shared with a team.
export function checkAuth() {
  const cookie = cookies().get(ADMIN_COOKIE);
  return Boolean(cookie?.value) && cookie.value === process.env.ADMIN_PASSWORD;
}
