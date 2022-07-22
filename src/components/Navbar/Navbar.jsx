
import './index.css';

const Navbar = () => {
  return (
    <div className="Navbar">
      <ul className="Navbar__list">
       
        <li>
          <a href="#topS">Top Series</a>
        </li>
        <li>
          <a href="/">My Series</a>
        </li>
        <li>
          <a href="#topM">Top Movies</a>
        </li>
        
      </ul>
    </div>
  )
}

export default Navbar;