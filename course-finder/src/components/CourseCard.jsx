function CourseCard({ course }) {
  return (
    <div className="course-card">
      <h3>{course.title}</h3>
      <p className="course-category">{course.category}</p>
      <p className="course-meta">
        {course.level} • {course.duration}
      </p>
    </div>
  );
}

export default CourseCard;
