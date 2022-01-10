import {
  Provider,
  TypedUseSelectorHook,
  useDispatch,
  useSelector
} from 'react-redux';
import { BrowserRouter } from 'react-router-dom';

import type { RootState, AppDispatch } from 'store';
import store from 'store/index';

export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

interface AppProviderProps {
  children: JSX.Element | JSX.Element[];
}

export function AppProvider({ children }: AppProviderProps): JSX.Element {
  return (
    <BrowserRouter>
      <Provider store={store}>{children}</Provider>
    </BrowserRouter>
  );
}
