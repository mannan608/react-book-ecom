import { useContext, useState, useEffect } from "react";
import BookCard from "../components/bookcard/BookCard";
import SearchBox from "../components/searchbox/SearchBox";
import SelectBox from "../components/selectbox/SelectBox";
import { BookContext } from "../context/BookContext";

const Home = () => {
  const { books } = useContext(BookContext);

  const [item, setItem] = useState("");
  const [product, setProduct] = useState([]);

  const filterProducts = () => {
    const searchResult = books?.filter((sitem) =>
      item === ""
        ? true
        : sitem.title?.toLowerCase().includes(item.toLowerCase())
    );
    setProduct(searchResult);
  };

  const searchItem = (e) => {
    setItem(e.target.value);
  };

  useEffect(() => {
    setProduct(books);
  }, [books]);

  useEffect(() => {
    filterProducts();
  }, [item]);

  return (
    <>
      <div className="filter-area d-flex align-items-center gap-5">
        <div className="search-area w-75 ">
          <SearchBox searchItem={searchItem} />
        </div>
        <div className="filter-options w-25">
          <SelectBox />
        </div>
      </div>
      <div className="book-lists mt-4">
        {product?.map((item) => {
          return <BookCard item={item} key={item.id} />;
        })}
      </div>
    </>
  );
};

export default Home;
