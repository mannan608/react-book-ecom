import BookCard from "../components/bookcard/BookCard";
import SearchBox from "../components/searchbox/SearchBox";
import SelectBox from "../components/selectbox/SelectBox";

const Home = () => {
  return (
    <>
      <div className="filter-area d-flex align-items-center gap-5">
        <div className="search-area w-75 ">
          <SearchBox />
        </div>
        <div className="filter-options w-25">
          <SelectBox />
        </div>
      </div>
      <div className="book-lists mt-4">
        <BookCard />
      </div>
    </>
  );
};

export default Home;
