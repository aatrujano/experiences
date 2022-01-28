// IMAGES
import star from '../../images/star.png';
import katieImage from '../../images/image12.png';
import weddingImg from '../../images/weddingImg.png';
import bike from '../../images/bike.png';

const imgArr = [katieImage, weddingImg, bike];

const Card = ({data, index}) => {
  return (
    <div className='cardContainer__card'>
      <div className='cardContainer__card-img'>
        {data.location === 'Online' && (
          <p className='isSoldOut'>
            {data.openSpots === 0 ? 'SOLD OUT' : 'ONLINE'}
          </p>
        )}
        <img src={imgArr[index]} alt='' />
      </div>
      <div className='cardContainer__card-info'>
        <img src={star} alt='' />
        <span className='rating'>{data.stats.rating}</span>
        <span className='numOfVotes'>{`(${data.stats.reviewCount})`}</span>
        <span className='country'>{data.location}</span>
        <p>{data.title}</p>
        <p>
          <strong>{`From $${data.price}/`}</strong>person
        </p>
      </div>
    </div>
  );
};

export default Card;
