import { ThemeProvider } from "next-themes";
import { Toaster } from "@/components/ui/toaster";
import { 
  SidebarProvider, 
  Sidebar, 
  SidebarHeader, 
  SidebarContent, 
  SidebarFooter,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
  SidebarInset,
  SidebarTrigger
} from "@/components/ui/sidebar";
import { 
  Home, 
  Users, 
  BookOpen, 
  UserCog, 
  Building2, 
  Calendar, 
  Settings,
  LogOut
} from "lucide-react";
import { Link, useLocation } from "react-router-dom";

interface MainLayoutProps {
  children: React.ReactNode;
}

export function MainLayout({ children }: MainLayoutProps) {
  const location = useLocation();
  const currentPath = location.pathname;

  return (
    <ThemeProvider defaultTheme="light" attribute="class">
      <SidebarProvider defaultOpen={true}>
        <div className="flex min-h-screen">
          <Sidebar>
            <SidebarHeader>
              <div className="flex items-center gap-2 px-2">
                <BookOpen className="h-6 w-6" />
                <span className="font-semibold text-lg">Campus Manager</span>
              </div>
            </SidebarHeader>
            <SidebarContent>
              <SidebarMenu>
                <SidebarMenuItem>
                  <Link to="/" className="w-full">
                    <SidebarMenuButton isActive={currentPath === "/"}>
                      <Home className="h-4 w-4" />
                      <span>Dashboard</span>
                    </SidebarMenuButton>
                  </Link>
                </SidebarMenuItem>
                <SidebarMenuItem>
                  <Link to="/students" className="w-full">
                    <SidebarMenuButton isActive={currentPath.startsWith("/students")}>
                      <Users className="h-4 w-4" />
                      <span>Students</span>
                    </SidebarMenuButton>
                  </Link>
                </SidebarMenuItem>
                <SidebarMenuItem>
                  <Link to="/courses" className="w-full">
                    <SidebarMenuButton isActive={currentPath.startsWith("/courses")}>
                      <BookOpen className="h-4 w-4" />
                      <span>Courses</span>
                    </SidebarMenuButton>
                  </Link>
                </SidebarMenuItem>
                <SidebarMenuItem>
                  <Link to="/faculty" className="w-full">
                    <SidebarMenuButton isActive={currentPath.startsWith("/faculty")}>
                      <UserCog className="h-4 w-4" />
                      <span>Faculty</span>
                    </SidebarMenuButton>
                  </Link>
                </SidebarMenuItem>
                <SidebarMenuItem>
                  <Link to="/departments" className="w-full">
                    <SidebarMenuButton isActive={currentPath.startsWith("/departments")}>
                      <Building2 className="h-4 w-4" />
                      <span>Departments</span>
                    </SidebarMenuButton>
                  </Link>
                </SidebarMenuItem>
                <SidebarMenuItem>
                  <Link to="/events" className="w-full">
                    <SidebarMenuButton isActive={currentPath.startsWith("/events")}>
                      <Calendar className="h-4 w-4" />
                      <span>Events</span>
                    </SidebarMenuButton>
                  </Link>
                </SidebarMenuItem>
              </SidebarMenu>
            </SidebarContent>
            <SidebarFooter>
              <SidebarMenu>
                <SidebarMenuItem>
                  <Link to="/settings" className="w-full">
                    <SidebarMenuButton>
                      <Settings className="h-4 w-4" />
                      <span>Settings</span>
                    </SidebarMenuButton>
                  </Link>
                </SidebarMenuItem>
                <SidebarMenuItem>
                  <SidebarMenuButton>
                    <LogOut className="h-4 w-4" />
                    <span>Logout</span>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              </SidebarMenu>
            </SidebarFooter>
          </Sidebar>
          <SidebarInset>
            <div className="flex h-14 items-center border-b px-4 lg:h-[60px]">
              <SidebarTrigger />
              <div className="ml-2 font-semibold">Campus Management System</div>
            </div>
            <main className="flex-1 p-4 md:p-6">
              {children}
            </main>
          </SidebarInset>
        </div>
      </SidebarProvider>
      <Toaster />
    </ThemeProvider>
  );
}