import { ComicCard } from 'components/ComicCard';
import { Header } from 'components/Header';
import './style.css';

function ViewComics() {
  return (
    <div className="container">
      <Header title="Comics" />
      <div className="content">
        <div className="cards">
          <ComicCard
            name="teste"
            srcImage="http://i.annihil.us/u/prod/marvel/i/mg/c/80/5e3d7536c8ada.jpg"
            id="98402"
          />
          <ComicCard
            name="teste"
            srcImage="http://i.annihil.us/u/prodada.jpg"
            id="1"
          />
          <ComicCard
            name="teste"
            srcImage="http://i.annihil.us/u/prod/marvel/i/mg/c/80/5e3d7536c8ada.jpg"
            id="1"
          />
          <ComicCard
            name="teste"
            srcImage="http://i.annihil.us/u/prod/marvel/i/mg/c/80/5e3d7536c8ada.jpg"
            id="1"
          />
        </div>
      </div>
    </div>
  );
}

export default ViewComics;
