// ./src/components/SearchBar.jsx

function SearchBar({ searchTerm, setSearchTerm }) {

  const handleChange = (event) => {
    // Calls the function passed down from App.jsx to update the state
    setSearchTerm(event.target.value);
  };

  return (
    <div className="search-bar">
      <input
        type="text"
        placeholder="Search courses by title or category..."
        value={searchTerm}
        onChange={handleChange}
      />
    </div>
  );
}

// ✅ This line correctly exports the component for App.jsx
export default SearchBar;