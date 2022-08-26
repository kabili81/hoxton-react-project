export function Contact() {
  return (
    <main className="main">
      <h1>Contact</h1>

      <div>
        <h2>Request A Quote</h2>
      </div>
      <div className="form">
        <form>
          <input type="text" placeholder="Name*" />

          <input type="text" placeholder="Email*" />

          <input type="text" placeholder="Phone Numer*" />

          <input type="text" placeholder="Employee Number*" />

          <input type="text" placeholder="Number of incoming invoces*" />

          <input type="text" placeholder="Number of outgoing invoces*" />

          <button className="button">Send</button>
        </form>
      </div>
    </main>
  );
}
