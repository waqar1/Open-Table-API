import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';
import injectReducer from 'utils/injectReducer';
import injectSaga from 'utils/injectSaga';
import {
  makeSelectRestaurants,
  makeSelectLoading,
  makeSelectError
} from 'containers/App/selectors';
import { loadRestaurants } from '../App/actions';
import { changeCityName } from './actions';
import { makeSelectCityName } from './selectors';
import reducer from './reducer';
import saga from './saga';
import HomePage from './HomePage';

const mapDispatchToProps = (dispatch) => ({
  onChangeCity: (evt) => dispatch(changeCityName(evt.target.value)),
  onSubmitForm: (evt) => {
    if (evt !== undefined && evt.preventDefault) evt.preventDefault();
    dispatch(loadRestaurants());
  }
});

const mapStateToProps = createStructuredSelector({
  restaurants: makeSelectRestaurants(),
  city: makeSelectCityName(),
  loading: makeSelectLoading(),
  error: makeSelectError()
});

const withConnect = connect(mapStateToProps, mapDispatchToProps);

const withReducer = injectReducer({ key: 'home', reducer });
const withSaga = injectSaga({ key: 'home', saga });

export default compose(withReducer, withSaga, withConnect)(HomePage);
export { mapDispatchToProps };
