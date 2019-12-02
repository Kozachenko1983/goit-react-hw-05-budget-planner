import { connect } from 'react-redux';
import BudgetForm from './BudgetForm';
import { saveBudget } from '../../redux/budgetActions';

const mapDispatchToProps = {
  saveBudget,
};

export default connect(null, mapDispatchToProps)(BudgetForm);
