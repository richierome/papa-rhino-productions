import "./App.css";
import { useState, useRef, useEffect } from "react";







const venues = [
  {
    name: "Dollhut",
    city: "Anaheim, CA",
  },
  {
    name: "Stages",
    city: "Santa Ana, CA",
  },
  {
    name: "Characters",
    city: "Pomona, CA",
  },
];




function App() {
   const [boneBurst, setBoneBurst] = useState(false);
   const [showContactForm, setShowContactForm] = useState(false);
   const formRef = useRef(null);

   const handleSubmit = (e) => {
      e.preventDefault();

      setBoneBurst(true);

      setTimeout(() => {
        setBoneBurst(false);
      }, 900);
    };

    useEffect(() => {
      if (showContactForm && formRef.current) {
        formRef.current.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }
    }, [showContactForm]);

    

  return (
    <div className="page-frame">
    <main className="app">

    
  
     <section className="hero">
        {/* <p className="eyebrow">Booking By Romeo</p> */}

        <div className="hero-image-container">
        <img
          src={`${import.meta.env.BASE_URL}images/fab4.png`}
          alt="Romeo Booking"
          className="hero-image"
        />
        </div>
        <h1 className="intro">Bands</h1>
        <p className="bio">
          {/* Bands I've worked with. */}
          {/* Professional booking management for bands, venues
          and touring artists. */}
        </p>
        {/* <a className="hero-btn" href="#bookings">
          Book Now
        </a> */}

        <div className="band-links">

        <a
          href="https://www.instagram.com/hellbillys_band_page/"
          target="_blank"
          rel="noopener noreferrer"
          className="band-link"
        >
          <img
            src={`${import.meta.env.BASE_URL}images/hellbillys.png`}
            alt="So Cal Romeo"
          />
        </a>

        <a
          href="https://www.instagram.com/rezurex_official/?hl=en"
          target="_blank"
          rel="noopener noreferrer"
          className="band-link"
        >
          <img
            src={`${import.meta.env.BASE_URL}images/rezurex.png`}
            alt="Band 3"
          />
        </a>

          <a
          href="https://www.instagram.com/12steprebels/"
          target="_blank"
          rel="noopener noreferrer"
          className="band-link"
        >
          <img
            src={`${import.meta.env.BASE_URL}images/12step.png`}
            alt="Hell City Havoc"
          />
        </a>

          <a
          href="https://www.instagram.com/madmarge_official/?hl=en"
          target="_blank"
          rel="noopener noreferrer"
          className="band-link"
        >
          <img
            src={`${import.meta.env.BASE_URL}images/madm.png`}
            alt="Hell City Havoc"
          />
        </a>

        <a
          href="https://www.instagram.com/hellbillys_band_page/"
          target="_blank"
          rel="noopener noreferrer"
          className="band-link"
        >
          <img
            src={`${import.meta.env.BASE_URL}images/hellbillys.png`}
            alt="So Cal Romeo"
          />
        </a>

          <a
          href="https://www.instagram.com/threebadjacks65/"
          target="_blank"
          rel="noopener noreferrer"
          className="band-link"
        >
          <img
            src={`${import.meta.env.BASE_URL}images/tbj.png`}
            alt="Hell City Havoc"
          />
        </a>

         <a
          href="https://www.instagram.com/therocketz/"
          target="_blank"
          rel="noopener noreferrer"
          className="band-link"
        >
          <img
            src={`${import.meta.env.BASE_URL}images/rocketz.png`}
            alt="Band 3"
          />
        </a>

        <a
          href="https://www.instagram.com/papa.rhino.productions/"
          target="_blank"
          rel="noopener noreferrer"
          className="band-link"
        >
          <img
            src={`${import.meta.env.BASE_URL}images/rhino.png`}
            alt="Band 3"
          />
        </a>
      </div>
      </section>

      <section id="venues" className="section">
        <h2>Venues</h2>
        <div className="card-grid">
          {venues.map((venue) => (
            <article className="card" key={venue.name}>
              <h3>{venue.name}</h3>
              <p>{venue.city}</p>
              <a href={`mailto:${venue.contact}`}>{venue.contact}</a>
            </article>
          ))}
        </div>
      </section>

      <section className="section form-section">
          {/* <h2>Contact Me</h2> */}

          <button
            className="contact-toggle"
            onClick={() => setShowContactForm(!showContactForm)}
          >
            {showContactForm ? "Close Contact Form" : "Contact Me"}
          </button>
          {showContactForm && (

         <div ref={formRef}>
            <form onSubmit={handleSubmit} className="contact-form">
              <input type="text" placeholder="Band/Artist Name" />

              <input type="text" placeholder="Phone Number" />

              <input type="email" placeholder="Email" />

              <textarea placeholder="Tell me about your event, venue, or booking needs"></textarea>

              {/* <button type="submit">Submit</button> */}
              <button type="submit" className="submit-bone-btn">
                Submit

                {boneBurst && (
                  <span className="bone-burst">
                   <span>🦴</span>
                   <span>☠️</span>
                   <span>🦴</span>
                   <span>☠️</span>
                   <span>🦴</span>
                   <span>☠️</span>
                   <span>🦴</span>
                  </span>
                )}
              </button>
            </form>
            </div>
          )}
        </section>
    </main>
    </div>
  );
}

export default App;