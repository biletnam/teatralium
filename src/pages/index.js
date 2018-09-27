import React from "react";
import styled, { keyframes } from "styled-components";
import Link from "gatsby-link";

import { phone } from "../utils/media";
import H1, { H1small } from "../components/H1";
import Img from "../components/Img";
import ImgG from "../components/ImgG";

import H3 from "../components/H3";
import FillCover from "../components/FillCover";
import Button from "../components/Button/StyledButton";
import Social from "../components/Social";
import AboutUsLink from "../components/AboutUsLink";

import { GovnoCover } from "./articles/aktyora_nado_mordoy_v_govno";
import { ContemporaryArtistsCover } from "./articles/contemporary_artists";

import mask from "./images/davydova/mask.gif";

import kiss from "./images/kiss.gif";

export function gradientColor(index) {
  if (index === 0) {
    return "#333399";
  }
  return "#ff93e8";
}

const StyledLink = styled(Link)`
  letter-spacing: inherit;
  transition: letter-spacing 2s;
  text-decoration: none;
  &:hover {
    cursor: hand;
    transition: letter-spacing 20s;
    letter-spacing: 1px;
    background: ${p => gradientColor(0)};
    background: linear-gradient(
      to bottom,
      ${p => gradientColor(0)},
      ${p => gradientColor(1)}
    );
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

const Lead = styled.div`
  font-size: ${p => p.size || "1.2rem"};
  color: ${p => p.color || "inherit"};
  background: ${p => p.background || "none"};
  padding: ${p => p.padding || "0.2rem"};
  text-transform: uppercase;
  letter-spacing: 0.1rem;
  font-family: "Bodoni";
  text-shadow: 1px -1px 0 rgb(181, 179, 206), 2px -2px 0 rgb(151, 149, 171),
    3px -3px 0 rgb(121, 119, 137), 4px -4px 0 rgb(90, 90, 103),
    5px -5px 0 rgb(60, 60, 69), 6px -6px 0 rgb(30, 30, 34),
    7px -7px 1px rgba(0, 0, 0, 0.56);
  -webkit-text-shadow: 1px -1px 0 rgb(181, 179, 206),
    2px -2px 0 rgb(151, 149, 171), 3px -3px 0 rgb(121, 119, 137),
    4px -4px 0 rgb(90, 90, 103), 5px -5px 0 rgb(60, 60, 69),
    6px -6px 0 rgb(30, 30, 34), 7px -7px 1px rgba(0, 0, 0, 0.56);
  -moz-text-shadow: 1px -1px 0 rgb(181, 179, 206), 2px -2px 0 rgb(151, 149, 171),
    3px -3px 0 rgb(121, 119, 137), 4px -4px 0 rgb(90, 90, 103),
    5px -5px 0 rgb(60, 60, 69), 6px -6px 0 rgb(30, 30, 34),
    7px -7px 1px rgba(0, 0, 0, 0.56);

  ${phone(`
    font-size: 0.9em;
    letter-spacing: normal;
    line-height: normal;
    text-transform: none;
  `)};
`;

const MusicSection = styled(FillCover)`
  height: 500px;
  & > a:hover {
  }
`;

const MusicLink = styled(StyledLink)`
  width: 25%;
 }`;
const Title = styled(H1)`
  text-shadow: 1px -1px 0 rgb(181, 179, 206), 2px -2px 0 rgb(151, 149, 171),
    3px -3px 0 rgb(121, 119, 137), 4px -4px 0 rgb(90, 90, 103),
    5px -5px 0 rgb(60, 60, 69), 6px -6px 0 rgb(30, 30, 34),
    7px -7px 1px rgba(0, 0, 0, 0.56);
  -webkit-text-shadow: 1px -1px 0 rgb(181, 179, 206),
    2px -2px 0 rgb(151, 149, 171), 3px -3px 0 rgb(121, 119, 137),
    4px -4px 0 rgb(90, 90, 103), 5px -5px 0 rgb(60, 60, 69),
    6px -6px 0 rgb(30, 30, 34), 7px -7px 1px rgba(0, 0, 0, 0.56);
  -moz-text-shadow: 1px -1px 0 rgb(181, 179, 206), 2px -2px 0 rgb(151, 149, 171),
    3px -3px 0 rgb(121, 119, 137), 4px -4px 0 rgb(90, 90, 103),
    5px -5px 0 rgb(60, 60, 69), 6px -6px 0 rgb(30, 30, 34),
    7px -7px 1px rgba(0, 0, 0, 0.56);
`;

const MusicCover = props => (
  <MusicLink to={props.url}>
    <MusicSection
      pointer
      bg={props.sizes.src}
      repeat
      bordered
      borderColor="yellow"
      withHover
    >
      <ArticlesSection size="22px">
        <Title size="2rem" lineHeight="1.2" color="yellow">
          {props.title}
        </Title>
        <Lead color="white">{props.lead}</Lead>
      </ArticlesSection>
    </MusicSection>
  </MusicLink>
);

const Bogomolov = ({ sizes }) => (
  <MusicCover
    url="/articles/poteryanniy_kray/"
    title="Выпью за потерянный людьми (к)рай"
    lead="Песни из спектаклей Константина Богомолова"
    sizes={sizes}
  />
);

const Lisovsky = ({ sizes }) => (
  <MusicCover
    url="/articles/playlist_komissara_vsevoloda_lisovskogo/"
    title="Миражи — это наша жизнь?"
    lead="Плейлист комиссара Всеволода Лисовского"
    sizes={sizes}
  />
);

const Elutin = ({ sizes }) => (
  <MusicCover
    url="/articles/i_bratva_za_slova_otvechaet/"
    title="И братва за&nbsp;слова отвечает как в&nbsp;лучшие дни"
    lead="Плейлист импресарио Федора Елютина"
    sizes={sizes}
  />
);

const Avdeev = ({ sizes }) => (
  <MusicCover
    url="/articles/ya_posadil_derevo/"
    title="Я посадил дерево"
    lead="плейлист актера Филиппа Авдеева"
    sizes={sizes}
  />
);

const FillCoverStyled = styled(FillCover)`
  margin-bottom: 4rem;
  ${phone("margin-bottom: 1rem;")};
`;

const text =
  "«В МХТ есть два прекрасных молодых актера, но и их пожрал театр Карабаса-Барабаса имени ЭГО г-на Бутусова. ПРОВАЛ»";
const author = "Сергей о спектакле «Человек из рыбы» Юрия Бутусова в МХТ";
const Review = ({ text, author }) => (
  <FillCoverStyled pointer bg={mask}>
    <ArticlesSection marginTop="4rem">
      <H3 marginTop="0">{text}</H3>
      <div>{author}</div>
    </ArticlesSection>
  </FillCoverStyled>
);

const Bol = ({ sizes }) => (
  <ArticlesSection color="white" background="black">
    <NoImageCover>
      <H1small>«МНЕ ПЛОХО, МНЕ СКУЧНО»</H1small>
      <H1>почему люди не ходят в театр</H1>
      <Button
        color="white"
        border="white"
        to="/articles/mne_ploho_mne_skuchno/"
      >
        Читать
      </Button>
    </NoImageCover>
  </ArticlesSection>
);

const Ezhen = ({ sizes }) => (
  <FillCover color="white">
    <ArticlesSection align="right" margin="1rem">
      <StyledLink to="/articles/ezhen/">
        <H1>Что хотел сказать автор?</H1>
        <H1small>Отвечает Эжен Ионеско</H1small>
      </StyledLink>
    </ArticlesSection>
    <ImgG sizes={sizes} />
  </FillCover>
);

const GovnoStyled = styled(GovnoCover)`
  transition: border 5s;
  &:hover {
    transition: border 5s;
    border: solid 9px yellow;
  }
`;

const MusicWrapper = styled.div`
  display: flex;
  max-width: 1600px;
  background: black;
  ${phone(`display: block;`)};
`;

const fadeStrong = keyframes`
0% {
  box-shadow: inset 0 0 0px black;
}

to {
  box-shadow: inset 0 0 50px black;
}
`;

const MusicHeader = styled.div`
  border-top: 1px solid red;
  padding: 2rem 1rem;
  background: ${p => p.bg || "lavender"};
  color: white;
  font-size: 2rem;

  box-shadow: inset 0 0 0px black;
  animation: ${fadeStrong} 10s;
  transition: box-shadow 10s;
  animation-fill-mode: both;
`;

const Sec = styled.div`
  max-width: calc(752px + 16px * 2);
  margin: 0 auto;
  text-align: center;
`;

const Recent = styled.ul`
  font-size: 2rem;
  padding: 2rem;
  line-height: 2rem;
  list-style: none;
  position: relative;
  ${phone("padding: 1rem;")};
`;
const animateColor = keyframes`
0% {
  color: rgba(0, 255, 255, 1);
}

50% {
  color: rgba(255, 0, 255, 1);
}

0% {
  color: rgba(0, 255, 255, 1);
}
`;

const L = styled.li`
  margin-bottom: 1.4rem;
  font-weight: bold;
  transition: font-size 0.4s;
  &:hover::before {
    font-size: 5rem;
    transition: font-size 1s;
  }
  &:before {
    content: "♦";
    text-align: center;
    color: rgba(0, 255, 255, 1);
    animation: ${animateColor} 1s infinite;
    animation-delay: ${p => p.i * 0.1}s;
    position: absolute;
    width: 100%;
    left: -50%;
    ${phone(`left: -47%; font-size: 1.2rem;`)};
  }
`;

const SLink = styled(StyledLink)`
  &:hover {
    text-decoration: underline;
  }
`;

const Li = ({ children, to, i }) => (
  <SLink to={`/articles/${to}`}>
    <L i={i}>{children}</L>
  </SLink>
);

const Smaller = styled.div`
  padding-top: 0.7rem;
  font-size: 1.4rem;
  font-style: normal;
  font-weight: normal;
  ${phone("font-size: 1rem;")};
`;

const Soc = styled(Social)`
  border-bottom: 1px solid red;
`;
const SocialStyled = props => <Soc {...props} color="white" />;

const Kiss = () => (
  <Img src={kiss} noBorder width="70px" marginTop="2rem" marginBottom="3rem" />
);

const Spacer = styled.div`
  margin-top: 4rem;
`;

export class HomePage extends React.PureComponent {
  // eslint-disable-line react/prefer-stateless-function
  render() {
    const { data } = this.props;
    return (
      <div>
        <StyledLink to="/articles/contemporary_artists/">
          <ContemporaryArtistsCover sizes={data.artists.sizes} />
        </StyledLink>

        <Section>
          <Kiss />
          <Recent>
            <Li i={1} to="ya_rabotayu_v_teatre_zaytseva/">
              <b>«Все постоянно репетируют и уносят твои чашки»</b>
              <Smaller>
                Как я работала в театре пресс&#8209;секретарем и драматургом
                одновременно
              </Smaller>
            </Li>
            <Li i={2} to="idite_na/">
              <b>Идите на</b>
              <Smaller>С какого спектакля вам начать сезон</Smaller>
            </Li>
            <Li i={3} to="kon_ne_valyalsya/">
              <b>«В театре конь не валялся»</b>
              <Smaller>
                Начало сезона в дневниках Вахтангова, Прокофьева, Золотухина и
                других
              </Smaller>
            </Li>
            <Li i={4} to="telegram_kanaly/">
              <b>«Зачем-то мне это надо»</b>
              <Smaller>
                Кто ведет театральные блоги и может ли телеграм-канал о театре
                быть популярным
              </Smaller>
            </Li>
            <Li i={5} to="protokol_povsednevnost/">
              <b>«Никому не рассказывайте, чем вы тут занимались»</b>
              <Smaller>
                Почему всем нужно пройти через кружок «Протокол» в ЦИМе
              </Smaller>
            </Li>
            <Li i={6} to="dokumentalnaya_horeografiya/">
              <b>Документальная хореография</b>
              <Smaller>
                Существует ли она и как станцевать Декларацию независимости
              </Smaller>
            </Li>
          </Recent>
        </Section>

        <Review text={text} author={author} />

        <MusicHeader bg="#7851A9">
          <Sec>«За музыку отвечает...»</Sec>
        </MusicHeader>
        <MusicWrapper>
          <Bogomolov sizes={data.bogomolov.sizes} />
          <Lisovsky sizes={data.lisovsky.sizes} />
          <Elutin sizes={data.elutin.sizes} />
          <Avdeev sizes={data.avdeev.sizes} />
        </MusicWrapper>
        <MusicHeader bg="#BF00FF">
          <SocialStyled />
        </MusicHeader>
        <Section>
          <Img src={kiss} noBorder width="70px" marginTop="1rem" />
          <Recent>
            <Li i={1} to="nogi_zatekayut/">
              <b>«Ноги затекают, а вообще это сплошное удовольствие»</b>
              <Smaller>
                Участницы спектакля «Родина» — о том, как стать перформером и
                что это дает
              </Smaller>
            </Li>
            <Li i={2} to="vsyo_vidno_yasno/">
              <b>Все видно ясно, но не заблудитесь!</b>
              <Smaller>
                Что не так со спектаклем Максима Диденко «Беги, Алиса, беги»
              </Smaller>
            </Li>

            <Li i={3} to="aktyory_truppy_na_otlyote/">
              <b>Актеры труппы на отлете</b>
              <Smaller>
                Александр Блок о репертуаре государственных театров
              </Smaller>
            </Li>

            <Li i={4} to="nespyashie_v_teatre/">
              <b>Неспящие в театре</b>
              <Smaller>Типы зрителей на основе индуистской философии</Smaller>
            </Li>
            <Li i={5} to="net_amnezii/">
              <b>Нет амнезии</b>
              <Smaller>
                Вспоминаем спектакль «Наизусть» Тьяго Родригеса и заучиваем
                тридцатый сонет Шекспира
              </Smaller>
            </Li>
            <Li i={6} to="v_moskve_naprimer_analogov_net/">
              <b>В Москве, например, аналогов нет</b>
              <Smaller>
                Пять лет ростовскому «Театру 18+» с современными пьесами и
                казачим рэпом, но без государственных денег
              </Smaller>
            </Li>
            <Li i={7} to="poobshatsa_s_gospodinom_oblomovym/">
              <b>«Нам всем нужно пообщаться с господином Обломовым»</b>
              <Smaller>
                Драматург Евгений Казачков расспрашивает Себастьяна Кайзера о
                десяти годах работы в легендарном «Фольксбюне»
              </Smaller>
            </Li>
          </Recent>
        </Section>

        <StyledLink to="/articles/aktyora_nado_mordoy_v_govno/">
          <GovnoStyled showDate={false} sizes={data.govno.sizes} />
        </StyledLink>

        <Section>
          <Recent>
            <Li i={1} to="teatr_mody_v_sovetskoy_rossii/">
              <b>Иммерсивный фэшн 20-х</b>
              <Smaller>Или театр моды в советской России</Smaller>
            </Li>
            <Li i={2} to="abyuz_nelzya_pomilovat/">
              <b>Абьюз нельзя помиловать</b>
              <Smaller>
                Большой разговор о насилии в театре и жизни с драматургом
                Натальей Зайцевой и блогеркой Никой Водвуд
              </Smaller>
            </Li>
            <Li i={3} to="ivan_vyrypaev_protiv_kritikov/">
              <b>«Я абсолютно против критиков сегодня»</b>
              <Smaller>
                Иван Вырыпаев о театре без микрофонов и рецензий
              </Smaller>
            </Li>
            <Li i={4} to="pomosh_zala/">
              <b>Помощь зала</b>
              <Smaller>
                Социальный театр от Боба Уилсона до Бориса Павловича
              </Smaller>
            </Li>
            <Li i={5} to="abbreviatura_ramt/">
              <b>«Аббревиатуру РАМТ мы не придумывали»</b>
              <Smaller>
                Алексей Бородин об истории своего театра в начале 90-х
              </Smaller>
            </Li>
          </Recent>
        </Section>

        <Review
          text="«Нет. Нет нет нет. Мы поняли, что наш КВН даже очень ничего...»"
          author="Светлана о спектакле «Сказки Пушкина» в Театре наций"
        />
        <MusicHeader bg="#DA70D6">
          <SocialStyled />
        </MusicHeader>

        <Ezhen sizes={data.ezhen.sizes} />
        <Kiss />

        <Section>
          <Recent>
            <Li i={1} to="ozhila_krasnaya_stsena/">
              <b>Ожила красная сцена</b>
              <Smaller>
                Как художник Юрий Анненков стал «модельером» революции
              </Smaller>
            </Li>
            <Li i={2} to="iz_vseh_iskusstv/">
              <b>Из всех искусств</b>
              <Smaller>
                Набоков, Хармс и другие классики рассуждают о театре
              </Smaller>
            </Li>
            <Li i={3} to="velikoe_raznoobrazie/">
              <b>Великое разнообразие</b>
              <Smaller>
                Марина Давыдова о том, что нужно знать о современном театре
              </Smaller>
            </Li>
            <Li i={4} to="morskoy_tsar_belomor/">
              <b>«Морской царь Беломор»</b>
              <Smaller>Как и кем создавались театры ГУЛАГа</Smaller>
            </Li>
            <Li i={5} to="neperevodimiy_russkiy_nadryv/">
              <b>Непереводимый русский надрыв</b>
              <Smaller>
                Юрий Муравицкий и Валерий Печейкин о любви и хаосе
              </Smaller>
            </Li>
            <Li i={6} to="lyubimovka/">
              <b>«Меня волнует вся х**ня»</b>
              <Smaller>
                Организатор Любимовки Анна Банасюкевич о стране, в которой мы
                живем
              </Smaller>
            </Li>
          </Recent>
        </Section>

        <MusicWrapper>
          <Bol />
        </MusicWrapper>
        <MusicHeader bg="#DF00FF">
          <SocialStyled />
        </MusicHeader>
        <Spacer />
        <AboutUsLink i={1} />
        <AboutUsLink i={2} />
        <AboutUsLink i={3} />
        <AboutUsLink i={4} />
      </div>
    );
  }
}

export default HomePage;

export const pageQuery = graphql`
  query TestttImageQuery {
    ezhen: imageSharp(id: { regex: "/ezhen/" }) {
      sizes(maxWidth: 400) {
        ...GatsbyImageSharpSizes
      }
    }
    lisovsky: imageSharp(id: { regex: "/otvechaet/lisovsky.png/" }) {
      sizes(maxWidth: 100) {
        ...GatsbyImageSharpSizes
      }
    }
    elutin: imageSharp(id: { regex: "/otvechaet/elutin.jpg/" }) {
      sizes(maxWidth: 100) {
        ...GatsbyImageSharpSizes
      }
    }
    avdeev: imageSharp(id: { regex: "/otvechaet/avdeev_cover.jpg/" }) {
      sizes(maxWidth: 100) {
        ...GatsbyImageSharpSizes
      }
    }
    govno: imageSharp(id: { regex: "/govno/cover-main.jpg/" }) {
      sizes(maxWidth: 800) {
        ...GatsbyImageSharpSizes
      }
    }
    bogomolov: imageSharp(id: { regex: "/bogomolov/bogomolov_cover.jpg/" }) {
      sizes(maxWidth: 100) {
        ...GatsbyImageSharpSizes
      }
    }
    artists: imageSharp(id: { regex: "/contemporary_artists/cover.jpg/" }) {
      sizes(maxWidth: 1200) {
        ...GatsbyImageSharpSizes
      }
    }
  }
`;
