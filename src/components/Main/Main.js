// STYLES
import './Main.style.css';

// COMPONENTS
import Card from '../Card/Card';

// CARD DATA
import { data } from '../../mockData';

const Main = () => {
  return (
    <main className='main'>
      <div className='cardContainer'>
        {data.map((card, index) => (
          <Card
            data={card}
            key={card.id}
            index={index}
          />
        ))}
      </div>
    </main>
  );
};

export default Main;
