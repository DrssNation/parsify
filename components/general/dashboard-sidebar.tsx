import Link from "next/link";
import Image from "next/image";
import {
  FileText,
  LayoutDashboard,
  Settings,
  Sparkles,
  LogOut,
  ChevronsUpDown,
} from "lucide-react";

import { auth, signOut } from "@/app/auth";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";

const dashboardNavItems = [
  { title: "Overview", href: "/dashboard", icon: LayoutDashboard },
  { title: "Documents", href: "/dashboard", icon: FileText },
  { title: "Extracted Data", href: "/dashboard", icon: Sparkles },
  { title: "Settings", href: "/dashboard", icon: Settings },
];

export async function DashboardSidebar() {
  const session = await auth();
  const profileInitial =
    session?.user?.name?.trim()?.charAt(0)?.toUpperCase() ||
    session?.user?.email?.trim()?.charAt(0)?.toUpperCase() ||
    "U";
  const profileImage = session?.user?.image?.trim();
  const userDisplayName = session?.user?.name ?? "Signed in user";
  const userEmail = session?.user?.email ?? "No email";

  return (
    <Sidebar variant="inset" collapsible="icon">
      <SidebarHeader>
        <Link
          href="/dashboard"
          className="flex items-center gap-2 rounded-md px-2 py-1.5"
        >
          <div className="rounded-md bg-emerald-300 px-2 py-1 text-xs font-semibold text-emerald-950">
            P
          </div>
          <div className="group-data-[collapsible=icon]:hidden">
            <p className="text-sm font-semibold tracking-tight">Parsify</p>
            <p className="text-xs text-muted-foreground">Dashboard</p>
          </div>
        </Link>
      </SidebarHeader>

      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Navigation</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {dashboardNavItems.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild tooltip={item.title}>
                    <Link href={item.href}>
                      <item.icon />
                      <span>{item.title}</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>

      <SidebarFooter>
        {session?.user ? (
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button
                variant="secondary"
                size="sm"
                className="h-10 w-full justify-between gap-2 rounded-lg px-2"
              >
                <span className="flex min-w-0 items-center gap-2">
                  <span className="shrink-0">
                    {profileImage ? (
                      <Image
                        src={profileImage}
                        alt={session.user.name ?? "User profile"}
                        width={32}
                        height={32}
                        className="size-8 rounded-full object-cover"
                        unoptimized
                      />
                    ) : (
                      <span className="flex size-8 items-center justify-center rounded-full bg-muted text-xs font-semibold text-muted-foreground">
                        {profileInitial}
                      </span>
                    )}
                  </span>
                  <span className="min-w-0 text-left group-data-[collapsible=icon]:hidden">
                    <span className="block truncate text-sm font-medium">
                      {userDisplayName}
                    </span>
                    <span className="block truncate text-xs text-muted-foreground">
                      {userEmail}
                    </span>
                  </span>
                </span>
                <ChevronsUpDown className="size-4 text-muted-foreground group-data-[collapsible=icon]:hidden" />
                <span className="sr-only">Open user menu</span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" side="top" className="w-64">
              <DropdownMenuLabel className="font-normal">
                <div className="flex items-center gap-2">
                  <span className="shrink-0">
                    {profileImage ? (
                      <Image
                        src={profileImage}
                        alt={session.user.name ?? "User profile"}
                        width={28}
                        height={28}
                        className="size-7 rounded-full object-cover"
                        unoptimized
                      />
                    ) : (
                      <span className="flex size-7 items-center justify-center rounded-full bg-muted text-xs font-semibold text-muted-foreground">
                        {profileInitial}
                      </span>
                    )}
                  </span>
                  <div className="min-w-0">
                    <p className="truncate text-sm font-medium">{userDisplayName}</p>
                    <p className="truncate text-xs text-muted-foreground">{userEmail}</p>
                  </div>
                </div>
              </DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem asChild>
                <form
                  action={async () => {
                    "use server";
                    await signOut({ redirectTo: "/" });
                  }}
                  className="w-full"
                >
                  <button
                    type="submit"
                    className="flex w-full items-center gap-2 text-left"
                  >
                    <LogOut className="size-4" />
                    Sign out
                  </button>
                </form>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        ) : (
          <Button asChild size="sm" className="w-full">
            <Link href="/login">Sign in</Link>
          </Button>
        )}
      </SidebarFooter>
    </Sidebar>
  );
}
