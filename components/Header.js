import { HeaderClient } from "@/lib/HeaderClient";
import { HeaderServer } from "@/lib/HeaderServer";

export default async function Header() {
  const user = await HeaderServer();
  return <HeaderClient user={user} />;
}
