export const Type = {
  SAVE_BUDGET: 'SAVE_BUDGET',
  SAVE_EXPENSE: 'SAVE_EXPENSE',
  DEL_EXPENSE: 'DEL_EXPENSE',
};

export const saveBudget = valueBudget => ({
  type: Type.SAVE_BUDGET,
  payload: valueBudget,
});

export const saveExpense = valuesExpense => ({
  type: Type.SAVE_EXPENSE,
  payload: valuesExpense,
});

export const deleteExpense = id => ({
  type: Type.DEL_EXPENSE,
  payload: id,
});
