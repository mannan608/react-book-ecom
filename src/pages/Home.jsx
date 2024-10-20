import { useContext, useEffect, useState } from "react";
import BookCard from "../components/bookcard/BookCard";
import SearchBox from "../components/searchbox/SearchBox";
import SelectBox from "../components/selectbox/SelectBox";
import { BookContext } from "../context/BookContext";

const Home = () => {
  const { books } = useContext(BookContext);

  const [item, setItem] = useState("");
  const [product, setProduct] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const booksPerPage = 8;

  const indexOfLastBook = currentPage * booksPerPage;
  const indexOfFirstBook = indexOfLastBook - booksPerPage;
  const currentBooks = product.slice(indexOfFirstBook, indexOfLastBook);

  const totalPages = Math.ceil(product.length / booksPerPage);

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
    setCurrentPage(1);
  };

  const genre = [...new Set(books.map((value) => value.title))];

  const genreFilterItem = (genreItem) => {
    const newItem = books.filter((newval) => newval.title === genreItem);
    setProduct(newItem);
    setCurrentPage(1);
  };

  useEffect(() => {
    setProduct(books);
  }, [books]);

  useEffect(() => {
    filterProducts();
  }, [item]);

  const handleNextPage = () => {
    if (currentPage < totalPages) setCurrentPage(currentPage + 1);
  };

  const handlePrevPage = () => {
    if (currentPage > 1) setCurrentPage(currentPage - 1);
  };
  if (!currentBooks) {
    return <div>Loading...</div>;
  }
  return (
    <>
      <div className="filter-area d-flex align-items-center gap-5">
        <div className="search-area w-75">
          <SearchBox searchItem={searchItem} />
        </div>
        <div className="filter-options w-25">
          <SelectBox
            genre={genre}
            genreFilterItem={genreFilterItem}
            setItem={setItem}
          />
        </div>
      </div>
      <div className="book-lists mt-4 mb-5">
        {currentBooks.map((book) => (
          <BookCard book={book} key={book.id} />
        ))}
      </div>

      <nav aria-label="Page navigation">
        <ul class="pagination gap-3 align-items-center justify-content-center">
          <li class="page-item">
            <a
              class="page-link"
              href="#"
              onClick={handlePrevPage}
              disabled={currentPage === 1}
            >
              Previous
            </a>
          </li>
          <span>
            Page {currentPage} of {totalPages}
          </span>

          <li class="page-item">
            <a
              class="page-link"
              href="#"
              onClick={handleNextPage}
              disabled={currentPage === totalPages}
            >
              Next
            </a>
          </li>
        </ul>
      </nav>

      {/* <div className="pagination mt-3 d-flex justify-content-center">
        <button
          className="btn btn-primary mx-2"
          onClick={handlePrevPage}
          disabled={currentPage === 1}
        >
          Previous
        </button>
        <span>
          Page {currentPage} of {totalPages}
        </span>
        <button
          className="btn btn-primary mx-2"
          onClick={handleNextPage}
          disabled={currentPage === totalPages}
        >
          Next
        </button>
      </div> */}
    </>
  );
};

export default Home;
