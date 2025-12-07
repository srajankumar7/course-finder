function CourseCard({ course }) {
  return (
    <article className="course-card">
      {/* Title */}
      <h3 className="course-title">{course.title}</h3>

      {/* Category pill */}
      <span className="course-tag">{course.category}</span>

      {/* Divider */}
      <div className="course-divider" />

      {/* Bottom row: level left, duration right */}
      <div className="course-footer">
        <div className="course-level">
          <span className="course-icon"></span>
          <span>{course.level}</span>
        </div>
        <div className="course-duration">
          <span className="course-icon">⏱️</span>
          <span>{course.duration}</span>
        </div>
      </div>
    </article>
  );
}

export default CourseCard;
