import React from "react";
import Helmet from "react-helmet";
import Link from "gatsby-link";
import styled, { keyframes } from "styled-components";

import { phone } from "../../utils/media";
import H1, { H1small } from "../../components/H1";
import ArticleHelmet from "../../components/ArticleHelmet";
import Img from "../../components/Img";
import H2 from "../../components/H2";
import H3 from "../../components/H3";
import Small from "../../components/Small";
import Note, { NoteWrapper, NotedWord } from "../../components/Note";
import Section from "../../components/Section";
import P from "../../components/P";
import Date from "../../components/Date";
import Share from "../../components/Share";
import Video from "../../components/Video";
import Rest from "../../components/Rest";
import Other from "../../components/Other";
import Poem from "../../components/Poem";

import lead from "../images/belomor/1.jpg";

import img2 from "../images/belomor/2.jpg";
import img3 from "../images/belomor/3.jpg";
import img4 from "../images/belomor/4.jpg";
import img5 from "../images/belomor/5.jpg";

import gal1 from "../images/belomor/gal1.jpg";
import gal2 from "../images/belomor/gal2.jpg";
import gal3 from "../images/belomor/gal3.jpg";

import idavarp from "../images/belomor/idavarp.jpg";

const shadow = `0 0 30px rgba(255, 255, 255, 0.45), 0 0 60px rgba(255, 255, 255, 0.25)`;
const shadow2 = `0 0 30px rgba(255, 255, 255, 0.55), 0 0 60px rgba(255, 255, 255, 0.35)`;
const shadow3 = `0 0 100px rgba(255, 255, 255, 0.1)`;
const noShadow = `text-shadow: none;`;
const op = (val = "1") => `opacity: ${val};`;

const flicker = keyframes`
  0% {
    ${op("0")}
  }
  10% {
    ${op("0")}
    ${noShadow}
  }
  10.1% {
    ${op()}
    ${noShadow}
  }
  10.2% {
    ${op("0")}
    ${noShadow}
  }
  20% {
    ${op("0")}
    ${noShadow}
  }
  20.1% {
    ${op()}
    text-shadow: 0 0 30px rgba(255, 255, 255, 0.25);
  }
  20.6% {
    ${op("0")}
    ${noShadow}
  }
  30% {
    ${op("0")}
    ${noShadow}
  }
  30.1% {
    ${op()}
    text-shadow: ${shadow};
  }
  30.5% {
    ${op()}
    text-shadow: ${shadow};
  }
  30.6% {
    ${op("0")}
    ${noShadow}
  }
  45% {
    ${op("0")}
    ${noShadow}
  }
  45.1% {
    ${op()}
    text-shadow: ${shadow};
  }
  50% {
    ${op()}
    text-shadow: ${shadow};
  }
  55% {
    ${op()}
    text-shadow: ${shadow};
  }
  55.1% {
    ${op("0")}
    ${noShadow}
  }
  57% {
    ${op("0")}
    ${noShadow}
  }
  57.1% {
    ${op()}
    text-shadow: ${shadow2};
  }
  60% {
    ${op()}
    text-shadow: ${shadow2};
  }
  60.1% {
    ${op("0")}
    ${noShadow}
  }
  65% {
    ${op("0")}
    ${noShadow}
  }
  65.1% {
    ${op()}
    text-shadow: ${shadow2}, ${shadow3};
  }
  75% {
    ${op()}
    text-shadow: ${shadow2}, ${shadow3};
  }
  75.1% {
    ${op("0")}
    ${noShadow}
  }
  77% {
    ${op("0")}
    ${noShadow}
  }
  77.1% {
    ${op()}
    text-shadow: 0 0 30px rgba(255, 255, 255, 0.55), 0 0 60px rgba(255, 255, 255, 0.4), 0 0 110px rgba(255, 255, 255, 0.2), ${shadow3};
  }
  85% {
    ${op()}
    text-shadow: 0 0 30px rgba(255, 255, 255, 0.55), 0 0 60px rgba(255, 255, 255, 0.4), 0 0 110px rgba(255, 255, 255, 0.2), ${shadow3};
  }
  85.1% {
    ${op("0")}
    ${noShadow}
  }
  86% {
    ${op("0")}
    ${noShadow}
  }
  86.1% {
    ${op()}
    text-shadow: 0 0 30px rgba(255, 255, 255, 0.6), 0 0 60px rgba(255, 255, 255, 0.45), 0 0 110px rgba(255, 255, 255, 0.25), ${shadow3};
  }
  100% {
    ${op()}
    text-shadow: 0 0 30px rgba(255, 255, 255, 0.6), 0 0 60px rgba(255, 255, 255, 0.45), 0 0 110px rgba(255, 255, 255, 0.25), ${shadow3};
  }
`;

const url = "https://teatralium.com/articles/morskoy_tsar_belomor";
const title = "«Морской царь Беломор»: как и кем создавались театры ГУЛАГа";

const H2Styled = styled(H2)`
  font-size: 1.713em;
  margin-top: 4rem;
  margin-bottom: 2rem;
`;

const H1Styled = styled(H1)`
  animation: ${flicker} 5s linear;
`;

const Wrapper = styled.div`
}`;

export class Belomor extends React.PureComponent {
  // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <Wrapper>
        <ArticleHelmet
          url={url}
          image={lead}
          description="Культурно-воспитательная работа в советских лагерях."
          title={`${title} | Театралий`}
        />
        <Section>
          <Date>
            7 ноября 2017, текст:&nbsp;<b>Виктор Вилисов</b>
          </Date>
          <H1Styled center>«Морской царь Беломор»</H1Styled>
          <H1small center>Как и кем создавались театры ГУЛАГа</H1small>
          <P>
            В столетнюю годовщину Октябрьской революции «Театралий» обратился к
            событиям, происходившим несколько позже прихода большевиков. Главное
            управление лагерей было создано в начале 1930&#8209;х; спустя
            несколько лет в Севвостлаге под Магаданом был собран первый
            театральный коллектив, состоящий из заключенных.
          </P>
        </Section>
        <Img maxWidth="100%" src={lead} />
        <Small outside>
          Ансамбль баянистов при КВЧ. Инта, Коми АССР. Фото начала 1950&#8209;х
        </Small>
        <Section withHomepageLink>
          <NoteWrapper>
            <p>
              Чтобы написать этот материал, автору пришлось прочитать много
              страшных текстов, но один из них страшнее прочих —{" "}
              <a href="http://www.kolyma.ru/magadan/index.php?newsid=387">
                воспоминания
              </a>{" "}
              Иды Гекдишман, в первом замужестве Зискиной, во втором —
              Варпаховской. Родилась в 1911 году в Одессе, в сентябре
              1937&#8209;го забрали мужа Давида, обвиненного в связи с
              харбинскими фашистами, в октябре его расстреляли. В ноябре
              арестовали саму Иду как члена семьи изменника родины и по
              приговору Особого совещания при НКВД отправили на восемь лет в
              исправительно-трудовые лагеря. Томский лагерь, владивостокский,
              колымский; наконец — в 1943&#8209;м — в Магадан, где Зискина
              становится членом культбригады. Главный эпизод ее тогдашней
              биографии — одновременно самое страшное место воспоминаний: в
              1944&#8209;м, после знакомства с будущим мужем{" "}
              <NotedWord>Леонидом Варпаховским</NotedWord>, тоже зэком, она
              начинает репетиции партии Виолетты из «Травиаты», которую решили
              поставить на сцене драматического театра Управления
              Северо-Восточных исправительно-трудовых лагерей (УСВИТЛ) по
              инициативе местного дирижера Петра Ладирдо.
            </p>
            <Note top="300px">
              Леонид Викторович Варпаховский, сценарист, театральный и
              кинорежиссер, три года проработал ученым секретарем ГЭКТЕМАСа
              (Государственных экспериментальных театральных мастерских имени
              Всеволода Мейерхольда). Был арестован в 1936 году «за содействие
              троцкизму» и сослан в Казахстан, а в 1940&#8209;м оказался в
              исправительно-трудовом лагере Магадана «за контрреволюционную
              агитацию».
            </Note>
          </NoteWrapper>
          <Img
            marginTop="4rem"
            marginBottom="4rem"
            src={idavarp}
            desc="Ида и Леонид Варпаховские"
          />
          <NoteWrapper>
            <p>
              Варпаховский, сначала скептически отнесшийся к идее, впоследствии
              был назначен режиссером. Поразительно читать, в частности, о том,
              что во всем этом чудовищном контексте Варпаховский занимался
              театральными инновациями: например, поместил оркестр на сцену,
              из-за чего дирижер до последнего отказывался принимать участие в
              спектакле. Но генеральный ужас возникает на вот этом диссонативном
              стыке: опера Верди «Травиата» в 1944 году на сцене лагерного
              магаданского театра, созданного и поддерживаемого заключенными,
              которые пели, сами шили себе костюмы и выстраивали декорации.
              Варпаховская пишет: «Когда обнаружилось, что у нас не хватает
              мужских голосов для хора, Л. В. обратился к{" "}
              <NotedWord>Александре Романовне</NotedWord>. Она его утешила: „Не
              волнуйся, Варпаховский, к нам вот-вот прибывает из Томска
              эстонская капелла в полном составе“». В августе 1944&#8209;го в
              Магадан этапировали Государственный художественный ансамбль
              Эстонской ССР, хор пополнился знатно.
            </p>
            <Note top="250px">
              Александра Романовна Гридасова — начальница магаданского лагеря,
              заведовала в том числе культбригадой.
            </Note>
          </NoteWrapper>

          <p>
            Сама природа пространства ГУЛАГа — по сути своей предельно зыбкая,
            неустойчивая, готовая обрушиться или трансформироваться в любой
            момент — обуславливает, кажется, единственный вид искусства, который
            там мог сколько-нибудь полноценно существовать, — искусство
            процессуальное и перформативное. Ну, в самом деле, не рисовать же
            там картины, чтоб вешать их потом на стены барака, не писать же
            партитуры. Почти нулевые возможности архивирования делают возможным
            только арт-деятельность, осуществляющуюся здесь и сейчас.{" "}
          </p>
          <H2Styled>Культурно-воспитательный отдел</H2Styled>
          <p>
            Для ведения культурной работы в местах заключения был создан
            специальный отдел ОГПУ, названный «культурно-воспитательной частью»,
            а в 1934 году переименованный в КВО ГУЛАГ. В каждом отдельном лагере
            были организованы отделы КВО, подчинявшиеся головному отделу и
            имевшие в подчинении культурно-воспитательные части отдельных
            подразделений лагеря, которые, в свою очередь, курировали работу
            воспитателей. Декларативно широкое понимание термина «культура» в
            советских лагерях реализовывалось в сугубо инструментальном ключе:
            директивы, спускавшиеся из КВО, призывали к культурной деятельности
            исключительно в парадигме увеличения эффективности труда: занятия
            искусством должны были быть тесно связаны с задачами производства, а
            мероприятия в кружках самодеятельности — «популяризировать
            ударников» и «клеймить уклоняющихся от работы».
          </p>
          <Img
            marginBottom="4rem"
            marginTop="4rem"
            src={img2}
            url="http://humus.livejournal.com"
            title="humus.livejournal.com"
            desc="Выступление коллектива художественной самодеятельности Речлага. Конец 1940&#8209;х — начало 1950&#8209;х. Воркута (Коми АССР). Фото:"
          />
          <p>
            Как обычно это происходит, во-первых, даже подчиненные отделу КВО
            зачастую были не в состоянии обеспечить полную или хотя бы частичную
            реализацию плана культпросвета. Комиссия ОГПУ по обследованию режима
            и быта заключенных Соловецких лагерей в начале 1930&#8209;х
            констатировала: «Объекты надзора ввиду крайне тяжелого труда не в
            состоянии заниматься культурной организацией свободного времени». И
            это только одна из причин. Среди прочего кадры, ответственные за
            обеспечение культурной деятельности в местах лишения свободы, были
            малообразованны для поставленных целей, хотя чаще всего их просто
            критически не хватало количественно.{" "}
          </p>
          <p>
            Во-вторых, заключенные, которые принимали участие в художественных
            кружках, студиях, организовывали театры и выездные концерты,
            очевидно, воспринимали эту творческую деятельность не как уроки
            эффективного производства, а как единственно возможное пространство
            свободы и минимальной индивидуализации. Известно, что среди
            заключенных ярко выраженных оппозиционных политических взглядов
            бытовали дискуссии об этической допустимости, например, присутствия
            в качестве исполнителя или зрителя в театре, организованном
            Управлением исправительно-трудовых лагерей. Очень часто такие
            дискуссии разрешались выбором в пользу участия — просто потому, что
            в том положении это была единственная возможность «не оскотиниться»,
            не говоря уже о потребности творческого выражения. Энн Эпплбаум в
            книге «ГУЛАГ» пишет: «Из многих способов выживания за счет
            сотрудничества с начальством художественная самодеятельность
            считалась в среде заключенных наиболее приемлемой нравственно. Одна
            из причин, видимо, в том, что от выступлений артистов выигрывали и
            зэки-зрители. Даже для рядовых работяг театр был источником
            громадной моральной поддержки, чем-то крайне необходимым для
            выживания. „Для заключенных театр был источником радости, его
            любили, им восхищались“, — писал один бывший соловчанин.
            Герлинг-Грудзинский вспоминал, что перед представлением „зэки
            снимали у порога шапки, отряхивали в сенях снег с валенок и по
            очереди занимали места на лавках, исполнившись торжественной
            сосредоточенности и почти набожной почтительности“».
          </p>
          <Img
            marginBottom="4rem"
            marginTop="4rem"
            src={img3}
            desc="Выступление танцевального коллектива художественной самодеятельности Промысла № 2. Ухтижемлаг (ОЛП № 10), 1940. Фото:"
            url="http://humus.livejournal.com"
            title="humus.livejournal.com"
          />
          <p>
            В-третьих — и это уже прямо касается театров, — как показывают
            исследования, даже сотрудники лагерей на местах не слишком
            усердствовали при исполнении директив по части, например,
            тематической направленности репертуара лагерных учреждений культуры.
            Это объясняется в первую очередь тем, что театры и студии
            самодеятельности для лагерного начальства в тех условиях были
            единственным источником развлечений. Постановления сверху
            приказывали составлять программы выступлений из идеологически
            мотивирующих произведений, разжигающих патриотические чувства и
            отражающих «героическую борьбу нашей Красной армии с немецким
            фашизмом, энтузиазм народов Советского Союза и борьбу заключенных
            лагерей за высокие производственные показатели», как было указано в
            одной из директив КВО ГУЛАГа военного времени. На деле же — и это
            видно в числе прочего по тогдашнему репертуару театров Воркуты и
            Магадана — программы музыкальных выступлений в театрах составлялись
            для «поддержания положительного духа» и развлечения сотрудников
            лагерей. Инна Клаузе в тексте «Музыка по приказу. Официальная
            культурная жизнь в ГУЛАГе» приводит названия музыкальных номеров в
            концерте культбригады Магаданлага, бывшего частью Севвостлага,
            который состоялся 24 сентября 1943 года:
          </p>
          <blockquote>
            <p>
              «Открывало концерт фортепианное трио с обработанными для этого
              состава номерами из оркестровой сюиты Эдварда Грига к „Перу
              Гюнту“. За ним следовало художественное чтение произведений
              Константина Симонова и Семена Кирсанова в сопровождении музыки
              заключенного Бориса Энтина. В первой части прозвучали ария
              Родольфо из „Богемы“ Джакомо Пуччини, ария Герцога из „Риголетто“
              Джузеппе Верди, „Венский каприс“ Фрица Крейслера и цыганский танец
              для скрипки соло, а также сцена Аиды и Радамеса из „Аиды“ Верди.
              Вторую часть концерта открывал веселый скетч, не имевший ничего
              общего с лагерной тематикой, за которым следовал блюз в
              сопровождении джазового оркестра. Кроме того, были исполнены
              испанский народный танец и танго, а также пели русские народные
              песни».
            </p>
          </blockquote>
          <p>
            Начальник же КВО Севвостлага, как можно понять, прямо лгал, указывая
            в отчетах, что «в музыкальной жизни лагеря большую роль играет
            официально предписанный репертуар». Руководство КВО было осведомлено
            о «репертуарном саботаже» и фиксировало эти нарушения, а в марте
            1942&#8209;го и январе 1943&#8209;го поручило провести смотры
            художественной самодеятельности на местах. Ситуацию это не поменяло.
            Кроме того, для участия во всех мероприятиях, проходивших вне
            территорий лагерей, активно привлекались собственно заключенные,
            которым с 1940 года было запрещено выступать перед гражданскими
            лицами и за пределами мест заключения. Несмотря на запрет,
            начальники лагерей набирали труппы и хоры из заключенных и даже
            ставили их не только на исполнительские позиции в гражданских
            театрах: некоторые зэки, например, режиссировали постановки,
            руководили кружками и занимались преподавательской деятельностью.{" "}
          </p>
          <H2Styled>«Актеры остаются актерами пока живы»</H2Styled>
          <p>
            Следует, видимо, разделять театры ГУЛАГа на два типа: разной степени
            камерности мобильные или стационарные театры, существовавшие на
            территориях лагерей в абсолютно разных помещениях (часто даже
            центральную часть барака превращали в импровизированные сцены), и
            большие стационарные театры, работавшие за пределами поселений,
            принимавшие гражданских лиц в качестве зрителей, но во времена
            ГУЛАГа существовавшие на ресурсах заключенных (с привлечением,
            впрочем, вольнонаемных артистов и техперсонала). Конечно, эта
            граница размывалась, учитывая, что театры в Сибири и на Дальнем
            Востоке нередко основывались как лагерные. На окраинах бывшей
            империи театральная культура если и существовала, то в зачаточном
            состоянии, и как раз гулаговские инициативы давали тамошним городам
            первые театры, в которых ставили и играли репрессированные режиссеры
            и актеры из центральной и западной частей страны.
          </p>
          <blockquote>
            <p>
              «Подбор участников коллектива носил специфический лагерный
              характер. Начальник лагеря давал команду, и всесильный и тупой УРО
              выявлял из огромной массы заключенных профессиональных актеров и
              музыкантов. Кроме воркутинского лагпункта, где люди были налицо,
              искали по документам по периферии лагерных пунктов, рассеянных по
              Республике Коми. Впихивали в труппу бездарей и стукачей, от
              которых невозможно было избавиться. Профессионалам же, „зэкам по
              58-й“, попасть в театр было крайне трудно.
            </p>
            <p>
              Первым спектаклем воркутинского театра была „Сильва“. Ни клавира,
              ни либретто, естественно, не было. Все пришлось восстановить по
              памяти. Эту немыслимую работу выполнил заключенный Стояно —
              недюжинный пианист и концертмейстер. Во многом ему помогли
              вольнонаемная Н. И. Глебова и заключенный артист Рутковский, до
              лагеря известный актер. Глебова, до войны солистка Ленинградского
              театра оперетты, жена инженер-майора Шварцмана… прибывшего вместе
              с его штабом на Воркуту. Тут он работал главным инженером
              энергоуправления.
            </p>
            <p>
              После вынужденного из-за войны перерыва актриса Глебова с радостью
              окунулась в родную стихию. Она пела Сильву. Прекрасные голосовые
              данные, ленинградская школа вокала, пластика и дикция принесли
              актрисе, а с ней и всему спектаклю, большой успех.
            </p>
            <p>
              Иначе произошло с первой мужской ролью. Заключенный Рутковский
              много раз в прошлом играл красавца Эдвина. Но годы в лагере взяли
              свое. Он уже не подходил на амплуа героя-любовника. Мордвинов{" "}
              <i>
                (Борис Аркадьевич, театральный режиссер, осужденный за шпионаж.
                — Прим. ред.)
              </i>{" "}
              поручил эту роль зэку Дейнеке, обладателю сочного баса-баритона,
              сохранившему и фигуру, и внешность. Но Дейнека был певцом, а не
              актером. Мордвинов решил сделать из него Эдвина и добился этого,
              проявив упорство и изобретательность. Будучи старше певца, ниже
              его ростом и обладая далеко не идеальной фигурой, он с настойчивой
              энергией не уставал показывать, как надо быть гибким, элегантно
              благородным, темпераментно и эффектно вальсировать. Режиссер сумел
              раскрепостить в Дейнеке актера. Подобную же работу провел
              Мордвинов с молодой вольнонаемной, которую все звали Верочка
              Макаровна. Миловидная украинская дивчина в прошлом, еще на родине,
              вышла замуж за сотрудника НКВД. Они приехали в Воркуту, где муж ее
              стал большим начальником. У Верочки был небольшой, приятный, но
              совсем не отработанный голос. До театра она участвовала в кружке
              пляски. Мордвинов вылепил из нее вторую героиню оперетты —
              задорную Стасси.
            </p>
            <p>
              Мне приходилось бывать на репетициях. Было захватывающе интересно
              наблюдать за его работой, показами. Он не выносил халтуры или
              равнодушия. За „Сильвой“ были поставлены „Марица“ и „Принцесса
              цирка“, еще что-то, что почему-то не запомнилось. Спектакли
              пользовались неизменным успехом».
            </p>
            <Small>
              Из книги{" "}
              <a href="https://www.sakharov-center.ru/asfcd/auth/?t=page&num=11048">
                Котляр Э. «Фауст» в ИТЛ // Театр ГУЛАГа / сост. М. М. Кораллов.
                — М.: «Мемориал», 1995.
              </a>
            </Small>
          </blockquote>
          <p>
            Театры за пределами лагерей были пространством большей свободы, там
            значительно чаще нарушались сквозь полуприкрытые глаза начальников
            лагерей и управлений КВО директивы и регламенты. Театры же внутри
            ИТЛ существовали по законам зоны, однако тоже не в полной мере. Как
            правило, в мужских лагпунктах все роли исполняли мужчины, то же
            самое было характерно для женских зон. Контроль там тоже был
            серьезнее: глупо было пытаться ставить пьесу «Без вины виноватые»,
            потому как начальство во всех даже ненамеренных полуухмылках
            высматривало издевку и антисоветчину. Репертуар таких внутрилагерных
            театров, куда заключенные приходили вечером после работы, если имели
            на то силы, составлялся обычно по варьетешному принципу: из
            драматических сценок, музыкальных номеров, танцев. В таких театрах
            запрещалось аплодировать.
          </p>
          <Img
            marginBottom="4rem"
            marginTop="4rem"
            src={img4}
            desc="Артисты лагерного театра. Во втором ряду первый слева Вацлав Дворжецкий. Вайгачская экспедиция ОГПУ (остров Вайгач), 1931 год. Фото:"
            url="http://humus.livejournal.com"
            title="humus.livejournal.com"
          />
          <p>
            <a href="http://dkmurmashi.ru/o-nas/istoriya-doma-kultury-energetik/apage,5/">
              Из воспоминаний
            </a>{" "}
            Вацлава Дворжецкого:
          </p>
          <blockquote>
            <p>
              «Весной 1934 года из Медвежки (г. Медвежьегорск) была отправлена
              на Тулому группа актеров, которая должна была стать основанием для
              будущего Туломского театра. Собрано десять человек, из которых
              решено было создать Туломский театр. Сразу возникло название
              „ТУ-ТЭКС“, как его в шутку назвали актеры: „Туломская Театральная
              Экспедиция“. Актеры всегда актеры. Везде актеры. Ни ночь полярная,
              ни голод, на „статья и срок“, ни кирка и тачка в котловане —
              ничего не могут поделать! Не справятся с ними! Актеры остаются
              актерами пока живы. Приказом начальника лагеря Сутырина
              разрешается три дня в неделю репетировать в бараке, а остальные
              дни работать на общих работах!
            </p>
            <p>
              Десять человек: Аландер Игорь Сергеевич, актер 2&#8209;го МХАТа,
              статья 58, срок — 10 лет; Пелецкий Владимир Федорович, актер
              2&#8209;го МХАТа, статья 58, срок — 10 лет; Волынский Николай
              Алексеевич из Александровки, статья 58, срок — 10 лет; Дворжецкий
              Вацлав Якович из Киева, статья 58, срок — 10 лет; Мазенков Василий
              Арефьевич из Ленинграда, статья 58, срок — 10 лет; Горлов Николай
              Иванович, режиссер; Временская Панна Ивановна, актриса; Гарчинская
              Мария Ивановна, актриса Киевского ТЮЗа; Полковников Дмитрий
              Петрович — московская филармония; Георгий Таманцев и Лео Заес —
              артисты из Мариинского театра; Федя Полуянов из «Кривого Зеркала»…
              Вот она — „ТУТЭКС“!»
            </p>
          </blockquote>
          <p>
            Про репертуар важно понимать еще вот что: в дореволюционной России в
            местах заключения и на каторгах тоже практиковался свой театр,
            однако же тематика и качество тех постановок были обусловлены
            людьми, которые этот театр делали: попросту говоря, каторжанами
            совсем из народа. Этот театр принято называть тюремно-фольклорным.
            Театровед Наталья Кузякина в своем{" "}
            <a href="http://www.ruthenia.ru/folktee/CYBERSTOL/GULAG/Kuzyakina.html">
              исследовании
            </a>{" "}
            пересказывает зафиксированное криминологом Михаилом Гернетом
            описание одного из таких зрелищ, которое к концу приобретало почти
            оргиастический характер. Во второй же трети XX века лагеря
            наполняются политическими ссыльными — в основном людьми просто
            культурными либо профессионально связанными с художественной
            деятельностью. Именно эта ссыльная интеллигенция определяет по
            большей части характер лагерного театра, включая в процесс
            профессиональных уголовников и так называемых бытовиков уже в
            качестве зрителей.
          </p>
          <p>
            Технологически театр ГУЛАГа строился из подручных материалов:
            обноски перешивали в костюмы, на слюдяном производстве их украшали
            слюдой, кусками разбитых зеркал, распарывали матрасы, делали цветную
            вышивку, доставая нитки из женского белья. В воспоминаниях о
            лагерном театре можно найти примеры описаний декораторских идей.
            Философ Павел Флоренский, с сентября 1934 года направленный в
            Соловецкий лагерь особого назначения и работавший там на заводе
            йодной промышленности с водорослями, писал в одном из писем:
          </p>
          <blockquote>
            <p>
              «Недавно нашел еще одно применение водорослям, которыми
              забавляюсь. Соловецкий театр ведется по-серьезному: ставят даже
              оперетты и оперы (напр. „Демона“). Кстати сказать, в театре я
              никогда не бываю и говорю только по рассказам других. Театру не
              хватает клея для писания декораций и волос для париков, бород,
              усов. Ко мне обратились с просьбой о помощи. Вместо клея я
              предложил водорослевый клей альгинат натрия (еще его не стали
              применять), а вместо волос — водоросль десмарестию, клочок которой
              тебе присылаю. Чтобы проверить свое предложение, я соорудил себе
              седоватую бороду, длинную-предлинную, рыжие длинные свисающие усы
              и космы темных волос, одеваю все это оборудование, накидываю
              резиновый плащ с капюшоном или бурку и удивляю непосвященных,
              которые не узнают меня и пугаются морского царя, как говорят они,
              Беломора».
            </p>
          </blockquote>
          <p>
            О разделении мужского контингента и женского писатель Геннадий
            Андреев (Хомяков) вспоминал:{" "}
          </p>
          <blockquote>
            <p>
              «Среди мужчин ходят, разговаривают женщины: это единственное место
              в Соловках, где ты можешь запросто, свободно, ничего не опасаясь,
              поговорить с женщиной… Дребезжит звонок, умолкает музыка, гаснет
              свет: распахивается занавес, и перед тобой другой мир. Вот тут,
              если все свое внимание сосредоточить на сцене, если вжиться в
              пьесу так, чтобы почувствовать себя одним из ее действующих лиц,
              ты можешь забыть и о Соловках, и о том, что ты заключенный. Пока
              открыта сцена, ты будешь ощущать себя полноценным, настоящим
              человеком, живущим по своему велению и разуму».
            </p>
          </blockquote>
          <p>
            Судя по воспоминаниям, практиковались в Соловках и какие-то
            кажущиеся невозможными вольности. С 1925 по 1930 год Солтеатром
            руководил Борис Глубоковский, бывший до заключения и некоторое время
            после освобождения актером Камерного театра Таирова. Среди прочего
            он ставил спектакли и писал тексты к песням. В его спектакле
            «Соловецкое обозрение», своеобразной сатире на быт и начальство
            СЛОНа, была одна песня, почти сразу ушедшая в народ. Припев в ней
            был следующий:
          </p>
          <Poem>
            <span>Обещали подарков нам куль</span>
            <span>Бокий, Фельдман, Васильев и Вуль.</span>
            <span>Но в Москву увозил Катанян</span>
            <span>Лишь унылый напев соловчан:</span>
            <span>Всех, кто наградил нас Соловками,</span>
            <span>Просим, приезжайте сюда сами.</span>
            <span>Посидите здесь годочков три иль пять —</span>
            <span>Будете с восторгом вспоминать.</span>
          </Poem>
          <p>
            В стационарных театрах за пределами лагерей обстановка бывала менее
            зверской. Персонал, набиравшийся туда из заключенных, зачастую или
            совсем освобождали от лагерной работы или переводили на более легкие
            занятия; полностью освобождали, например, за день до концерта (а
            концерты и выступления случались часто). По свидетельствам, им
            выдавали полные нормы сухого пайка, что было почти невозможно для
            обычных зэков. Лагерное начальство на выступлениях щедрилось и
            посылало за кулисы деликатесы, помогало добыть материал для костюмов
            или бандероли со сценическими текстами. Культбригады, собранные
            вокруг таких театров, часто гастролировали по лагерям. Артист
            Владимир Лазарев в сборнике воспоминаний «Поживши в ГУЛАГе» пишет:
            «В театре организовали выездную эстрадную бригаду, которая ездила по
            лагпунктам с концертами. Однажды мы выступали на одном лагпункте,
            где заключенными были родственники Зиновьева и других высших
            политиков. Они работали с радиоактивной водой. Сначала те, кто
            начинал работать в этом лагере, поправлялись и чувствовали себя
            хорошо, но потом мясо у них начинало отходить от костей».
          </p>
          <Img marginTop="4rem" src={gal1} />
          <Img src={gal2} desc="Театральный вагончик до начала спектакля" />
          <Img
            src={gal3}
            desc="Импровизированная сцена. Фото: Из архива УИТЛ УМВД Хабаровского края, 1936 год, "
            url="http://www.slovoart.ru/node/1180"
            title="slovoart.ru"
            marginBottom="4rem"
          />
          <NoteWrapper>
            <p>
              Очень важно понимать роль лагерных театров в буквальном спасении
              жизни художественных деятелей. Узаконенная культурная
              самодеятельность, созданная для промывки мозгов, переросла сама
              себя, изменив цели: только занимаясь культурной деятельностью,
              заключенные творческих профессий могли выжить и продолжить работу
              после освобождения. Удалось это, впрочем, далеко не всем. Широко
              известна история о том, как вытаскивали из петли певицу Лидию
              Русланову. В Воркуте кончали с собой артисты театра. После
              репетиции в магаданском театре убила себя пианистка София Гербст.
              Она была учительницей Иды Варпаховской, о которой шла речь в
              начале. К этому времени Леонид Варпаховский освободился и работал
              в театре вольнонаемным. Узнав о суициде пианистки, он, как следует
              из воспоминаний его жены, «поднял оркестр, чтобы почтить память
              погибшего товарища. Это стало одним из пунктов обвинения при
              третьем аресте Л. В.: „Устроил панихиду по немке, покончившей с
              собой в знак протеста против советского режима“». София Теодоровна
              Гербст, родившаяся в 1898 году и арестованная в 1938&#8209;м по
              58-й статье на десять лет, была реабилитирована в апреле
              1989&#8209;го.
            </p>
            <Note>
              Список репрессированных театральных деятелей есть на сайте проекта{" "}
              <a href="https://bessmertnybarak.ru/article/teatr_gulaga/">
                «Бессмертный барак».
              </a>
            </Note>
          </NoteWrapper>
          <H2Styled>Page not found и рефлексия</H2Styled>
          <p>
            Как уже было сказано, многие театры на востоке страны возникли
            впервые как лагерные. Некоторые из них существуют до сих пор, обретя
            стационарную форму. Какие-то рефлексируют опыт своей истории,
            какие-то нет.
          </p>
          <p>
            Магаданский государственный драматический и музыкальный театр,
            основанный в 1938 году как лагерный, назывался тогда «драматическим
            театром имени М.&nbsp;Горького городского коммунального отдела
            Главного управления строительства Дальнего Севера НКВД». Сегодня он
            существует с трудом, однако не сдается: ставит патриотические
            спектакли про войну, концерты с песнями военной тематики, а также
            комедии и водевили, например по «Правда — хорошо, а счастье лучше»
            Островского. На сайте театра в верхнем меню есть пункт «История»,
            внутри которого, кроме пунктов «Архив спектаклей» и «Люди театра»,
            есть еще «История театра». Кликая на этот пункт, попадаешь на ошибку
            404 — «Page not found».{" "}
          </p>
          <p>
            Воркутинский драматический театр появился в 1943 году (то есть
            раньше собственно города) как часть поселения Воркутлага, одного из
            крупнейших отделений ГУЛАГа. В 1958 году деревянное здание клуба, в
            котором все это время размещался театр, сгорело; к этому времени
            театр из ведения расформированного ГУЛАГа был передан в городское
            владение. В 1961 году для него выстроили каменное здание. На сайте
            театра упоминается, что создан он был силами репрессированных, — и
            то спасибо.
          </p>
          <Img
            marginBottom="4rem"
            marginTop="4rem"
            src={img5}
            desc="Фото: Из архива УИТЛ УМВД Хабаровского края, 1936 год,"
            url="http://slovoart.ru"
            title="slovoart.ru"
          />
          <p>
            Занятный пример — Норильский Заполярный театр драмы им. Владимира
            Маяковского. В истории театра на сайте первым делом сообщается, что
            создан он был 6 ноября 1941 года, а труппа состояла преимущественно
            из заключенных. Почему пример занятный? В разделе «Жанр и репертуар»
            читаем: «Основной жанр театра — современная сатира в жесткой
            гротескной форме, для театра очень важна тема борьбы современного
            человека с различными проявлениями несвободы».{" "}
          </p>
          <p>
            У Иды и Леонида Варпаховских, которые ставили «Травиату» в
            магаданском драматическом театре Управления Северо-Восточных
            исправительно-трудовых лагерей, в 1949 году, через четыре года после
            освобождения Иды, рождается дочь Анна. В 1976 году Варпаховский,
            ученик Мейерхольда, умирает, а через 11 лет Ида Самуиловна вместе с
            семьей дочери переезжает в Канаду. В 1995&#8209;м Анна Варпаховская
            основывает в Монреале Русский драматический театр им.
            Л.&nbsp;В.&nbsp;Варпаховского. Анне Леонидовне сейчас 68 лет, и в
            своем театре она работает с профессиональными актерами, которые
            играют спектакли на русском языке. Ида Варпаховская умерла в 1999
            году.
          </p>
          <Video id="tEePyHHdSKs" />
          <Small>
            Встреча с артистами-бывшими узниками ГУЛАГа в Доме актера. Вечер
            ведут драматург Матвей Грин, во время заключения руководитель театра
            Ивдельлага, Лесь Танюк, режиссер, член редколлегии общества
            «Мемориал», и Анна Варпаховская. На встрече также присутствует
            Вацлав Дворжецкий.
          </Small>
        </Section>
        <Share url={url} />
        <Other url={url} />
      </Wrapper>
    );
  }
}

export default Belomor;
