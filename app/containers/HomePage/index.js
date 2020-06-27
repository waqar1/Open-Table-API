import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';
import injectReducer from 'utils/injectReducer';
import injectSaga from 'utils/injectSaga';
import {
  makeSelectLoading,
  makeSelectError
} from 'containers/App/selectors';
import { loadRestaurants } from '../App/actions';
import {
  changeCityName,
  filterResults
} from './actions';
import {
  makeSelectCityName,
  makeSelectFilter,
  makeSelectFilteredRestaurants
} from './selectors';
import reducer from './reducer';
import saga from './saga';
import HomePage from './HomePage';

const mapDispatchToProps = (dispatch) => ({
  onChangeCity: (evt) => dispatch(changeCityName(evt.target.value)),
  onFilterChange: (evt) => dispatch(filterResults(evt.target.value)),
  onCitySubmit: (evt) => {
    if (evt !== undefined && evt.preventDefault) evt.preventDefault();
    dispatch(loadRestaurants());
  }
});

const mapStateToProps = createStructuredSelector({
  restaurants: makeSelectFilteredRestaurants(),
  city: makeSelectCityName(),
  filter: makeSelectFilter(),
  loading: makeSelectLoading(),
  error: makeSelectError()
});

const withConnect = connect(mapStateToProps, mapDispatchToProps);

const withReducer = injectReducer({ key: 'home', reducer });
const withSaga = injectSaga({ key: 'home', saga });

export default compose(withReducer, withSaga, withConnect)(HomePage);
export { mapDispatchToProps };
