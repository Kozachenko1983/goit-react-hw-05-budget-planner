import { connect } from 'react-redux';
import ExpensesTable from './ExpenseTable';
import { deleteExpense } from '../../redux/budgetActions';

const mapStateToProps = state => ({
  items: state.expense,
});

const mapDispatchToProps = {
  deleteExpense,
};

export default connect(mapStateToProps, mapDispatchToProps)(ExpensesTable);
