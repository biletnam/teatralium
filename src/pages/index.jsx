import React from "react";
import styled from "styled-components";
import Link, { navigateTo } from "gatsby-link";

import { phone } from "../utils/media";
import H1, { H1small } from "../components/H1";
import Img from "../components/Img";
import H3 from "../components/H3";
import H4 from "../components/H4";
import H2 from "../components/H2";
import FillCover, { TopCover } from "../components/FillCover";
import Button from "../components/Button/StyledButton";
import Footer from "../components/Footer";
import Social from "../components/Social";

import rus from "./images/ppp.gif";
import ezhen from "./images/2.jpg";
import borodin from "./images/ramt/borodin.jpg";
import nadryv from "./images/np1.jpg";
import mask from "./images/davydova/mask.gif";
import belomor from "./images/belomor/1test.jpg";
import annenkov from "./images/annenkov/home.jpg";
import iz_vseh_iskusstv from "./images/iz_vseh_iskusstv/cover.jpg";
import lisovsky from "./images/otvechaet/lisovsky.png";
import elutin from "./images/otvechaet/elutin.jpg";
import avdeev from "./images/otvechaet/avdeev_cover.jpg";
import vyrypaev from "./images/vyrypaev/1.jpg";
import pomosh from "./images/pomosh_zala/cover_main.jpg";
import abuse from "./images/abuse/cover.jpg";
import naryady from "./images/naryady/044.jpg";
import mycene from "./images/myc.jpg";
import rostov from "./images/naprimer/cover.jpg";
import sonet from "./images/sonet/4.jpg";
import { REVOLUTION } from "../utils/const";

const StyledLink = styled(Link)`
  text-decoration: none;
  &:hover {
    cursor: hand;
  }
`;

const Section = styled.section`
  max-width: calc(768px + 16px * 2);
  margin: ${p => p.margin || "3em auto"};
  text-align: ${p => p.align || "auto"};
  margin-bottom: 0;
  padding: 0.3rem;

  ${phone("margin: 0.5em auto;")};
`;

const ArticlesSection = styled(Section)`
  padding: ${p => p.padding || "2"}rem;
  text-align: ${p => p.align || "center"};
  margin: ${p => p.margin || "auto"};
  margin-top: ${p => p.marginTop || "auto"};
  font-size: ${p => p.size || "auto"};
  color: ${p => p.color || "auto"};
  background: ${p => p.background || "none"};
`;

const NoImageCover = styled.div`
  text-align: center;
  padding-bottom: 2rem;
`;

const FillCoverMaxHeight = styled(FillCover)`
  ${phone(`max-height: 150px;`)};
`;

const ImgWrapper = styled.div`
  ${phone("display: none;")} padding: 2rem;
`;

const Lead = styled.div`
  font-size: ${p => p.size || "1.2rem"};
  color: ${p => p.color || "inherit"};
  background: ${p => p.background || "none"};
  padding: ${p => p.padding || "auto"};
  text-transform: uppercase;
  letter-spacing: 0.1rem;
  font-family: "Bodoni";
  margin-bottom: ${p => p.marginBottom || "2"}rem;
  ${phone(`
    font-size: 0.9em;
    letter-spacing: normal;
    line-height: normal;
    text-transform: none;
  `)};
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
  }
`;

const Elutin = () => (
  <StyledLink to="/articles/i_bratva_za_slova_otvechaet/">
    <TopCover bg={elutin} repeat bordered borderColor="#f300f3">
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
);

const Sonet = () => (
  <StyledLink to="/articles/net_amnezii/">
    <FillCover height="600px" pointer bg={sonet}>
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
);

const Rostov = () => (
  <StyledLink to="/articles/v_moskve_naprimer_analogov_net/">
    <FillCover pointer bg={rostov}>
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
);

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
);

const Naryady = () => (
  <StyledLink to="/articles/teatr_mody_v_sovetskoy_rossii/">
    <FillCover bg={naryady} bordered borderColor="black" borderSize="7" pointer>
      <ArticlesSection margin="1rem">
        <H1 size="3.8124em" align="left">
          Иммерсивный фэшн 20-х,<br />
          <small>или</small> театр моды в советской России
        </H1>
      </ArticlesSection>
    </FillCover>
  </StyledLink>
);

const Avdeev = () => (
  <StyledLink to="/articles/ya_posadil_derevo/">
    <FillCover pointer bg={avdeev} repeat bordered borderColor="#d54051">
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
);

const Abuse = () => (
  <StyledLink to="/articles/abyuz_nelzya_pomilovat/">
  <FillCover
    bg={abuse}
    pointer
    height="600px"
  >
    <ArticlesSection padding="3" align="right" background="rgba(97,59,123,0.6)">
      <H1 color="white">Абьюз нельзя помиловать</H1>
    </ArticlesSection>
  </FillCover>
  </StyledLink>
);

const Vyrypaev = () => (
  <StyledLink to="/articles/ivan_vyrypaev_protiv_kritikov/">
  <FillCover
    bg={vyrypaev}
    pointer
    height="600px"
  >
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
);

const Pomosh = () => (
  <StyledLink to="/articles/pomosh_zala/">
  <FillCover
    bg={pomosh}
    pointer
    height="400px"
  >
    <ArticlesSection padding="1" size="22px" align="center">
      <H1 color="white">Помощь зала</H1>
      <Lead color="white">
        Социальный театр от Боба Уилсона до Бориса Павловича
      </Lead>
    </ArticlesSection>
  </FillCover>
  </StyledLink>
);


const Lisovski = () => (
  <StyledLink to="/articles/playlist_komissara_vsevoloda_lisovskogo/">
  <FillCover
    pointer
    bg={lisovsky}
    repeat
    bordered
    borderColor="yellow"
  >
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
);

const Borodin = () => (
  <StyledLink to="/articles/abbreviatura_ramt/">
  <FillCover
    bg={borodin}
    height="600px"
  >
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
);

const Davydova = () => (
  <StyledLink to="/articles/velikoe_raznoobrazie/">
  <FillCover
    pointer
    color="#FDF06f"
    bg={mask}
  >
    <ArticlesSection marginTop="4rem">
      <H1small marginTop="0">
        Марина Давыдова о том, что нужно знать о современном театре
      </H1small>
      <H1>Великое разнообразие</H1>
    </ArticlesSection>
  </FillCover>
  </StyledLink>
);

const Annenkov = () => (
  <StyledLink to="/articles/ozhila_krasnaya_stsena/">
  <FillCover
    pointer
    color="#FDF06f"
    bordered
    borderColor={REVOLUTION}
  >
    <ArticlesSection padding="2">
      <H2>Ожила красная сцена</H2>
      <Lead marginBottom="2">
        Как художник Юрий Анненков стал «модельером» революции
      </Lead>
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
  </FillCover>
</StyledLink>
);

const IzVsehIskusstv = () => (
  <StyledLink to="/articles/iz_vseh_iskusstv/">
  <FillCover
    shadow
    pointer
    color="black"
    fontColor="#9bda9e"
    height="400px"
    bg={iz_vseh_iskusstv}
  >
    <ArticlesSection padding="1" background="rgba(97,59,123,0.6)">
      <Lead padding="0.5rem" color="#9bda9e">
        Набоков, Хармс и другие классики рассуждают о театре
      </Lead>
      <H1>Из всех искусств</H1>
    </ArticlesSection>
  </FillCover>
  </StyledLink>
);

const YellowButton = styled(Button)`
  color: yellow;
  border: 3px solid yellow;
  background: rgba(0, 0, 0, 0.5);
`;

const Belomor = () => (
  <FillCover bordered borderColor="yellow" bg={belomor} height="700px">
    <ArticlesSection padding="1" size="22px" align="left">
      <Lead color="yellow">Как и кем создавались театры ГУЛАГа</Lead>
      <H1 color="yellow">«Морской царь Беломор»</H1>
      <YellowButton to="/articles/morskoy_tsar_belomor">Читать</YellowButton>
    </ArticlesSection>
  </FillCover>
);

const Bol = () => (
  <ArticlesSection>
    <NoImageCover>
      <H1small>«МНЕ ПЛОХО, МНЕ СКУЧНО»</H1small>
      <H1>почему люди не ходят в театр</H1>
      <Button to="/articles/mne_ploho_mne_skuchno/">Читать</Button>
    </NoImageCover>
  </ArticlesSection>
);

const Nadryv = () => (
  <FillCoverMaxHeight
    color="black"
    bg={nadryv}
    height="400px"
  >
    <ArticlesSection padding="3" size="14px" />
  </FillCoverMaxHeight>
);

const NadryvSub = () => (
  <FillCover color="white">
    <ArticlesSection align="right" margin="1rem">
      <H3 fontStyle="normal">Непереводимый русский надрыв</H3>
      <H1small>Юрий Муравицкий и Валерий Печейкин о любви и хаосе</H1small>
    </ArticlesSection>
  </FillCover>
);

const Lyub = () => (
  <StyledLink to="/articles/lyubimovka/">
  <FillCover
    pointer
    color="#e6ceff"
  >
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
);

const Ezhen = () => (
  <FillCover color="white">
    <ArticlesSection align="right" margin="1rem">
      <StyledLink to="/articles/ezhen/">
        <H1>Что хотел сказать автор?</H1>
        <H1small>Отвечает Эжен Ионеско</H1small>
      </StyledLink>
    </ArticlesSection>
    <ImgWrapper>
      <Img src={ezhen} />
    </ImgWrapper>
  </FillCover>
);

const Svet = () => (
  <FillCover bordered bg={mycene} height="600px">
    <ArticlesSection padding="3">
      <H1 color="white">Свет далеких планет</H1>
      <Lead color="white">Обзор европейских премьер нового сезона</Lead>
      <PurpleButton to="/articles/svet_dalyokih_planet/">Читать</PurpleButton>
    </ArticlesSection>
  </FillCover>
);

export class HomePage extends React.PureComponent {
  // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div>
        <Elutin />
        <Sonet />
        <Rostov />
        <Sebastian />
        <Naryady />
        <Avdeev />
        <Abuse />
        <Social />
        <Vyrypaev />
        <Pomosh />
        <Lisovski />
        <Borodin />
        <Davydova />
        <Annenkov />
        <IzVsehIskusstv />
        <Belomor />
        <Bol />
        <Border>
          <StyledLink to="/articles/neperevodimiy_russkiy_nadryv/">
            <Nadryv />
            <NadryvSub />
          </StyledLink>
        </Border>
        <Lyub />
        <Ezhen />
        <Svet />
      </div>
    );
  }
}

export default HomePage;
