/* eslint-disable no-param-reassign */
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface IComic {
  id: string;
  srcThumbnail: string;
  title: string;
  amount: number;
}

export interface IComicsState {
  listOfComics: Array<IComic>;
}

const initialState: IComicsState = {
  listOfComics: [
    {
      id: '98402',
      srcThumbnail:
        'http://i.annihil.us/u/prod/marvel/i/mg/f/90/61b238dfe9acf.jpg',
      title: 'Captain America/Iron Man (2021) #4',
      amount: 5
    },
    {
      id: '59551',
      srcThumbnail:
        'http://i.annihil.us/u/prod/marvel/i/mg/a/30/56f46483efc4f.jpg',
      title: 'Spider-Man (2016) #6 (Anka Mighty Men Variant)',
      amount: 7
    },
    {
      id: '291',
      srcThumbnail:
        'http://i.annihil.us/u/prod/marvel/i/mg/6/e0/4bc6a2497684e.jpg',
      title: 'Ant-Man (2003) #1',
      amount: 8
    },
    {
      id: '77816',
      srcThumbnail:
        'http://i.annihil.us/u/prod/marvel/i/mg/b/f0/6009ea34cb4cf.jpg',
      title: 'Deadpool (2019) #10',
      amount: 4
    }
  ]
};

export const comicsSlice = createSlice({
  name: 'comics',

  initialState,
  reducers: {
    checkoutComic: (
      state,
      payload: PayloadAction<{ id: string; amount: number }>
    ) => {
      const index = state.listOfComics.findIndex(
        element => element.id === payload.payload.id
      );
      const auxAmout = state.listOfComics[index].amount;
      state.listOfComics[index].amount = auxAmout - payload.payload.amount;
    }
  }
});

export const { checkoutComic } = comicsSlice.actions;

export default comicsSlice.reducer;
