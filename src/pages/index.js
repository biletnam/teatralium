import React from 'react'
import styled from 'styled-components'
import Link, { navigateTo } from 'gatsby-link'

import { phone } from '../utils/media'
import H1, { H1small } from '../components/H1'
import Img from '../components/Img'
import ImgG from '../components/ImgG'
import H3 from '../components/H3'
import H4 from '../components/H4'
import H2 from '../components/H2'
import FillCover, { TopCover } from '../components/FillCover'
import Button from '../components/Button/StyledButton'
import Footer from '../components/Footer'
import Social from '../components/Social'

import mask from './images/davydova/mask.gif'
import rus from './images/ppp.gif'

import { REVOLUTION } from '../utils/const'

const StyledLink = styled(Link)`
  text-decoration: none;
  &:hover {
    cursor: hand;
  }
`

const Section = styled.section`
  max-width: calc(768px + 16px * 2);
  margin: ${p => p.margin || '3em auto'};
  text-align: ${p => p.align || 'auto'};
  margin-bottom: 0;
  padding: 0.3rem;

  ${phone('margin: 0.5em auto;')};
`

const ArticlesSection = styled(Section)`
  padding: ${p => p.padding || '2'}rem;
  text-align: ${p => p.align || 'center'};
  margin: ${p => p.margin || 'auto'};
  margin-top: ${p => p.marginTop || 'auto'};
  font-size: ${p => p.size || 'auto'};
  color: ${p => p.color || 'auto'};
  background: ${p => p.background || 'none'};
`

const NoImageCover = styled.div`
  text-align: center;
  padding-bottom: 2rem;
`

const FillCoverMaxHeight = styled(FillCover)`
  ${phone(`max-height: 150px;`)};
`

const ImgWrapper = styled.div`
  ${phone('display: none;')} padding: 2rem;
`

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
  `)};
`

const Border = styled.div`
  border-top: solid 14px black;
  border-bottom: solid 14px black;
`

const PurpleButton = styled(Button)`
  color: white;
  border: 3px solid #f2639e;

  &:hover {
    background: #f2639e;
  }
`

const Elutin = ({ bg }) => (
  <StyledLink to="/articles/i_bratva_za_slova_otvechaet/">
    <TopCover bg={bg} repeat bordered borderColor="#f300f3">
      <ArticlesSection background="rgba(255,255,255,0.6)">
        <H1 size="3.4124em" center color="purple">
          И братва за&nbsp;слова отвечает как в&nbsp;лучшие дни
        </H1>
        <H1small center color="black">
          плейлист импрессарио Федора Елютина
        </H1small>
      </ArticlesSection>
    </TopCover>
  </StyledLink>
)

const Sonet = ({ bg }) => (
  <StyledLink to="/articles/net_amnezii/">
    <FillCover height="600px" pointer bg={bg}>
      <ArticlesSection margin="0" marginTop="0">
        <H1 center size="3.2124em">
          Нет амнезии
        </H1>
        <H1small center>
          Вспоминаем спектакль «Наизусть» Тьяго Родригеса и заучиваем тридцатый
          сонет Шекспира
        </H1small>
      </ArticlesSection>
    </FillCover>
  </StyledLink>
)

const Rostov = ({ bg }) => (
  <StyledLink to="/articles/v_moskve_naprimer_analogov_net/">
    <FillCover pointer bg={bg}>
      <ArticlesSection align="center" padding="6rem 0">
        <H1 center size="3.2124em" color="white">
          В Москве, например, аналогов нет
        </H1>
        <H1small center color="white">
          Пять лет ростовскому «Театру 18+» с современными пьесами и казачим
          рэпом, но без государственных денег
        </H1small>
      </ArticlesSection>
    </FillCover>
  </StyledLink>
)

const Sebastian = () => (
  <StyledLink to="/articles/poobshatsa_s_gospodinom_oblomovym/">
    <FillCover pointer>
      <ArticlesSection align="center" margin="0">
        <H1small>Себастьян Кайзер:</H1small>
        <H1 size="3.2124em">
          «Нам всем нужно пообщаться с&nbsp;господином Обломовым»
        </H1>
      </ArticlesSection>
    </FillCover>
  </StyledLink>
)

const Naryady = ({ bg }) => (
  <StyledLink to="/articles/teatr_mody_v_sovetskoy_rossii/">
    <FillCover bg={bg} bordered borderColor="black" borderSize="7" pointer>
      <ArticlesSection margin="1rem">
        <H1 size="3.8124em" align="left">
          Иммерсивный фэшн 20-х,<br />
          <small>или</small> театр моды в советской России
        </H1>
      </ArticlesSection>
    </FillCover>
  </StyledLink>
)

const Avdeev = ({ bg }) => (
  <StyledLink to="/articles/ya_posadil_derevo/">
    <FillCover pointer bg={bg} repeat bordered borderColor="#d54051">
      <ArticlesSection
        padding="1"
        size="22px"
        background="rgba(255,255,255,0.8)"
      >
        <H1 color="#d54051">Я посадил дерево</H1>
        <Lead color="#d54051">плейлист актера Филиппа Авдеева</Lead>
      </ArticlesSection>
    </FillCover>
  </StyledLink>
)

const Abuse = ({ bg }) => (
  <StyledLink to="/articles/abyuz_nelzya_pomilovat/">
    <FillCover bg={bg} pointer height="600px" test={console.log(bg)}>
      <ArticlesSection
        padding="3"
        align="right"
        background="rgba(97,59,123,0.6)"
      >
        <H1 color="white">Абьюз нельзя помиловать</H1>
      </ArticlesSection>
    </FillCover>
  </StyledLink>
)

const Vyrypaev = ({ bg }) => (
  <StyledLink to="/articles/ivan_vyrypaev_protiv_kritikov/">
    <FillCover bg={bg} pointer height="600px">
      <ArticlesSection padding="1" size="22px" align="center">
        <H1 size="3rem" color="white">
          «Я абсолютно против критиков сегодня»
        </H1>
        <Lead color="white">
          Иван Вырыпаев о театре без микрофонов и рецензий
        </Lead>
      </ArticlesSection>
    </FillCover>
  </StyledLink>
)

const Pomosh = ({ bg }) => (
  <StyledLink to="/articles/pomosh_zala/">
    <FillCover bg={bg} pointer height="400px">
      <ArticlesSection padding="1" size="22px" align="center">
        <H1 color="white">Помощь зала</H1>
        <Lead color="white">
          Социальный театр от Боба Уилсона до Бориса Павловича
        </Lead>
      </ArticlesSection>
    </FillCover>
  </StyledLink>
)

const Lisovsky = ({ bg }) => (
  <StyledLink to="/articles/playlist_komissara_vsevoloda_lisovskogo/">
    <FillCover pointer bg={bg} repeat bordered borderColor="yellow">
      <ArticlesSection
        padding="1"
        size="22px"
        background="rgba(118,189,187,0.67)"
      >
        <H1 color="yellow">Миражи — это наша жизнь?</H1>
        <Lead color="black">плейлист комиссара Всеволода Лисовского</Lead>
      </ArticlesSection>
    </FillCover>
  </StyledLink>
)

const Borodin = ({ bg }) => (
  <StyledLink to="/articles/abbreviatura_ramt/">
    <FillCover bg={bg} height="600px">
      <ArticlesSection padding="1" align="right">
        <H1 size="3.2124em" color="#ec71c8">
          «Аббревиатуру РАМТ мы не придумывали»
        </H1>
        <Lead color="lavender">
          Алексей Бородин об истории своего театра в начале 90-х
        </Lead>
      </ArticlesSection>
    </FillCover>
  </StyledLink>
)

const Davydova = ({ bg }) => (
  <StyledLink to="/articles/velikoe_raznoobrazie/">
    <FillCover pointer color="#FDF06f" bg={bg}>
      <ArticlesSection marginTop="4rem">
        <H1small marginTop="0">
          Марина Давыдова о том, что нужно знать о современном театре
        </H1small>
        <H1>Великое разнообразие</H1>
      </ArticlesSection>
    </FillCover>
  </StyledLink>
)

const Annenkov = ({ bg }) => (
  <StyledLink to="/articles/ozhila_krasnaya_stsena/">
    <FillCover pointer color="#FDF06f" bordered borderColor={REVOLUTION}>
      <ArticlesSection padding="2">
        <H2>Ожила красная сцена</H2>
        <Lead marginBottom="2">
          Как художник Юрий Анненков стал «модельером» революции
        </Lead>
        <Img
          round
          noBorder
          src={bg}
          width="280px"
          customBorder={`
        border-style: inset;
        border-color: ${REVOLUTION};
        border-width: 10px;
      `}
        />
      </ArticlesSection>
    </FillCover>
  </StyledLink>
)

const IzVsehIskusstv = ({ bg }) => (
  <StyledLink to="/articles/iz_vseh_iskusstv/">
    <FillCover
      shadow
      pointer
      color="black"
      fontColor="#9bda9e"
      height="400px"
      bg={bg}
    >
      <ArticlesSection padding="1" background="rgba(97,59,123,0.6)">
        <Lead padding="0.5rem" color="#9bda9e">
          Набоков, Хармс и другие классики рассуждают о театре
        </Lead>
        <H1>Из всех искусств</H1>
      </ArticlesSection>
    </FillCover>
  </StyledLink>
)

const YellowButton = styled(Button)`
  color: yellow;
  border: 3px solid yellow;
  background: rgba(0, 0, 0, 0.5);
`

const Belomor = ({ bg }) => (
  <FillCover bordered borderColor="yellow" bg={bg} height="700px">
    <ArticlesSection padding="1" size="22px" align="left">
      <Lead color="yellow">Как и кем создавались театры ГУЛАГа</Lead>
      <H1 color="yellow">«Морской царь Беломор»</H1>
      <YellowButton to="/articles/morskoy_tsar_belomor">Читать</YellowButton>
    </ArticlesSection>
  </FillCover>
)

const Bol = ({ bg }) => (
  <ArticlesSection>
    <NoImageCover>
      <H1small>«МНЕ ПЛОХО, МНЕ СКУЧНО»</H1small>
      <H1>почему люди не ходят в театр</H1>
      <Button to="/articles/mne_ploho_mne_skuchno/">Читать</Button>
    </NoImageCover>
  </ArticlesSection>
)

const Nadryv = ({ bg }) => (
  <FillCoverMaxHeight color="black" bg={bg} height="400px">
    <ArticlesSection padding="3" size="14px" />
  </FillCoverMaxHeight>
)

const NadryvSub = ({ bg }) => (
  <FillCover color="white">
    <ArticlesSection align="right" margin="1rem">
      <H3 fontStyle="normal">Непереводимый русский надрыв</H3>
      <H1small>Юрий Муравицкий и Валерий Печейкин о любви и хаосе</H1small>
    </ArticlesSection>
  </FillCover>
)

const Lyub = ({ bg }) => (
  <StyledLink to="/articles/lyubimovka/">
    <FillCover pointer color="#e6ceff">
      <ArticlesSection padding="1">
        <H3>
          <i>«Меня волнует вся х**ня»</i>
        </H3>
        <Lead>
          Ридер «Любимовки» Анна Банасюкевич о стране, в которой мы живем
        </Lead>
        <Img src={rus} width="300px" round />
      </ArticlesSection>
    </FillCover>
  </StyledLink>
)

const Ezhen = ({ bg }) => (
  <FillCover color="white">
    <ArticlesSection align="right" margin="1rem">
      <StyledLink to="/articles/ezhen/">
        <H1>Что хотел сказать автор?</H1>
        <H1small>Отвечает Эжен Ионеско</H1small>
      </StyledLink>
    </ArticlesSection>
    <ImgWrapper>
      <Img src={bg} />
    </ImgWrapper>
  </FillCover>
)

const Svet = ({ bg }) => (
  <FillCover bordered bg={bg} height="600px">
    <ArticlesSection padding="3">
      <H1 color="white">Свет далеких планет</H1>
      <Lead color="white">Обзор европейских премьер нового сезона</Lead>
      <PurpleButton to="/articles/svet_dalyokih_planet/">Читать</PurpleButton>
    </ArticlesSection>
  </FillCover>
)

export class HomePage extends React.PureComponent {
  // eslint-disable-line react/prefer-stateless-function
  render() {
    console.log(this.props)
    return (
      <div>
        <Elutin bg={this.props.data.elutin.sizes.src}  />
        <Sonet bg={this.props.data.sonet.sizes.src}  />
        <Rostov bg={this.props.data.rostov.sizes.src}  />
        <Sebastian />
        <Naryady bg={this.props.data.naryady.sizes.src}  />
        <Avdeev bg={this.props.data.avdeev.sizes.src}  />
        <Abuse bg={this.props.data.abuse.sizes.src} />
        <Social />
        <Vyrypaev bg={this.props.data.vyrypaev.sizes.src} />
        <Pomosh bg={this.props.data.pomosh.sizes.src} />
        <Lisovsky bg={this.props.data.lisovsky.sizes.src} />
        <Borodin bg={this.props.data.borodin.sizes.src} />
        <Davydova bg={mask} />
        <Annenkov bg={this.props.data.annenkov.sizes.src} />
        <IzVsehIskusstv bg={this.props.data.iz_vseh_iskusstv.sizes.src} />
        <Belomor bg={this.props.data.belomor.sizes.src} />
        <Bol />
        <Border>
          <StyledLink to="/articles/neperevodimiy_russkiy_nadryv/">
            <Nadryv bg={this.props.data.nadryv.sizes.src} />
            <NadryvSub />
          </StyledLink>
        </Border>
        <Lyub />
        <Ezhen bg={this.props.data.ezhen.sizes.src} />
        <Svet bg={this.props.data.mycene.sizes.src} />
      </div>
    )
  }
}

export default HomePage

export const pageQuery = graphql`
  query TestImageQuery {
    abuse: imageSharp(id: { regex: "/abuse\/cover.jpg/" }) {
      sizes(maxWidth: 1000 ) {
        ...GatsbyImageSharpSizes
      }
    }
    ezhen: imageSharp(id: { regex: "/ezhen/" }) {
      sizes(maxWidth: 1000 ) {
        ...GatsbyImageSharpSizes
      }
    }
    borodin: imageSharp(id: { regex: "/ramt\/borodin.jpg/" }) {
      sizes(maxWidth: 1000 ) {
        ...GatsbyImageSharpSizes
      }
    }
    nadryv: imageSharp(id: { regex: "/np1.jpg/" }) {
      sizes(maxWidth: 1000 ) {
        ...GatsbyImageSharpSizes
      }
    }
    belomor: imageSharp(id: { regex: "/belomor\/1test.jpg/" }) {
      sizes(maxWidth: 1000 ) {
        ...GatsbyImageSharpSizes
      }
    }
    annenkov: imageSharp(id: { regex: "/annenkov\/home.jpg/" }) {
      sizes(maxWidth: 1000 ) {
        ...GatsbyImageSharpSizes
      }
    }
    iz_vseh_iskusstv: imageSharp(id: { regex: "/iz_vseh_iskusstv\/cover.jpg/" }) {
      sizes(maxWidth: 1000 ) {
        ...GatsbyImageSharpSizes
      }
    }
    lisovsky: imageSharp(id: { regex: "/otvechaet\/lisovsky.png/" }) {
      sizes(maxWidth: 100 ) {
        ...GatsbyImageSharpSizes
      }
    }
    elutin: imageSharp(id: { regex: "/otvechaet\/elutin.jpg/" }) {
      sizes(maxWidth: 100 ) {
        ...GatsbyImageSharpSizes
      }
    }
    avdeev: imageSharp(id: { regex: "/otvechaet\/avdeev_cover.jpg/" }) {
      sizes(maxWidth: 100 ) {
        ...GatsbyImageSharpSizes
      }
    }
    vyrypaev: imageSharp(id: { regex: "/vyrypaev\/1.jpg/" }) {
      sizes(maxWidth: 1000 ) {
        ...GatsbyImageSharpSizes
      }
    }
    pomosh: imageSharp(id: { regex: "/pomosh_zala\/cover_main.jpg/" }) {
      sizes(maxWidth: 1000 ) {
        ...GatsbyImageSharpSizes
      }
    }
    naryady: imageSharp(id: { regex: "/naryady\/044.jpg/" }) {
      sizes(maxWidth: 1000 ) {
        ...GatsbyImageSharpSizes
      }
    }
    mycene: imageSharp(id: { regex: "/myc.jpg/" }) {
      sizes(maxWidth: 1000 ) {
        ...GatsbyImageSharpSizes
      }
    }
    rostov: imageSharp(id: { regex: "/naprimer\/cover.jpg/" }) {
      sizes(maxWidth: 1000 ) {
        ...GatsbyImageSharpSizes
      }
    }
    sonet: imageSharp(id: { regex: "/sonet\/4.jpg/" }) {
      sizes(maxWidth: 1000 ) {
        ...GatsbyImageSharpSizes
      }
    }
  }
`