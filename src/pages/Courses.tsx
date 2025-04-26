import { useState } from "react";
import { useCampusStore } from "@/store";
import { Course } from "@/types";
import { CourseTable } from "@/components/courses/CourseTable";
import { CourseForm } from "@/components/courses/CourseForm";
import { 
  Dialog, 
  DialogContent, 
  DialogHeader, 
  DialogTitle 
} from "@/components/ui/dialog";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";
import { toast } from "@/hooks/use-toast";

export default function Courses() {
  const { courses, addCourse, updateCourse, deleteCourse } = useCampusStore();
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [isDeleteDialogOpen, setIsDeleteDialogOpen] = useState(false);
  const [currentCourse, setCurrentCourse] = useState<Course | undefined>(undefined);
  const [courseToDelete, setCourseToDelete] = useState<string | undefined>(undefined);

  const handleAddClick = () => {
    setCurrentCourse(undefined);
    setIsFormOpen(true);
  };

  const handleEditClick = (course: Course) => {
    setCurrentCourse(course);
    setIsFormOpen(true);
  };

  const handleDeleteClick = (id: string) => {
    setCourseToDelete(id);
    setIsDeleteDialogOpen(true);
  };

  const handleFormSubmit = (values: Omit<Course, "id">) => {
    if (currentCourse) {
      updateCourse(currentCourse.id, values);
      toast({
        title: "Course Updated",
        description: `${values.code}: ${values.name} has been updated successfully.`,
      });
    } else {
      addCourse(values);
      toast({
        title: "Course Added",
        description: `${values.code}: ${values.name} has been added successfully.`,
      });
    }
    setIsFormOpen(false);
  };

  const handleDeleteConfirm = () => {
    if (courseToDelete) {
      const course = courses.find(c => c.id === courseToDelete);
      deleteCourse(courseToDelete);
      toast({
        title: "Course Deleted",
        description: `${course?.code}: ${course?.name} has been removed from the system.`,
      });
      setIsDeleteDialogOpen(false);
      setCourseToDelete(undefined);
    }
  };

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-3xl font-bold tracking-tight">Courses</h2>
        <p className="text-muted-foreground">
          Manage course offerings and enrollment
        </p>
      </div>
      
      <CourseTable 
        onAdd={handleAddClick}
        onEdit={handleEditClick}
        onDelete={handleDeleteClick}
      />
      
      <Dialog open={isFormOpen} onOpenChange={setIsFormOpen}>
        <DialogContent className="sm:max-w-[600px]">
          <DialogHeader>
            <DialogTitle>
              {currentCourse ? "Edit Course" : "Add New Course"}
            </DialogTitle>
          </DialogHeader>
          <CourseForm 
            course={currentCourse}
            onSubmit={handleFormSubmit}
            onCancel={() => setIsFormOpen(false)}
          />
        </DialogContent>
      </Dialog>
      
      <AlertDialog open={isDeleteDialogOpen} onOpenChange={setIsDeleteDialogOpen}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Are you sure?</AlertDialogTitle>
            <AlertDialogDescription>
              This action cannot be undone. This will permanently delete the
              course from the system.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Cancel</AlertDialogCancel>
            <AlertDialogAction onClick={handleDeleteConfirm} className="bg-red-600">
              Delete
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </div>
  );
}