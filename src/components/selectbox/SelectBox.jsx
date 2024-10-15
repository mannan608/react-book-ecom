const SelectBox = ({ genre, genreFilterItem, setItem }) => {
  const handleGenreChange = (e) => {
    setItem(e.target.value);
  };

  return (
    <>
      <select
        className="form-select"
        aria-label="Select by genre"
        onChange={handleGenreChange}
      >
        <option value="">Select by genre</option>
        {genre.map((genre, index) => (
          <option key={index} value={genre}>
            {genre}
          </option>
        ))}
      </select>
    </>
  );
};

export default SelectBox;
