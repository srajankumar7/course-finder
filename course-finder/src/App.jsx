import { useState } from "react";
import { courses as initialCourses } from "./data/courses";

import Header from "./components/Header.jsx";
import SearchBar from "./components/SearchBar.jsx";
import CourseList from "./components/CourseList.jsx";
import QuoteBanner from "./components/QuoteBanner.jsx";

function App() {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredCourses = initialCourses.filter((course) => {
    const term = searchTerm.toLowerCase();
    return (
      course.title.toLowerCase().includes(term) ||
      course.category.toLowerCase().includes(term)
    );
  });

  return (
    <div className="app">
      <Header />
      <QuoteBanner />
      <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      <CourseList courses={filteredCourses} />
    </div>
  );
}

export default App;
