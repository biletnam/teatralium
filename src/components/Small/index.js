import styled, { keyframes } from 'styled-components';

import { phone } from '../../utils/media';

const Small = styled.div`
  font-size: 0.8rem;
  line-height: 1.1rem;
  margin-bottom: 1rem;
  margin-top: ${p => p.marginTop || 'auto'};
  ${p => p.outside ? `
    max-width: calc(752px + 16px * 2);
    margin: 1em auto;
    ${phone(`margin: 0; padding: 0.5rem`)}
    ` : ''}
`;

export default Small;
