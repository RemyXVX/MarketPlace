import Link from 'next/link';

const Navigation = () => {
  return (
    <nav>
      <div className="logo">
        <Link href="/">
          <span>
            <img src="company-icon.png" alt="Company Logo" />
          </span>
        </Link>
      </div>
      <div className="search-bar">
        <input type="text" placeholder="Search" />
        <button type="submit">Search</button>
      </div>
      <div className="user-actions">
        <Link href="/login">
          <span>Sign In</span>
        </Link>
        <Link href="/cart">
          <span>
            <i className="fa fa-shopping-cart"></i>
            <span className="cart-count">0</span>
          </span>
        </Link>
        <Link href="/account">
          <span>Account</span>
        </Link>
      </div>
    </nav>
  );
};

export default Navigation;
