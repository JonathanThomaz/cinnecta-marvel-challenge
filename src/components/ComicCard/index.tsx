import { useHistory } from 'react-router-dom';
import './style.css';

interface IComicCard {
  id: string;
  srcImage: string;
  alt?: string;
  name: string;
}
export function ComicCard({ id, srcImage, alt, name }: IComicCard) {
  const history = useHistory();
  return (
    <button
      type="button"
      onClick={() => history.push(`/view-comic-details/${id}`)}
    >
      <div className="card">
        <div>
          <img
            src={srcImage}
            alt={alt || `Não foi possivél carregar capa do quadrinho ${name}`}
          />
        </div>
        <div>
          <label>{name}</label>
        </div>
      </div>
    </button>
  );
}
