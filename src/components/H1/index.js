import styled from 'styled-components';
import { phone } from '../../utils/media';

const H1 = styled.h1`
  margin-top: 0;
  text-transform: uppercase;
  letter-spacing: 0.5rem;
  font-size: 4.236em;
  line-height: 5.6rem;
  color: ${p => p.color || 'black'};
  ${phone(`
    font-size: 1.3em;
    letter-spacing: 0.2em;
    line-height: normal;
  `)}
`;

export const H1small = styled.h2`
  text-transform: uppercase;
  font-size: 1.412rem;
  letter-spacing: 0.4rem;
  font-weight: normal;
  line-height: 2.2rem;
  ${phone(`
    font-size: 0.9em;
    letter-spacing: normal;
    line-height: normal;
    text-transform: none;
  `)}
`;

export default H1;
