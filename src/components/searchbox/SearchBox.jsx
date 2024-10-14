import searchIcon from "../../assets/search_box_icon.svg";
const SearchBox = () => {
  return (
    <>
      <div className="search-box position-relative">
        <input
          type="text"
          className="form-control"
          placeholder="Search Every Things"
          id="searchInput"
        />
        <img
          src={searchIcon}
          alt="Search Icon"
          className="search_icon w-auto h-auto"
        />
      </div>
    </>
  );
};

export default SearchBox;
