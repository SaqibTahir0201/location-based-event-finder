import ShineBorder from "@/components/ui/shine-border";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/admin/app-sidebar";
import { TableProvider } from "@/context/TableContext"; 

export default function Layout({ children }) {
  return (
    <TableProvider>
    <ShineBorder
      className="relative  min-h-screen w-full  overflow-hidden rounded-lg border bg-background text-foreground md:shadow-xl z-50"
      color={["#A07CFE", "#FE8FB5", "#FFBE7B"]}
    >
      <SidebarProvider>
        <AppSidebar />
        <main className="w-full h-screen">
          <SidebarTrigger />
          {children}
        </main>
      </SidebarProvider>
    </ShineBorder>
    </TableProvider>

  );
}
