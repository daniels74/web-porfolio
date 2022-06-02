import React from 'react'
import './Contact.css'
import emailjs from "emailjs-com"

const Contact = () => {

  function sendEmail(e) {
    e.preventDefault();

    emailjs.sendForm(
      "service_xd8ahlm",
      "template_k5dld5o",
      e.target,
      "nkiA3xqNsKhj6mCGU"
    )
    .then((res) => {
      console.log(res);
    })
    .catch((err) => console.log(err));
  }

  return (
    <div className="main">
      <form className="container"
        onSubmit={sendEmail}
        >
          <div className="inner_container">
            <div className="boxes_container">
              <label>Full Name</label>
              <input type="text" className="full_name" placeHolder="Full Name"/>
              <label className="message">Message</label>
              <textarea type="text" className="full_name" rows="4" placeHolder="Enter message"/>
              <input type="submit" value="Submit" className="btn" />
            </div>
          </div>
      </form>
    </div>
  )
}

export default Contact