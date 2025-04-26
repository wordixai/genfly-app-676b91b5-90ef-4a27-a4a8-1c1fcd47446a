import { 
  Users, 
  BookOpen, 
  UserCog, 
  Building2, 
  Calendar 
} from "lucide-react";
import { useCampusStore } from "@/store";
import { StatCard } from "@/components/dashboard/StatCard";
import { RecentActivity } from "@/components/dashboard/RecentActivity";
import { UpcomingEvents } from "@/components/dashboard/UpcomingEvents";
import { EnrollmentChart } from "@/components/dashboard/EnrollmentChart";
import { DepartmentBudgetChart } from "@/components/dashboard/DepartmentBudgetChart";

export default function Dashboard() {
  const { students, courses, faculty, departments, events } = useCampusStore();
  
  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-3xl font-bold tracking-tight">Dashboard</h2>
        <p className="text-muted-foreground">
          Overview of your campus management system
        </p>
      </div>
      
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-5">
        <StatCard 
          title="Total Students" 
          value={students.length} 
          icon={Users}
          description="Active and enrolled students"
        />
        <StatCard 
          title="Courses" 
          value={courses.length} 
          icon={BookOpen}
          description="Currently offered courses"
        />
        <StatCard 
          title="Faculty Members" 
          value={faculty.length} 
          icon={UserCog}
          description="Academic staff"
        />
        <StatCard 
          title="Departments" 
          value={departments.length} 
          icon={Building2}
          description="Academic departments"
        />
        <StatCard 
          title="Upcoming Events" 
          value={events.length} 
          icon={Calendar}
          description="Scheduled campus events"
        />
      </div>
      
      <div className="grid gap-4 md:grid-cols-2">
        <EnrollmentChart />
        <DepartmentBudgetChart />
      </div>
      
      <div className="grid gap-4 md:grid-cols-2">
        <RecentActivity />
        <UpcomingEvents />
      </div>
    </div>
  );
}