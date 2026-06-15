import "./App.css";
import { useState, useRef, useEffect } from "react";
import { useForm, ValidationError } from "@formspree/react";







const venues = [
  {
    name: "Dollhut",
    city: "Anaheim, CA",
    link: "https://www.instagram.com/worldfamousdollhut/?hl=en",
    
  },
  {
    name: "Stages",
    city: "Santa Ana, CA",
    link: "https://www.instagram.com/stages_bar/?hl=en"
  },
  {
    name: "Characters",
    city: "Pomona, CA",
    link: "https://www.instagram.com/characterspomonaofficial/?hl=en"
  },
];




function App() {
   const [state, formspreeSubmit] = useForm("xojzndvg");
   const [showBands, setShowBands] = useState(false);
   const [showContactForm, setShowContactForm] = useState(false);
   const [submitted, setSubmitted] = useState(false);
   const [showBio, setShowBio] = useState(false);
   const [boneBurst, setBoneBurst] = useState(false);
   const formRef = useRef(null);
   const successRef = useRef(null);

      const handleSubmit = async (e) => {
                e.preventDefault();

                setBoneBurst(true);

                await formspreeSubmit(e);

                formRef.current?.reset();

                setSubmitted(true);

                setTimeout(() => {
                  setBoneBurst(false);
                }, 900);

                setTimeout(() => {
                  setShowContactForm(false);
                }, 2500);

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
            alt="Hillbillys"
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
            alt="rezurex"
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
            alt="12 Step Rebels"
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
            alt="Mad Marge"
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
            alt="Calavera"
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
            alt="Three Bad Jack"
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
            alt="Rocketz"
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
            alt="Papa Rhino"
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
      </section>

      <section id="venues" className="section">
        <h2>Venues</h2>
        <div className="card-grid">
          {venues.map((venue) => (
            <a
              key={venue.name}
              href={venue.link}
              target="_blank"
              rel="noopener noreferrer"
              className="venue-card-link"
            >
              <article className="card">
                <h3>{venue.name}</h3>
                <p>{venue.city}</p>
              </article>
            </a>
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
         <div>
          <form  ref={formRef} onSubmit={handleSubmit}>
                <input
                  type="text"
                  name="band_artist"
                  placeholder="Band/Artist Name"
                  required
                />

                <input
                  type="text"
                  name="phone"
                  placeholder="Phone Number"
                />

                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  required
                />

                <ValidationError field="email" errors={state.errors} />

                <textarea
                  name="message"
                  placeholder="Tell me about your event, venue, or booking needs"
                  required
                ></textarea>

                <ValidationError field="message" errors={state.errors} />

                <button
                  type="submit"
                  className="submit-bone-btn"
                  disabled={state.submitting}
                >
                  {state.submitting ? "Sending..." : "Submit"}
                  {boneBurst && (
                    <span className="bone-burst">
                      <span>🦴</span>
                      <span>☠️</span>
                      <span>🦴</span>
                      <span>☠️</span>
                      <span>🦴</span>
                      <span>🦴</span>
                    </span>
                  )}
                </button>
                {submitted && (
                  <div ref={successRef} className="success-message">
                    🦴 Request Submitted 🦴
                    <br />
                    Papa Rhino Productions has received your request.
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