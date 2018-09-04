import React from "react";
import styled from 'styled-components';

import FillCover, { TopCover } from "../../../components/FillCover";
import ArticleHelmet from "../../../components/ArticleHelmet";
import Button from "../../../components/Button";
import Section from "../../../components/Section";
import H1 from "../../../components/H1";
import { phone } from '../../../utils/media';

const url = "https://teatralium.com/articles/idite_na/b";
const title = "Идите на: с какого спектакля вам начать сезон";

const Bg = styled.div`background: ${p => p.bg}`;

const A = styled.a`color: yellow`;

const Share = styled.div`
  font-size: 2rem;
  color: yellow;
  text-shadow: 2px 2px black;
  font-variant: small-caps;
  letter-spacing: 0.2rem;
  text-align: center;
  padding-bottom: 1rem;
  padding-top: 1rem;
  ${phone('display: none;')}
`

const ButtonWrapper = styled.div`
  display: flex;
  ${phone('flex-direction: column; width: 100%;')}
`

const StyledButton = styled(Button)`
  filter: blur(0.5px);
`

const StyledFillCover = styled(FillCover)`
  height: 100vh;
  ${phone(`
    height: 1200px;
  `)}
`

const StyledH1 = styled(H1)`
  padding-bottom: 1rem;
  text-shadow: 2px 2px black;
  ${phone('font-size 1rem;')}
`;

const GovnoCover = ({ sizes, ...props }) => (
  <Bg bg="rgba(255,0,0,0.2)">
    <StyledFillCover contain pathname={props.pathname} sizes={sizes} {...props}>
      <Section margin="0" align="left" color="white" size="1.5rem">
        <StyledH1 lineHeight="1.2" size="2rem">Идите на «Сквозь / Скольжение по возможностям» Всеволода Лисовского</StyledH1>
        <hr />
        Кажется, вам осточертело все, что связано с так называемым классическим театром. Он никуда не денется, покуда существует эта планета, а вы отправляйтесь в <A href="https://www.facebook.com/events/682276468777274/" target="_blank">двухдневное жд-путешествие</A> по родине с Всеволодом Лисовским, пятью актрисами и книгой Вернера Гейзенберга «Физика и философия». Не забудьте потом рассказать.
        <hr />
        <div>
          <Share>поделиться результатом:</Share>{' '}
          <ButtonWrapper>
            <StyledButton
              margin="0"
              hover="#FF69B4"
              color="white"
              border="white"
              href={`https://www.facebook.com/sharer/sharer.php?u=${url}`}>facebook</StyledButton>
            <StyledButton
              margin="0"
              hover="#FF69B4"
              color="white"
              border="white"
              href={`http://vkontakte.ru/share.php?url=${url}`}>vkontakte</StyledButton>
          </ButtonWrapper>
        </div>
      </Section>
    </StyledFillCover>
  </Bg>
);


export class Article extends React.PureComponent {
  componentWillMount() {
    if (!this.props.location.search.includes('result')) {
      this.props.history.push('/articles/idite_na');
    }
  }
  // eslint-disable-line react/prefer-stateless-function
  render() {
    const { data } = this.props;
    return (
      <div>
        <ArticleHelmet
          url={url}
          image={data.cover.sizes.src}
          description=" Ответьте на вопросы и узнайте, куда податься в первую очередь."
          title={`${title} | Театралий`}
        />
        <GovnoCover sizes={data.bg.sizes} pathname={this.props.location.pathname} />
      </div>
    );
  }
}

export default Article;

export const pageQuery = graphql`
query IditeNaBImageQuery {
  cover: imageSharp(id: { regex: "/idite_na/b-cover.jpg/" }) {
    sizes(maxWidth: 1200) {
        ...GatsbyImageSharpSizes
    }
  }
  bg: imageSharp(id: { regex: "/idite_na/b.jpg/" }) {
    sizes(maxWidth: 1200) {
        ...GatsbyImageSharpSizes
    }
  }
}
`;
