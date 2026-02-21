import { ModeToggle } from "@/components/mode-toggle";
import { DashboardSidebar } from "@/components/general/dashboard-sidebar";
import { Separator } from "@/components/ui/separator";
import { SidebarInset, SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";

export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <SidebarProvider>
      <DashboardSidebar />
      <SidebarInset className="relative overflow-hidden bg-transparent md:rounded-xl">
        <div aria-hidden className="pointer-events-none absolute inset-0">
          <div className="absolute inset-0 bg-[radial-gradient(50rem_50rem_at_8%_-2%,hsl(208_100%_84%/0.28),transparent_60%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(40rem_40rem_at_92%_10%,hsl(284_100%_88%/0.24),transparent_64%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(44rem_44rem_at_45%_95%,hsl(165_85%_78%/0.22),transparent_70%)]" />
          <div className="absolute inset-0 bg-[linear-gradient(to_bottom,hsl(var(--background)),hsl(var(--secondary)/0.35),hsl(var(--background)))]" />
        </div>

        <header className="sticky top-0 z-10 flex h-14 items-center justify-between border-b bg-background/80 px-4 backdrop-blur supports-backdrop-filter:bg-background/70">
          <div className="flex items-center gap-2">
            <SidebarTrigger />
            <Separator orientation="vertical" className="h-4" />
            <p className="text-sm font-medium">Dashboard</p>
          </div>
          <ModeToggle />
        </header>
        <div className="relative z-10 flex-1 p-4 md:p-6">{children}</div>
      </SidebarInset>
    </SidebarProvider>
  );
}
