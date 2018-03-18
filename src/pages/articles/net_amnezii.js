import React from "react";
import Helmet from "react-helmet";
import Link from "gatsby-link";
import styled, { keyframes } from "styled-components";

import { phone } from "../../utils/media";
import H1, { H1small } from "../../components/H1";
import ArticleHelmet from "../../components/ArticleHelmet";
import Img from "../../components/Img";
import H2 from "../../components/H2";
import Gallery from "../../components/Gallery";
import Video from "../../components/Video";

import Small from "../../components/Small";
import Note, { NoteWrapper, NotedWord } from "../../components/Note";
import Section from "../../components/Section";
import P from "../../components/P";
import Date from "../../components/Date";
import Share from "../../components/Share";
import Other from "../../components/Other";
import Poem from "../../components/Poem";

import FillCover, { TopCover } from "../../components/FillCover";

import img1 from "../images/sonet/1.jpg";
import img2 from "../images/sonet/2.jpg";
import img3 from "../images/sonet/3.jpg";
import img4 from "../images/sonet/4.jpg";
import img5 from "../images/sonet/5.jpg";

const url = "https://teatralium.com/articles/net_amnezii";
const title =
  "Нет амнезии: Вспоминаем спектакль «Наизусть» Тьяго Родригеса и заучиваем тридцатый сонет Шекспира";

const flicker1 = keyframes`
  0%   { opacity:0.1; }
  25%  { opacity:1; }
  50%  { opacity:0.3; }
  75%  { opacity:0.1; }
  100% { opacity:0.1; }
`;

const flicker2 = keyframes`
  0%   { opacity:0.1; }
  25%  { opacity:0.1; }
  50%  { opacity:1; }
  75%  { opacity:0.3; }
  100% { opacity:0.1; }
`;

const flicker3 = keyframes`
  0%   { opacity:0.1; }
  25%  { opacity:0.1; }
  50%  { opacity:0.1; }
  75%  { opacity:1; }
  100% { opacity:0.3; }
`;

const flicker4 = keyframes`
  0%   { opacity:0.3; }
  25%  { opacity:0.1; }
  50%  { opacity:0.1; }
  75%  { opacity:0.1; }
  100% { opacity:1; }
`;

const flicker1in8 = keyframes`
  0%   { opacity:0.1; }
  12.5%  { opacity:1; }
  25%  { opacity:0.3; }
  37.5%  { opacity:0.1; }
  100% { opacity:0.1; }
`;

const flicker2in8 = keyframes`
  0%   { opacity:0.1; }
  12.5%  { opacity:0.1; }
  25%  { opacity:1; }
  37.5%  { opacity:0.3; }
  50%  { opacity:0.1; }
  100% { opacity:0.1; }
`;

const flicker3in8 = keyframes`
  0%   { opacity:0.1; }
  25%  { opacity:0.1; }
  37.5%  { opacity:1; }
  50%  { opacity:0.3; }
  62.5%  { opacity:0.1; }
  100% { opacity:0.1; }
`;

const flicker4in8 = keyframes`
  0%   { opacity:0.1; }
  37.5%  { opacity:0.1; }
  50%  { opacity:1; }
  62.5%  { opacity:0.3; }
  75%  { opacity:0.1; }
  100% { opacity:0.1; }
`;

const flicker5in8 = keyframes`
  0%   { opacity:0.1; }
  50%  { opacity:0.1; }
  62.5%  { opacity:1; }
  75%  { opacity:0.3; }
  87.5%  { opacity:0.1; }
  100% { opacity:0.1; }
`;

const flicker6in8 = keyframes`
  0%   { opacity:0.1; }
  62.5%  { opacity:0.1; }
  75%  { opacity:1; }
  87.5%  { opacity:0.3; }
  100% { opacity:0.1; }
`;

const flicker7in8 = keyframes`
  0%   { opacity:0.1; }
  75%  { opacity:0.1; }
  87.5%  { opacity:1; }
  100% { opacity:0.1; }
`;

const flicker8in8 = keyframes`
  0%   { opacity:0.1; }
  25%  { opacity:0.1; }
  50%  { opacity:0.1; }
  87.5%  { opacity:0.1; }
  100% { opacity:1; }
`;

const StyledPoem = styled(Poem)`
  margin: 0 auto;
  padding: 0;
  > span {
    background: ${p => p.background || "none"};
    padding: 0.5rem 1rem;
    ${phone(`
      padding: 0;
      margin: 0;
    `)};
  }
`;

const Line = styled.span`
  opacity: ${p => (p.animation ? "0.1" : "1")};
  animation: ${p => p.animation} 20s infinite;
  animation-delay: ${p => p.delay || 0}s;
  ${phone(`
    font-size: 0.8rem;
    margin: 0;
    line-height: 1.2rem;
  `)};
`;

export class Article extends React.PureComponent {
  // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div>
        <ArticleHelmet
          url={url}
          image={img1}
          description=" Вспоминаем спектакль «Наизусть» Тьяго Родригеса и заучиваем тридцатый сонет Шекспира"
          title={`${title} | Театралий`}
        />
        <TopCover bg={img2}>
          <Section
            margin="0"
            color="#90ff90"
            background="rgba(0,0,0,0.5)"
            paddingTop="4rem"
          >
            <H1 center size="3.2124em">
              Нет амнезии
            </H1>
            <H1small center>
              Вспоминаем спектакль «Наизусть» Тьяго Родригеса и заучиваем
              тридцатый сонет Шекспира
            </H1small>
            <Date>
              5 марта 2018, текст:&nbsp;<b>Настя Николаева</b>
            </Date>
          </Section>
        </TopCover>
        <Section>
          <P>
            Два месяца назад в Москву на фестиваль NET приезжал португалец Тьяго
            Родригес, актер, драматург, режиссер, художественный руководитель
            Национального театра королевы Марии II в Лиссабоне. За полтора часа
            его спектакля «Наизусть» десять добровольцев из зрителей и весь зал
            вместе с ними выучили тридцатый сонет Шекспира в переводе Самуила
            Маршака. Идея о том, что память — наша главная защита от ВЧК, ГПУ,
            НКВД или КГБ, не просто жива во времена ФСБ. Сама структура и
            назначение человеческой памяти меняются сейчас, когда вся информация
            — под рукой и специально что-то запоминать нет необходимости. Еще на
            ноябрьских показах «Театралий» попросил иллюстратора Свету Муллари
            зарисовать свои впечатления о спектакле, а теперь дает возможность
            тем, кто не присутствовал, влиться в число людей, знающих тридцатый
            сонет Шекспира наизусть. Во-первых, поэзия бесконечна, как к
            воспоминаниям к ней можно обращаться вновь и вновь. Во-вторых,
            пригодится.
          </P>
        </Section>
        <TopCover>
          <Section margin="0">
            <H1small>Итак, первое четверостишие:</H1small>
            <StyledPoem size="1.8rem" background="rgba(255, 255, 255, 0.5)">
              <Line animation={flicker1}>
                Когда на суд безмолвных, тайных дум
              </Line>
              <Line animation={flicker2}>Я вызываю голоса былого, — </Line>
              <Line animation={flicker3}>Утраты все приходят мне на ум, </Line>
              <Line animation={flicker4}>И старой болью я болею снова.</Line>
            </StyledPoem>
          </Section>
        </TopCover>
        <Img outside src={img3} maxWidth="800px" noBorder desc="Учить наизусть по-португальски будет aprenda de cor, а украшать —
            decorar. Родригес использует это в спектакле как метафору:
            заучивание — украшение внутреннего жилища." />
        <TopCover>
          <Section margin="0">
            <H1small>Повторим первое четверостишие:</H1small>
            <StyledPoem size="1.8rem">
              <Line animation={flicker1}>
                Когда на суд безмолвных, тайных дум
              </Line>
              <Line animation={flicker2}>Я вызываю голоса былого, — </Line>
              <Line animation={flicker3}>Утраты все приходят мне на ум, </Line>
              <Line animation={flicker4}>И старой болью я болею снова.</Line>
            </StyledPoem>
          </Section>
        </TopCover>
        <Img outside src={img2} maxWidth="800px" noBorder desc="Одна из героинь истории Родригеса — Надежда Мандельштам, которая сохранила наследие мужа, выучив его стихотворения в разных версиях." />
        <TopCover contain center>
          <Section margin="0">
            <H1small>Второе четверостишие:</H1small>
            <StyledPoem size="1.8rem">
              <Line animation={flicker1}>
                Из глаз, не знавших слез, я слезы лью
              </Line>
              <Line animation={flicker2}>О тех, кого во тьме таит могила,</Line>
              <Line animation={flicker3}>Ищу любовь погибшую мою </Line>
              <Line animation={flicker4}>
                И все, что в жизни мне казалось мило.
              </Line>
            </StyledPoem>
          </Section>
        </TopCover>
        <Img outside src={img1} maxWidth="800px" noBorder desc="Родригес также рассказывает о раввине, знавшем Тору наизусть. Во время Холокоста он звал верующих к себе, чтобы те читали его как книгу." />
        <TopCover>
          <Section margin="0">
            <H1small>Повторим первое и второе четверостишия:</H1small>
            <StyledPoem size="1.8rem">
              <Line animation={flicker1in8}>
                Когда на суд безмолвных, тайных дум
              </Line>
              <Line animation={flicker2in8}>Я вызываю голоса былого, — </Line>
              <Line animation={flicker3in8}>
                Утраты все приходят мне на ум,
              </Line>
              <Line animation={flicker4in8}>И старой болью я болею снова.</Line>
              <br />
              <Line animation={flicker5in8}>
                Из глаз, не знавших слез, я слезы лью
              </Line>
              <Line animation={flicker6in8}>
                О тех, кого во тьме таит могила,
              </Line>
              <Line animation={flicker7in8}>Ищу любовь погибшую мою</Line>
              <Line animation={flicker8in8}>
                И все, что в жизни мне казалось мило.
              </Line>
            </StyledPoem>
          </Section>
        </TopCover>
        <Img outside src={img4} maxWidth="800px" noBorder desc="В конце спектакля, когда сонет выучен и прочитан, десять зрителей получают его текст, напечатанный на тонком тесте. Выучить наизусть — то есть буквально съесть, проглотить, впустить внутрь физически."/>

        <TopCover>
          <Section margin="0">
            <H1small>Третье четверостишие:</H1small>
            <StyledPoem size="1.8rem">
              <Line animation={flicker1}>Веду я счет потерянному мной </Line>
              <Line animation={flicker2}>И ужасаюсь вновь потере каждой, </Line>
              <Line animation={flicker3}>И вновь плачу я дорогой ценой </Line>
              <Line animation={flicker4}>
                За то, за что платил уже однажды!
              </Line>
            </StyledPoem>
          </Section>
        </TopCover>

        <TopCover>
          <Section margin="0">
            <H1small>Повторим первые три четверостишия:</H1small>
            <StyledPoem size="1.8rem">
              <Line>Когда на суд безмолвных, тайных дум </Line>
              <Line>Я вызываю голоса былого, — </Line>
              <Line>Утраты все приходят мне на ум, </Line>
              <Line>И старой болью я болею снова.</Line>
              <br />
              <Line>Из глаз, не знавших слез, я слезы лью </Line>
              <Line>О тех, кого во тьме таит могила, </Line>
              <Line>Ищу любовь погибшую мою </Line>
              <Line>И все, что в жизни мне казалось мило.</Line>
              <br />
              <Line>Веду я счет потерянному мной </Line>
              <Line>И ужасаюсь вновь потере каждой, </Line>
              <Line>И вновь плачу я дорогой ценой </Line>
              <Line>За то, за что платил уже однажды!</Line>
            </StyledPoem>
          </Section>
        </TopCover>

        <Img outside src={img5} maxWidth="800px" noBorder marginBottom="0" />
          <Small outside>
            Заучивание — это контрабанда слов. Если десять человек запомнят
            стихотворение и передадут его дальше, стихотворение не пропадет. То
            же происходит и с книгами в романе Брэдбери «451° по Фаренгейту»,
            который также упоминается Родригесом. Так случилось и с бабушкой
            Родригеса Кандидой — главной героиней спектакля. Начав терять
            зрение, она попросила внука выбрать книгу, которую она могла бы
            выучить наизусть, чтобы обращаться к ней, когда читать будет уже
            невозможно. Этой книгой и стал сборник сонетов Шекспира. Однажды
            Родригес приехал к бабушке в дом престарелых вместе с компанией
            друзей. Кандида читала сонеты по памяти, и один из них, как вы
            догадались, тридцатый, они выучили наизусть. «Опасность, что через
            400 лет люди забудут Шекспира, действительно существует, —{" "}
            <a href="https://tvkultura.ru/article/show/article_id/204325/">
              считает режиссер
            </a>. — Но мы спасаем тексты от вымирания».
          </Small>

        <TopCover>
          <Section margin="0">
            <H1small>Последние две строчки сонета:</H1small>
            <StyledPoem size="1.8rem">
              <Line>Но прошлое я нахожу в тебе </Line>
              <Line>И все готов простить своей судьбе.</Line>
            </StyledPoem>
          </Section>
        </TopCover>

        <FillCover>
          <Section margin="0">
            <H1small>Повторим весь сонет:</H1small>
            <StyledPoem size="1.8rem">
              <Line>Когда на суд безмолвных, тайных дум </Line>
              <Line>Я вызываю голоса былого, — </Line>
              <Line>Утраты все приходят мне на ум, </Line>
              <Line>И старой болью я болею снова.</Line>
              <br />
              <Line>Из глаз, не знавших слез, я слезы лью </Line>
              <Line>О тех, кого во тьме таит могила, </Line>
              <Line>Ищу любовь погибшую мою </Line>
              <Line>И все, что в жизни мне казалось мило.</Line>
              <br />
              <Line>Веду я счет потерянному мной </Line>
              <Line>И ужасаюсь вновь потере каждой, </Line>
              <Line>И вновь плачу я дорогой ценой</Line>
              <Line>За то, за что платил уже однажды!</Line>
              <br />
              <Line>Но прошлое я нахожу в тебе </Line>
              <Line>И все готов простить своей судьбе.</Line>
            </StyledPoem>
          </Section>
        </FillCover>
        <Section>
          <Video id="RIxEZTIA9bQ" desc="«Наизусть», трейлер спектакля" />
        </Section>
        <Share url={url} />
        <Other url={url} />
      </div>
    );
  }
}

export default Article;
