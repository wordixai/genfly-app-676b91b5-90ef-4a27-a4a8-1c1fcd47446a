import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, ResponsiveContainer, Tooltip } from "recharts";
import { useCampusStore } from "@/store";

export function EnrollmentChart() {
  const { courses } = useCampusStore();
  
  // Prepare data for the chart
  const data = courses.map(course => ({
    name: course.code,
    enrolled: course.enrolled,
    capacity: course.capacity,
    available: course.capacity - course.enrolled,
  }));

  const chartConfig = {
    enrolled: {
      label: "Enrolled Students",
      color: "hsl(var(--primary))",
    },
    capacity: {
      label: "Total Capacity",
      color: "hsl(var(--muted))",
    },
    available: {
      label: "Available Seats",
      color: "hsl(var(--accent))",
    },
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>Course Enrollment</CardTitle>
        <CardDescription>Current enrollment status by course</CardDescription>
      </CardHeader>
      <CardContent className="h-[300px]">
        <ChartContainer config={chartConfig}>
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={data} margin={{ top: 10, right: 10, left: 0, bottom: 20 }}>
              <CartesianGrid strokeDasharray="3 3" vertical={false} />
              <XAxis 
                dataKey="name" 
                tick={{ fontSize: 12 }}
                tickLine={false}
                axisLine={false}
              />
              <YAxis 
                tick={{ fontSize: 12 }}
                tickLine={false}
                axisLine={false}
              />
              <ChartTooltip 
                content={({ active, payload }) => {
                  if (active && payload && payload.length) {
                    return (
                      <ChartTooltipContent>
                        {payload.map((entry, index) => (
                          <div key={`tooltip-${index}`} className="flex items-center gap-2">
                            <div 
                              className="h-2 w-2 rounded-full"
                              style={{ backgroundColor: entry.color }}
                            />
                            <span>{entry.name}: {entry.value}</span>
                          </div>
                        ))}
                      </ChartTooltipContent>
                    );
                  }
                  return null;
                }}
              />
              <Bar dataKey="enrolled" fill="var(--color-enrolled)" radius={[4, 4, 0, 0]} />
              <Bar dataKey="capacity" fill="var(--color-capacity)" radius={[4, 4, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </ChartContainer>
      </CardContent>
    </Card>
  );
}