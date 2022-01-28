// STYLES
import './Hero.style.css';
// IMAGES
import imageGrid from '../../images/heroImageGrid.png';

const Hero = () => {
  return (
    <div className='hero'>
      <div className='hero__imgContainer'>
        <img className='hero__imgContainer-imgGrid' src={imageGrid} alt='' />
      </div>
      <div className='hero__text'>
        <h1 className='hero__text-title'>Online Experiences</h1>
        <p className='hero__text-info'>
          Join unique interactive activities led by one-of-a-kind hosts—all
          without leaving home.
        </p>
      </div>
    </div>
  );
};

export default Hero;
