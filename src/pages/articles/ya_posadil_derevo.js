import React from "react";
import Helmet from "react-helmet";
import Link from "gatsby-link";
import styled from "styled-components";

import { phone } from "../../utils/media";
import H1, { H1small } from "../../components/H1";
import ArticleHelmet from "../../components/ArticleHelmet";
import Img from "../../components/Img";
import H2 from "../../components/H2";
import H3 from "../../components/H3";
// import H4 from '../../components/H4'
import Small from "../../components/Small";
import Section from "../../components/Section";
import P from "../../components/P";
import Date from "../../components/Date";
import Share from "../../components/Share";
import Other from "../../components/Other";
import Attention from "../../components/Attention";

import { TopCover } from "../../components/FillCover";

import { Playlist } from "../../components/Poem";

import avdeev from "../images/otvechaet/avdeev.jpg";
import cover from "../images/otvechaet/avdeev_cover.jpg";

const url = "https://teatralium.com/articles/ya_posadil_derevo";
const title = "Я посадил дерево: плейлист актера Филиппа Авдеева";

const List = styled.ul`
  list-style-type: square;
`;

const Wrapper = styled.div`
  width: 400px;
  margin: 0 auto;
`;

export class Derevo extends React.PureComponent {
  // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div>
        <ArticleHelmet
          url={url}
          image={avdeev}
          width="1200"
          height="672"
          description="Романтик-коллекшн от актера Гоголь-центра."
          title={`${title} | Театралий`}
        />
        <TopCover bg={cover} repeat bordered borderColor="#d54051">
          <Section background="rgba(255,255,255,0.8)">
            <Date>
              30 декабря, <b>«За музыку отвечает»</b>
            </Date>
            <H1 center color="#d54051">
              Я посадил дерево
            </H1>
            <H1small center color="#d54051">
              Плейлист актера Филиппа Авдеева
            </H1small>
          </Section>
        </TopCover>
        <Section>
          <P>
            «За музыку в спектакле отвечает» — от этой фразы, которую критики
            очень любят использовать в рецензиях, у нормальных читателей
            случается либо уныние, либо приступ желания уничтожать. В связи с
            этим «Театралий» призывает разных людей, причастных к театральному
            делу, буквально ответить за музыку в соответствующей рубрике «За
            музыку отвечает». В прошлом выпуске мы слушали{" "}
            <Link to="/articles/playlist_komissara_vsevoloda_lisovskogo/">
              духоподъемный микс комиссара Театра.doc Всеволода Лисовского
            </Link>, а сегодня наш гость — актер Гоголь-центра Филипп Авдеев,
            выбор которого лучше всего подходит для каникул в жарких странах.
          </P>
          <Wrapper>
            <Img
              src={avdeev}
              noBorder
              marginBottom="4rem"
              desc="Филипп Авдеев"
            />
          </Wrapper>
          <p>
            «Треки Benjamin Damage и HVOB сопровождали меня в незабываемом
            путешествии на остров Ко Панган в 2013 году. Кино — это мое
            лето-2017. Хаски — новый опыт. Die Antwoord просто качает, David
            Lang вдохновляет, Bob Marley успокаивает, Sunsay переносит на море
            или туда, где тепло, а Pompeya — лучший трек для поездки летом на
            мопеде».
          </p>
          <iframe
            scrolling="no"
            width="100%"
            height="60"
            src="https://www.mixcloud.com/widget/iframe/?hide_cover=1&light=1&hide_artwork=1&feed=%2FTeatralium%2Fderevo-avdeev%2F"
            frameBorder="0"
          />
          <Playlist>
            <List>
              <li>HVOB — «Dogs»</li>
              <li>Кино — «Мои друзья»</li>
              <li>David Lang — «I Lie»</li>
              <li>Хаски — «Бэнг бэнг»</li>
              <li>Die Antwoord — «Baby’s on fire»</li>
              <li>Benjamin Damage — «Battleship»</li>
              <li>Pompeya — «90»</li>
              <li>Sunsay & John Forté — «Wind song»</li>
              <li>Bob Marley — «Small Axe»</li>
              <li>Кино — «Дерево»</li>
            </List>
          </Playlist>
        </Section>
        <Share url={url} />
        <Other url={url} />
      </div>
    );
  }
}

export default Derevo;
