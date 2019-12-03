import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Form from '../shared/Form';
import Label from '../shared/Label';
import Input from '../shared/Input';
import Button from '../shared/Button';

const labelStyles = `
  margin-bottom: 16px;  
`;

class BudgetForm extends Component {
  static propTypes = {
    saveBudget: PropTypes.func.isRequired,
  };

  state = {
    inputValue: '',
  };

  handleChange = e => {
    this.setState({ inputValue: e.target.value });
  };

  handleSubmit = e => {
    e.preventDefault();
    if (this.state.inputValue <= 0) {
      this.notify('Введите сумму больше 0!');
      this.setState({ inputValue: '' });
      return;
    }
    this.props.saveBudget(this.state.inputValue);
    this.setState({ inputValue: '' });
  };

  notify = msg => {
    toast.error(msg);
  };

  render() {
    const { inputValue } = this.state;
    return (
      <>
        <Form onSubmit={this.handleSubmit}>
          <Label customStyles={labelStyles}>
            Enter your total budget
            <Input
              type="number"
              placeholder="0"
              value={inputValue}
              onChange={this.handleChange}
            />
          </Label>
          <Button label="Save" type="submit" />
          <ToastContainer />
        </Form>
      </>
    );
  }
}

export default BudgetForm;
