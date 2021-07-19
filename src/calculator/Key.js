import styled, { css } from 'styled-components';

const primaryStyles = css`
  color: ${({ theme }) => theme.clr.keys};
  font-weight: 700;
  font-size: 1.7rem;
  background-color: ${({ theme }) => theme.key.primary.background};
  box-shadow: 0px 4px ${({ theme }) => theme.key.primary.shadow};
`;

const secondaryStyles = css`
  font-weight: 700;
  font-size: 1.2rem;

  color: ${({ theme }) => theme.clr.neutral};
  background-color: ${({ theme }) => theme.key.secondary.background};
  box-shadow: 0px 4px ${({ theme }) => theme.key.secondary.shadow};
`;
const accentStyles = css`
  font-weight: 500;
  font-size: 1.2rem;

  color: ${({ theme }) => theme.clr.accent};
  background-color: ${({ theme }) => theme.key.accent.background};
  box-shadow: 0px 4px ${({ theme }) => theme.key.accent.shadow};
`;

const Key = styled.button.attrs((props) => ({
  type: 'button',
}))`
  border: none;
  cursor: pointer;
  grid-column-start: span ${({ $span }) => $span};
  border-radius: ${({ theme }) => theme.radius.normal};
  padding: 0.4em;
  font-family: Spartan, sans-serif;
  ${({ $keyType }) => ($keyType === 'primary' ? primaryStyles : '')}
  ${({ $keyType }) => ($keyType === 'secondary' ? secondaryStyles : '')}
      ${({ $keyType }) => ($keyType === 'accent' ? accentStyles : '')};
`;

Key.defaultProps = {
  $span: 1,
  $keyType: 'primary',
};

export default Key;
