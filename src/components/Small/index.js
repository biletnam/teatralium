import styled, { keyframes } from 'styled-components';

const Small = styled.div`
  font-size: 0.8rem;
  line-height: 1.1rem;
  padding-left: 1rem;
  margin-bottom: 1rem;
  ${p => p.outside ? `
    max-width: calc(752px + 16px * 2);
    padding-left: 3rem;
    margin: 3em auto;` : ''}
`;

export default Small;
