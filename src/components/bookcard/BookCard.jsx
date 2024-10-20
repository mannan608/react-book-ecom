import { useContext } from "react";
import { Link } from "react-router-dom";

import wishlist from "../../assets/wishlist.svg";
import { WishlistContext } from "../../context/WishlistContext";

const BookCard = ({ book }) => {
  const { addToWishlist } = useContext(WishlistContext);
  const { id, title, authors, formats, bookshelves } = book;
  const coverImage = formats["image/jpeg"];

  // console.log(bookshelves);
  return (
    <>
      <div className="product">
        <Link to={`/book/${id}`}>
          <div className="card">
            <div className="products-img">
              <img src={coverImage} className="productImage" alt="productImg" />
            </div>
            <div className="card-body ">
              <h3>ID: {id}</h3>
              <p className="productName">Title :{title}</p>
              <p>Author: {authors.map((author) => author.name).join(", ")}</p>
              <p>Genres: {bookshelves.join(", ")}</p>
            </div>
          </div>
        </Link>
        <div className="product_wishlist" onClick={() => addToWishlist(book)}>
          <img src={wishlist} alt="" className="w-auto h-auto" />
        </div>
      </div>
    </>
  );
};

export default BookCard;
