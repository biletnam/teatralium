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
import Video from "../../components/Video";
// import H4 from '../../components/H4'
import Small from "../../components/Small";
import Note, { NoteWrapper, NotedWord } from "../../components/Note";
import Section from "../../components/Section";
import P from "../../components/P";
import Date from "../../components/Date";
import Share from "../../components/Share";
import Other from "../../components/Other";
import Attention from "../../components/Attention";

import { Playlist } from "../../components/Poem";

import cover from "../images/otvechaet/lisovsky.gif";

const url =
  "https://teatralium.com/articles/playlist_komissara_vsevoloda_lisovskogo";
const title =
  "Миражи — это наша жизнь?: плейлист комиссара Всеволода Лисовского";

const List = styled.ul`
  list-style-type: square;
`;

const Wrapper = styled.div`
  width: 400px;
  margin: 0 auto;
`;

export class Raznoobrazie extends React.PureComponent {
  // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div>
        <ArticleHelmet
          url={url}
          image={cover}
          width="1200"
          height="672"
          description="Слушайте нашу новую рубрику «За музыку отвечает»."
          title={`${title} | Театралий`}
        />
        <Section withHomepageLink>
          <Date>
            30 ноября, <b>«За музыку отвечает»</b>
          </Date>
          <H1 center>Миражи — это наша жизнь?</H1>
          <H1small center>Плейлист комиссара Всеволода Лисовского</H1small>
          <P>
            «За музыку в спектакле отвечает» — от этой фразы, которую критики
            очень любят использовать в рецензиях, у нормальных читателей
            случается либо уныние, либо приступ желания уничтожать. Она
            провоцирует на грех! В связи с этим «Театралий» призывает разных
            людей, причастных к театральному делу, буквально ответить за музыку
            и запускает соответствующую рубрику «За музыку отвечает». Отныне
            каждую неделю представители театральных профессий будут делиться
            любимыми композициями. Оказалось, что наш первый гость, комиссар
            Театра.doc и проекта «Трансформатор.doc» Всеволод Лисовский, музыку
            не слушает совсем, но это не помешало ему за нее ответить.
          </P>
          <Wrapper>
            <Img
              src={cover}
              noBorder
              marginBottom="4rem"
              desc="Всеволод Лисовский?"
            />
          </Wrapper>
          <p>
            «Дело в том, что я музыку совсем не слушаю и никогда не слушал. В
            детстве, чтобы отмазаться от фортепиано, я сказал, что ненавижу
            музыку, и отвечаю за базар. Но десять песен я могу набрать. Больше
            вспомнить не смог».
          </p>
          <iframe
            scrolling="no"
            width="100%"
            height="60"
            src="https://www.mixcloud.com/widget/iframe/?hide_cover=1&light=1&hide_artwork=1&feed=%2FTeatralium%2Fmiracles-lisovskiy%2F"
            frameBorder="0"
          />
          <Playlist>
            <List>
              <li>ДЖАНИК — «ФИДАЙН АВТОРИТЕТ»</li>
              <li>
                Пласидо Доминго — «Марсельеза». Слова и музыка Клода Жозефа Руже
                де Лиля. <i>Осторожно, полная версия</i>
              </li>
              <li>
                Banda e Coro & M. Lumin — «Bandiera rossa» («Красное знамя»).
                Слова Карло Туцци, музыка из ломбардийских народных песен
              </li>
              <li>
                Эрнст Буш — «Das Einheitsfrontlied» («Песня единого фронта»).
                Слова Бертольда Брехта, музыка Ганса Эйслера
              </li>
              <li>
                Хор Красной Армии — «Варшавянка». Перевод на русский Глеба
                Кржижановского, автор музыки неизвестен
              </li>
              <li>
                Хор Красной Армии — «Священная война». Слова Василия
                Лебедева-Кумача, музыка Александра Александрова
              </li>
              <li>
                Горан Брегович и Слободан Салиевич — «Kalasnjikov». Слова и
                музыка Горана Бреговича
              </li>
              <li>
                Хор Красной Армии — «Марш артиллеристов». Слова Виктора Гусева,
                музыка Тихона Хренникова
              </li>
              <li>
                Александр Новиков — «Ай, мама-джан». Слова и музыка Александра
                Новикова
              </li>
              <li>
                Хор Красной Армии — «Интернационал». Перевод на русский Аркадия
                Коца, музыка Пьера Дегейтера
              </li>
              <li>
                Кубанский казачий хор — «Любо, братцы, любо». Казачья народная
                песня
              </li>
              <li>«Восток» — «Миражи». Слова и музыка Геннадия Филиппова</li>
            </List>
          </Playlist>
        </Section>
        <Share url={url} />
        <Other url={url} />
      </div>
    );
  }
}

export default Raznoobrazie;
