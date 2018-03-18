import React from 'react'
import styled from 'styled-components'
import play from './play.svg'
import Small from '../Small'
import Description from '../Img'

const absolute = `
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
`
const Wrapper = styled.div`
  position: relative;
  padding-bottom: 56.25%; /* 16:9 */
  padding-top: 25px;
  margin-bottom: ${p => p.marginBottom || '1rem'};
  height: 0;
  > iframe {
    ${absolute};
  }
  &:hover {
    cursor: pointer;
  }
`

const Preview = styled.div``

const Img = styled.img`
  ${absolute};
`

const Button = styled.div`
  ${p =>
    !p.enabled &&
    `
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background-image: url("${play}");
    width: 6rem;
    height: 6rem;
`};
`

class Video extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      enabled: false,
    }
  }

  render() {
    const { props, state } = this
    if (props.url) {
      return (
        <Wrapper {...props}>
          <iframe src={props.url} frameBorder="0" allowFullScreen />
        </Wrapper>
      )
    }

    return (
      <div>
        <Wrapper
          {...props}
          enabled={state.enabled}
          onClick={() => this.setState({ enabled: true })}
        >
          {state.enabled ? (
            <iframe
              src={
                'https://www.youtube.com/embed/' +
                  props.id +
                  '?autoplay=1&start=' +
                  props.start || 0
              }
              frameBorder="0"
              allowFullScreen
            />
          ) : (
            <span>
              <Img
                src={`https://img.youtube.com/vi/${props.id}/0.jpg`}
                alt="preview"
              />
              <Button />
            </span>
          )}
        </Wrapper>
        {props.desc && <Description {...props} marginTop="0" />}
      </div>
    )
  }
}

export default Video
