import productImg from "../../assets/p1.png";

const BookCard = () => {
  return (
    <>
      <div className="product">
        <a href="#">
          <div className="card">
            <div className="products-img">
              <img src={productImg} className="productImage" alt="productImg" />
            </div>
            <div className="card-body ">
              <p className="productName">
                Kitchen Supplies, Small Department Stores, Utilities, Home
                Furnishings, Household Objects
              </p>
              <div className="d-flex gap-2 align-items-center mt-2 mb-2 justify-content-between">
                <div className="d-flex align-items-center gap-3">
                  <h6 className="fw-600">BDT 79.86</h6>
                </div>
              </div>
              <div className="d-flex justify-content-between align-items-center">
                <div className="productReview d-flex gap-1 align-items-center">
                  <div className="flex-center-vertical">
                    <img alt="taobao" src="#" />
                  </div>
                </div>
                <div className="productOrder"></div>
              </div>
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
