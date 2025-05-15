function Nav() {
  return (
    <nav>
      <p>Logo</p>
      <ul>
        <li>Home</li>
        <li>About</li>
        <li>Services</li>
        <li>Contact</li>
      </ul>
      <div className="search-bar">
        <input type="text" placeholder="Search..." />
      </div>
    </nav>
  );
}
export default Nav;
