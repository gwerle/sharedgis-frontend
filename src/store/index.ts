import { useCallback } from 'react';
import * as ReactRedux from 'react-redux';

import rootReducer from './modules/rootReducer';

export type AppState = ReturnType<typeof rootReducer>;
export type StateMapper<R, S = AppState> = (state: S) => R;

export function useDispatch() {
  const store = ReactRedux.useStore();
  const dispatch = useCallback(store.dispatch, [store]);
  return dispatch;
}

export function useSelector<T>(
  selector: (state: AppState) => T,
  equalityFn?: (left: T, right: T) => boolean,
) {
  return ReactRedux.useSelector(selector, equalityFn);
}
