import { connect } from 'react-redux';
import ExpenseForm from './ExpenseForm';
import { saveExpense } from '../../redux/budgetActions';

const mapStateToProps = state => ({
  budget: state.budget,
});

const mapDispatchToProps = {
  saveExpense,
};

export default connect(mapStateToProps, mapDispatchToProps)(ExpenseForm);
