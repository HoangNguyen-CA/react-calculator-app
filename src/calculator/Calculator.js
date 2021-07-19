import React, { useState } from 'react';
import Keypad from './Keypad';
import Screen from './Screen';
import Topbar from './Topbar';

import styled from 'styled-components';

import { operators } from './enums';

const Container = styled.div`
  max-width: 500px;
  width: 100%;
  background-color: ${({ theme }) => theme.bg.main};
`;

const Calculator = () => {
  const [operator, setOperator] = useState('');
  const [operands, setOperands] = useState({ 1: '', 2: '' });
  const [error, setError] = useState(false);

  const addToOperand = (c) => {
    if (error) return;
    let newOperand = operands[1] + c;
    setOperands({ ...operands, 1: newOperand });
  };

  const deleteFromOperand = () => {
    if (error) return;
    if (operands[1].length >= 1) {
      let newOperand = operands[1].substring(0, operands[1].length - 1);
      setOperands({ ...operands, 1: newOperand });
    }
  };

  const reset = () => {
    setError(false);
    setOperands({ 1: '', 2: '' });
    setOperator('');
  };

  const handleError = (message = 'Syntax Error') => {
    reset();
    setError(true);
    setOperands({ 2: '', 1: message });
  };

  const addOperator = (c) => {
    if (error) return;

    let check = false;
    for (const op in operators) {
      if (c === operators[op]) {
        check = true;
      }
    }
    if (!check) return;

    if (operands[2] === '') {
      setOperator(c);

      setOperands((prevState) => {
        return {
          2: prevState[1],
          1: '',
        };
      });
    } else {
      if (!operands[1]) {
        setOperator(c);
      } else {
        calculate();
        setOperands((prevState) => {
          return {
            2: prevState[1],
            1: '',
          };
        });

        setOperator(c);
      }
    }
  };

  const calculate = () => {
    if (error) return;

    if (!operator || !operands[1] || !operands[2]) {
      return handleError();
    }

    const op1 = parseFloat(operands[1]);
    const op2 = parseFloat(operands[2]);

    if (Number.isNaN(op1) || Number.isNaN(op2)) {
      return handleError();
    }

    let result;

    switch (operator) {
      case operators.add:
        result = op2 + op1;
        break;

      case operators.subtract:
        result = op2 - op1;
        break;

      case operators.multiply:
        result = op2 * op1;
        break;

      case operators.divide:
        if (op1 === 0) return handleError('Math Error');
        result = op2 / op1;
        break;

      default:
        return;
    }

    reset();
    setOperands({ 2: '', 1: result });
  };

  return (
    <Container>
      <Topbar></Topbar>
      <Screen
        operand1={operands[1]}
        operand2={operands[2]}
        operator={operator}
      ></Screen>
      <Keypad
        addToOperand={addToOperand}
        deleteFromOperand={deleteFromOperand}
        addOperator={addOperator}
        reset={reset}
        calculate={calculate}
      ></Keypad>
    </Container>
  );
};

export default Calculator;
