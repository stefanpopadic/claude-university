import { Course } from "@/types";
import StatusBadge from "./StatusBadge";

export default function CourseCard({ course }: { course: Course }) {
  const badgeStatus = course.price === 0 ? "free" : course.status;

  return (
    <a href={`/courses/${course.slug}`} className="course-card">
      <div className="course-card-header">
        <StatusBadge status={badgeStatus} />
        <span className="course-card-level">{course.level}</span>
      </div>
      <h3 className="course-card-title">{course.title}</h3>
      <p className="course-card-desc">{course.description}</p>
      <div className="course-card-meta">
        <span>{course.lessonCount} lessons</span>
        <span>{course.duration}</span>
        <span className="course-card-price">
          {course.price === 0 ? "Free" : `$${course.price}`}
        </span>
      </div>
    </a>
  );
}
