import { Link } from "react-router-dom";

export function Header() {
  const title = "Accounting & Tax Services";
  return (
    <header className="App-header">
      <div className="header-left__menu">
        <img
          src="http://edconsulting-rks.com/wp-content/uploads/2022/04/cropped-EDLogo.png"
          alt="logo"
          width={200}
        />
        <h5>{title}</h5>
        <h2>{"ED CONSULTING"}</h2>
        <div>
          <hr
            style={{
              background: "orange",
              color: "orange",
              borderColor: "orange",
              height: "2px",
            }}
          />
        </div>
        <p>
          {
            "Invest your time and efforts on running your business. Leave the accounting to me"
          }
        </p>
        <div>
          <Link to={"Contact"}>
        <button className="button">Contact</button>
        </Link>
        </div>
      </div>

      <div className="header-right__menu">
        
        <Link className="links" to={"home"}>
          Home
        </Link>
        <Link className="links" to={"aboutus"}>
          About Us
        </Link>
        <Link className="links" to={"services"}>
          Services
        </Link>
        <Link className="links" to={"news"}>
          News
        </Link>
        <Link className="links" to={"contact"}>
          Contact
        </Link>
       
      </div>
    </header>
  );
}
