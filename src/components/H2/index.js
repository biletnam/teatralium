import styled from 'styled-components';
import { phone } from '../../utils/media';

const H2 = styled.h2`
  font-size: 3.427rem;
  margin-top: ${p => p.marginTop || '1rem'};
  color: ${p => p.color || 'auto'};
  ${phone('font-size: 1rem;')}
`;

export default H2;
