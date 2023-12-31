import { FC } from 'react';
import '../../styles/contact/HeroBanner.css';
import heroImg from '../../assets/about/hero-contact.png';
import { useTypewriter } from 'react-simple-typewriter';
import { Fade } from 'react-reveal';

const HeroBanner: FC = () => {
  const [workingHrsText] = useTypewriter({
    words: ['Mon - Sun : 08:00 AM - 9:30 PM'],
    loop: 1,
    typeSpeed: 70,
    delaySpeed: 3000,
  });
  return (
    <section className="contact-hero-banner">
      <div className="contact-hero-container">
        <div className="contact-working-hour">
          <p>
            Working Hours
            <br /> {workingHrsText}
          </p>
        </div>
        <div className="contact-hero-detail flex-btw">
          <div className="contact-hero-context">
            <h1>
              Your{' '}
              <Fade duration="1500">
                <span>Feedback </span>
              </Fade>{' '}
              <Fade duration="2000">
                <span>Matters</span>
              </Fade>
            </h1>
            <p>
              At Rocason Pharmacy, your feedback fuels our journey of progress.
              Although an instant reply may not always be possible, know that
              your insights will shape our path forward. For personalised
              inquiries, don't hesitate to connect with our dedicated Customer
              Care Team.
            </p>
          </div>

          <div className="contact-hero-image">
            <img src={heroImg} alt="hero-image" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroBanner;
