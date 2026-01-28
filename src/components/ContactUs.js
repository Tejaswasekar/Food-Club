import React from "react";

const ContactUs = () => {
  return (
    <div className="p-4 m-auto w-1/2 text-center font-bold text-lg mt-5 pt-4">
      <h2>Contact Us</h2>
      <p>If you have questions, email us at support@foodclub.example</p>

      <form className="mt-4 pt-4"> 
        <input type="text" placeholder="Name" className="border border-black m-4 p-4" /> <br /> <br />
        <input type="email" placeholder="Email" className="border border-black m-4 p-4"  /> <br /> <br />
        <textarea placeholder="Your message" className="border border-black m-4 p-4" ></textarea> <br /> <br />
        <button type="submit" className="border border-black m-4 p-4 rounded-xl cursor-pointer ml-10" >Submit</button>
      </form>
    </div>
  );
};

export default ContactUs;
