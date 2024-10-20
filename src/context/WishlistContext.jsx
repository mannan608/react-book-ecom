import React, { createContext, useEffect, useState } from "react";

export const WishlistContext = createContext();

export const WishlistProvider = ({ children }) => {
  const [wishlist, setWishlist] = useState(() => {
    const storedWishlist = localStorage.getItem("wishlist");
    return storedWishlist ? JSON.parse(storedWishlist) : [];
  });

  // Load book from localStorage
  useEffect(() => {
    localStorage.setItem("wishlist", JSON.stringify(wishlist));
  }, [wishlist]);

  // Add book to wishlist
  const addToWishlist = (book) => {
    if (!wishlist.find((item) => item.id === book.id)) {
      setWishlist([...wishlist, book]);
    }
  };

  // Remove book from wishlist
  const removeFromWishlist = (bookId) => {
    setWishlist(wishlist.filter((item) => item.id !== bookId));
  };

  return (
    <WishlistContext.Provider
      value={{ wishlist, addToWishlist, removeFromWishlist }}
    >
      {children}
    </WishlistContext.Provider>
  );
};
