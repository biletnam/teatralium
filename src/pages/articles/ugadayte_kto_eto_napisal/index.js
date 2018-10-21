import React from "react";
import styled from "styled-components";

import H1 from "../../../components/H1";
import H3 from "../../../components/H3";
import DatePublish from "../../../components/Date";
import ArticleHelmet from "../../../components/ArticleHelmet";
import Section from "../../../components/Section";
import P from "../../../components/P";
import Button from "../../../components/Button";
import { phone } from "../../../utils/media";

import Share from "../../../components/Share";
import Other from "../../../components/Other";
import Img from "../../../components/ImgG";

import { TopCover } from "../../../components/FillCover";
import Pobeda from "./pobeda";
import Porazheniye from "./porazheniye";

const url = "https://teatralium.com/articles/ugadayte_kto_eto_napisal/";
const title = "«Спектакль, завораживающий с первой секунды»";

export const UgadayteKtoCover = props => (
  <TopCover sizes={props.sizes} {...props}>
    <Section margin="0" align="center">
      <H1 size="2.4rem">«Спектакль, завораживающий с первой секунды»</H1>
      <H3 size="4rem">Угадайте, кто это написал: критик или блогер.</H3>
      <DatePublish>
        17 октября 2018, автор:&nbsp;<b>Настя Николаева</b>
      </DatePublish>
    </Section>
  </TopCover>
);

const headers = [
  "«Зинаида с огромным животом, одетая как богемная актриска или дорогая, стильная шлюха, снова и снова швыряет золотые монетки все за тот же остывший кофе, который так и глох без толку в прежних чашках на многочисленных мелких полупрозрачных столиках».",
  "«„Разговоры беженцев“, конечно, срежиссированы вовсю этими рифмами с нашим обществом (а попадание на новости срежиссировано таймингом, хотя интересно, что показывали в два? И зачем вообще новости смотреть в вокзальном кафе? Но второй вопрос уже к антропологии — и это тоже, считай, исследуется) и хочется, чтобы действительность уже опровергала заявленное Брехтом и Учителем настроение, а она нет, вписывается в текст или вписывает его в себя только так, делая спектакль год от года все безысходней и страшней (и злей)».",
  "«В „Чайке-III“ Вытоптов предлагает театр состояния — статичные посиделки за барной стойкой, где чеховские персонажи встречают своих двойников из XX века. Элвис, Ленин, Эми Уайнхаус, Эйнштейн слушают исповедь Нины Монро-Заречной. Неподвижность драматургии Чехова Вытоптов реализует буквально. Герои словно прибиты к барным стульям, произносят свои реплики разом и не попадают ими друг в друга. Звучит саундтрек к „Твин Пиксу“, а чайки кажутся не тем, чем они кажутся».",
  "«Текст „Мушкетеров“ — нарочито графоманский: почти безразмерный (спектакль идет до полуночи), напичканный дурацкими каламбурами („Карлсон, сын Карлы“, „сердце волнуется три, хочется сыра бри!“) и нелепыми метафорами („мертвецы встают из могил, как la bite у мужика“). И так же это все играется: преувеличенно, с надрывом, на котурнах, потому что вернейший способ замаскировать патетику — это раздуть ее до пародии».",
  "«Спектакль работает на каких-то тончайших частотах и как-то очень тонко и деликатно в тебя просачивается. Тут все очень экономно в средствах, это проще всего будет понять по музыкальному фону: за исключением двух или трех кульминационных моментов, когда звуковой нойз на большой громкости заполняет достаточно длительное время, в остальном это такие нано-катарсические всполохи опять же околокомпьютерного нойза, которые временами как бы будят публику или подчеркивают какие-то важные моменты».",
  "«Если в довлатовской прозе цинизм героя как реакция на окружающую действительность иногда раздражает, то в спектакле его спокойно принимаешь, потому что он какой-то беззлобный, как будто герой просто фиксирует реальность с авторскими ремарками. Он и сидит все время на самой авансцене, свесив ноги с мостика в воду, как будто вылез за рампу со зрителями за жизнь поболтать».",
  "«Я не хочу сейчас поднимать старый и неисчерпаемый спор о возможности „разъять“ искусство „как труп“ и „поверить алгеброй гармонию“; в данном случае меня интересуют конкретные опыты режиссера как одно из проявлений этого существенного в искусстве и театре направления. Законы механизированного театрального действа он видит в ритме слова, движения и „волнения“ (эмоции) и в своеобразной пропорциональной зависимости найденных для каждой роли ритмов»."
];

const CRITIC = 1;
const BLOGGER = 2;

const replies = [
  {
    answer: CRITIC,
    [CRITIC]: `Это было просто. Действительно, критик Наталья Исаева <a href="https://www.colta.ru/articles/theatre/17987">так описала</a> сцену из спектакля Анатолия Васильева «Рассказ неизвестного человека».`,
    [BLOGGER]: `Вы, наверное, решили, что это пост-пост-мета-мета, но нет, критик Наталья Исаева <a href="https://www.colta.ru/articles/theatre/17987">написала это</a> всерьез о спектакле Анатолия Васильева «Рассказ неизвестного человека».`
  },
  {
    answer: BLOGGER,
    [CRITIC]: `Нет, это <a href="https://t.me/spectator_as_author/391">цитата</a> из телеграм-канала «Театр и академия». Думаете, только критики знают фамилии Брехт и Учитель?`,
    [BLOGGER]: `Вы, наверное, просто подписаны на <a href="https://t.me/spectator_as_author/391">канал</a> «Театр и академия», откуда взята эта цитата.`
  },
  {
    answer: BLOGGER,
    [CRITIC]: `Ан нет, это снова пост блогера. На сей раз о «Чайке» в Электротеатре «Станиславский» из телеграм-канала <a href="https://t.me/NemirovichandDanchenko/418">«Немирович и Данченко»</a>.`,
    [BLOGGER]: `Все так! Чайки кажутся не тем, чем кажутся, автору телеграм-канала <a href="https://t.me/NemirovichandDanchenko/418">«Немирович и Данченко»</a>.`
  },
  {
    answer: CRITIC,
    [CRITIC]: `Верно. Похоже, Олега Зинцова в этой <a href="https://www.vedomosti.ru/lifestyle/articles/2015/12/07/619835-mushketeri-saga-detskoe">рецензии</a> на спектакль Константина Богомолова «Мушкетеры. Сага. Часть первая» выдало слово «котурны». `,
    [BLOGGER]: `Ну что вы, вряд ли блогер знает слово «котурны». Это из <a href="https://www.vedomosti.ru/lifestyle/articles/2015/12/07/619835-mushketeri-saga-detskoe">рецензии</a> Олега Зинцова на спектакль Константина Богомолова «Мушкетеры. Сага. Часть первая».`
  },
  {
    answer: BLOGGER,
    [CRITIC]: `Видимо, обилие неопределенных местоимений вас не смутило, но это не рецензия, а <a href="https://t.me/apollonia/780">пост</a> из канала «вилисов постдраматический» про «Ивонну, принцессу Бургундскую» Гжегожа Яжины.`,
    [BLOGGER]: `Да, наверное, редактор не пропустил бы столько неопределенных местоимений, если б <a href="https://t.me/apollonia/780">этот пост</a> Виктора Вилисова про «Ивонну, принцессу Бургундскую» Гжегожа Яжины был рецензией. Но смотря какой редактор, конечно.`
  },
  {
    answer: BLOGGER,
    [CRITIC]: `Мы вас провели. Это отрывок из <a href="https://t.me/sparklingworld/119">поста</a>, очень похожего на рецензию, о спектакле «Заповедник» Сергея Женовача из телеграм-канала «Сверкающий мир театра».`,
    [BLOGGER]: `Вот тут было сложно, но вы справились. Это отрывок из <a href="https://t.me/sparklingworld/119">поста</a>, очень похожего на рецензию, о спектакле «Заповедник» Сергея Женовача из телеграм-канала «Сверкающий мир театра».`
  },
  {
    answer: CRITIC,
    [CRITIC]: `Вас не проведешь. Это <a href="http://teatr-lib.ru/Library/Markov/Theatr_3/#_Toc138401018">кусочек статьи</a> из девятого номера журнала «Театральное обозрение» за 1921 год об Опытно-героическом театре Бориса Фердинандова. А написал ее Павел Марков, заслуженный театральный критик СССР.`,
    [BLOGGER]: `Ага, попались! Это <a href="http://teatr-lib.ru/Library/Markov/Theatr_3/#_Toc138401018">кусочек статьи</a> из девятого номера журнала «Театральное обозрение» за 1921 год об Опытно-героическом театре Бориса Фердинандова. А написал ее Павел Марков, заслуженный театральный критик СССР.`
  }
];

const isCorrect = (i, j) => j === replies[i].answer;

const BorderImage = styled.div`
  border: 50px solid red;
  border-image: url("${p => p.src}") 50 round;
  ${phone(`border: none;`)}
`;
const Question = styled.div`
  padding: 2rem;
  background: #fff09d;
  font-size: 1.4rem;
  line-height: 1.7;
  font-style: italic;
  ${phone(`
    font-size: 1.3em;
    padding: 0.5rem;
  `)};
`;

const Confirm = styled.div`
  font-size: 1.5rem;
  padding-top: 2rem;
`;

const ContinueButton = styled(Button)`
  margin: 1rem 0;
  ${p => p.color && `width: 270px;`};
`;

const Layout = styled.div`
  display: flex;
  padding-top: 0.5rem;
  justify-content: space-around;
  ${phone(`flex-direction: column`)};
`;

export class Test extends React.Component {
  constructor(props) {
    super(props);
    this.state = { showConfirm: false, explanationFor: null };
  }
  update(i, answer) {
    this.props.select(isCorrect(i, answer));
    this.setState({ showConfirm: true, explanationFor: answer });
  }
  render() {
    const { i, confirm, borderImg } = this.props;
    const { showConfirm, explanationFor } = this.state;
    return (
      <div>
        <Counter id="counter">{i + 1}/7</Counter>
        <BorderImage src={borderImg.src}>
          <Question>{headers[i]}</Question>
        </BorderImage>
        {!showConfirm && (
          <Layout>
            <ContinueButton
              color="purple"
              hover="orange"
              onClick={() => this.update(i, CRITIC)}
            >
              Критик
            </ContinueButton>
            <ContinueButton
              color="orange"
              hover="purple"
              onClick={() => this.update(i, BLOGGER)}
            >
              Блогер
            </ContinueButton>
          </Layout>
        )}
        {showConfirm && (
          <Confirm>
            <div
              dangerouslySetInnerHTML={{
                __html: `<div>${replies[i][explanationFor]}</div>`
              }}
            />
            <ContinueButton onClick={confirm}>Продолжить</ContinueButton>
          </Confirm>
        )}
      </div>
    );
  }
}

const Counter = styled.div`
  font-style: italic;
  color: grey;
  font-size: 0.8rem;
  padding-bottom: 2rem;
  text-align: center;
`;

function scroll(to) {
  const top = document.documentElement.scrollTop;
  const cur = (document.documentElement.scrollTop -= (top - to) / 100);
  if (cur > to) {
    setTimeout(() => scroll(to), 1);
  }
}

export class Article extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      i: 0,
      correct: 0,
      key: Date.now(),
      showResult: false
    };
  }
  calculateFinal(correct) {
    const result = correct > 3 ? "pobeda" : "porazheniye";

    this.setState({ showResult: true });
    // this.props.history.push(
    //   `/articles/ugadayte_kto_eto_napisal/${result}?result`
    // );
  }
  confirm() {
    if (this.state.i === 6) {
      this.calculateFinal(this.state.correct);
      return;
    }

    this.setState({
      i: this.state.i + 1,
      key: Date.now()
    });

    const to = document.getElementById("counter").offsetTop - 10;

    scroll(to);
  }
  select(i) {
    this.setState({ correct: this.state.correct + i });
  }
  // eslint-disable-line react/prefer-stateless-function
  render() {
    const { data } = this.props;

    const { i } = this.state;

    console.log(this.state.correct);

    return (
      <div>
        <ArticleHelmet
          url={url}
          image="/share/ugadayte.jpg"
          description="Угадайте, кто это написал: критик или блогер."
          title={`${title} | Театралий`}
        />
        {!this.state.showResult && (
          <div>
            <Img
              bg="none"
              noBorder
              marginTop="0"
              sizes={data.curtain1.sizes}
              id="curtain-left"
            />
            <Img
              bg="none"
              noBorder
              marginTop="0"
              sizes={data.curtain2.sizes}
              id="curtain-right"
            />
            <UgadayteKtoCover />
          </div>
        )}
        {this.state.showResult &&
          this.state.correct > 3 && <Pobeda data={{ bg: data.bg }} />}
        {this.state.showResult &&
          this.state.correct <= 3 && <Porazheniye data={{ bg: data.bg2 }} />}
        {!this.state.showResult && (
          <div>
            <Section withHomepageLink>
              <P>
                Критики пишут штампами, а блогеры ничего не понимают в театре. И
                у тех, и у других случаются приличные тексты, но в большинстве
                своем и рецензии, и отзывы на спектакли — это нечто
                невразумительное. Убедитесь в этом, а заодно попробуйте угадать,
                кто автор цитаты: подкованный в театральных терминах критик или
                самозванец-блогер?
              </P>
              <Test
                key={this.state.key}
                i={this.state.i}
                confirm={() => this.confirm()}
                select={i => this.select(i)}
                borderImg={data.frame.sizes}
              />
            </Section>
            <Share url={url} />
            <Other url={url} />
          </div>
        )}
      </div>
    );
  }
}

export default Article;

export const pageQuery = graphql`
  query UgadayteKtoImageQuery {
    cover: imageSharp(id: { regex: "/ugadayte/cover.jpg/" }) {
      sizes(maxWidth: 1200) {
        ...GatsbyImageSharpSizes
      }
    }
    curtain2: imageSharp(id: { regex: "/idite_na/curtain-left.png/" }) {
      sizes(maxWidth: 800) {
        ...GatsbyImageSharpSizes
      }
    }
    curtain1: imageSharp(id: { regex: "/idite_na/curtain-right.png/" }) {
      sizes(maxWidth: 800) {
        ...GatsbyImageSharpSizes
      }
    }
    frame: imageSharp(id: { regex: "/ugadayte/frame.png/" }) {
      sizes(maxWidth: 700) {
        ...GatsbyImageSharpSizes
      }
    }
    bg: imageSharp(id: { regex: "/ugadayte/1.jpg/" }) {
      sizes(maxWidth: 1200) {
        ...GatsbyImageSharpSizes
      }
    }
    bg2: imageSharp(id: { regex: "/ugadayte/2.jpg/" }) {
      sizes(maxWidth: 1200) {
        ...GatsbyImageSharpSizes
      }
    }
  }
`;
