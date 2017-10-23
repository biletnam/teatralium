import styled, { keyframes } from 'styled-components';

const fadein = keyframes`
  from { opacity: 0.2; }
  to   { opacity: 1; }
`;

const Section = styled.section`
  max-width: calc(752px + 16px * 2);
  margin: ${p => p.margin || '3em auto'};
  margin-bottom: 0;
  margin-top: 0;
  padding: 0.3rem;
  text-align: ${p => p.align || 'auto'};

  padding: ${p => p.padding || '2'}rem;
  padding-top: 0;
  font-size: ${p => p.size || 'auto'};
  color: ${p => p.color || 'auto'};
  animation: ${fadein} 1s ease-out;
  > h1, h2, h3 {
    text-align: center;
  }
  > h3 {
    padding-top: 3rem;
    padding-bottom: 3rem;
  }
`;

export default Section;
