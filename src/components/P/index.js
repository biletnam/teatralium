import styled from 'styled-components';
import { phone } from '../../utils/media';

const P = styled.p`
  &:first-letter {
    display: block;
    line-height: 4rem;
    font-size: 6.5rem;
    font-weight: bold;
    padding: 1.2rem;
    padding-top: 1.8rem;
    color: #ff93e8;
    padding-right: 1.2rem;
    float: left;
  }
  margin-top: 3rem;
  font-size: 1.4rem;
  ${phone(`font-size: 1rem; margin-top: 2rem;`)}
`;

export default P;
