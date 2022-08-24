// type AboutUs = {
//   Image: string;
//   Title: string;
//   Subtitle: string;
//   Discription: string;
// };

import { Link } from "react-router-dom";

// const aboutus: AboutUs[] = [
//   {
//     Image:
//       "http://edconsulting-rks.com/wp-content/uploads/2019/06/feature3-free-img.png",
//     Title: "Financial AdvicesYou Can Rely On",
//     Subtitle:
//       "Invest Your Time And Efforts On Running Your Business. Leave The Accounting To Us.",
//     Discription:
//       "Accounting is the language of business, and like any communication, this information must be fast, real-time, understandable and tailored to any occasion. It must, above all, serve the purpose of decision-making.",
//   },

//   {
//     Image: "",
//     Title: "Accounting Services",
//     Subtitle:
//       " Accurate RecordKeeping Of Financial Data Is A Key Component To Your Business Success.",
//     Discription:
//       "We recognize that choosing a financial advisor is a very individual decision and offers the opportunity to secure your benefits and peace of mind in the future. With the capacity of our staff we aim to meet most of our clients’ needs for financial and managerial consulting.",
//   },
// ];

export function AboutUs() {
  return (
    <main className="main">
      <h1>About Us</h1>
      {/* {aboutus.map((AboutUs) => (
        <>
          <h1>{AboutUs.Title}</h1> <h3>{AboutUs.Subtitle}</h3>
          <p>{AboutUs.Discription}</p> <img src={AboutUs.Image} />
        </>
      ))} */}
      <div>
        <h1>Financial AdvicesYou Can Rely On</h1>
        <h3>
          Invest Your Time And Efforts On Running Your Business. Leave The
          Accounting To Us.
        </h3>
        <p>
          We take pride in the services we provide and the way we provide them.
          We were founded on the principle of providing proactive, attentive
          compliance advisory services to people and businesses in our local as
          well as international communities. Since then, we remain committed to
          this goal.
        </p>
        <img src="http://edconsulting-rks.com/wp-content/uploads/2019/06/feature3-free-img.png" />
      </div>
      <div>
        <h5>Accounting Services</h5>
        <h1>
          Accurate RecordKeeping Of Financial Data Is A Key Component To Your
          Business Success.
        </h1>
        <p>
          We recognize that choosing a financial advisor is a very individual
          decision and offers the opportunity to secure your benefits and peace
          of mind in the future. With the capacity of our staff we aim to meet
          most of our clients needs for financial and managerial consulting.
        </p>
      </div>
      <div className="appointment">
        <h1>Book An Appointment</h1>
        <p>
          Click on the button on the side to get in touch with us, as well as to
          schedule an appointment with one of our experts.
        </p>
        <Link to={"Contact"}>
        <button className="button">Contact</button>
        </Link>
      </div>
    </main>
  );
}
