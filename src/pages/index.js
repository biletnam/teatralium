import React from 'react'
import styled from 'styled-components'
import { navigateTo } from 'gatsby-link'

import { phone } from '../utils/media'
import H1, { H1small } from '../components/H1'
import Img from '../components/Img'
import H3 from '../components/H3'
import Button from '../components/Button/StyledButton'
import Footer from '../components/Footer'
import Social from '../components/Social';

import rus from './images/ppp.gif'
import ezhen from './images/2.jpg'
import mycene from './images/myc.jpg'

const Section = styled.section`
  max-width: calc(768px + 16px * 2);
  margin: 3em auto;
  margin-bottom: 0;
  padding: 0.3rem;

  ${phone('margin: 0.5em auto;')}
`;

const ArticlesSection = styled(Section)`
  padding: ${p => p.padding || '2'}rem;
  text-align: ${p => p.align || 'center'};
  margin: ${p => p.margin || 'auto'};
  font-size: ${p => p.size || 'auto'};
  color: ${p => p.color || 'auto'};
`;

const NoImageCover = styled.div`
  text-align: center;
  padding-bottom: 2rem;
`;

const FillCover = styled.div`
  background: ${(p) => p.color};
  background-image: url(${(p) => p.bg || 'none'});
  background-size: cover;
  min-height: ${p => p.height || 'auto'};
  display: flex;

  align-items: center;
  justify-content: center;
  ${p => p.bordered && 'border: solid 9px #f2639e;'}

  &:hover {
    cursor: pointer;
  }

  ${phone('dispay: block; min-height: auto;')}
`;

const ImgWrapper = styled.div`
  ${phone('display: none;')}
  padding: 2rem;
`;

const Lead = styled.div`
  font-size: 1.2rem;
  color: ${p => p.color || 'auto'};
  text-transform: uppercase;
  letter-spacing: 0.1rem;
  font-family: 'Bodoni';
  margin-bottom: 2rem;
  ${phone(`
    font-size: 0.9em;
    letter-spacing: normal;
    line-height: normal;
    text-transform: none;
  `)}
`;

const PurpleButton = styled(Button)`
  color: white;
  border: 3px solid #f2639e;

  &:hover {
    background: #f2639e;
  }`;

const Bol = () => <ArticlesSection>
  <NoImageCover>
    <H1small>«МНЕ ПЛОХО, МНЕ СКУЧНО»</H1small>
    <H1 widen>почему люди не ходят в театр</H1>
    <Button to="/articles/mne_ploho_mne_skuchno">Читать</Button>
  </NoImageCover>
</ArticlesSection>

const Lyub = () => <FillCover color="#e6ceff" onClick={() => navigateTo('/articles/lyubimovka')}>
  <ArticlesSection padding="1">
    <H3><i>«Меня волнует вся х**ня»</i></H3>
    <Lead>Ридер «Любимовки» Анна Банасюкевич о стране, в которой мы живем</Lead>
    <Img src={rus} width="300px" round />
  </ArticlesSection>
</FillCover>

const Ezhen = () => <FillCover color="white" onClick={() => navigateTo('/articles/ezhen')}>
  <ArticlesSection align="right" margin="1rem">
    <H1>Что хотел сказать автор?</H1>
    <H1small>Отвечает Эжен Ионеско</H1small>
  </ArticlesSection>
  <ImgWrapper>
    <Img src={ezhen} />
  </ImgWrapper>
</FillCover>

const Svet = () => <FillCover bordered color="yellow" bg={mycene} height="600px">
  <ArticlesSection padding="3" size="18px">
    <H1 color="white">Свет далеких планет</H1>
    <Lead color="white">Обзор европейских премьер нового сезона</Lead>
    <PurpleButton to="/articles/svet_dalyokih_planet">Читать</PurpleButton>
  </ArticlesSection>
</FillCover>

export class HomePage extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div>
        <Bol />
        <Lyub />
        <Ezhen />
        <Svet />
        <Social />
      </div>
    );
  }
}

export default HomePage
