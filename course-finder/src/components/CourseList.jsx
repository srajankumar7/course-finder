// src/components/CourseList.jsx
import CourseCard from "./CourseCard.jsx";

function CourseList({ courses }) {
  if (!courses || courses.length === 0) {
    return (
      <div className="empty-state">
        <h2>No courses found</h2>
        <p>Try searching for something else or change the category.</p>
      </div>
    );
  }

  return (
    <div className="course-list">
      {courses.map((course) => (
        <CourseCard key={course.id} course={course} />
      ))}
    </div>
  );
}

export default CourseList;
