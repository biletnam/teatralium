import styled from 'styled-components';

const H4 = styled.h4`
  font-size: ${p => p.size || '1.618rem'};
  font-weight: bold;
  margin-bottom: 0.25em;
  ${p => p.center ? 'text-align: center;' : ''}
  ${p => p.marginTop ? `margin-top: ${p.marginTop};` : ''}
`;

export default H4;
