import { Course } from "./Course";

export class CourseManager {
    private courses: Course[] = [];

    public addCourse(course: Course): void {
        this.courses.push(course);
    }

    public removeCourse(courseName: string): void {
        this.courses = this.courses.filter(course => course.courseName !== courseName);
    }

    public findCourse(courseName: string): Course | undefined {
        return this.courses.find(course => course.courseName === courseName);
    }

    public listCourses(): void {
        this.courses.forEach(course => {
            console.log(`Course: ${course.courseName}`);
            console.log(`Duration: ${course.durationInHours} hours`);
            console.log(`Registered Students: ${course.students.join(', ')}`);
            console.log('-----------------------');
        });
    }
}