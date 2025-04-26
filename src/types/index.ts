export interface Student {
  id: string;
  name: string;
  email: string;
  enrollmentDate: string;
  major: string;
  gpa: number;
  status: 'active' | 'inactive' | 'graduated' | 'on-leave';
}

export interface Course {
  id: string;
  code: string;
  name: string;
  description: string;
  credits: number;
  department: string;
  instructor: string;
  schedule: string;
  capacity: number;
  enrolled: number;
}

export interface Faculty {
  id: string;
  name: string;
  email: string;
  department: string;
  position: string;
  hireDate: string;
  status: 'active' | 'on-leave' | 'retired';
}

export interface Department {
  id: string;
  name: string;
  code: string;
  head: string;
  building: string;
  budget: number;
  established: string;
}

export interface Event {
  id: string;
  title: string;
  description: string;
  date: string;
  location: string;
  organizer: string;
  type: 'academic' | 'social' | 'sports' | 'other';
}