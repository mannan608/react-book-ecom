import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const BookDetails = () => {
  const [bookDetails, setBookDetails] = useState(null);
  const { id } = useParams();

  const getSingleProduct = async () => {
    try {
      const res = await fetch(`https://gutendex.com/books?ids=${id}`);
      const data = await res.json();
      setBookDetails(data?.results[0]);
    } catch (error) {
      console.error("Error fetching book details:", error);
    }
  };

  useEffect(() => {
    getSingleProduct();
  }, [id]);

  if (!bookDetails) {
    return <div>Loading...</div>;
  }

  const { title, authors, formats, bookshelves } = bookDetails;
  const coverImage = formats["image/jpeg"];

  return (
    <div>
      <div className="book-details">
        <img src={coverImage} className="productImage" alt="productImg" />
        <p className="productName">Title :{title}</p>
        <p>Author: {authors.map((author) => author.name).join(", ")}</p>
        <p>Genres: {bookshelves.join(", ")}</p>
      </div>
    </div>
  );
};

export default BookDetails;
