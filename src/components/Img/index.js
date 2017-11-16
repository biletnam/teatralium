import styled from 'styled-components'
import React from 'react'
import Small from '../Small'

export const shadow = `
  box-shadow: 1px -4px 45px -5px rgba(102,51,153,.67);
`

const Wrapper = styled.div`
  margin: 0 auto;
  margin-bottom: ${p => p.marginBottom || (p.desc ? '2rem' : '3rem')};
  margin-top: ${p => p.marginTop || '1rem'};
  max-width: ${p => p.maxWidth || '780px'};
`

const ImgStyled = styled.img`
  display: block;
  margin: 0 auto;
  width: 100%;
  ${p => p.height ? `height: ${p.height};` : ''}
  ${p => p.width ? `width: ${p.width};` : ''}
  transition: all .5s ease-in;
  ${p => p.round ? 'border-radius: 50%;' : ''}
  ${p => p.customBorder ? p.customBorder : ''}
  ${p => !p.noBorder && `${shadow}
  &:hover {
    box-shadow: 0 19px 38px rgba(102,51,153,.30), 0 15px 12px rgba(102,51,153,.22);
  }`}
`

const Img = (props) => <Wrapper {...props}>
  <ImgStyled {...props} />
  {props.desc && <Small marginTop="0.7rem">{props.desc} {props.url && <a href={props.url}>{props.title}</a>}</Small>}
</Wrapper>

export default Img
