// eslint-disable-next-line import/no-unresolved
import styled, { css } from 'astroturf';

const width = 75;

const styles = css`
  .parent {
    color: red;
  }
`;

const FancyBox = styled('div')`
  composes: foo from global;

  color: red;
  width: ${width}px;

  &.primary {
    background: white;
    color: palevioletred;
  }
`;

const FancierBox = styled('div')`
  color: ultra-red;

  > ${FancyBox} {
    padding: 4em;
  }

  ${styles.parent} > & {
    margin: 2em;
  }
`;

export const Button = styled('button')`
  composes: button-with-caret from global;
`;

export default FancierBox;