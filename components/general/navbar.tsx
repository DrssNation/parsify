import { Menu, User } from "lucide-react";
import Link from "next/link";

import { ModeToggle } from "@/components/mode-toggle";
import { Button } from "@/components/ui/button";
import { auth, signOut } from "@/app/auth";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

export async function Navbar() {

  const session = await auth();
  const profileInitial =
    session?.user?.name?.trim()?.charAt(0)?.toUpperCase() ||
    session?.user?.email?.trim()?.charAt(0)?.toUpperCase();

  return (
    <header className="sticky top-4 z-20 rounded-xl border border-primary/15 bg-background/85 px-4 py-3 backdrop-blur supports-backdrop-filter:bg-background/70">
      <div className="flex items-center justify-between gap-4">
        <a href="#" className="flex items-center gap-3">
          <div className="rounded-md bg-emerald-300 px-2 py-1 text-xs font-semibold text-emerald-950">
            P
          </div>
          <div className="flex flex-col leading-tight">
            <span className="text-sm font-semibold tracking-tight">Parsify</span>
            <span className="text-xs text-muted-foreground">
              AI PDF Intelligence
            </span>
          </div>
        </a>

        <nav className="hidden items-center gap-7 text-sm text-muted-foreground md:flex">
          <a className="transition-colors hover:text-foreground" href="#features">
            Features
          </a>
          <a className="transition-colors hover:text-foreground" href="#workflow">
            Workflow
          </a>
          <a className="transition-colors hover:text-foreground" href="#use-cases">
            Use Cases
          </a>
          <a className="transition-colors hover:text-foreground" href="#pricing">
            Pricing
          </a>
        </nav>

        <div className="hidden items-center gap-2 md:flex">
          <ModeToggle />


          {session?.user ? (
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button
                  variant="secondary"
                  size="icon-sm"
                  className="size-9 rounded-full p-0"
                >
                  <Avatar size="sm">
                    <AvatarImage
                      src={session.user.image ?? undefined}
                      alt={session.user.name ?? "User profile"}
                    />
                    <AvatarFallback>
                      {profileInitial ? (
                        profileInitial
                      ) : (
                        <User className="size-3.5" />
                      )}
                    </AvatarFallback>
                  </Avatar>
                  <span className="sr-only">Open account menu</span>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuItem asChild>
                  <form
                    action={async () => {
                      "use server";
                      await signOut({ redirectTo: "/" });
                    }}
                    className="w-full"
                  >
                    <button type="submit" className="w-full text-left">
                      Logout
                    </button>
                  </form>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          ) : (
            <Button
              asChild
              size="sm"
              className="bg-emerald-300 text-emerald-950 shadow-sm hover:bg-emerald-200"
            >
              <Link href="/login">Sign in</Link>
            </Button>
          )}
          </div>

        <Sheet>
          <SheetTrigger asChild>
            <Button className="md:hidden" variant="ghost" size="icon-sm">
              <Menu />
              <span className="sr-only">Open menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="md:hidden">
            <SheetTitle className="sr-only">Mobile navigation menu</SheetTitle>
            <div className="mt-10 flex flex-col gap-2 px-2">
              <SheetClose asChild>
                <a
                  className="rounded-md px-3 py-2 text-sm text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground"
                  href="#features"
                >
                  Features
                </a>
              </SheetClose>
              <SheetClose asChild>
                <a
                  className="rounded-md px-3 py-2 text-sm text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground"
                  href="#workflow"
                >
                  Workflow
                </a>
              </SheetClose>
              <SheetClose asChild>
                <a
                  className="rounded-md px-3 py-2 text-sm text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground"
                  href="#use-cases"
                >
                  Use Cases
                </a>
              </SheetClose>
              <SheetClose asChild>
                <a
                  className="rounded-md px-3 py-2 text-sm text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground"
                  href="#pricing"
                >
                  Pricing
                </a>
              </SheetClose>
            </div>

            <div className="mt-auto flex items-center gap-2 border-t border-primary/15 p-4">
              <ModeToggle />
              {session?.user ? (
                <form
                  action={async () => {
                    "use server";
                    await signOut({ redirectTo: "/" });
                  }}
                  className="flex-1"
                >
                  <Button type="submit" variant="secondary" className="w-full">
                    Logout
                  </Button>
                </form>
              ) : (
                <Button
                  asChild
                  className="w-full bg-emerald-300 text-emerald-950 shadow-sm hover:bg-emerald-200"
                >
                  <Link href="/login">Sign in</Link>
                </Button>
              )}
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}
