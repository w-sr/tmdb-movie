import {useDispatch} from 'react-redux';
import {bindActionCreators} from 'redux';

import {clearStore, getMovies} from '../store/actions';

const useActions = () => {
  const dispatch = useDispatch();

  return bindActionCreators({getMovies, clearStore}, dispatch);
};

export default useActions;
