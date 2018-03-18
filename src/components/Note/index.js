import React from 'react'
import styled from 'styled-components'
import { phone } from '../../utils/media'

const StyledNote = styled.div`
  position: absolute;
  ${p => (!p.left ? 'right: -300px;' : 'left: -300px;')} top: ${p =>
      p.top || '0'};
  background: ${p => p.background || 'lavender'};
  margin-bottom: 1rem;
  padding: 2rem;
  font-size: 0.8rem;
  width: 250px;
  ${phone(`
    max-width: 95%;
    position: relative;
    right: auto;
    left: auto;
    top: auto;
    padding: 1rem;
    width: 100%;
  `)};
`

const Note = ({ children, ...props }) => (
  <StyledNote {...props}>{children}</StyledNote>
)

export const NotedWord = styled.span`
  color: #333399;
  border-bottom: 1px dashed #333399;
`

export const NoteWrapper = ({ children }) => (
  <div style={{ position: 'relative' }}>{children}</div>
)

export default Note
