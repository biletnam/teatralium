import React from 'react'
import Helmet from 'react-helmet'
import Link from 'gatsby-link'
import styled, { keyframes } from 'styled-components'

import { phone } from '../../utils/media'
import { REVOLUTION } from '../../utils/const'
import H1, { H1small } from '../../components/H1'
import ArticleHelmet from '../../components/ArticleHelmet'
import Img from '../../components/Img'
import H2 from '../../components/H2'
import H3 from '../../components/H3'
import H4 from '../../components/H4'
import Gallery from '../../components/Gallery'
import Small from '../../components/Small'
import Note, { NoteWrapper, NotedWord } from '../../components/Note'
import Section from '../../components/Section'
import P from '../../components/P'
import Date from '../../components/Date'
import Share from '../../components/Share'
import Video from '../../components/Video'
import Rest from '../../components/Rest'
import Other from '../../components/Other'

import img2 from '../images/annenkov/02.jpg'
import img3 from '../images/annenkov/03.jpg'
import img4 from '../images/annenkov/04.jpg'
import img5 from '../images/annenkov/05.jpg'
import img6 from '../images/annenkov/06.jpg'
import img7 from '../images/annenkov/07.jpg'
import img8 from '../images/annenkov/08.jpg'
import img10 from '../images/annenkov/010.jpg'
import img11 from '../images/annenkov/011.jpg'
import img12 from '../images/annenkov/012.jpg'
import img13 from '../images/annenkov/013.jpg'
import img14 from '../images/annenkov/014.jpg'
import img15 from '../images/annenkov/015.jpg'

import portrait from '../images/annenkov/portrait.gif'

import ann from '../images/annenkov/ann.jpg'
import cuirass from '../images/annenkov/cuirass.jpg'
import brula from '../images/annenkov/brula.jpg'

const gallery1 = [img2, img3, img4]
const gallery2 = [img5, img6, img7, img8]
const gallery3 = [img10, img11, img12, img13]
const gallery4 = [img14, img15]

const shadow = `0 0 30px rgba(255, 255, 255, 0.45), 0 0 60px rgba(255, 255, 255, 0.25)`
const shadow2 = `0 0 30px rgba(255, 255, 255, 0.55), 0 0 60px rgba(255, 255, 255, 0.35)`
const shadow3 = `0 0 100px rgba(255, 255, 255, 0.1)`
const noShadow = `text-shadow: none;`
const op = (val = '1') => `opacity: ${val};`

const url = 'https://teatralium.com/articles/ozhila_krasnaya_stsena'
const title = 'Как художник Юрий Анненков стал «модельером» революции'

const H2Styled = styled(H2)`
  font-size: 1.713em;
  margin-top: 4rem;
  margin-bottom: 2rem;
`

const revolutionBorder = `
  box-shadow: 1px -4px 45px -5px ${REVOLUTION};
`
const ImgStyled = (props) => <Img
  {...props}
  noBorder
  customBorder={revolutionBorder}
/>

const H4Styled = styled(H4)`color: ${REVOLUTION};`

const StyledGallery = (props) => <Gallery
  {...props}
  imgProps={{
    customBorder: revolutionBorder,
    noBorder: true,
  }}
/>

export class Annenkov extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div>
        <ArticleHelmet
          url={url}
          image={ann}
          description="Костюмы для массовых зрелищ и форма милиции 20-х годов."
          title={`${title} | Театралий`}
        />
        <Section>
          <Date>14 ноября 2017, текст:&nbsp;<b>Ольга Хорошилова</b></Date>
          <H1 center>Ожила красная сцена</H1>
          <H1small center>Как художник Юрий Анненков стал «модельером» революции</H1small>
          <P color={REVOLUTION}>В октябре 1920 года на Дворцовой площади 10 тысяч человек разыграли один из самых массовых спектаклей в истории — «Взятие Зимнего дворца» Николая Евреинова. То, как мы представляем себе революцию, во многом идет именно от той театрализованной модели, возникшей спустя три года после исторических событий, о которых идет речь. Искусствовед, историк моды Ольга Хорошилова рассказала «Театралию» о главном художнике спектакля Евреинова Юрии Анненкове, который получил в качестве гонорара табак на сто папирос и два килограмма мороженых яблок.</P>
          <p>Юрий Анненков, известный портретист-эмигрант, обожал травить байки. В компании таких же, как он, русских эмигрантов он иногда рассказывал, живо, в лицах, забавную историю о том, как неожиданно стал «модельером революции». Говорил, как одевал красный Петроград и красную Москву, как сочинил костюм Троцкому и придумал форму петроградской милиции. Друзья-эмигранты Анненкову не верили, посмеивались, называли его «рассказочником» — знали, что Юрий Павлович очень любит приврать. Но в этой своей истории Анненков ни выдумал почти ничего. Фотографии и документы, разбросанные нынче по государственных архивам и частным коллекциям, подтверждают то, что Юрий Павлович так живо описывал в лицах. Он, действительно, был «модельером революции», единственным в своем роде.</p>
          <ImgStyled marginTop="4rem" marginBottom="4rem" src={ann} desc="Юрий Анненков родился 11 (23) июля 1889 года в Петропавловске на севере Казахстана. В 1924-м выехал на выставку в Венецию и остался в Европе. Умер в Париже в 1974 году." />
          <H4Styled>«Ленин топтал мои платья»</H4Styled>
          <p>1917-й год Анненков проводил в Петрограде. Осенью грянула революция. И юркий Юрий Павлович примкнул к большевикам, выразил полную солидарность с товарищами политиками и полную готовность душой и сердцем влиться в борьбу за новую жизнь и новое искусство.</p>
          <ImgStyled src={portrait} maxWidth="400px" desc="Юрий Анненков. Автопортрет, созданный во время революции 1917-го. Опубликован в его альбоме «Портреты», 1922 год" />
          <p>Быстроногий Анненков бегал по петроградским кабинетам новых правителей, придумывал красочные шествия, мерз на митингах и отогревался лекциями для учащихся художественных мастерских: учащиеся читали по слогам и стыдливо потели при виде живописных Венер. Он готовил массовые зрелища в пользу русских военнопленных, участвовал в выставках, боролся за организацию всероссийского профессионального союза работников искусств… Был нарасхват.</p>
          <ImgStyled src={img2} desc="В. И. Ленин выступает с трибуны, созданной и оформленной Юрием Анненковым. 7 ноября 1918 года" />
          <ImgStyled src={img3} desc="Владимир Ленин произносит речь с трибуны. 7 ноября 1918 года" />
          <ImgStyled src={img4} desc="Владимир Ленин открывает мемориальную доску на стене Кремля в память павших за мир и братство народов. Оформление Юрия Анненкова. 7 ноября 1918 года" />
          <p>В октябре восемнадцатого его вызвали в Москву и назначили председателем «флажной комиссии». Задача — подготовить оформление Красной площади к 7 ноября, годовщине Октябрьской революции. Художник носится из Наркомата имуществ в Моссовет, из Моссовета — в кремлевские кладовые, из кладовых — в художественные мастерские, оттуда — прямиком на площадь. И так ежедневно десятки раз, без отдыха, без сна. У него в подчинении «десятки портных», в его распоряжении «многие тысячи аршин материи». Количество Юрий Павлович все-таки преувеличил: судя по документам Наркомата имуществ, он получил только 5 тысяч аршин.</p>
          <p>Сценарий действа незамысловат. Столица в празднично-траурном убранстве. Венки, лозунги, плакатная живопись. Трибуны в кумачовых полотнищах. Оркестр возвещает начало парада. Маршируют войска, гудит авиация, по площади проходят штатские (рабочие, химики, инженеры) и за ними члены IV Съезда. Ленин открывает цементную доску «в память погибших за мир и братство народов» и, поднявшись на трибуну, кричит победную речь.</p>
          <p>Анненков из кожи вон лез, чтобы успеть к сроку. Он вместе с десятками рабочих сделал лозунги, расписал плакаты и срубил гигантскую платформу для выступления Ленина. Он дико устал, едва держался на ногах: не спал целых две недели! И, между делом, совершил истинно героический поступок. Несмотря на дефицит материалов, умудрился умыкнуть из-под самого носа Наркомата имуществ несколько аршин кумачовой ткани — на платье своей супруге. Он ликовал, как юнец. Но в самый последний момент ему позвонил Николай Подвойский, член Реввоенсовета. Диспозиция изменилась, срочно нужны дополнительные трибуны для членов правительства и других официальных лиц. «Товарищ Анненков, быстрее, полагаемся на Вас, не забудем».</p>
          <p>Делать нечего. Ночью с 6 на 7 ноября Анненков побежал с рабочими и саперами в беспробудную мерзлую ночь строить тумбы, подмостки. Кумачовой ткани не хватило. И художник скрепя сердце выстелил перед трибуной на ступенях тот самый прибереженный красный текстиль. В 9 часов утра Ленин проворно зашагал по несбывшимся платьям супруги. Так вождь революции растоптал прекрасную мечту о революционной моде и красных платьях.</p>
          <H4Styled marginTop="4rem">«Я одевал Петроград»</H4Styled>
          <p>В ноябре 1920-го Анненков принял участие в подготовке массового шоу «Взятие Зимнего дворца», которое планировалось показать на площади Урицкого (бывшей Дворцовой) в честь третьей годовщины революции. Главным режиссером назначили Николая Евреинова. Юрия Павловича выбрали главным художником.</p>
          <p>У арки Главного штаба соорудили «белую» и «красную» трибуны. Шоу открывал актер, игравший Керенского. Его лай, театральные жесты, оловянный марш-марш по сцене заводил статистов. «Белая» платформа учащенно двигалась в ритм станков, печатавших ассигнации. Трудовые массы на «красной» платформе уныло наблюдали триумф «капиталистов». Но вот раздались голоса: «Ленин, Ленин». Ожила «красная» сцена. Вождь пролетариата диктовал новый ритм. Под его картавое «тга-та-та» задвигались рабочие, усердно заработал пулемет. «Белая» платформа пустела, ее статисты в автомобиле мчали в Зимний дворец. Так заканчивался первый акт. Акт второй — взятие Зимнего. Дворец превращен в театр теней. Слепые прожекторы (целых 150 штук) хаотично ощупывают фасад. Непрерывно грохочут орудия «Авроры». Под треск винтовок и рев шрапнелей прожекторы медленно и дружно сходятся на огромном красном полотнище над поверженным Зимним дворцом.</p>
          <p>В постановке задействовали от 8 до 10 тысяч актеров. И каждого Анненков должен был одеть соответственно роли. Проблем с «красной» платформой не возникло. Рабочая, простая одежда 1920 года почти ничем не отличалась о той, что носили вершители Октября. Гораздо больше времени и нерв Юрий Павлович потратил на костюмы артистов «белой» платформы. Здесь должны были заседать заплывшие ленью министры, перекатываться тугими мешками черно-белые капиталисты, отсюда должен был вещать Керенский, призывая юнкеров и женщин ударного батальона дать отпор красным бунтарям.</p>
          <ImgStyled src={img5} desc="Николай Евреинов, режиссер действа «Взятие Зимнего дворца». 1920-е годы" />
          </Section>
            <StyledGallery images={[img6, img7]} descs={[
              "Проект сценографии постановки «Взятие Зимнего дворца». 1920 год",
              "Статисты «белой» платформы, изображающие царских министров. Костюмы Юрия Анненкова. 1920 год",
              ]} />
          <Section>
          <ImgStyled src={img8} desc="Статисты «красной» платформы в костюмах, разработанных Юрием Анненковым. 1920 год" />
          <NoteWrapper>
            <p>Но обошлись малой кровью: «белым» сшили лишь то, что нельзя было найти. А в революционном Петрограде можно было найти почти все. На армейских складах и в реквизированных дворцах высились горы рубах, мундиров, сапог, фуражек, <NotedWord>кирас</NotedWord>, касок, фраков, цилиндров, папах. Судя по кадрам «Взятия Зимнего дворца», статисты, игравшие министров, надели подлинные мундиры сановников и чинов императорского двора. «Банкиры-спекулянты» шарами катались по сцене в черных фраках, пальто и цилиндрах — их подобрали из революционного реквизита, кое-что вытребовали из театров. Со статистами, изображавшими армию, было проще: шинелями, гимнастерками, погонами и папахами были завалены петроградские <NotedWord>цейхгаузы</NotedWord>. На старых кадрах постановки видны замечательные детали времени. К примеру, актеры, изображавшие генералов на «белой» платформе, играли в подлинных парадных киверах конца 1900-х годов.</p>
            <Note background="#fdd6d3" top="40px">
              Кираса — защитное снаряжение в виде металлического панциря, который закрывал спину и грудь.
              <Img
                src={cuirass}
                maxWidth="200px"
                marginTop="1rem"
                noBorder
                desc="Российская кираса, 1915 год" />
            </Note>
            <Note background="#fdd6d3" left top="250px">Цейхгауз — воинский склад для оружия и обмундирования.</Note>
          </NoteWrapper>
          <Video id="eyrAQiTbLhI" />
          <Small>«Взятие Зимнего дворца»</Small>
          <p>Анненков отвечал не только за костюмы, но и за революционный реквизит. Он получил броневики, пулеметы, винтовки и разрешение властей использовать крейсер «Аврору», который для этих целей пришвартовали у набережной поблизости с Зимним дворцом. Накладки, конечно были. Но шоу удалось. И щедрое «красное» правительство выделило постановщикам премии. Анненков, как и его коллеги, получил табак на сто папирос и два килограмма мороженых яблок. А Евреинова, главного режиссера, одарили, сверх того, лисьей шубой, у которой, вероятно, была столько же богатая старорежимная биография, как и у вещей, участвовавших в шоу.</p>
          <H4Styled marginTop="4rem">Формотворец</H4Styled>
          <NoteWrapper>
            <p>В начале 1920-х Юрий Павлович, тонкий знаток костюма и щеголь, участвовал в разработке настоящих, а не сценических, костюмов. В 1923-м по заданию Льва Троцкого он придумал ему особый форменный наряд, в котором председатель Реввоенсовета позировал для портрета. На Льве Давыдовиче были непромокаемое полувоенное пальто с карманом по середине груди, эффектные кожаные перчатки с длинными крагами, сапоги, фуражка с автомобильными очками, планшет, кобура. И никаких опознавательных знаков: ни петлиц, ни нашивок, ни красной звезды. В костюме Анненкова Троцкий преобразился в полубога, в военного демиурга воистину вселенского масштаба. Понятно, что этот костюм очень понравился Льву Давыдовичу.</p>
            <Note background="#fdd6d3" top="200px">Подробнее об истории создания костюма для Троцкого можно почитать в <a href="https://rg.ru/2017/10/31/rodina-kostum-trotskij.html">этой статье Ольги Хорошиловой</a>.</Note>
          </NoteWrapper>
          <p>Но были в творчестве художника другие проекты формы.</p>
          </Section>
          <StyledGallery images={[img10, img11]} descs={[
            "Юрий Анненков. Графический портрет Льва Троцкого, 1923 год. Подготовка для масштабного портрета. Опубликован в альбоме Ю. Анненкова «Портреты» 1926 года.",
            "Юрий Анненков и Лев Троцкий в костюме, придуманном художником специально для будущего портрета, 1923 год. Коллекция Ольги Хорошиловой.",
            ]} />
          <Section>
          <ImgStyled src={img12} desc="Фототипия портрета Льва Троцкого, созданного Юрием Анненковым в 1923 году. Портрет пропал после 1924 года." />
          <ImgStyled src={img13} desc="Портрет Л. Троцкого, созданный Ю. Анненковым, среди других работ художника на Венецианской биеннале, 1924 год" />
          <p>Во время революции Юрий Павлович свел близкое знакомство с Борисом Каплуном, заведующим административным отделом Петросовета. Это был настоящий романтик. Кровожадный и жестокий, тонкий знаток пыточного искусства и обожатель всяческих занятных аппаратиков. Он находил особую прелесть в эксгумации великокняжеских останков и считал главной своей партийной задачей строительство крематория в Петрограде, заваленном безымянными трупами. В 1920-м крематорий был открыт, став первым в советской республики. Товарищ Каплун, его вдохновенный создатель, лично руководил запуском регенеративной печи «Металлург» и торжественно (рисуясь, конечно) сжег первого покойного — красноармейца Малышева, девятнадцати лет от роду.</p>
          <p>Гурман Каплун придумал особое ночное развлечение: гостей, которых собирал у себя на служебной квартире, полной реквизированной мебели, картин и орудий убийства (для будущего музея криминалистики), он приглашал на кремацию трупа, специально для этого приготовленного. Гости редко отказывались. Предложение Каплуна стеснительно принимали даже тишайшие балерины: любопытство побеждало страх. И потом они, счастливо избежавшие репрессивных советских печей, живописно пересказывали увиденное — как вспыхивал гроб, как он разваливался на части, как вдруг в огне поднималась рука безымянного трупа, как искрились глаза и выливалась синяя магма мозга.</p>
          <p>Каплун был милейшим человеком. Чувствительным, на редкость образованным. Он искренне любил поэзию и музыку, имел персональную ложу в Мариинском театре, неплохо разбирался в балете, но лучше — в балеринах. Он искренне, от всей души, помогал Блоку, Анненкову, Гумилеву. Щедро делился с ними наркотиками и эфиром и раздавал заказы: к примеру, написать заметку в журнал «Красный милиционер» или прочитать лекцию в Первой общеобразовательной коммуне милиционеров, которую он же и основал.</p>
          <p>Каплун очень заботился об интеллектуальном уровне и нравственном облике блюстителей порядка. Пекся даже об их внешности. Анненков упоминает (правда, всего только раз — во французской книге «Одевая звезд») о том, что они вместе разработали первую форму для петроградской милиции. Каплун действительно активно участвовал в разработке формы и лично контролировал, как ее носили: сохранились его донесения 1918 года на имя Военного комиссара Северной области. Но форма милиции в тот период утверждалась на более высоком уровне — коллегией НКВД. Каплун и Анненков, если имели какое-то отношение к новому регламенту, то лишь опосредованное. Впрочем, это не помешало Юрий Павловичу сочно рассказывать о Каплуне и о том, как они вместе сочинили форму милиционерам.</p>
          <ImgStyled src={img14} desc="Опыт проектирования формы и костюмов для революционных действ пригодился Юрию Анненкову в эмиграции. Сцена из фильма «Московский ночи». Артисты одеты в костюмы, спроектированные художником на основе русской офицерской формы эпохи 1914-1917 годов. Коллекция Ольги Хорошиловой." />
          <ImgStyled src={img15} desc="Сцена из фильма «Отец Сергий», 1945 год. Актер одет в костюм, спроектированный Юрием Анненковым на основе обмундирования русского придворного чина. Коллекция Ольги Хорошиловой." />
          <p>Этот его костюмный опыт времен революции позже очень пригодился. Эмигрировав во Францию, Юрий Павлович стал не просто именитым художником, он превратился в модельера, сочинявшего костюмы для театра и кинематографа. Его даже номинировали на премию «Оскар» за лучшие костюмы к фильму. И, не смотря на то, что награды он не получил (проиграл американской художнице Эдит Хэд), Анненков иногда любил приврать и на эмигрантских посиделках описывал, как присутствовал на вручении заветного приза. Эмигранты посмеивались, не верили — знали, как Юрий Павлович любит травить байки. Но его рассказы о том, как он «одевал революцию» были сущей правдой. Ну, или почти правдой.</p>
          <ImgStyled
            src="https://upload.wikimedia.org/wikipedia/commons/d/d2/Mandelstam%2C_Chukovsky%2C_Livshits_%26_Annenkov_1914_Karl_Bulla_%28with_smile%29.jpg"
            desc="Осип Мандельштам, Корней Чуковский, Бенедикт Лившиц и Юрий Анненков на фотографии Карла Буллы, 1914 год"
          />
        </Section>
        <Share url={url} />
        <Other url={url} />
      </div>
    );
  }
}

export default Annenkov
