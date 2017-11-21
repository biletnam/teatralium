import styled, { keyframes } from 'styled-components';

const Small = styled.div`
  font-size: 0.8rem;
  line-height: 1.1rem;
  margin-bottom: 1rem;
  margin-top: ${p => p.marginTop || 'auto'};
  ${p => p.outside ? `
    max-width: calc(752px + 16px * 2);
    padding-left: 2rem;
    margin: 1em auto;` : ''}
`;

export default Small;
