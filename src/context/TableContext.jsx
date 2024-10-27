// TableContext.js
"use client"
import React, { createContext, useContext, useReducer } from 'react';

// Create a context
const TableContext = createContext();

// Initial state
const initialState = {
  headers: [],
  rows: [],
  footer: [],
};

// Reducer function to manage state updates
const tableReducer = (state, action) => {
  switch (action.type) {
    case 'SET_TABLE_DATA':
      return {
        ...state,
        headers: action.payload.headers,
        rows: action.payload.rows,
        footer: action.payload.footer,
      };
    default:
      return state;
  }
};

// Provider component
export const TableProvider = ({ children }) => {
  const [state, dispatch] = useReducer(tableReducer, initialState);

  return (
    <TableContext.Provider value={{ state, dispatch }}>
      {children}
    </TableContext.Provider>
  );
};

// Custom hook to use the TableContext
export const useTableContext = () => useContext(TableContext);