// STYLES
import './Main.style.css';

// IMAGES
import katieImg from '../../images/image12.png';
import star from '../../images/star.png';

const Main = () => {
  return (
    <main className='main'>
      <div className='cardContainer'>
        <div className='cardContainer__card'>
          <div className='cardContainer__card-img'>
            <img src={katieImg} alt='' />
          </div>
          <div className='cardContainer__card-info'>
            <img src={star} alt='' />
            <span className='rating'>5.0</span>
            <span className='numOfVotes'>(6)</span>
            <span className='country'>USA</span>
            <p>Life lessons with Katie Zaferes</p>
            <p>
              <strong>From $136/</strong>person
            </p>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Main;
