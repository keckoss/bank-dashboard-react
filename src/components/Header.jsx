import user from "../assets/userlogo.svg";
function Header() {
  return (
    <div className="header">
      <div className="container">
        <div>
          <h1>My Bank</h1>
        </div>
        <div>
          <p>Etienne</p>
          <div className="cercle">
            <img className="imageicone" src={user} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}
export default Header;
