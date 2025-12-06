// ./src/components/CourseList.jsx

import CourseCard from './CourseCard.jsx'; // Assumes you have this component

function CourseList({ courses }) {
  if (courses.length === 0) {
    return (
      <div className="course-list-empty">
        <p>No courses found matching your search criteria.</p>
      </div>
    );
  }

  return (
    <div className="course-list">
      {courses.map(course => (
        <CourseCard 
          key={course.id} 
          course={course} 
        />
      ))}
    </div>
  );
}

// 💥 FIX: This line provides the 'default' export that App.jsx is looking for.
export default CourseList;