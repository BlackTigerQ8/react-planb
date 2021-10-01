import React from 'react';

function Contact(){
    return(
        <section id="#section-6">
            <div className="container-contact100">
  <div className="contact100-map" id="google_map" data-map-x="40.722047" data-map-y="-73.986422" data-pin="images/icons/map-marker.png" data-scrollwhell="0" data-draggable="1"></div>

  <div className="wrap-contact100">
    <form className="contact100-form validate-form">
      <span className="contact100-form-title">
        Contact Us
      </span>

      <div className="wrap-input100 validate-input" data-validate="Please enter your name">
        <input className="input100" type="text" name="name" placeholder="Full Name" />
        <span className="focus-input100"></span>
      </div>

      <div className="wrap-input100 validate-input" data-validate = "Please enter email: example@email.com">
        <input className="input100" type="text" name="email" placeholder="Email" />
        <span className="focus-input100"></span>
      </div>

      <div class="wrap-input100 validate-input" data-validate = "Please enter your message">
        <textarea className="input100" name="message" placeholder="Your Message"></textarea>
        <span className="focus-input100"></span>
      </div>

      <div className="container-contact100-form-btn">
        <button className="contact100-form-btn">
          Send Email
        </button>
      </div>
    </form>

    <div className="contact100-more">
      Contact our 24/7 call center: <a href="https://api.whatsapp.com/send?phone=+96566850080" target="_blank"><span className="contact100-more-highlight">+965 66850080</span></a>
    </div>
  </div>
</div>
        </section>
    )
}

export default Contact;