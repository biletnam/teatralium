import styled from 'styled-components'

const Poem = styled.p`
  color: ${p => p.color || '#a669c8'};
  padding-left: 2rem;
  font-family: 'Courier New';
  font-size: ${p => p.size || '1.2rem'};
  > span {
    display: block;
    line-height: 2rem;
  }
`

export default Poem

export const Playlist = styled(Poem)`
  > span {
    margin-bottom: 1rem;
  }
`
