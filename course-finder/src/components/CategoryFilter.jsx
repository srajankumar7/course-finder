// src/components/CategoryFilter.jsx

const CATEGORIES = ["All Courses", "Marketing", "Development", "Design"];

function CategoryFilter({ selectedCategory, setSelectedCategory }) {
  return (
    <div className="category-filter">
      {CATEGORIES.map((cat) => {
        const isActive = selectedCategory === cat;

        return (
          <button
            key={cat}
            type="button"
            onClick={() => setSelectedCategory(cat)}
            // 👇 EXACT class names your CSS expects
            className={`category-btn${isActive ? " active" : ""}`}
          >
            {cat}
          </button>
        );
      })}
    </div>
  );
}

export default CategoryFilter;
