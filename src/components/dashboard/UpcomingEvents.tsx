import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar } from "lucide-react";
import { useCampusStore } from "@/store";
import { format } from "date-fns";

export function UpcomingEvents() {
  const { events } = useCampusStore();
  
  // Sort events by date and take the first 5
  const upcomingEvents = [...events]
    .sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime())
    .slice(0, 5);

  const getEventTypeColor = (type: string) => {
    switch (type) {
      case 'academic':
        return 'bg-blue-100 text-blue-800';
      case 'social':
        return 'bg-green-100 text-green-800';
      case 'sports':
        return 'bg-orange-100 text-orange-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <div>
          <CardTitle>Upcoming Events</CardTitle>
          <CardDescription>Events scheduled in the near future</CardDescription>
        </div>
        <Calendar className="h-4 w-4 text-muted-foreground" />
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {upcomingEvents.map((event) => (
            <div key={event.id} className="flex flex-col space-y-1">
              <div className="flex items-center justify-between">
                <span className="font-medium">{event.title}</span>
                <Badge variant="outline" className={getEventTypeColor(event.type)}>
                  {event.type}
                </Badge>
              </div>
              <div className="flex items-center justify-between text-sm">
                <span className="text-muted-foreground">
                  {format(new Date(event.date), "MMM d, yyyy")}
                </span>
                <span className="text-muted-foreground">{event.location}</span>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}