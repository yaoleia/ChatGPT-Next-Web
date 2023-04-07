import { Analytics } from "@vercel/analytics/react";

import { Home } from "./components/home";

export const dynamic = "force-dynamic";
export const revalidate = 0;

export default function App() {
  return (
    <>
      <Home />
      <Analytics />
    </>
  );
}
