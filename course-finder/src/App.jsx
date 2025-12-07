import { useState } from "react";
import { courses as initialCourses } from "./data/courses";

import Header from "./components/Header.jsx";
import SearchBar from "./components/SearchBar.jsx";
import CourseList from "./components/CourseList.jsx";
import QuoteBanner from "./components/QuoteBanner.jsx";
import CategoryFilter from "./components/CategoryFilter.jsx";

function App() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All Courses");

  const normalizedCategory =
    selectedCategory === "All Courses" ? null : selectedCategory;

  const filteredCourses = initialCourses.filter((course) => {
    const term = searchTerm.toLowerCase();

    const matchesText =
      course.title.toLowerCase().includes(term) ||
      course.category.toLowerCase().includes(term);

    const matchesCategory =
      !normalizedCategory ||
      course.category.toLowerCase() === normalizedCategory.toLowerCase();

    return matchesText && matchesCategory;
  });

  return (
    <div className="page">
      <header className="hero">
        <div className="hero-inner">
          <Header />
          <QuoteBanner />
          <SearchBar
            searchTerm={searchTerm}
            setSearchTerm={setSearchTerm}
          />
          <CategoryFilter
            selectedCategory={selectedCategory}
            setSelectedCategory={setSelectedCategory}
          />
        </div>
      </header>

      <main className="content">
        <div className="content-inner">
          <CourseList courses={filteredCourses} />
        </div>
      </main>
    </div>
  );
}

export default App;
