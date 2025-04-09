import React from 'react';
import ContactForm from './ContactForm';
import influencerImage from '../assets/influencer.jpg';
import '../css/Home.css';


function Home() {
  return (
    <div className="container mt-4">

      {/* Hero Section */}
      <div className="text-center mb-5">
        <h1 className="display-4 fw-bold">Shah Rukh Khan – The King of Bollywood</h1>
        <p className="lead fs-4 fw-bold">
  Hi, I’m Shah Rukh Khan – Actor, Dreamer, and Global Icon. Follow me on Instagram, Twitter, and YouTube!
</p>
        <img
          src={influencerImage}
          alt="Influencer"
          className="img-fluid rounded shadow my-4"
          style={{ maxHeight: '400px' }}
        />
      </div>

      {/* Bio Section */}
      <section className="mb-5">
        <h2 className="text-center">Who is Shah Rukh Khan?</h2>
        <p className="lead text-center">
          Shah Rukh Khan, fondly known as SRK, is one of the world’s most beloved actors. From humble beginnings in Delhi to becoming Bollywood’s King Khan, he has worked in 80+ films, won countless awards, and built an empire of love and dreams.
        </p>
      </section>

      {/* Career Highlights Section */}
      <section className="mb-5">
        <h2 className="text-center mb-4">A Journey Through Stardom</h2>
        <div className="row row-cols-1 row-cols-md-3 g-4">
          {[
            { year: '1992', title: 'Debut in Deewana' },
            { year: '1995', title: 'DDLJ – A Classic' },
            { year: '2002', title: 'Devdas – Cannes Entry' },
            { year: '2007', title: 'Chak De! India' },
            { year: '2010s', title: 'Red Chillies & KKR' },
            { year: '2023', title: 'Comeback with Pathaan, Jawan & Dunki' },
          ].map((item, index) => (
            <div className="col" key={index}>
              <div className="card h-100 text-center shadow">
                <div className="card-body">
                  <h5 className="card-title">{item.year}</h5>
                  <p className="card-text">{item.title}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Fan Quotes Carousel */}
      <section className="mb-5">
        <h2 className="text-center mb-4">What the World Says About SRK</h2>
        <div id="quoteCarousel" className="carousel slide" data-bs-ride="carousel">
          <div className="carousel-inner text-center">
            <div className="carousel-item active">
              <blockquote className="blockquote">
                <p className="mb-3">"There’s only one Shah Rukh Khan. He’s not just a superstar — he’s an emotion."</p>
                <footer className="blockquote-footer">Fan from Germany 🇩🇪</footer>
              </blockquote>
            </div>
            <div className="carousel-item">
              <blockquote className="blockquote">
                <p className="mb-3">"SRK taught me that you don’t need a godfather to rise — just talent and belief."</p>
                <footer className="blockquote-footer">Fan from Mumbai 🇮🇳</footer>
              </blockquote>
            </div>
            <div className="carousel-item">
              <blockquote className="blockquote">
                <p className="mb-3">"From My Name is Khan to Jawan, he keeps redefining success."</p>
                <footer className="blockquote-footer">Fan from USA 🇺🇸</footer>
              </blockquote>
            </div>
          </div>

          <button className="carousel-control-prev" type="button" data-bs-target="#quoteCarousel" data-bs-slide="prev">
            <span className="carousel-control-prev-icon"></span>
          </button>
          <button className="carousel-control-next" type="button" data-bs-target="#quoteCarousel" data-bs-slide="next">
            <span className="carousel-control-next-icon"></span>
          </button>
        </div>
      </section>

      {/* Contact Form (already existing) */}
      <ContactForm />
    </div>
  );
}

export default Home;
