import React from "react";
import Helmet from "react-helmet";
import Link from "gatsby-link";
import styled, { keyframes } from "styled-components";

import { phone } from "../../utils/media";
import H1, { H1small } from "../../components/H1";
import ArticleHelmet from "../../components/ArticleHelmet";
import Img from "../../components/ImgG";
import ImgOld from "../../components/Img";
import H2 from "../../components/H2";
import H3 from "../../components/H3";
import Attention from "../../components/Attention";
import Gallery from "../../components/Gallery";
import Video from "../../components/Video";

import Small from "../../components/Small";
import Note, { NoteWrapper, NotedWord } from "../../components/Note";
import Section from "../../components/Section";
import P from "../../components/P";
import Date from "../../components/Date";
import Share from "../../components/Share";
import HomepageLink from "../../components/HomepageLink";
import Other from "../../components/Other";

import FillCover, { TopCover } from "../../components/FillCover";

import zipper from "../images/govno/zipper.svg";
import shut from "../images/govno/shut.svg";

const url = "https://teatralium.com/articles/aktyory_truppy_na_otlyote/";
const title = "Александр Блок о репертуаре государственных театров";

const StyledDate = styled(Date)`
  color: white;
  max-width: 100px;
  margin: 0;
  background: black;
  padding: 0;
`;

const H1Shadow = styled(H1)`
  line-height: 1.5;
`;

const Brown = styled.span`
  color: brown;
`;

const Red = styled.span`
  color: red;
`;
const Bg = styled.span`
  background: black;
  padding: 0.1rem;
`;

const H = styled(H1Shadow)`
  font-size: 2rem !important;
  line-height: 1.5;
  padding: 4rem 1rem 0;
  ${phone(`font-size: 1.2rem !important;`)};
`;

const Author = styled.div`
  font-style: italic;
  padding-top: 1rem;
  text-align: center;
  font-size: 0.8rem;
  color: gray;
`;

const Wrapper = styled.div`
  margin: 6rem 0 0;
  ${phone(`margin: 2rem 0;`)};
`;

export const BlokCover = ({ sizes, showDate = true, ...props }) => (
  <TopCover sizes={sizes} bordered borderColor="black" {...props}>
    <Section margin="0" align="left">
      <H1Shadow size="3.2rem" color="white">
        <Bg>Актеры труппы на отлете</Bg>
      </H1Shadow>
      <H1small center color="white">
        <Bg>Александр Блок о репертуаре государственных театров</Bg>
      </H1small>
      {showDate && <StyledDate>
        9 апреля 2018
      </StyledDate>}
    </Section>
  </TopCover>
);
export class Article extends React.PureComponent {
  // eslint-disable-line react/prefer-stateless-function
  render() {
    const { data } = this.props;
    return (
      <div>
        <ArticleHelmet
          url={url}
          image={data.cover.sizes.src}
          description="«По-моему, мы можем и должны немедленно выработать и продиктовать государственным театрам свой репертуар»"
          title={`${title} | Театралий`}
        />
        <BlokCover sizes={data.cover.sizes} />
        <Section withHomepageLink>
          <P>
            Блок любил театр, много смотрел и рецензировал, поначалу даже играл
            в любительских постановках, не говоря уже о его собственных пьесах.
            5 июня 1918 года он написал статью <a href="http://dugward.ru/library/blok/blok_o_repertuare_kommunalnyh.html">«О репертуаре коммунальных и
            государственных театров»</a>, которая позднее вышла в сборнике
            «Репертуар». «Театралий» публикует вторую ее часть, в которой автор,
            ценящий кипящую вокруг народных театров жизнь, упрекает
            государственные в ее отсутствии. Очевидно, гостеатры и курирующее их
            министерство услышали призыв Блока на время «закрыть доступ на сцену
            всему неустановившемуся», но поэт ошибся, предполагая, что ждать
            придется не век. Видимо, не все дочитали этот текст до конца.
          </P>
          <p>
            Государственные театры, в противоположность народным, утратили давно
            всякую связь с жизнью. Гений жизни, испуганный чем-то, отлетел от
            них: если там иногда и возникнет связь сцены со зрительным залом, то
            это всегда исключительный случай, обязанный своим возникновением
            игре какого-нибудь отдельного актера, какой-нибудь исключительной
            постановке и так далее. Обычная же картина такова: актеры
            поигрывают, причем во всей их повадке чувствуется, что они не хотят
            особенно утруждать себя и заняты вообще гораздо более важными
            делами, чем выступление на сцене. Публика же позевывает и
            поглядывает, веруя в образцовость исполнения, — в то, что если оно
            не слишком замечательно, то лучшего в столице все-таки не сыщешь.
          </p>
          <p>
            Во всем этом я убедился окончательно, посещая довольно исправно
            Александринский и Михайловский театры в последнее время.
          </p>
          <p>
            Если уместна печальная ирония по этому поводу, то я сказал бы, что
            это факт, развязывающий нам руки: государственные театры имеют то
            преимущество перед народными, что там, в сущности, в данный момент
            нет ничего такого, что надо беречь; ничего такого, из-за чего
            пришлось бы идти на компромиссы, прибегать к обходным путям.
          </p>
          <p>
            Там возможна, а по-моему, и необходима, решительная реформа, и
            момент для нее нельзя найти удобнее. Момент такой: в репертуаре
            наступила полная неразбериха; многие члены труппы на отлете, тех
            сил, действительно крупных, из-за которых приходилось идти на
            компромиссы и которые, как все мы знаем, и были отчасти причиной
            разложения репертуара, больше нет, новые силы еще не образовались, а
            главное, публика, то есть то, из-за чего и городится весь огород,
            просто отсутствует, ибо нельзя серьезно считать публикой теперешних
            посетителей государственных театров; эти театры и в этом отношении
            давно опровинциалились, обслуживают небольшую часть жителей своего
            квартала; ведь мы не хотим считаться с художественными вкусами
            владельцев банкирских контор и приказчиков из Гостиного двора,
            которые посещают Александринку; также неинтересны нам суждения
            гувернанток-француженок, шляпных мастериц из Пассажа и дам, любящих
            французский язык m-me Роджерс, а все это еще недавно и было ядром
            публики Михайловского театра.
          </p>

          <Img
            sizes={data.blok2.sizes}
            maxWidth="100%"
            desc="Пабло Пикассо. Иллюстрация из издания Фернан Кроммелинк «Великолепный рогоносец», 1968"
          />
          <p>
            Словом, время для коренной реформы назрело. Мне кажется, у нас
            сейчас есть и право, и обязанность, и возможность, и долг
            потребовать от государственных театров служения не одному кварталу
            провинциального города, а жизни, искусству и обществу. Много лет
            этот вопрос висел в воздухе, и много лет разрешить его было нельзя
            по тысяче полууважительных причин. Теперь, по-моему, мы можем и
            должны немедленно выработать и продиктовать государственным театрам
            свой репертуар.
          </p>

          <p>
            Государственные театры имеют неограниченные возможности. В их
            распоряжении должны находиться все лучшие театральные силы страны.
            Если они не умеют привлечь этих сил, в этом их вина.
          </p>

          <p>
            Я сказал бы, что они должны суметь сделать это теперь, а мы не
            должны при выработке репертуара считаться с их уменьем или неуменьем
            сделать это. В государственных театрах все должно быть готово к
            исполнению лучшего и необходимейшего, что есть в мировом репертуаре.
            Мы не требуем гениальности, не требуем громадных талантов, но мы
            требуем возможного: чтобы техника, которая недаром же вырабатывалась
            десятилетиями, чтоб традиция, которая существует же в
            государственных театрах, хотя она и завязла в настоящее время на
            задворках сцены, в паутине отслуживших свое декораций, — чтобы все
            это пошло в дело.
          </p>

          <p>
            Итак, репертуар государственных театров должен быть классическим; я
            думаю, что эту тенденцию надо навязывать, надо проводить упрямо и
            неуклонно, невзирая ни на какие критики, ни на какие неудачи,
            которые сразу начнут преследовать на этом пути, и на это закрывать
            глаза не нужно.
          </p>
          <Video
            id="czlHuhxToKY"
            desc="Отчетный показ «Школы современного искусства» или «Школы авангарда» художника Авдея Тер-Оганьяна на церемонии вручения премии «Золотая маска» 1997 года"
          />
          <p>
            Я хотел бы, чтобы мы сказали наконец решительно, что мы требуем
            Шекспира и Гете, Софокла и Мольера, великих слез и великого смеха не
            в гомеопатических дозах, а в настоящих; что позорно лишать жителей
            города, равного по количеству и пестроте населения большим городам
            Европы, возможности слушать каждый год десять раз объяснение Ричарда
            с леди Анной и монологи Гамлета, видеть шествие Бирнамского леса на
            Донзинан, и так далее, и так далее.
          </p>

          <p>
            Я бы мог говорить много о том, почему нам суждено до сих пор
            отдавать большое и, пожалуй, первенствующее место репертуару
            европейскому; о том, что в этом нет ничего ни неестественного, ни
            зазорного; но сейчас, мне кажется, говорить об этом у нас нет
            времени. Я хочу только, чтобы мы пришли к одному выводу, для меня
            ясному как день: государственные театры обязаны держаться лучшего,
            что есть в классическом репертуаре. Пусть будет время, когда
            «Макбет» пройдет перед пустым залом, — это только переходное время,
            и государственные театры обязаны его выдержать стойко, не идя ни на
            один компромисс; государство же обязано их в этом поддержать; этот
            путь кажется мне путем действительно революционным. Это путь
            единственный, других нет. Пусть закроется пока доступ на
            государственную сцену всему неустановившемуся, всему спорному:
            необходимо дать время накоплению тех сил, собиранию тех энергий, без
            которых театр не театр, а лавочка, департамент, ресторан, место
            отдохновения и развлечения, все, что угодно, только не театр.
          </p>

          <H3 padding="4rem 2rem">
            «Мы заговорим на новом языке, которым пока не владеем, потому, что
            место, о котором мы печемся, не расчищено»
          </H3>

          <p>
            Когда та горячая и таинственная волна, которая несет на себе все
            истинно великое, все омытое и отшлифованное веками, обтечет эти
            выветрившиеся стены, теперь забывшие лучшее, что в них было; когда
            солью этой волны пропитается вновь каждый угол сцены и каждый угол
            зала; когда зритель, приходящий в театр, сразу будет охвачен этим
            воздухом, которого сейчас в государственных театрах вовсе нет, и
            сразу станет сам неприметно другим, более подготовленным к поднятию
            занавеса над сценой действительно образцовой, тогда только настанет
            время для нас говорить о новых изменениях репертуара, о внесении в
            него новых элементов.
          </p>

          <p>
            Пока этого нет, я полагал бы, что нам следует твердо стоять на
            позиции классического репертуара, не уступая ее ни нежно стучащимся
            в эти двери веяниям модернизма, ни смазному сапогу современного
            бытового и психологического репертуара.
          </p>

          <p>
            Пусть совершится тот процесс, о котором я говорил; для этого путь
            один — последовательный и жесткий.
          </p>

          <p>
            Надо выдержать трудное время; так сейчас во всех областях жизни, так
            и в этой. Ждать не век. Надо только надеяться и любить, и тогда
            благословение великого снизойдет скорее, чем мы думаем. Когда мы
            вернем соль тому, что соль потеряло, тогда только мы будем иметь
            право говорить о дальнейшем и тогда только откроются перспективы, я
            думаю, совершенно новые, как всегда неожиданные.
          </p>

          <p>
            Тогда речь зайдет, вероятно, уже не о модернизме, и не о быте, и не
            о психологии; в этих несчастных трех соснах блуждать мы уже
            перестанем, а заговорим на новом языке, более отчетливом, которым
            пока не владеем; не владеем потому, что основное не сделано, самое
            место, о котором мы печемся, не расчищено, за деревьями не видно
            леса.
          </p>
        </Section>
        <Share url={url} />
        <Other url={url} />
      </div>
    );
  }
}

export default Article;

export const pageQuery = graphql`
  query BlokImageQuery {
    blok2: imageSharp(id: { regex: "/blok/2.jpg/" }) {
      sizes(maxWidth: 1280) {
        ...GatsbyImageSharpSizes
      }
    }
    cover: imageSharp(id: { regex: "/blok/cover.jpg/" }) {
      sizes(maxWidth: 1280) {
        ...GatsbyImageSharpSizes
      }
    }
  }
`;
