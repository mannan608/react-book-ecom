import { useContext } from "react";
import { Link } from "react-router-dom";

import wishlist from "../../assets/wishlist.svg";
import { WishlistContext } from "../../context/WishlistContext";

const BookCard = ({ book }) => {
  const { addToWishlist } = useContext(WishlistContext);
  const { id, title, authors, formats, bookshelves } = book;
  const coverImage = formats["image/jpeg"];

  return (
    <>
      <div className="product">
        <Link to={`/book/${id}`}>
          <div className="card">
            <div className="products-img">
              <img src={coverImage} className="productImage" alt="productImg" />
            </div>
            <div className="card-body mt-2 d-flex flex-column gap-2 ">
              <h3>
                <span className="fw-500 text-black">ID:</span> {id}
              </h3>
              <p className="productName">
                <span className="fw-500 text-black">Title :</span> :{title}
              </p>
              <p>
                <span className="fw-500 text-black">Author:</span>{" "}
                {authors.map((author) => author.name).join(", ")}
              </p>
              <p>
                <span className="fw-500 text-black">Genres:</span>{" "}
                {bookshelves.join(", ")}
              </p>
            </div>
          </div>
        </Link>
        <div className="mt-3 d-flex align-items-center justify-content-center">
          <button
            className="product_wishlist btn btn-primary btn-sm"
            onClick={() => addToWishlist(book)}
          >
            Add to wishlist
          </button>
        </div>
        {/* <div className="product_wishlist" onClick={() => addToWishlist(book)}>
          <img src={wishlist} alt="" className="w-auto h-auto" />
          <span>Add to wishlist</span>
        </div> */}
      </div>
    </>
  );
};

export default BookCard;
