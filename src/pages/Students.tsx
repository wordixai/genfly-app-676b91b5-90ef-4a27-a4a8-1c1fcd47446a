import { useState } from "react";
import { useCampusStore } from "@/store";
import { Student } from "@/types";
import { StudentTable } from "@/components/students/StudentTable";
import { StudentForm } from "@/components/students/StudentForm";
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

export default function Students() {
  const { students, addStudent, updateStudent, deleteStudent } = useCampusStore();
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [isDeleteDialogOpen, setIsDeleteDialogOpen] = useState(false);
  const [currentStudent, setCurrentStudent] = useState<Student | undefined>(undefined);
  const [studentToDelete, setStudentToDelete] = useState<string | undefined>(undefined);

  const handleAddClick = () => {
    setCurrentStudent(undefined);
    setIsFormOpen(true);
  };

  const handleEditClick = (student: Student) => {
    setCurrentStudent(student);
    setIsFormOpen(true);
  };

  const handleDeleteClick = (id: string) => {
    setStudentToDelete(id);
    setIsDeleteDialogOpen(true);
  };

  const handleFormSubmit = (values: Omit<Student, "id">) => {
    if (currentStudent) {
      updateStudent(currentStudent.id, values);
      toast({
        title: "Student Updated",
        description: `${values.name} has been updated successfully.`,
      });
    } else {
      addStudent(values);
      toast({
        title: "Student Added",
        description: `${values.name} has been added successfully.`,
      });
    }
    setIsFormOpen(false);
  };

  const handleDeleteConfirm = () => {
    if (studentToDelete) {
      const studentName = students.find(s => s.id === studentToDelete)?.name;
      deleteStudent(studentToDelete);
      toast({
        title: "Student Deleted",
        description: `${studentName} has been removed from the system.`,
      });
      setIsDeleteDialogOpen(false);
      setStudentToDelete(undefined);
    }
  };

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-3xl font-bold tracking-tight">Students</h2>
        <p className="text-muted-foreground">
          Manage student records and information
        </p>
      </div>
      
      <StudentTable 
        onAdd={handleAddClick}
        onEdit={handleEditClick}
        onDelete={handleDeleteClick}
      />
      
      <Dialog open={isFormOpen} onOpenChange={setIsFormOpen}>
        <DialogContent className="sm:max-w-[600px]">
          <DialogHeader>
            <DialogTitle>
              {currentStudent ? "Edit Student" : "Add New Student"}
            </DialogTitle>
          </DialogHeader>
          <StudentForm 
            student={currentStudent}
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
              student record from the system.
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