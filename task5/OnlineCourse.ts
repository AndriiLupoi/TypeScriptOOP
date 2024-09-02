import { Course } from "./Course";

export class OnlineCourse implements Course {
    courseName: string;
    durationInHours: number;
    students: string[] = [];

    constructor(courseName: string, durationInHours: number) {
        this.courseName = courseName;
        this.durationInHours = durationInHours;
    }

    public registerStudent(student: string): void {
        if (!this.isStudentRegistered(student)) {
            this.students.push(student);
        } else {
            console.log(`${student} is already registered in ${this.courseName}`);
        }
    }

    public isStudentRegistered(student: string): boolean {
        return this.students.includes(student);
    }
}