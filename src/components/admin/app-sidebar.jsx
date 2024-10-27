import {
  Calendar,
  Home,
  Inbox,
  Search,
  UserRound,
  ChartBarStacked,
} from "lucide-react";

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import Link from "next/link";

// Menu items.
const items = [
  {
    title: "Admin",
    url: "/admin",
    icon: Home,
  },
  {
    title: "Dashboard",
    url: "/admin/dashboard",
    icon: Inbox,
  },
  {
    title: "Events",
    url: "/admin/events",
    icon: Calendar,
  },
  {
    title: "Categories",
    url: "/admin/categories",
    icon: Search,
  },
  {
    title: "Sub Categories",
    url: "/admin/subcategories",
    icon: ChartBarStacked,
  },
  {
    title: "Users",
    url: "/admin/users",
    icon: UserRound,
  },
];

export function AppSidebar() {
  return (
    <Sidebar>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Application</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {items.map((item) => (
                <SidebarMenuItem
                  key={item.title}
                  className="mb-3 SidebarMenuItem"
                >
                  <SidebarMenuButton asChild>
                    <Link href={item.url}>
                    <>
                      <item.icon />
                      <span className="blue-span">{item.title}</span>
                    </>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}
