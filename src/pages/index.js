import React from 'react'
import styled from 'styled-components'
import Link, { navigateTo } from 'gatsby-link'

import { phone } from '../utils/media'
import H1, { H1small } from '../components/H1'
import Img from '../components/Img'
import H3 from '../components/H3'
import H4 from '../components/H4'
import H2 from '../components/H2'
import Button from '../components/Button/StyledButton'
import Footer from '../components/Footer'
import Social from '../components/Social';

import rus from './images/ppp.gif'
import ezhen from './images/2.jpg'
import mycene from './images/myc.jpg'
import nadryv from './images/np1.jpg'
import belomor from './images/belomor/1test.jpg'
import annenkov from './images/annenkov/home.jpg'
import iz_vseh_iskusstv from './images/iz_vseh_iskusstv/cover.jpg'

import { REVOLUTION } from '../utils/const'

const StyledLink = styled(Link)`
  color: black;
  text-decoration: none;
  &:hover {
    cursor: hand;
  }
`

const Section = styled.section`
  max-width: calc(768px + 16px * 2);
  margin: 3em auto;
  margin-bottom: 0;
  padding: 0.3rem;

  ${phone('margin: 0.5em auto;')}
`;

const ArticlesSection = styled(Section)`
  padding: ${p => p.padding || '2'}rem;
  padding-top: ${p => p.paddingTop || '2'}rem;
  text-align: ${p => p.align || 'center'};
  margin: ${p => p.margin || 'auto'};
  font-size: ${p => p.size || 'auto'};
  color: ${p => p.color || 'auto'};
  background: ${p => p.background || 'none'};
`;

const NoImageCover = styled.div`
  text-align: center;
  padding-bottom: 2rem;
`;

const FillCover = styled.div`
  position: relative;
  background: ${(p) => p.color};
  color: ${(p) => p.fontColor};
  background-image: url(${(p) => p.bg || 'none'});
  background-size: cover;
  min-height: ${p => p.height || 'auto'};
  display: flex;
  ${p => p.shadow && 'box-shadow: inset 1px 4px 90px -6px #000000;'}

  align-items: center;
  justify-content: center;
  ${p => p.bordered && `border: solid 9px ${p.borderColor || `#f2639e`};`}
  ${p => p.pointer && `&:hover {
    cursor: pointer;
  }`}
  ${phone(`
    dispay: block;
    min-height: auto;
  `)}
`;

const TopCover = styled(FillCover)`
  min-height: 650px;
  height: calc(100vh - 92px - 2.8rem);
  ${phone(`
    height: calc(100vh - 30px);
  `)}
`

const FillCoverMaxHeight = styled(FillCover)`
  ${phone(`max-height: 150px;`)}
`;

const ImgWrapper = styled.div`
  ${phone('display: none;')}
  padding: 2rem;
`;

const Lead = styled.div`
  font-size: ${p => p.size || '1.2rem'};
  color: ${p => p.color || 'inherit'};
  background: ${p => p.background || 'none'};
  padding: ${p => p.padding || 'auto'};
  text-transform: uppercase;
  letter-spacing: 0.1rem;
  font-family: 'Bodoni';
  margin-bottom: ${p => p.marginBottom || '2'}rem;
  ${phone(`
    font-size: 0.9em;
    letter-spacing: normal;
    line-height: normal;
    text-transform: none;
  `)}
`;

const Border = styled.div`
  border-top: solid 14px black;
  border-bottom: solid 14px black;
`;

const PurpleButton = styled(Button)`
  color: white;
  border: 3px solid #f2639e;

  &:hover {
    background: #f2639e;
  }`;

const YellowButton = styled(Button)`
  color: yellow;
  border: 3px solid yellow;
  background: rgba(0, 0, 0, 0.5)`;

const Annenkov = () => <TopCover
  pointer
  color="#FDF06f"
  onClick={() => navigateTo('/articles/ozhila_krasnaya_stsena')}
  bordered
  borderColor={REVOLUTION}
>
  <ArticlesSection padding="2" paddingTop="4">
    <H2>Ожила красная сцена</H2>
    <Lead marginBottom="2">Как художник Юрий Анненков стал «модельером» революции</Lead>
    <Img
      round
      noBorder
      src={annenkov}
      width="280px"
      customBorder={`
        border-style: inset;
        border-color: ${REVOLUTION};
        border-width: 10px;
      `}
    />
  </ArticlesSection>
</TopCover>

const IzVsehIskusstv = () => <FillCover
  shadow
  pointer
  color="black"
  fontColor="#9bda9e"
  onClick={() => navigateTo('/articles/iz_vseh_iskusstv')}
  height="400px"
  bg={iz_vseh_iskusstv}
>
  <ArticlesSection padding="1" background="rgba(97,59,123,0.6)">
    <Lead padding="0.5rem" color="#9bda9e">Набоков, Хармс и другие классики рассуждают о театре</Lead>
    <H1>Из всех искусств</H1>
  </ArticlesSection>
</FillCover>

const Belomor = () => <FillCover bordered borderColor="yellow" bg={belomor} height="700px">
  <ArticlesSection padding="1" size="22px" align="left">
    <Lead color="yellow">Как и кем создавались театры ГУЛАГа</Lead>
    <H1 color="yellow">«Морской царь Беломор»</H1>
    <YellowButton to="/articles/morskoy_tsar_belomor">Читать</YellowButton>
  </ArticlesSection>
</FillCover>

const Bol = () => <ArticlesSection>
  <NoImageCover>
    <H1small>«МНЕ ПЛОХО, МНЕ СКУЧНО»</H1small>
    <H1>почему люди не ходят в театр</H1>
    <Button to="/articles/mne_ploho_mne_skuchno">Читать</Button>
  </NoImageCover>
</ArticlesSection>

const Nadryv = () => <FillCoverMaxHeight
  color="black"
  bg={nadryv}
  height="400px"
  onClick={() => navigateTo('/articles/neperevodimiy_russkiy_nadryv')}
>
  <ArticlesSection padding="3" paddingTop="14" size="14px" />
</FillCoverMaxHeight>

const NadryvSub = () => <FillCover
  color="white"
>
  <ArticlesSection align="right" margin="1rem" paddingTop="0">
    <H3 fontStyle="normal">Непереводимый русский надрыв</H3>
    <H1small>Юрий Муравицкий и Валерий Печейкин о любви и хаосе</H1small>
  </ArticlesSection>
</FillCover>

const Lyub = () => <FillCover pointer color="#e6ceff" onClick={() => navigateTo('/articles/lyubimovka')}>
  <ArticlesSection padding="1">
    <H3><i>«Меня волнует вся х**ня»</i></H3>
    <Lead>Ридер «Любимовки» Анна Банасюкевич о стране, в которой мы живем</Lead>
    <Img src={rus} width="300px" round />
  </ArticlesSection>
</FillCover>

const Ezhen = () => <FillCover color="white">
    <ArticlesSection align="right" margin="1rem">
      <StyledLink to={'/articles/ezhen'}>
      <H1>Что хотел сказать автор?</H1>
      <H1small>Отвечает Эжен Ионеско</H1small>
      </StyledLink>
    </ArticlesSection>
    <ImgWrapper>
      <Img src={ezhen} />
    </ImgWrapper>
</FillCover>

const Svet = () => <FillCover bordered color="`ellow" bg={mycene} height="600px">
  <ArticlesSection padding="3">
    <H1 color="white">Свет далеких планет</H1>
    <Lead color="white">Обзор европейских премьер нового сезона</Lead>
    <PurpleButton to="/articles/svet_dalyokih_planet">Читать</PurpleButton>
  </ArticlesSection>
</FillCover>

export class HomePage extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div>
        <Annenkov />
        <IzVsehIskusstv />
        <Belomor />
        <Bol />
        <Border>
          <StyledLink to={'/articles/neperevodimiy_russkiy_nadryv'}>
            <Nadryv />
            <NadryvSub />
          </StyledLink>
        </Border>
        <Lyub />
        <Ezhen />
        <Svet />
        <Social />
      </div>
    );
  }
}

export default HomePage
