import { useState } from "react";
type Quote = {
  name: string;
  email: string;
  phone: number;
  employee: number;
  incomingInvoces: number;
  outgoingInvoces: number;
};
// const quote = {
//   name: "Kabil",
//   email: "kabil@email.com",
//   phone: 38344847761,
//   employee: 5,
//   incomingInvoces: 250,
//   outgoingInvoces: 500,
// };
export function Contact() {
  const [quotes, setQuotes] = useState<Quote[]>([]);
  const [name,setName] = useState('')
  const [emails,setEmails] = useState('')
  return (
    <main className="main">
      <h1>Contact</h1>

      <div>
        <h2>Request A Quote</h2>
      </div>
      <div className="form">
        {/* <form
          className="quote-form"
          onSubmit={(event) => {
            event.preventDefault();

            const quote = {
              name: event.target.name.value,
              email: event.target.email.value,
              phone: event.target.phone.value,
              employee: event.target.employee.valueAsNumber,
              incomingInvoces: event.target.incoming.valueAsNumber,
              outgoingInvoces: event.target.outgoing.valueAsNumber,
            };

            setQuotes([...quotes, quote]);
          }}
        >
          <input type="text" name="name" placeholder="Name*" />

          <input type="text" name="email" placeholder="Email*" />

          <input type="text" name="phone" placeholder="Phone Numer*" />

          <input
            type="number"
            min={0}
            name="employee"
            placeholder="Employee Number*"
          />

          <input
            type="number"
            min={0}
            name="incoming"
            placeholder="Number of incoming invoces*"
          />

          <input
            type="number"
            min={0}
            name="outgoing"
            placeholder="Number of outgoing invoces*"
          />

          <button className="button">Send</button>
        </form> */}
        <form
          className="quote-form"
          onSubmit={(event) => {
            event.preventDefault();

            const quote = {
              name: event.target.name.value,
              email: event.target.email.value,
              phone: event.target.phone.value,
              employee: event.target.employee.valueAsNumber,
              incomingInvoces: event.target.incoming.valueAsNumber,
              outgoingInvoces: event.target.outgoing.valueAsNumber,
            };

            setQuotes([...quotes, quote]);
          }}
        >
          <input type="text" name="name" placeholder="Name*" onChange={event => {
            setName(event.target.value)
          }} value={name}/>

          <input type="text" name="email" placeholder="Email*"onChange={event => {
            setEmails(event.target.value)
          }} value={emails} />

          <input type="text" name="phone" placeholder="Phone Numer*" />

          <input
            type="number"
            min={0}
            name="employee"
            placeholder="Employee Number*"
          />

          <input
            type="number"
            min={0}
            name="incoming"
            placeholder="Number of incoming invoces*"
          />

          <input
            type="number"
            min={0}
            name="outgoing"
            placeholder="Number of outgoing invoces*"
          />

          <button className="button">Send</button>
        </form>
        <ul>
          {quotes.map((quote) => (
            <li className="quote">
              <h2>
                {quote.name}, 
                {quote.email}, 
                {quote.phone}, 
                {quote.employee},
                {quote.incomingInvoces},
                {quote.outgoingInvoces}
              </h2>
            </li>
          ))}
        </ul>
      </div>
    </main>
  );
}
