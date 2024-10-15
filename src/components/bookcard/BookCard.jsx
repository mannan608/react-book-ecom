const BookCard = ({ item }) => {
  const { id, title, authors, formats, bookshelves } = item;
  const coverImage = formats["image/jpeg"];

  // console.log(bookshelves);
  return (
    <>
      <div className="product">
        <a href="#">
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
        </a>
        <div className="product_wishlist">
          <a href="" className="add-to-wishlist">
            <img src="#" alt="" className="w-auto h-auto" />
          </a>
        </div>
      </div>
    </>
  );
};

export default BookCard;
