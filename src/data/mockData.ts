import { Student, Course, Faculty, Department, Event } from "@/types";
import { v4 as uuidv4 } from "uuid";

export const students: Student[] = [
  {
    id: uuidv4(),
    name: "John Smith",
    email: "john.smith@university.edu",
    enrollmentDate: "2021-09-01",
    major: "Computer Science",
    gpa: 3.8,
    status: "active"
  },
  {
    id: uuidv4(),
    name: "Emma Johnson",
    email: "emma.johnson@university.edu",
    enrollmentDate: "2020-09-01",
    major: "Business Administration",
    gpa: 3.5,
    status: "active"
  },
  {
    id: uuidv4(),
    name: "Michael Brown",
    email: "michael.brown@university.edu",
    enrollmentDate: "2022-01-15",
    major: "Electrical Engineering",
    gpa: 3.2,
    status: "active"
  },
  {
    id: uuidv4(),
    name: "Sarah Davis",
    email: "sarah.davis@university.edu",
    enrollmentDate: "2019-09-01",
    major: "Psychology",
    gpa: 3.9,
    status: "graduated"
  },
  {
    id: uuidv4(),
    name: "David Wilson",
    email: "david.wilson@university.edu",
    enrollmentDate: "2021-01-15",
    major: "Biology",
    gpa: 3.4,
    status: "on-leave"
  }
];

export const courses: Course[] = [
  {
    id: uuidv4(),
    code: "CS101",
    name: "Introduction to Computer Science",
    description: "Fundamental concepts of programming and computer science",
    credits: 3,
    department: "Computer Science",
    instructor: "Dr. Alan Turing",
    schedule: "Mon/Wed 10:00-11:30",
    capacity: 30,
    enrolled: 28
  },
  {
    id: uuidv4(),
    code: "BUS200",
    name: "Principles of Management",
    description: "Introduction to management theory and practice",
    credits: 3,
    department: "Business",
    instructor: "Dr. Peter Drucker",
    schedule: "Tue/Thu 13:00-14:30",
    capacity: 40,
    enrolled: 35
  },
  {
    id: uuidv4(),
    code: "ENG220",
    name: "Circuit Analysis",
    description: "Fundamentals of electrical circuit analysis",
    credits: 4,
    department: "Engineering",
    instructor: "Dr. Nikola Tesla",
    schedule: "Mon/Wed/Fri 14:00-15:30",
    capacity: 25,
    enrolled: 22
  },
  {
    id: uuidv4(),
    code: "PSY101",
    name: "Introduction to Psychology",
    description: "Survey of major topics in psychology",
    credits: 3,
    department: "Psychology",
    instructor: "Dr. Carl Jung",
    schedule: "Tue/Thu 10:00-11:30",
    capacity: 50,
    enrolled: 48
  },
  {
    id: uuidv4(),
    code: "BIO240",
    name: "Molecular Biology",
    description: "Study of biological activity at the molecular level",
    credits: 4,
    department: "Biology",
    instructor: "Dr. Rosalind Franklin",
    schedule: "Mon/Wed 15:00-16:30",
    capacity: 30,
    enrolled: 25
  }
];

export const faculty: Faculty[] = [
  {
    id: uuidv4(),
    name: "Dr. Alan Turing",
    email: "alan.turing@university.edu",
    department: "Computer Science",
    position: "Professor",
    hireDate: "2010-08-15",
    status: "active"
  },
  {
    id: uuidv4(),
    name: "Dr. Peter Drucker",
    email: "peter.drucker@university.edu",
    department: "Business",
    position: "Associate Professor",
    hireDate: "2015-01-10",
    status: "active"
  },
  {
    id: uuidv4(),
    name: "Dr. Nikola Tesla",
    email: "nikola.tesla@university.edu",
    department: "Engineering",
    position: "Professor",
    hireDate: "2008-09-01",
    status: "active"
  },
  {
    id: uuidv4(),
    name: "Dr. Carl Jung",
    email: "carl.jung@university.edu",
    department: "Psychology",
    position: "Assistant Professor",
    hireDate: "2018-08-15",
    status: "active"
  },
  {
    id: uuidv4(),
    name: "Dr. Rosalind Franklin",
    email: "rosalind.franklin@university.edu",
    department: "Biology",
    position: "Professor",
    hireDate: "2012-01-15",
    status: "on-leave"
  }
];

export const departments: Department[] = [
  {
    id: uuidv4(),
    name: "Computer Science",
    code: "CS",
    head: "Dr. Alan Turing",
    building: "Tech Building A",
    budget: 1500000,
    established: "1985-09-01"
  },
  {
    id: uuidv4(),
    name: "Business",
    code: "BUS",
    head: "Dr. Peter Drucker",
    building: "Business Hall",
    budget: 1800000,
    established: "1920-09-01"
  },
  {
    id: uuidv4(),
    name: "Engineering",
    code: "ENG",
    head: "Dr. Nikola Tesla",
    building: "Engineering Complex",
    budget: 2000000,
    established: "1932-09-01"
  },
  {
    id: uuidv4(),
    name: "Psychology",
    code: "PSY",
    head: "Dr. Carl Jung",
    building: "Social Sciences Building",
    budget: 1200000,
    established: "1945-09-01"
  },
  {
    id: uuidv4(),
    name: "Biology",
    code: "BIO",
    head: "Dr. Rosalind Franklin",
    building: "Life Sciences Center",
    budget: 1700000,
    established: "1950-09-01"
  }
];

export const events: Event[] = [
  {
    id: uuidv4(),
    title: "Fall Semester Orientation",
    description: "Welcome event for new students",
    date: "2023-09-01",
    location: "Main Auditorium",
    organizer: "Student Affairs",
    type: "academic"
  },
  {
    id: uuidv4(),
    title: "Annual Career Fair",
    description: "Connect with potential employers",
    date: "2023-10-15",
    location: "University Center",
    organizer: "Career Services",
    type: "academic"
  },
  {
    id: uuidv4(),
    title: "Homecoming Football Game",
    description: "Annual homecoming game against rival university",
    date: "2023-11-05",
    location: "University Stadium",
    organizer: "Athletics Department",
    type: "sports"
  },
  {
    id: uuidv4(),
    title: "Spring Concert",
    description: "Annual spring concert featuring student bands",
    date: "2024-04-20",
    location: "Campus Green",
    organizer: "Student Activities Board",
    type: "social"
  },
  {
    id: uuidv4(),
    title: "Research Symposium",
    description: "Showcase of student and faculty research projects",
    date: "2024-03-15",
    location: "Science Center",
    organizer: "Office of Research",
    type: "academic"
  }
];