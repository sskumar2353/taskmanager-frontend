import "../../styles/searchbar.css";

const SearchBar = ({
  searchTerm,
  setSearchTerm
}) => {

  return (
    <input
      className="search-input"
      type="text"
      placeholder="Search Tasks..."
      value={searchTerm}
      onChange={(e) =>
        setSearchTerm(e.target.value)
      }
    />
  );
};

export default SearchBar;