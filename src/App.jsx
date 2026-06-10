import "./App.css";
import { useState, useRef, useEffect } from "react";







const venues = [
  {
    name: "Characters",
    city: "Pomona, CA",
  },
  {
    name: "Starlite Loung",
    city: "Glendale, AZ",
  },
];




function App() {
   const [showContactForm, setShowContactForm] = useState(false);
   const formRef = useRef(null);
    useEffect(() => {
      if (showContactForm && formRef.current) {
        formRef.current.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }
    }, [showContactForm]);

  return (
    <main className="app">

    
  
     <section className="hero">
        {/* <p className="eyebrow">Booking By Romeo</p> */}

        <div className="hero-image-container">
        <img
          src={`${import.meta.env.BASE_URL}images/romeo3.png`}
          alt="Romeo Booking"
          className="hero-image"
        />
        </div>
        <h1 className="intro">Bands & Artists</h1>
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
          href="https://www.instagram.com/hell_city_havoc_official/"
          target="_blank"
          rel="noopener noreferrer"
          className="band-link"
        >
          <img
            src={`${import.meta.env.BASE_URL}images/hch.png`}
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
          href="https://www.instagram.com/the_hexxers_/"
          target="_blank"
          rel="noopener noreferrer"
          className="band-link"
        >
          <img
            src={`${import.meta.env.BASE_URL}images/hexxers.png`}
            alt="Band 3"
          />
        </a>

          <a
          href="https://www.instagram.com/hell_city_havoc_official/"
          target="_blank"
          rel="noopener noreferrer"
          className="band-link"
        >
          <img
            src={`${import.meta.env.BASE_URL}images/hch.png`}
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
          href="https://www.instagram.com/the_hexxers_/"
          target="_blank"
          rel="noopener noreferrer"
          className="band-link"
        >
          <img
            src={`${import.meta.env.BASE_URL}images/hexxers.png`}
            alt="Band 3"
          />
        </a>

          <a
          href="https://www.instagram.com/hell_city_havoc_official/"
          target="_blank"
          rel="noopener noreferrer"
          className="band-link"
        >
          <img
            src={`${import.meta.env.BASE_URL}images/hch.png`}
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
          href="https://www.instagram.com/the_hexxers_/"
          target="_blank"
          rel="noopener noreferrer"
          className="band-link"
        >
          <img
            src={`${import.meta.env.BASE_URL}images/hexxers.png`}
            alt="Band 3"
          />
        </a>
      </div>
      </section>

      <section id="venues" className="section">
        <h2>Venue Contacts</h2>
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
            <form>
              <input type="text" placeholder="Band/Artist Name" />

              <input type="text" placeholder="Phone Number" />

              <input type="email" placeholder="Email" />

              <textarea placeholder="Tell me about your event, venue, or booking needs"></textarea>

              <button type="submit">Submit</button>
            </form>
            </div>
          )}
        </section>
    </main>
  );
}

export default App;