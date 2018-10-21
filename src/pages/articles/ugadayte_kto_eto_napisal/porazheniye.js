import React from "react";
import styled from "styled-components";

import FillCover from "../../../components/FillCover";
import ArticleHelmet from "../../../components/ArticleHelmet";
import Button from "../../../components/Button";
import Section from "../../../components/Section";
import Img from "../../../components/ImgG/";
import H1 from "../../../components/H1";
import { phone } from "../../../utils/media";

const url =
  "https://teatralium.com/articles/ugadayte_kto_eto_napisal/porazheniye";
const title = "«Спектакль, завораживающий с первой секунды»";

const A = styled.a`
  color: yellow;
`;

const Share = styled.div`
  font-size: 2rem;
  color: yellow;
  text-shadow: 2px 2px black;
  font-variant: small-caps;
  letter-spacing: 0.2rem;
  text-align: center;
  padding-bottom: 1rem;
  padding-top: 1rem;
  ${phone("font-size: 1rem;")};
`;

const ButtonWrapper = styled.div`
  display: flex;
  ${phone("flex-direction: column; width: 100%;")};
`;

const StyledButton = styled(Button)``;

const StyledFillCover = styled(FillCover)`
  background: black;
`;

const StyledH1 = styled(H1)`
  padding: 2rem 0;
  text-shadow: 2px 2px black;
  text-align: center !important;
  ${phone("font-size 1rem;")};
`;

const GovnoCover = ({ sizes, ...props }) => (
  <StyledFillCover {...props}>
    <Section margin="0" align="left" color="white" size="1.2rem">
      <Img
        sizes={sizes}
        round
        maxWidth="170px"
        marginTop="0"
        marginBottom="2rem"
      />
      <StyledH1 lineHeight="1.2" size="1.8rem">
        Вы плохо отличаете критиков от блогеров
      </StyledH1>
      <hr />
      Отличать написанное критиками и блогерами у вас выходит плохо.
      Потренируйтесь напоследок на этом шедевре критика Марины Дмитриевской:
      «”Не выходи из комнаты, не совершай ошибку?“ — цитирует за моей спиной
      юный образованный зритель. Но спектакль как раз о необходимости выходить.
      Потому что протест и бунт имеют смысл (о, юный зритель!) — только когда за
      стенкой есть тетя Галя или еще кто-то. А если тетю Галю с переломом ноги
      увезли в больницу и ты оказался в полной тишине — это непереносимо. И не с
      кем бороться. И в жизни остается только звук чайника». Это было написано в
      октябре 2018-го.
      <hr />
      <div>
        <Share>поделиться результатом:</Share>{" "}
        <ButtonWrapper>
          <StyledButton
            margin="0"
            hover="#FF69B4"
            color="white"
            border="white"
            href={`https://www.facebook.com/sharer/sharer.php?u=${url}`}
          >
            Facebook
          </StyledButton>
          <StyledButton
            margin="0"
            hover="#FF69B4"
            color="white"
            border="white"
            href={`http://vkontakte.ru/share.php?url=${url}`}
          >
            ВКонтакте
          </StyledButton>
        </ButtonWrapper>
      </div>
    </Section>
  </StyledFillCover>
);

export class Porazheniye extends React.PureComponent {
  componentDidMount() {
    if (typeof window !== undefined) {
      document.body.style.background = "black";
    }
  }
  componentWillUnmount() {
    if (typeof window !== undefined) {
      document.body.style.background = "white";
    }
  }
  // eslint-disable-line react/prefer-stateless-function
  render() {
    const { data } = this.props;
    return (
      <div>
        <ArticleHelmet
          url={url}
          image="/share/ugadayte-lose.jpg"
          description="Угадайте, кто это написал: критик или блогер."
          title={`${title} | Театралий`}
        />
        <GovnoCover sizes={data.bg.sizes} />
      </div>
    );
  }
}

export default Porazheniye;

export const pageQuery = graphql`
  query UgadaytePorazheniyeImageQuery {
    bg: imageSharp(id: { regex: "/ugadayte/2.jpg/" }) {
      sizes(maxWidth: 1200) {
        ...GatsbyImageSharpSizes
      }
    }
  }
`;
