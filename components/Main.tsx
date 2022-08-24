type Service = {
  Image: string;
  Title: string;
  Discription: string;
};

const services: Service[] = [
  {
    Image:
      "http://edconsulting-rks.com/wp-content/uploads/2019/06/feature2-free-img.png",
    Title: "Accounting Services",
    Discription:
      "Accounting is the language of business, and like any communication, this information must be fast, real-time, understandable and tailored to any occasion. It must, above all, serve the purpose of decision-making.",
  },

  {
    Image:
      "http://edconsulting-rks.com/wp-content/uploads/2019/06/feature1-free-img.png",
    Title: "Tax Advice - Financial, Business And Management Advice",
    Discription:
      "We support our clients with various financial consulting services for their business.",
  },

  {
    Image:
      "http://edconsulting-rks.com/wp-content/uploads/2019/06/feature3-free-img.png",
    Title:
      "Business Opening And Change Services In KBRA, All Types Of Insurance",
    Discription:
      "An important part of our accounting studio services is advising and then following the initial registration process and other changes to the business registration data.",
  },
];
export function Main() {
 
  return (
    <main className="main">
      <section className="services">
        <ul className="services-list">
          
          <h1>What We Do</h1>
          {services.map((Service) => (
            <>
              
              <h1>{Service.Title}</h1> <p>{Service.Discription}</p>
              <img src={Service.Image} />
            </>
          ))}
        </ul>
      </section>
    </main>
  );
}
