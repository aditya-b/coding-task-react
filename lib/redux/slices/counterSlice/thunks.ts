/* Instruments */
import { selectCount, type ReduxThunkAction, counterSlice } from "@/lib/redux";

export const incrementIfOddAsync =
  (amount: number): ReduxThunkAction =>
  (dispatch, getState) => {
    // update only if currentValue is odd
    const currentValue = selectCount(getState());
    if (currentValue % 2 !== 0) {
      dispatch(counterSlice.actions.incrementByAmount(amount));
    }
  };
