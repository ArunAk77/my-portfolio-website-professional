import { Link } from "react-router-dom";
import AnimatedButton from './AnimatedButton';
import resume from '../assets/Resume.pdf';

const CTA = () => {
  return (
    <section className='cta'>
      <p className='cta-text'>
        Have a project in mind? <br className='sm:block hidden' />
        Let’s build something together!
      </p>
          <AnimatedButton text="Download Resume" link={resume} />
      <Link to='/contact' className='btn'>
        Contact
      </Link>
    </section>
  );
};

export default CTA;
