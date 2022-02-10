# Summary - React Memo
## 1. React Memo is not a traditional memoization

- Remember that Lodash memoization maintains an array for this prop, you get this result.

- That's not a way React works. React looks at the previous value vs the new value of the prop
and the it re-renders if those have changed.

## 2. Rename React Memo in the Brain is Re-render if the props have changed

-  React simply compares the prevProps to nextProps between renders. 
The comparison is shallow in nature because deep comparison would otherwise lead to performance hits. 

## 3. UseCallback and useMemo are for referential identity 

- Particularly around the integrity of arrays, objects and functions.

## 4. Use memo for expensive calculations

## 5. Re-rendering in React is not a terrible thing. React was built to manage that.

Source: https://www.youtube.com/watch?v=DEPwA3mv_R8&list=LL&index=1