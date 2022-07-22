import "./index.css";

const Footer = () => {
  return (
    <div className="footer">
      <p> All rights reserved </p>
	  <div className="login">
	  <label> login    <input type="text" name="username" placeholder="username"></input> </label> <label> password <input type="password" name="password" placeholder="password"></input>  </label>  <button className="submit" type="submit"> go!</button></div>
	 
    </div>
  );
};
export default Footer;