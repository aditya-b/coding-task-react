"use client";

/* Core */
import { useState } from "react";

/* Instruments */
import { useSelector, selectCount, useDispatch, counterSlice, incrementIfOddAsync } from "@/lib/redux";
import styles from "./counter.module.css";

export const Counter = () => {
  const count = useSelector(selectCount);
  const dispatch = useDispatch();

  // Create a state named incrementAmount
  const [incrementAmount, setIncrementAmount] = useState("");
  const onIncrementAmountChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const incrementAmount = parseInt(e.target.value, 10);
    if (!isNaN(incrementAmount)) {
      setIncrementAmount(incrementAmount.toString());
    }
  }

  return (
    <div>
      <div className={styles.row}>
        <button
          className={styles.button}
          aria-label="Decrement value"
          onClick={() => {
            // dispatch event to decrease count by 1
            dispatch(counterSlice.actions.decrement());
          }}
        >
          -
        </button>
        <span className={styles.value}>{count}</span>
        <button
          className={styles.button}
          aria-label="Increment value"
          onClick={() => {
            // dispatch event to increment count by 1
            dispatch(counterSlice.actions.increment());
          }}
        >
          +
        </button>
      </div>
      <div className={styles.row}>
        <input className={styles.textbox} aria-label="Set increment amount" onChange={onIncrementAmountChange} value={incrementAmount} />
        <button
          className={styles.button}
          onClick={() => {
            // dispatch event to add incrementAmount to count
            const vIncrementAmount = parseInt(incrementAmount, 10);
            if (!isNaN(vIncrementAmount)) {
              dispatch(counterSlice.actions.incrementByAmount(vIncrementAmount));
            }
          }}
        >
          Add Amount
        </button>
        <button
          className={styles.button}
          onClick={() => {
            // dispatch event to add incrementAmount only if count is odd
            const vIncrementAmount = parseInt(incrementAmount, 10);
            if (!isNaN(vIncrementAmount)) {
              dispatch(incrementIfOddAsync(vIncrementAmount));
            }
          }}
        >
          Add If Odd
        </button>
      </div>
    </div>
  );
};
