import { FaLinkedin, FaGithub } from 'react-icons/fa';
import { HiOutlineMail } from 'react-icons/hi';
import { useEffect } from 'react';
import headshot from '../assets/headshot.JPEG';

export default function Home() {
  useEffect(() => {
    document.title = 'Cameron Edwards - Home';
  }, []);

  const iconLinkStyle = {
    color: '#333',
    textDecoration: 'none',
    transition: 'transform 0.2s',
  };

  const handleMouseEnter = (e) => {
    e.currentTarget.style.transform = 'scale(1.2)';
  };

  const handleMouseLeave = (e) => {
    e.currentTarget.style.transform = 'scale(1)';
  };

  return (
    <div>
      <section className="home-hero">
        <img src={headshot} alt="Cameron Edwards" className="headshot" />
        <div className="intro-text">
          <h1>Cameron Edwards</h1>
          <h2>
            Hello, I am Cameron Edwards, an undergraduate studying computer science and philosophy at Case Western Reserve University.
          </h2>
        </div>
      </section>

      <section>
        <h2>Contact Me</h2>
        <p>Below you will find my LinkedIn page, email address, and GitHub profile.</p>
        <div style={{ display: 'flex', gap: '1rem', alignItems: 'center', marginTop: '1rem' }}>
          <a
            href="https://www.linkedin.com/in/cameronwedwards"
            target="_blank"
            rel="noopener noreferrer"
            style={iconLinkStyle}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <FaLinkedin size={30} />
          </a>

          <a
            href="mailto:cameronedwards0205@gmail.com"
            style={iconLinkStyle}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <HiOutlineMail size={30} />
          </a>

          <a
            href="https://github.com/cameronedwards02845"
            target="_blank"
            rel="noopener noreferrer"
            style={iconLinkStyle}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <FaGithub size={30} />
          </a>
        </div>
      </section>

      <section>
        <p>
          Also, you can{' '}
          <a
            href="/resumenew.pdf"
            target="_blank"
            rel="noopener noreferrer"
          >
            view my resume
          </a>.
        </p>
        <h3>I hope you find this website simple to navigate. It was an enjoyable task to create it.</h3>
        <p>"Always learning"</p>
      </section>
    </div>
  );
}
