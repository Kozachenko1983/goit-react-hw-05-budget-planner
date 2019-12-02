import { connect } from 'react-redux';
import ExpenseForm from './ExpenseForm';
import { saveExpense } from '../../redux/budgetActions';

const mapDispatchToProps = {
  saveExpense,
};

export default connect(null, mapDispatchToProps)(ExpenseForm);
