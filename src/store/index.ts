import { create } from 'zustand';
import { Student, Course, Faculty, Department, Event } from '@/types';
import { students, courses, faculty, departments, events } from '@/data/mockData';
import { v4 as uuidv4 } from 'uuid';

interface CampusStore {
  // Data
  students: Student[];
  courses: Course[];
  faculty: Faculty[];
  departments: Department[];
  events: Event[];
  
  // Student actions
  addStudent: (student: Omit<Student, 'id'>) => void;
  updateStudent: (id: string, student: Partial<Student>) => void;
  deleteStudent: (id: string) => void;
  
  // Course actions
  addCourse: (course: Omit<Course, 'id'>) => void;
  updateCourse: (id: string, course: Partial<Course>) => void;
  deleteCourse: (id: string) => void;
  
  // Faculty actions
  addFaculty: (member: Omit<Faculty, 'id'>) => void;
  updateFaculty: (id: string, member: Partial<Faculty>) => void;
  deleteFaculty: (id: string) => void;
  
  // Department actions
  addDepartment: (department: Omit<Department, 'id'>) => void;
  updateDepartment: (id: string, department: Partial<Department>) => void;
  deleteDepartment: (id: string) => void;
  
  // Event actions
  addEvent: (event: Omit<Event, 'id'>) => void;
  updateEvent: (id: string, event: Partial<Event>) => void;
  deleteEvent: (id: string) => void;
}

export const useCampusStore = create<CampusStore>((set) => ({
  students,
  courses,
  faculty,
  departments,
  events,
  
  // Student actions
  addStudent: (student) => 
    set((state) => ({ 
      students: [...state.students, { ...student, id: uuidv4() }] 
    })),
  
  updateStudent: (id, updatedStudent) => 
    set((state) => ({ 
      students: state.students.map(student => 
        student.id === id ? { ...student, ...updatedStudent } : student
      ) 
    })),
  
  deleteStudent: (id) => 
    set((state) => ({ 
      students: state.students.filter(student => student.id !== id) 
    })),
  
  // Course actions
  addCourse: (course) => 
    set((state) => ({ 
      courses: [...state.courses, { ...course, id: uuidv4() }] 
    })),
  
  updateCourse: (id, updatedCourse) => 
    set((state) => ({ 
      courses: state.courses.map(course => 
        course.id === id ? { ...course, ...updatedCourse } : course
      ) 
    })),
  
  deleteCourse: (id) => 
    set((state) => ({ 
      courses: state.courses.filter(course => course.id !== id) 
    })),
  
  // Faculty actions
  addFaculty: (member) => 
    set((state) => ({ 
      faculty: [...state.faculty, { ...member, id: uuidv4() }] 
    })),
  
  updateFaculty: (id, updatedMember) => 
    set((state) => ({ 
      faculty: state.faculty.map(member => 
        member.id === id ? { ...member, ...updatedMember } : member
      ) 
    })),
  
  deleteFaculty: (id) => 
    set((state) => ({ 
      faculty: state.faculty.filter(member => member.id !== id) 
    })),
  
  // Department actions
  addDepartment: (department) => 
    set((state) => ({ 
      departments: [...state.departments, { ...department, id: uuidv4() }] 
    })),
  
  updateDepartment: (id, updatedDepartment) => 
    set((state) => ({ 
      departments: state.departments.map(department => 
        department.id === id ? { ...department, ...updatedDepartment } : department
      ) 
    })),
  
  deleteDepartment: (id) => 
    set((state) => ({ 
      departments: state.departments.filter(department => department.id !== id) 
    })),
  
  // Event actions
  addEvent: (event) => 
    set((state) => ({ 
      events: [...state.events, { ...event, id: uuidv4() }] 
    })),
  
  updateEvent: (id, updatedEvent) => 
    set((state) => ({ 
      events: state.events.map(event => 
        event.id === id ? { ...event, ...updatedEvent } : event
      ) 
    })),
  
  deleteEvent: (id) => 
    set((state) => ({ 
      events: state.events.filter(event => event.id !== id) 
    })),
}));