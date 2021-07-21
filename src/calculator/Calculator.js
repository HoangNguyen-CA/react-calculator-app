import React, { useState } from 'react';
import Keypad from './Keypad';
import Screen from './Screen';
import Topbar from './Topbar';

import styled from 'styled-components';

import { operators } from './enums';

const Container = styled.div`
  max-width: 520px;
  width: 100%;
  background-color: ${({ theme }) => theme.bg.main};
`;

const Calculator = () => {
  const [operator, setOperator] = useState('');
  const [operand1, setOperand1] = useState('');
  const [operand2, setOperand2] = useState('');

  const [error, setError] = useState(false);

  const addToOperand = (c) => {
    if (error) return;

    let newOperand = operand1 + c;
    setOperand1(newOperand);
  };

  const deleteFromOperand = () => {
    if (error) return;
    if (operand1.length >= 1) {
      let newOperand = operand1.substring(0, operand1.length - 1);
      setOperand1(newOperand);
    }
  };

  const reset = () => {
    setError(false);
    setOperator('');
    setOperand1('');
    setOperand2('');
  };

  const handleError = (message = 'Syntax Error') => {
    reset();
    setError(true);
    setOperand2('');
    setOperand1(message);
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

    if (operand2 === '') {
      setOperator(c);
      setOperand2(operand1);
      setOperand1('');
    } else {
      if (!operand1) {
        setOperator(c);
      } else {
        const result = calculate();
        if (result !== null) {
          setOperator(c);
          setOperand2(result);
          setOperand1('');
        }
      }
    }
  };

  const equals = () => {
    const res = calculate();
    if (res !== undefined) {
      reset();
      setOperand1(String(res));
    }
  };

  const calculate = () => {
    if (error) return undefined;

    if (!operator || !operand1 || !operand2) {
      return handleError();
    }

    const op1 = parseFloat(operand1);
    const op2 = parseFloat(operand2);

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

    return result;
  };

  return (
    <Container>
      <Topbar></Topbar>
      <Screen
        operand1={operand1}
        operand2={operand2}
        operator={operator}
      ></Screen>
      <Keypad
        addToOperand={addToOperand}
        deleteFromOperand={deleteFromOperand}
        addOperator={addOperator}
        reset={reset}
        equals={equals}
      ></Keypad>
    </Container>
  );
};

export default Calculator;
