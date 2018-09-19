import React from "react";
import styled from "styled-components";

import H1 from "../../../components/H1";
import H3 from "../../../components/H3";
import DatePublish from "../../../components/Date";
import ArticleHelmet from "../../../components/ArticleHelmet";
import Section from "../../../components/Section";
import P from "../../../components/P";
import { phone } from "../../../utils/media";


import Share from "../../../components/Share";
import Other from "../../../components/Other";
import Img from "../../../components/ImgG";

import { TopCover } from "../../../components/FillCover";

const url = "https://teatralium.com/articles/idite_na/";
const title = "Идите на: с какого спектакля вам начать сезон";

const TopCoverStyled = styled(TopCover)`
`;

export const IditeNaCover = (props) => (
  <TopCoverStyled {...props}>
    <Section margin="0" align="center">
      <H1>Идите на</H1>
      <H3 size="4rem">
        С какого спектакля вам начать сезон
      </H3>
      <DatePublish>
        5 сентября 2018, автор:&nbsp;<b>Настя Николаева</b>
      </DatePublish>
    </Section>
  </TopCoverStyled>
);

const headers = [
  'Ну что, как вы провели лето?',
  'Успели что-нибудь прочитать?',
  'А по театру-то соскучились?',
  'Что из происходящего с театром расстраивает вас больше всего?',
  'В какой соцсети вы залипаете наиболее интенсивно?',
  'Какая еда лучше всего описывает ваше текущее состояние?',
  'Как бы вы охарактеризовали сферу своей деятельности?',
  'Какой отзыв на спектакль вы могли бы написать?',
];

const replies = [
  [
    { index: 1, answer: 'a', text: 'Так время быстро пролетело, одно-другое, толком и не отдохнул(а).' },
    { index: 2, answer: 'b', text: 'Съездил(а) повидаться с родственниками. Хабаровск — не лучшее место для отдыха, но хоть что-то.' },
    { index: 3, answer: 'c', text: 'Уехал(а) на море и завел(а) курортный роман.' },
    { index: 4, answer: 'd', text: 'На даче: кружевные занавески, свежая малина, речка. Рай!' },
    { index: 5, answer: 'e', text: 'В бесконечных тусовках с алкоголем и танцами до утра.' },
  ],
  [
    { index: 1, answer: 'e', text: 'Все силы ушли на чтение стенограмм заседаний судов и срачей в фейсбуке.' },
    { index: 2, answer: 'd', text: 'Решил(а) освежить в памяти вечное и перечитал(а) сборник пьес Чехова.' },
    { index: 3, answer: 'b', text: 'Поглотил(а) несколько экземпляров свежего нон-фикшена.' },
    { index: 4, answer: 'c', text: 'Руки, наконец, дошли до «Маленькой жизни» Янагихары.' },
    { index: 5, answer: 'a', text: 'Руки, наконец, дошли до «Идиота» Достоевского.' },
  ],
  [
    { index: 1, answer: 'd', text: 'Жду с нетерпением, как снова сяду в кресло и погаснет свет.' },
    { index: 2, answer: 'b', text: 'Нет, черт бы его побрал, этот театр.' },
    { index: 3, answer: 'e', text: 'Соскучился(лась) скорее по встречам с приятными людьми и разговорам до и после спектаклей.' },
    { index: 4, answer: 'a', text: 'Вроде да, но меня уже ничего не радует в этом потоке печальных новостей.' },
    { index: 5, answer: 'c', text: 'Да, театр — мое спасение, помогает выжить.' },
  ],
  [
    { index: 1, answer: 'd', text: 'Недостаточное количество интерпретаций «Трех сестер».' },
    { index: 2, answer: 'c', text: 'Смерть людей, которые делали то, что я любил(а).' },
    { index: 3, answer: 'b', text: 'Засилье классики и псевдо новые формы.' },
    { index: 4, answer: 'a', text: 'Дело Серебренникова.' },
    { index: 5, answer: 'e', text: 'Недостаточное финансирование культуры и, как следствие, высокие цены на билеты.' },
  ],
  [
    { index: 1, answer: 'a', text: 'Фейсбук. Там все умные и серьезные.' },
    { index: 2, answer: 'e', text: 'Твиттер. Над шутками оттуда люди фейсбука смеются спустя несколько недель.' },
    { index: 3, answer: 'c', text: 'ВКонтакте. Несмотря на то, что он сдаст меня ФСБ с потрохами.' },
    { index: 4, answer: 'b', text: 'Ютуб. Даже Олег Меньшиков завел блог.' },
    { index: 5, answer: 'd', text: 'Инстаграм. Прекрасные картинки чужой жизни с духоподъемными мыслями уносят меня в мир грез.' },
  ],
  [
    { index: 1, answer: 'c', text: 'Гречка с сосиской' },
    { index: 2, answer: 'a', text: 'Салат' },
    { index: 3, answer: 'e', text: 'Пицца огромная' },
    { index: 4, answer: 'd', text: 'Стейк с гарниром' },
    { index: 5, answer: 'b', text: 'Шаурма' },
  ],
  [
    { index: 1, answer: 'b', text: 'Скучно, но платят. ' },
    { index: 2, answer: 'e', text: 'Весело, но не платят.' },
    { index: 3, answer: 'd', text: 'Спокойно и стабильно.' },
    { index: 4, answer: 'c', text: 'Приятно и полезно.' },
    { index: 5, answer: 'a', text: 'Богато и влиятельно.' },
  ],
  [
    { index: 1, answer: 'c', text: '«Если пропустить в антракте пятьдесят грамм коньяка, как сделал я, то хорошее расположение духа не покинет вас до окончания спектакля».' },
    { index: 2, answer: 'd', text: '«Это просто брызги шампанского, я в восторге!»' },
    { index: 3, answer: 'a', text: '«Купите помаду, модную футболку или кота. Не тратьте деньги на этот спектакль».' },
    { index: 4, answer: 'e', text: '«Да, театр умирает… А это, вероятно, предсмертные конвульсии».' },
    { index: 5, answer: 'b', text: '«Музыкантов хотелось опустить вниз. В конце было очень смешно. А еще я перечитала это произведение В. Шекспира».' },
  ],
];

const text = (i, j) => replies[i].find(a => a.index === j).text;

const getAnswer = (i, j) => replies[i].find(a => a.index === j).answer;

const getImg = (i, j) => replies[i].find(a => a.index === j).img;

const Label = styled.label`
  padding-left: 0.7rem;
  padding-bottom: 0.35rem;
  &:hover {
    cursor: pointer;
  }
`

const H1Styled = styled(H1)`
  margin-bottom: 2rem;
  margin-top: 2rem;
  font-size: 2.2rem;
  line-height: 1.3;
  text-align: center;
  ${phone(`
    font-size: 1em;
    line-height: normal;
  `)};
`;


export class Test extends React.PureComponent {
  componentDidMount() {
    window.location.hash = "";
    window.location.hash = `#question-${this.props.i}`;
  }
  render() {
    const { i, select, checked } = this.props;
    return (<div>
      <H1Styled id={`question-${i}`}>{headers[i]}</H1Styled>
      <Counter>{i + 1}/8</Counter>
      <div>
        <input checked={checked} type="radio" id="one" name="answer" onChange={() => select(getAnswer(i, 1))} />
        <Label htmlFor="one">{text(i, 1)}</Label>
      </div>
      <div>
        <input checked={checked} type="radio" id="two" name="answer" onChange={() => select(getAnswer(i, 2))} />
        <Label htmlFor="two">{text(i, 2)}</Label>
      </div>
      <div>
        <input checked={checked} type="radio" id="three" name="answer" onChange={() => select(getAnswer(i, 3))} />
        <Label htmlFor="three">{text(i, 3)}</Label>
      </div>
      <div>
        <input checked={checked} type="radio" id="four" name="answer" onChange={() => select(getAnswer(i, 4))} />
        <Label htmlFor="four">{text(i, 4)}</Label>
      </div>
      <div>
        <input checked={checked} type="radio" id="five" name="answer" onChange={() => select(getAnswer(i, 5))} />
        <Label htmlFor="five">{text(i, 5)}</Label>
      </div>
    </div>);
  }
}

const Answer = styled.div`
  display: flex;
  align-items: center;
  &:hover {
    cursor: pointer;
  }
`

export class TestImages extends React.PureComponent {
  componentDidMount() {
    window.location.hash = "";
    window.location.hash = "#question-images";
  }
  render() {
    const { i, select, checked, images } = this.props;
    return (<div>
      <H1Styled id={`question-images`}>{headers[i]}</H1Styled>
      <Counter>{i + 1}/8</Counter>
      <Answer>
        <input checked={checked} type="radio" id="one" name="answer" onChange={() => select(getAnswer(i, 1))} />
        <Img marginBottom="0" marginTop="10px" maxWidth="320px" sizes={images.grecha.sizes} onClick={() => select(getAnswer(i, 1))} />
      </Answer>
      <Answer>
        <input checked={checked} type="radio" id="two" name="answer" onChange={() => select(getAnswer(i, 2))} />
        <Img marginBottom="0" marginTop="10px" maxWidth="320px" sizes={images.salad.sizes} onClick={() => select(getAnswer(i, 1))} />
      </Answer>
      <Answer>
        <input checked={checked} type="radio" id="three" name="answer" onChange={() => select(getAnswer(i, 3))} />
        <Img marginBottom="0" marginTop="10px" maxWidth="320px" sizes={images.pizza.sizes} onClick={() => select(getAnswer(i, 1))} />
      </Answer>
      <Answer>
        <input checked={checked} type="radio" id="four" name="answer" onChange={() => select(getAnswer(i, 4))} />
        <Img marginBottom="0" marginTop="10px" maxWidth="320px" sizes={images.steak.sizes} onClick={() => select(getAnswer(i, 1))} />
      </Answer>
      <Answer>
        <input checked={checked} type="radio" id="five" name="answer" onChange={() => select(getAnswer(i, 5))} />
        <Img marginBottom="0" marginTop="10px" maxWidth="320px" sizes={images.shaurma.sizes} onClick={() => select(getAnswer(i, 1))} />
      </Answer>
    </div>);
  }
}

const Counter = styled.div`
  font-style: italic;
  color: grey;
  font-size: 0.8rem;
  padding-bottom: 2rem;
  text-align: center;
`

export class Article extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      i: 0,
      answers: {
        a: 0,
        b: 0,
        c: 0,
        d: 0,
        e: 0,
      },
      checked: true,
      selected: null,
      key: Date.now(),
    };
  }
  calculateFinal(answers) {
    const result = Object
      .keys(answers)
      .reduce((a, b) => answers[a] > answers[b] ? a : b);

    this.props.history.push(`/articles/idite_na/${result}?result`);
  }
  confirm() {
    const { answers } = this.state;
    answers[this.state.selected] += 1;

    window.location.hash = "";
    window.location.hash = "#question-" + this.state.i;

    if (this.state.i === 7) {
      this.calculateFinal(answers);
      return;
    }

    this.setState({
      answers,
      i: this.state.i + 1,
      key: Date.now(),
    })
  }
  select(i) {
    this.setState({ selected: i });
    setTimeout(() => this.confirm(), 200);
  }
  // eslint-disable-line react/prefer-stateless-function
  render() {
    const {
      data,
    } = this.props;

    const {
      grecha,
      pizza,
      salad,
      shaurma,
      steak,
    } = data;

    const { i } = this.state;

    return (
      <div>
        <ArticleHelmet
          url={url}
          image={data.cover.sizes.src}
          description="Ответьте на вопросы и узнайте, куда податься в первую очередь."
          title={`${title} | Театралий`}
        />
        <Img bg="none" noBorder marginTop="0" sizes={data.curtain1.sizes} id="curtain-left" />
        <Img bg="none" noBorder marginTop="0" sizes={data.curtain2.sizes} id="curtain-right" />
        <IditeNaCover />
        <Section withHomepageLink>
          <P>И снова здравствуйте. В России, несмотря ни на что, стартует новый театральный сезон. Ответьте на вопросы и узнайте, с какого спектакля начать его будет приятнее всего.</P>
          {i !== 5 && <Test key={this.state.key} i={this.state.i} confirm={() => this.confirm()} select={(i) => this.select(i)} />}
          {i === 5 &&
            <TestImages
              key={this.state.key}
              i={this.state.i}
              confirm={() => this.confirm()}
              select={(i) => this.select(i)}
              images={{
                grecha,
                pizza,
                salad,
                shaurma,
                steak,
              }}
            />}
        </Section>
        <Share url={url} />
        <Other url={url} />
      </div>
    );
  }
}

export default Article;

export const pageQuery = graphql`
  query IditeNaImageQuery {
    cover: imageSharp(id: { regex: "/idite_na/cover.jpg/" }) {
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
    grecha: imageSharp(id: { regex: "/idite_na/grecha.jpg/" }) {
      sizes(maxWidth: 200) {
        ...GatsbyImageSharpSizes
      }
    }
    pizza: imageSharp(id: { regex: "/idite_na/pizza.jpg/" }) {
      sizes(maxWidth: 200) {
        ...GatsbyImageSharpSizes
      }
    }
    salad: imageSharp(id: { regex: "/idite_na/salad.jpg/" }) {
      sizes(maxWidth: 200) {
        ...GatsbyImageSharpSizes
      }
    }
    shaurma: imageSharp(id: { regex: "/idite_na/shaurma.jpg/" }) {
      sizes(maxWidth: 200) {
        ...GatsbyImageSharpSizes
      }
    }
    steak: imageSharp(id: { regex: "/idite_na/steak.jpg/" }) {
      sizes(maxWidth: 200) {
        ...GatsbyImageSharpSizes
      }
    }
  }
`;
