import { Type } from './budgetActions';

const initialState = {
  budget: 0,
  totalExpenses: 0,
  expense: [],
};

const budgetReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case Type.SAVE_BUDGET:
      return { ...state, budget: payload };

    case Type.SAVE_EXPENSE:
      return {
        ...state,
        totalExpenses: state.totalExpenses + Number(payload.amount),
        expense: [...state.expense, payload],
      };

    case Type.DEL_EXPENSE:
      return {
        ...state,
        expense: state.expense.filter(el => el.id !== payload),
        totalExpenses:
          state.totalExpenses -
          Number(state.expense.find(el => el.id === payload).amount),
      };

    default:
      return state;
  }
};
export default budgetReducer;
