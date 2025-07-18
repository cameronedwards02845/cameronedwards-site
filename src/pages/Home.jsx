import { FaLinkedin, FaGithub } from 'react-icons/fa';
import { HiOutlineMail } from 'react-icons/hi';

export default function Home() {
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
        <h1 className="centered-heading">Cameron Edwards</h1>
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
      href="cameronedwards0205@gmail.com"
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


        <h3>
            I hope you find this website simple to navigate. It was an enjoyable task to create it.
        </h3>
        <p>"Always learning"</p>
      </div>
    );
  }