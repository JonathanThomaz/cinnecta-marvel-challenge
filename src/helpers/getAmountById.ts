import { IComic } from 'store/slices/comicsSlice';

export const getAmountById = (id: string, comics: Array<IComic>): number => {
  const comic = comics.find(element => element.id === id);
  if (comic) {
    return comic.amount;
  }
  return 0;
};
