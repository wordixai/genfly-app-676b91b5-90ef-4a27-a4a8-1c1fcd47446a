import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

interface ActivityItem {
  id: string;
  action: string;
  entity: string;
  timestamp: string;
  user: string;
}

const recentActivities: ActivityItem[] = [
  {
    id: "1",
    action: "Added",
    entity: "New student: Emma Johnson",
    timestamp: "2 hours ago",
    user: "Admin"
  },
  {
    id: "2",
    action: "Updated",
    entity: "Course: CS101 - Introduction to Computer Science",
    timestamp: "3 hours ago",
    user: "Dr. Alan Turing"
  },
  {
    id: "3",
    action: "Cancelled",
    entity: "Event: Department Meeting",
    timestamp: "5 hours ago",
    user: "Dr. Peter Drucker"
  },
  {
    id: "4",
    action: "Approved",
    entity: "Leave request: Dr. Rosalind Franklin",
    timestamp: "Yesterday",
    user: "Admin"
  },
  {
    id: "5",
    action: "Added",
    entity: "New course: BIO240 - Molecular Biology",
    timestamp: "Yesterday",
    user: "Dr. Rosalind Franklin"
  }
];

export function RecentActivity() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Recent Activity</CardTitle>
        <CardDescription>Latest actions in the system</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {recentActivities.map((activity) => (
            <div key={activity.id} className="flex items-start gap-4">
              <div className="relative mt-0.5 flex h-2 w-2">
                <div className="absolute inline-flex h-2 w-2 animate-ping rounded-full bg-primary opacity-75"></div>
                <div className="relative inline-flex h-2 w-2 rounded-full bg-primary"></div>
              </div>
              <div className="flex-1 space-y-1">
                <p className="text-sm font-medium leading-none">
                  <span className="font-semibold">{activity.action}</span> {activity.entity}
                </p>
                <p className="text-xs text-muted-foreground">
                  {activity.timestamp} by {activity.user}
                </p>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}