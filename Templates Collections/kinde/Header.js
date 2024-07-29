import { HeaderClient } from "@/Templates Collections/kinde/HeaderClient";
import { HeaderServer } from "@/Templates Collections/kinde/HeaderServer";

export default async function Header() {
  const user = await HeaderServer();
  return <HeaderClient user={user} />;
}
