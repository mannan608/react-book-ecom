import React, { useContext } from "react";
import { WishlistContext } from "../context/WishlistContext";
// import { WishlistContext } from './WishlistContext';
const Wishlists = () => {
  const { wishlist, removeFromWishlist } = useContext(WishlistContext);
  const { title, authors, formats } = wishlist;
  // const coverImage = formats["image/jpeg"];
  console.log("wish book", wishlist);

  return (
    <div className="d-flex align-items-center flex-column">
      <h1>Your Wishlist</h1>
      {wishlist.length === 0 ? (
        <p className="mt-5 text-center">No items in wishlist</p>
      ) : (
        <div className="table-wrapper mt-4">
          <div className="table">
            <div className="tbody">
              {wishlist.map((book) => (
                <div className="row gap-3" key={book.id}>
                  <div className="cell" style={{ width: 84 }}>
                    <img
                      src={book.formats["image/jpeg"]}
                      alt={title}
                      className="w-book-cover"
                    />
                  </div>
                  <div className="cell title" style={{ width: 250 }}>
                    {book.title}
                  </div>

                  <div className="cell" style={{ width: 64 }}>
                    <button
                      className="btn btn-link"
                      onClick={() => removeFromWishlist(book.id)}
                    >
                      <svg
                        width={25}
                        height={24}
                        viewBox="0 0 25 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          classname="del"
                          d="M19.7227 5.31094H15.9727V4.37344C15.9727 3.61406 15.3586 3 14.5992 3H11.3414C10.5867 3 9.97266 3.61406 9.97266 4.37344V5.31094H6.22266V6H7.21172L8.31797 19.6266C8.31797 20.3859 8.93203 21 9.69141 21H16.3008C17.0602 21 17.6742 20.3859 17.6742 19.6266L18.7664 6H19.7227V5.31094ZM10.657 4.37344C10.657 3.99375 10.9664 3.68437 11.3414 3.68437H14.5992C14.9789 3.68437 15.2836 3.99375 15.2836 4.37344V5.31094H10.657V4.37344ZM16.9852 19.5891V19.6078V19.6266C16.9852 20.0063 16.6758 20.3156 16.3008 20.3156H9.69141C9.31172 20.3156 9.00703 20.0063 9.00703 19.6266V19.6078V19.5891L7.89609 6H18.0773L16.9852 19.5891Z"
                          fill="#A0A49D"
                        />
                        <path
                          classname="del"
                          d="M13.3008 7.5H12.6445V18.7969H13.3008V7.5Z"
                          fill="#A0A49D"
                        />
                        <path
                          classname="del"
                          d="M15.973 7.5H15.2887L14.7871 18.7969H15.4715L15.973 7.5Z"
                          fill="#A0A49D"
                        />
                        <path
                          classname="del"
                          d="M10.6523 7.5H9.97266L10.4742 18.7969H11.1586L10.6523 7.5Z"
                          fill="#A0A49D"
                        />
                      </svg>
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Wishlists;
