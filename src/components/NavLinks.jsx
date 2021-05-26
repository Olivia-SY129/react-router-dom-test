import { NavLink } from 'react-router-dom';

const activeStyle = { color: "tomato" };

export default function NavLinks() {
  return (
    <ul>
      <li><NavLink to="/login" exact activeStyle={activeStyle}>Sign In</NavLink></li>
      <li><NavLink to="/" exact activeStyle={activeStyle}>Home</NavLink></li>
      <li><NavLink to="/profile" exact activeStyle={activeStyle}>Profile</NavLink></li>
      <li><NavLink to="/profile/1" activeStyle={activeStyle}>Profile/1</NavLink></li>
      <li>
        <NavLink 
          to="/about" 
          activeStyle={activeStyle} 
          isActive={(match, location) => {
            console.log(location);
            return match !== null && location.search === '';
          }}>About
        </NavLink>
      </li>
      <li>
        <NavLink 
          to="/about?name=olivia" 
          activeStyle={activeStyle}
          isActive={(match, location) => {
            console.log(location);
            return match !== null && location.search === '?name=olivia';
          }}>
          About?name=olivia
        </NavLink>
        </li>
    </ul>
  );
}