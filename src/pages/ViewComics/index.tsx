import { ComicCard } from 'components/ComicCard';
import { Header } from 'components/Header';
import { useAppSelector } from 'hooks';
import './style.css';

function ViewComics() {
  const { listOfComics } = useAppSelector(state => state.comics);

  return (
    <div className="container">
      <Header title="Comics" />
      <div className="content">
        <div className="cards">
          {listOfComics.map(item => (
            <ComicCard
              key={item.id}
              name={item.title}
              srcImage={item.srcThumbnail}
              id={item.id}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default ViewComics;
