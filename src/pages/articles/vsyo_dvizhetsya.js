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

import { TopCover } from "../../components/FillCover";

import { Playlist } from "../../components/Poem";

import portrait from "../images/shmykova/small.jpg";

const url = "https://teatralium.com/articles/vsyo_dvizhetsya";
const title = "Все движется, если я с тобой: плейлист актрисы Варвары Шмыковой";

const List = styled.ul`
  list-style-type: square;
`;

export const ShmykovaCover = ({
  size = "3.424em",
  showDate = true,
  lineHeight
}) => (
  <TopCover bg={portrait} repeat bordered borderColor="blue">
    <Section background="rgba(255,255,255,0.7)">
      {showDate && (
        <Date>
          18 октября, <b>«За музыку отвечает»</b>
        </Date>
      )}
      <H1 size={size} lineHeight={lineHeight} center color="blue">
        Все движется, если я с тобой
      </H1>
      <H1small center color="black">
        Плейлист актрисы Варвары Шмыковой
      </H1small>
    </Section>
  </TopCover>
);

export class Article extends React.PureComponent {
  // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div>
        <ArticleHelmet
          url={url}
          image="/share/vsyo_dvizhetsya.jpg"
          width="1200"
          height="672"
          description="Что у нас тут слушает театральная молодежь."
          title={`${title} | Театралий`}
        />
        <ShmykovaCover sizes={this.props.data.cover.sizes} />
        <Section withHomepageLink>
          <P>
            Продолжаем призывать людей, причастных к театральному делу, ответить
            за музыку. В новом выпуске нашей любимой рубрики — плейлист актрисы
            «Июльансамбля» Варвары Шмыковой, которую в ближайшее время можно
            увидеть в премьере театра «Практика»{" "}
            <a href="https://praktikatheatre.ru/events/neskolko-razgovorov-o-hriste">
              «Несколько разговоров о»
            </a>.
          </P>

          <p>
            «С JMSN — необъяснимые вещи, но эти два трека я слушаю каждый день
            всегда!! Бабкин — это любовь юности. Для спектакля Вани Комарова
            «Баал» учила зонг и постоянно слушала Trettmann — немецкий рэп, чтоб
            запоминать произношение. ТГК… да-да-да-да, ничего не могу с собой
            поделать. Denai Moore — просто посмотрите клип на эту песню. A$AP
            Mob помогает расслабиться. Недавно открыла для себя Наадю, считаю,
            что ее срочно надо услышать всем, голос Варвары Визбор завораживает,
            а трек Канье — отличное сочетание рэпа и госпела».
          </p>

          <iframe
            scrolling="no"
            width="100%"
            height="60"
            src="https://www.mixcloud.com/widget/iframe/?hide_cover=1&mini=1&feed=%2FTeatralium%2F%D0%B2%D1%81%D0%B5-%D0%B4%D0%B2%D0%B8%D0%B6%D0%B5%D1%82%D1%81%D1%8F-%D0%B5%D1%81%D0%BB%D0%B8-%D1%8F-%D1%81-%D1%82%D0%BE%D0%B1%D0%BE%D0%B9-%D0%BF%D0%BB%D0%B5%D0%B9%D0%BB%D0%B8%D1%81%D1%82-%D0%B0%D0%BA%D1%82%D1%80%D0%B8%D1%81%D1%8B-%D0%B2%D0%B0%D1%80%D0%B2%D0%B0%D1%80%D1%8B-%D1%88%D0%BC%D1%8B%D0%BA%D0%BE%D0%B2%D0%BE%D0%B9%2F"
            frameBorder="0"
          />

          <Playlist>
            <List>
              <li>JMSN — «Talk is cheap»</li>
              <li>JMSN — «Where do you go»</li>
              <li>Сергей Бабкин — «Слепок»</li>
              <li>Trettmann — «New York»</li>
              <li>ТГК — «Осень весной»</li>
              <li>Denai Moore — «No light»</li>
              <li>A$AP Mob — «Yamborghini high»</li>
              <li>Наадя — «Движение»</li>
              <li>Варвара Визбор — «Ниже ноля»</li>
              <li>Kanye West — «Ultralight beam»</li>
            </List>
          </Playlist>
          <Small>Фото: Анисия Кузьмина.</Small>
        </Section>
        <Share url={url} />
        <Other url={url} />
      </div>
    );
  }
}

export default Article;

export const pageQuery = graphql`
  query DvizhetsyaQuery {
    cover: imageSharp(id: { regex: "/shmykova/small.jpg/" }) {
      sizes(maxWidth: 150) {
        ...GatsbyImageSharpSizes
      }
    }
  }
`;
