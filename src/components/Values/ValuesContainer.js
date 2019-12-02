import { connect } from 'react-redux';
import Values from './Values';

const mapStateToProps = state => ({
  budget: state.budget,
  totalExpenses: state.totalExpenses,
  balance: state.budget - state.totalExpenses,
});

export default connect(mapStateToProps, null)(Values);
