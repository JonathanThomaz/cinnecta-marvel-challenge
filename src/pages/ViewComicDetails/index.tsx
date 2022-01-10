/* eslint-disable react-hooks/exhaustive-deps */
import { Button } from 'components/Button';
import { Header } from 'components/Header';
import { getAmountById } from 'helpers/getAmountById';
import { useAppDispatch, useAppSelector } from 'hooks';
import { useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import api from 'services/marvelApi';
import { checkoutComic } from 'store/slices/comicsSlice';
import './style.css';

interface IComicDetails {
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
  amount: number;
}
interface IRequestGetComic {
  data: { results: Array<IComicDetails> };
}

function ViewComicDetails() {
  const { id } = useParams<{ id: string }>();
  const { listOfComics } = useAppSelector(state => state.comics);
  const dispatch = useAppDispatch();

  const history = useHistory();
  const [comic, setComic] = useState<IComicDetails>();
  useEffect(() => {
    async function getComic() {
      const amount = getAmountById(id, listOfComics);
      if (comic) {
        setComic({ ...comic, amount });
        return;
      }
      const request = await api.get<IRequestGetComic>(`/comics/${id}`);
      if (request.data.data.results[0]) {
        setComic({ ...request.data.data.results[0], amount });
      }
    }
    getComic();
  }, [id, listOfComics]);
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
          <h3>Quadrinhos disponiveis: {comic?.amount} </h3>
          <h3>Número de páginas: {comic?.pageCount} </h3>
          <h3>
            Data de publicação:{' '}
            {comic?.modified && new Date(comic?.modified).toDateString()}
          </h3>
        </div>
        <div className="buttons">
          <Button
            name="buy"
            value="buy"
            disabled={comic?.amount === 0}
            onClick={() => {
              if (comic?.id) {
                dispatch(
                  checkoutComic({ id: comic?.id.toString(), amount: 1 })
                );
              }
            }}
          >
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
