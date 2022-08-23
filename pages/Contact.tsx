import React from "react";


export function Contact() {
    const myStyle={
        backgroundImage: 
 "url('https://images.pexels.com/photos/585752/pexels-photo-585752.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        height:'100vh',
        marginTop:'-70px',
        fontSize:'50px',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
    };
  return (
    <>
      <section className="contact">
      <div>{ myStyle }</div>
      </section>
    </>
  );
}
