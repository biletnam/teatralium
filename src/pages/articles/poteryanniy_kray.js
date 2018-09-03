import React from "react";
import styled from "styled-components";

import H1, { H1small } from "../../components/H1";
import ArticleHelmet from "../../components/ArticleHelmet";
import Section from "../../components/Section";
import P from "../../components/P";
import Small from "../../components/Small";
import Date from "../../components/Date";
import Share from "../../components/Share";
import Other from "../../components/Other";

import FillCover from "../../components/FillCover";

import { Playlist } from "../../components/Poem";

import cover from "../images/bogomolov/bogomolov_cover.jpg";
import fbImage from "../images/bogomolov/cover.png";

const url = "https://teatralium.com/articles/poteryanniy_kray";
const title =
  "Выпью за потерянный людьми (к)рай: песни из спектаклей Константина Богомолова";

const List = styled.ul`
  list-style-type: square;
`;

export const BogomolovCover = ({ cover, size = '3.424em', showDate = true, lineHeight }) => (
  <FillCover bg={cover} repeat bordered borderColor="purple">
    <Section background="rgba(255,255,255,0.7)">
      {showDate && <Date>
        14 июля, <b>«За музыку отвечает»</b>
      </Date>}
      <H1 size={size} lineHeight={lineHeight} center color="purple">
        Выпью за потерянный людьми (к)рай
            </H1>
      <H1small center color="black">
        Песни из спектаклей Константина Богомолова
            </H1small>
    </Section>
  </FillCover>
);

export class Article extends React.PureComponent {
  // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div>
        <ArticleHelmet
          url={url}
          image={fbImage}
          width="1200"
          height="672"
          description="Расставанье впереди, так попробуй-ка найди."
          title={`${title} | Театралий`}
        />
        <BogomolovCover cover={cover} />
        <Section withHomepageLink>
          <P>
            «За музыку в спектакле отвечает» — от этой фразы, которую критики очень любят использовать в рецензиях, у нормальных читателей случается либо уныние, либо приступ желания уничтожать. В связи с этим «Театралий» призывает разных людей, причастных к театральному делу, буквально ответить за музыку в соответствующей рубрике «За музыку отвечает». Для этого выпуска мы собрали микс из прекрасных песен, которые звучат в спектаклях Константина Богомолова. Не надо делать таких удивительных глаз, как будто все у тебя в первый раз. Я люблю тебя, жизнь, давай уедем отсюда сейчас.
          </P>

          <iframe
            scrolling="no"
            width="100%"
            height="60"
            src="https://www.mixcloud.com/widget/iframe/?hide_cover=1&mini=1&feed=%2FTeatralium%2F%D0%BF%D0%B5%D1%81%D0%BD%D0%B8-%D0%B8%D0%B7-%D1%81%D0%BF%D0%B5%D0%BA%D1%82%D0%B0%D0%BA%D0%BB%D0%B5%D0%B9-%D0%BA%D0%BE%D0%BD%D1%81%D1%82%D0%B0%D0%BD%D1%82%D0%B8%D0%BD%D0%B0-%D0%B1%D0%BE%D0%B3%D0%BE%D0%BC%D0%BE%D0%BB%D0%BE%D0%B2%D0%B0-%D0%B2%D1%8B%D0%BF%D1%8C%D1%8E-%D0%B7%D0%B0-%D0%BF%D0%BE%D1%82%D0%B5%D1%80%D1%8F%D0%BD%D0%BD%D1%8B%D0%B9-%D0%BB%D1%8E%D0%B4%D1%8C%D0%BC%D0%B8-%D0%BA%D1%80%D0%B0%D0%B9%2F"
            frameBorder="0"
          />
          <Playlist>
            <List>
              <li>Филипп Киркоров — «Единственная моя» (Из спектакля «Мушкетеры. Сага. Часть первая»)</li>
              <li>Наташа Королева — «Маленькая страна» (Из спектакля «Гаргантюа и Пантагрюэль»)</li>
              <li>ВИА Пламя — «Вы, девочки» (Из спектакля «Дракон»)</li>
              <li>Андрей Державин — «Давайте выпьем, Наташа» (Из спектакля «Три сестры»)</li>
              <li>Молодежный хор католического кафедрального собора Преображения Господня в Новосибирске — «Mirabile futurum» («Прекрасное далеко», лат.) (Из спектакля «Князь»)</li>
              <li>Сергей Наговицын — «Потерянный край» (Из спектакля «Идеальный муж»)</li>
              <li>Лев Лещенко — «Родительский дом» (Из спектакля «Карамазовы»)</li>
              <li>Филипп Киркоров — «Марина» (Из спектакля «Борис Годунов»)</li>
              <li>Юрий Шатунов — «Детство» (Из спектакля «Гаргантюа и Пантагрюэль»)</li>
              <li>Иосиф Кобзон — «Нефтяные короли» (Из спектакля «Год, когда я не родился»)</li>
              <li>Марк Бернес — «Я люблю тебя жизнь» (Из спектакля «Карамазовы»)</li>
            </List>
          </Playlist>
          <Small>
            Спасибо Антону Хитрову за коллекцию.
          </Small>
        </Section>
        <Share url={url} />
        <Other url={url} />
      </div>
    );
  }
}

export default Article;