import { Button } from 'components/Button';
import { Header } from 'components/Header';
import { useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import api from 'services/marvelApi';
import './style.css';

interface IComic {
  id: number;
  digitalId: number;
  title: string;
  issueNumber: number;
  variantDescription: string;
  description: string;
  modified: string;
  isbn: string;
  upc: string;
  diamondCode: string;
  ean: string;
  issn: string;
  format: string;
  pageCount: number;
  textObjects: Array<string>;
  resourceURI: string;
  thumbnail: { path: string; extension: string };
}
interface IRequestGetComic {
  data: { results: Array<IComic> };
}

function ViewComicDetails() {
  const { id } = useParams<{ id: string }>();
  const history = useHistory();
  const [comic, setComic] = useState<IComic>();
  useEffect(() => {
    async function getComic() {
      const request = await api.get<IRequestGetComic>(`/comics/${id}`);
      if (request.data.data.results[0]) {
        setComic(request.data.data.results[0]);
      }
    }
    getComic();
  }, [id]);
  return (
    <div className="container">
      <Header title={comic?.title || ''} />
      <div className="content">
        <div className="flex image container">
          <img
            src={`${comic?.thumbnail.path}.${comic?.thumbnail.extension}`}
            alt={`Capa do quadrinho ${comic?.title}`}
          />
        </div>
        <div className="flex details">
          <h3>Número de páginas: {comic?.pageCount} </h3>
          <h3>
            Data de publicação:{' '}
            {comic?.modified && new Date(comic?.modified).toDateString()}
          </h3>
        </div>
        <div className="buttons">
          <Button name="buy" value="buy">
            Comprar
          </Button>
          <Button
            name="goback"
            value="goback"
            onClick={() => history.push('/')}
          >
            Voltar
          </Button>
        </div>
      </div>
    </div>
  );
}

export default ViewComicDetails;
