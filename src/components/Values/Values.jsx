import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import Value from './Value';

const Container = styled.section`
  display: inline-flex;
  justify-content: space-between;
  align-items: center;
`;

const Values = ({ budget, totalExpenses, balance }) => (
  <Container>
    <Value label="Budget" value={budget} isPositive />
    <Value label="Expenses" value={totalExpenses} />
    <Value label="Balance" value={balance} isPositive={balance >= 0} />
  </Container>
);
Values.propTypes = {
  budget: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  totalExpenses: PropTypes.number.isRequired,
  balance: PropTypes.number.isRequired,
};
export default Values;
