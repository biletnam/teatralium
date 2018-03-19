import React from 'react'
import Helmet from 'react-helmet'
import Link from 'gatsby-link'
import styled from 'styled-components'

import { phone } from '../../utils/media'
import H1, { H1small } from '../../components/H1'
import ArticleHelmet from '../../components/ArticleHelmet'
import Img from '../../components/Img'
import H2 from '../../components/H2'
import H3 from '../../components/H3'
import Small from '../../components/Small'
import Section from '../../components/Section'
import P from '../../components/P'
import Date from '../../components/Date'
import Share from '../../components/Share'
import Other from '../../components/Other'
import Attention from '../../components/Attention'

import { TopCover } from '../../components/FillCover'

import { Playlist } from '../../components/Poem'

import elutin from '../images/otvechaet/elutin.jpg'
import cover from '../images/otvechaet/elutin_cover.png'

const url = 'https://teatralium.com/articles/i_bratva_za_slova_otvechaet'
const title =
  'И братва за слова отвечает как в лучшие дни: плейлист импресарио Федора Елютина'

const List = styled.ul`
  list-style-type: square;
`

const Wrapper = styled.div`
  width: 400px;
  margin: 0 auto;
`

export class Derevo extends React.PureComponent {
  // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div>
        <ArticleHelmet
          url={url}
          image={cover}
          width="1200"
          height="672"
          description="Слушаем музыку «по-разному, по-новому и фантазийно»."
          title={`${title} | Театралий`}
        />
        <TopCover bg={elutin} repeat bordered borderColor="purple">
          <Section background="rgba(255,255,255,0.6)">
            <Date>
              9 марта, <b>«За музыку отвечает»</b>
            </Date>
            <H1 size="3.4124em" center color="purple">
              И братва за&nbsp;слова отвечает как в&nbsp;лучшие дни
            </H1>
            <H1small center color="black">
              Плейлист импресарио Федора Елютина
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
            музыку отвечает». В прошлом выпуске мы слушали романтичный микс
            актера «Гоголь-центра»{' '}
            <Link to="/articles/ya_posadil_derevo/">Филиппа Авдеева</Link>, а
            сегодня наш гость — импресарио Федор Елютин, который мешает рэп с
            Розенбаумом и всем советует.
          </P>
          <p>
            «Музыка — важная часть моей жизни, я просыпаюсь и делаю утренние
            дела под музыку, слушаю в машине, она играет в офисе, плюс я всегда
            охочусь за классными треками. Плейлист мой оказался разношерстным,
            это нормально, настроение мое тоже скачет, так что мне нравятся вещи
            из абсолютно разных опер. Джей Зи — это, например, отсылочка в
            детство, когда я очень любил хип-хоп, а Розенбаум — дачная история,
            когда мы еще пели песни у костра. Это, наверное, винегрет, но после
            «Серафимыча» Llorca, скажем, отлично заходит. Самый мой любимый
            вариант — это включить shuffle, когда треки выстреливают рандомным
            образом. Так что девиз: „По-разному, по-новому и фантазийно“. Вот
            так. Всех обнимаю и целую».
          </p>
          <iframe
            scrolling="no"
            width="100%"
            height="60"
            src="https://www.mixcloud.com/widget/iframe/?hide_cover=1&mini=1&feed=%2FTeatralium%2Fbratva-za-slova-otvechaet%2F"
            frameBorder="0"
          />
          <Playlist>
            <List>
              <li>Blond:ish — «It starts now»</li>
              <li>Jay Z — «4:44»</li>
              <li>Скриптонит — «Сливочное масло»</li>
              <li>Аигел — «Ария судьи»</li>
              <li>Kalambya Boys — «Kivelenge» (the busy twist remix)</li>
              <li>SuperSonyc — «С кем ты?»</li>
              <li>Ата Как — «Obaa Sima»</li>
              <li>Oliver $ — «Doin`Ya Thang»</li>
              <li>Александр Розенбаум — «Серафимыч»</li>
              <li>Llorca — «I cry»</li>
              <li>ДДТ — «Ты не один»</li>
              <li>Marvin Gaye — «I heard it through the grapevine»</li>
              <li>Анна Герман — «Когда цвели сады»</li>
              <li>Connie Francis — «Siboney»</li>
            </List>
          </Playlist>
        </Section>
        <Share url={url} />
        <Other url={url} />
      </div>
    )
  }
}

export default Derevo
