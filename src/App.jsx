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
   const [showBands, setShowBands] = useState(false);
   const [showContactForm, setShowContactForm] = useState(false);
   const [submitted, setSubmitted] = useState(false);
   const [showBio, setShowBio] = useState(false);
   const [boneBurst, setBoneBurst] = useState(false);
   const formRef = useRef(null);
   const successRef = useRef(null);

   const handleSubmit = (e) => {
      e.preventDefault();

      setBoneBurst(true);
      setSubmitted(true);

      setTimeout(() => {
        setBoneBurst(false);
      }, 900);

      setTimeout(() => {
        setSubmitted(false);
      }, 5000);
    };

                useEffect(() => {
                  if (showContactForm && formRef.current) {
                    formRef.current.scrollIntoView({
                      behavior: "smooth",
                      block: "start",
                    });
                  }
                }, [showContactForm]);

                useEffect(() => {
              if (submitted) {
                setTimeout(() => {
                  successRef.current?.scrollIntoView({
                    behavior: "smooth",
                    block: "center",
                  });
                }, 100);
              }
            }, [submitted]);
  return (

    <div className="page-frame">
    <main className="app">
     <section className="hero">
        {/* <p className="eyebrow">Booking By Romeo</p> */}
        <div className="hero-image-container">
        <img
          src={`${import.meta.env.BASE_URL}images/fab4.png`}
          alt="pap-rhino"
          className="hero-image"
        />
        </div>
        <div className="bio-section">
          <button
            className="bio-toggle"
            onClick={() => setShowBio(!showBio)}
          >
            {showBio ? "X" : "Papa Rhino Productions"}
          </button>

          {showBio && (
            <div className="bio-card">
              <p>
                Papa Rhino Productions specializes in artist management,
                live event booking, venue coordination, tour support,
                promotion, and entertainment consulting. We work with
                independent artists, touring acts, festivals, and venues
                to create unforgettable live experiences.
              </p>

              <p>
                With years of experience in the punk, rockabilly,
                psychobilly, horror punk, and underground music scenes,
                Papa Rhino Productions helps connect artists with
                opportunities while building long-term relationships
                throughout the industry.
              </p>
            </div>
          )}
        </div>

        {/* <h1 className="intro">Bands</h1> */}
        <button
          className="bands-toggle"
          onClick={() => setShowBands(!showBands)}
        >
          {showBands ? "X" : "Bands"}
        </button>



            {showBands && (
            <div className="bands-card">

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
          href="https://www.instagram.com/calaveramusica?igsh=MzRlODBiNWFlZA=="
          target="_blank"
          rel="noopener noreferrer"
          className="band-link"
        >
          <img
            src={`${import.meta.env.BASE_URL}images/calavera.png`}
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

            </div>
          )}

        <p className="bio">
          {/* Bands I've worked with. */}
          {/* Professional booking management for bands, venues
          and touring artists. */}
        </p>
        {/* <a className="hero-btn" href="#bookings">
          Book Now
        </a> */}



{/* 
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
          href="https://www.instagram.com/calaveramusica?igsh=MzRlODBiNWFlZA=="
          target="_blank"
          rel="noopener noreferrer"
          className="band-link"
        >
          <img
            src={`${import.meta.env.BASE_URL}images/calavera.png`}
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
      </div> */}
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
            {showContactForm ? "Close" : "Contact Me"}
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
              {submitted && (
                <div 
                 ref={successRef}
                className="success-message">
                  Thanks for contacting Papa Rhino Productions.
                  We'll be in touch soon.
                </div>
              )}
              </form>
            </div>
          )}
        </section>
    </main>
    </div>
  );
}

export default App;