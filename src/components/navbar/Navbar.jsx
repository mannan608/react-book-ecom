// import logo from "../../assets/Zepto-logo.avif";
import profile from "../../assets/user.png";
import wishlist from "../../assets/wishlist.svg";
const Navbar = () => {
  return (
    <>
      <div className="navbar-wrapper">
        <div className="container-fluid h-100">
          <nav className="navbar h-100">
            <div className="navbar-brand">
              <div className="mobile-nav-toggler">
                <img className="" src="#" alt="" />
              </div>
              <div className="brandlogo">
                <img src="{logo}" alt="" className="" />
              </div>
            </div>
            <div className="nav-menu">
              <ul className="navbar-nav flex-row gap-4" id="navbar-nav">
                <li className="nav-item">
                  <a className="nav-link" aria-current="page" href="#">
                    Home
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" aria-current="page" href="#">
                    Shop
                  </a>
                </li>
              </ul>
            </div>
            <div className="nav-right-side d-flex gap-4 align-items-center">
              <ul
                className="navbar-nav flex-row gap-4 align-items-center"
                id="navbar-nav"
              >
                <li className="nav-item">
                  <a
                    className="nav-link position-relative"
                    aria-current="page"
                    href="#"
                  >
                    <img src={wishlist} alt="wishlist" className="wishlist " />
                    <span class="badge text-bg-danger">4</span>
                  </a>
                </li>
                <li className="nav-item ">
                  <a className="nav-link profile" aria-current="page" href="#">
                    <img src={profile} alt="profile" />
                  </a>
                </li>
              </ul>
            </div>
          </nav>
        </div>
      </div>
    </>
  );
};

export default Navbar;
