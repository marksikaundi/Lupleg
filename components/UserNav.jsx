import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { LogoutLink } from "@kinde-oss/kinde-auth-nextjs/components";

export default function UserNav() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" className="relative h-10 w-10 rounded-full">
            <Avatar className="h-10 w-10">
            <AvatarFallback>MAR</AvatarFallback>

            </Avatar>
        </Button>
      </DropdownMenuTrigger>
        <DropdownMenuContent className="w-56" align="end" forceMount>
            <DropdownMenuLabel className="font-normal">
                <div className="flex flex-col space-y-1">
                    <p className="text-sm font-medium leading-none">Mark Sikaundi</p>
                    <p className="text-xs leading-none text-muted-foreground">mark@lupleg.website</p>

                </div>

            </DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenu>
                <DropdownMenuItem href="/account">Account</DropdownMenuItem>
                <DropdownMenuItem href="/settings">Settings</DropdownMenuItem>
                <DropdownMenuItem href="/settings">Settings</DropdownMenuItem>
                <DropdownMenuItem href="/settings">Settings</DropdownMenuItem>
            </DropdownMenu>
            <DropdownMenuSeparator />
            <DropdownMenuItem> <LogoutLink>Sign out</LogoutLink> </DropdownMenuItem>
        </DropdownMenuContent>
    </DropdownMenu>
  );
}
