import React, { Component } from 'react';
import PropTypes from 'prop-types';
import shortid from 'shortid';
import { toast } from 'react-toastify';
import Form from '../shared/Form';
import Label from '../shared/Label';
import Input from '../shared/Input';
import Button from '../shared/Button';
import 'react-toastify/dist/ReactToastify.css';

const labelStyles = `
  margin-bottom: 16px;  
`;

class ExpenseForm extends Component {
  static propTypes = {
    saveExpense: PropTypes.func.isRequired,
    budget: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
      .isRequired,
  };

  state = {
    name: '',
    amount: '',
  };

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    if (this.state.name.length <= 2) {
      this.notify('Введите значение больше двух символов!');
      this.setState({
        name: '',
      });
      return;
    }
    if (this.state.amount <= 0) {
      this.notify('Введите сумму больше 0!');
      this.setState({
        amount: '',
      });
      return;
    }
    if (+this.state.amount > +this.props.budget) {
      this.notify('Недопустимое значение. Расходы превышают бюджет');
      this.setState({
        amount: '',
      });
      return;
    }

    this.props.saveExpense({ ...this.state, id: shortid() });
    this.setState({ name: '', amount: '' });
  };

  notify = msg => {
    toast.error(msg);
  };

  render() {
    const { name, amount } = this.state;
    return (
      <Form onSubmit={this.handleSubmit}>
        <Label customStyles={labelStyles}>
          Enter expense name
          <Input
            type="text"
            name="name"
            placeholder="name"
            value={name}
            onChange={this.handleChange}
          />
        </Label>
        <Label customStyles={labelStyles}>
          Enter expense amount
          <Input
            type="number"
            name="amount"
            placeholder="0"
            value={amount}
            onChange={this.handleChange}
          />
        </Label>

        <Button label="Add" type="submit" />
      </Form>
    );
  }
}

export default ExpenseForm;
