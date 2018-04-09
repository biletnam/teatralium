import React from "react";
import Helmet from "react-helmet";
import Link from "gatsby-link";
import styled from "styled-components";

import { phone } from "../../utils/media";
import H1, { H1small } from "../../components/H1";
import ArticleHelmet from "../../components/ArticleHelmet";
import Img from "../../components/Img";
import H2 from "../../components/H2";
import H3 from "../../components/H3";
import Gallery from "../../components/Gallery";
import Video from "../../components/Video";

import Small from "../../components/Small";
import Note, { NoteWrapper, NotedWord } from "../../components/Note";
import Section from "../../components/Section";
import P from "../../components/P";
import Date from "../../components/Date";
import Share from "../../components/Share";
import Other from "../../components/Other";

import { TopCover } from "../../components/FillCover";

import building from "../images/sebastian/1.jpg";
import portrait from "../images/sebastian/3.jpg";
import cover from "../images/sebastian/cover.jpg";

const url = "https://teatralium.com/articles/poobshatsa_s_gospodinom_oblomovym";
const title =
  "Себастьян Кайзер: «Нам всем нужно пообщаться с господином Обломовым»";

const H2Styled = styled(H2)`
  font-size: 1.713em;
  margin-bottom: 3rem;
`;

const H1Styled = styled(H1small)`
  margin-top: 7rem;
`;

const ImgStyled = styled(Img)`
  margin-top: 5rem;
  margin-bottom: 5rem;
`;

const H3Styled = styled(H3)`
  margin-top: 5rem;
  margin-bottom: 5rem;
`;

const Q = styled.p`
  font-weight: bold;
  &::before {
    content: "— ";
  }
  &:first-of-type {
    margin-top: 5rem;
  }
`;

export class Abuse extends React.PureComponent {
  // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div>
        <ArticleHelmet
          url={url}
          image={cover}
          description="Интервью с бывшим завлитом берлинского «Фольксбюне»."
          title={`${title} | Театралий`}
        />
        <TopCover>
          <Section margin="0 3rem">
            <H1small center>Себастьян Кайзер:</H1small>
            <H1 center size="3.2124em">
              «Нам всем нужно пообщаться с&nbsp;господином Обломовым»
            </H1>
            <Date>
              6 февраля 2018, текст:&nbsp;<b>Евгений Казачков</b>
            </Date>
          </Section>
        </TopCover>
        <Section withHomepageLink>
          <NoteWrapper>
            <P>
              В январском номере немецкого журнала Theater der Zeit бывший
              художественный руководитель и главный режиссер «Фольксбюне» Франк
              Касторф констатировал, что театр этот больше не театр. На что
              нынешний худрук Крис Деркон съязвил: дескать, мы не знали, что
              театром теперь может называться только то место, где работает
              мистер Касторф. В новом сезоне 2017/2018 годов культовый
              берлинский «Фольксбюне» превратился в прокатную площадку
              разнородного современного искусства. Старый репертуар был
              полностью заменен на танцевальные перформансы Бориса Шармаца и
              Жерома Беля, спектакли, поставленные галерейными художниками, с
              пространными описаниями, и концептуальные концерты современной
              музыки. «Театралий» попросил драматурга Евгения Казачкова
              расспросить бывшего драматурга «Фольксбюне» Себастьяна Кайзера о
              том, как различаются эти профессии в русском и немецком театрах, а
              главное — что именно мы потеряли вместе с концом 25-летнего
              интендантства Франка Касторфа в известном здании на площади Розы
              Люксембург.
            </P>
            <Note>
              Себастьян Кайзер приезжал на московский фестиваль «Нового
              европейского театра» (NET) для участия в кинопоказах и дискуссиях
              программы{" "}
              <a href="http://netfest.ru/festival/film-program/poslednij-god-folksbyune">
                «Последний год „Фольксбюне“ / Уходящая эпоха Франка Касторфа».
              </a>
            </Note>
          </NoteWrapper>
          <Q>Когда вы поняли, что хотите заниматься театром?</Q>
          <NoteWrapper>
            <p>
              — Это связано непосредственно с «Фольксбюне» и политической
              ситуацией в начале 90-х годов. Я родился в Восточном Берлине и
              собирался идти учиться в специальную физико-математическую школу.
              Моей целью было стать инженером или типа того. А потом настал 1989
              год. Железный занавес упал, и идеологический блок, разделившийся
              после Второй мировой войны на Восток и Запад, сомкнулся со всего
              размаха. Это столкновение сказалось на многих жителях разных
              частей света, а для Берлина оно имело колоссальные последствия.
              Обе стороны, то есть совершенно конкретные люди, были разделены
              стеной, которая за одну ночь была разрушена.
            </p>
            <Note left background="white" top="-120px">
              <Img round src={portrait} />
            </Note>
          </NoteWrapper>
          <p>
            Так совпало, что я пошел в школу в Тиргартене, это территория
            бывшего Западного Берлина. Хотя совпадение это не совсем случайное и
            связано с русским языком. В ГДР мы изучали русский как первый
            иностранный. В районе, где я родился, в Пренцлауэр-Берге, в 1990
            году все школы были переполнены, а в западной части города
            существовали только две гимназии, в которых русский язык
            преподавался как первый иностранный. В одной из них как раз
            организовали новый класс. Его открыли именно для «осси», восточных
            немцев. Только представьте себе: стена пала, 40 лет «осси» и «весси»
            (западные немцы) не разговаривали друг с другом, жили и мыслили в
            своих космосах. А потом они засовывают 20 восточно-берлинских
            школьников в класс, где все учителя — исключительно с западной
            биографией. Это было похоже на лабораторию по политико-историческому
            взаимопониманию.
          </p>
          <Q>Были конфликты?</Q>
          <p>
            — Общение было напряженным. Но напряжение было таким сильным и
            жизненным, что хотелось все это как-то высказать. Многие родители
            моих одноклассников с востока после падения стены потеряли работу.
            Они сидели в социалистической системе, а теперь им приходилось
            платить за квартиру 600 дойчмарок в месяц вместо прежних
            символических 50 марок ГДР. То есть у восточных возникли проблемы на
            базовом уровне жизни. Было непонятно, что случится дальше, будущее
            ведь всегда открыто. Постоянно проходили дискуссии о Востоке и
            Западе, о том, кто прав и где было лучше. Оглядываясь назад,
            приходится признать: мы поднимали жизненно важные вопросы, но делали
            это как-то без фантазии.
          </p>
          <Q>И тогда в вашей жизни появился театр?</Q>
          <p>
            — Да, я много читал и много ходил в театры — «Дойчес театр»,
            «Берлинер ансамбль», «Фольксбюне», который сформировался именно в
            тот исторический момент во время интендантства Франка Касторфа.
            Внутри «Фольксбюне» присутствовала та самая фантазия, а не только
            пресловутая парадигма «Восток — Запад». Там анархисты от искусства
            заполнили вакуум между этими понятиями, делая осязаемым то, что они
            хотели сказать. Там все было умнее и круче, более личным и смелым. Я
            хорошо помню спектакль Касторфа «Заводной апельсин» 1993 года. Это
            было просто открытие. Как они играли, этот экспрессивный стиль, как
            они поднимали актуальные вопросы, как они смешивали все это в
            спектакле. Я нашел в этом театре пространство свободы, которой
            больше нигде не было.
          </p>
          <Img
            src={cover}
            desc="«Заводной апельсин». Фото из книги "
            url="https://www.amazon.de/Castorfs-Volksb%C3%BChne-Sch%C3%B6ne-Bilder-h%C3%A4%C3%9Flichen/dp/3896021834"
            title="«„Фольксбюне“ Касторфа»"
            afterUrl=" 1999 года"
          />
          <Q>Это было бегством от проблем?</Q>
          <p>
            — Наоборот! Это было движение именно внутрь конфликтов, чтобы
            высказывать все, чтобы не прятаться. Потому что если ты что-то
            прячешь, то это копится, копится и когда-нибудь взрывается. Это
            работает и на политическом уровне, и в личной жизни. Все, что ты
            прячешь, в итоге тебя уничтожит.
          </p>
          <Q>И тогда вы решили работать в этом театре?</Q>
          <p>
            — Нет, просто «Фольксбюне» был местом, куда можно было ходить каждый
            день. Там шли спектакли — сильные художественные высказывания
            Касторфа, Марталера, Шлингензифа, плюс показывали кино, играли
            рок-концерты, организовывали философские дискуссии, лекции про конец
            капитализма. Жижек был там в 1993 году во время акции NSK{" "}
            <i>
              (нем. Neue Slowenische Kunst, Новое словенское искусство. — Прим.
              ред.)
            </i>, когда те «захватили» «Фольксбюне». Тогда они показали
            собственный подход к независимому политическому мышлению.
          </p>
          <Img
            src={building}
            desc="Арт-группировка NSK на три дня в октябре 1993 года объявила «Фольксбюне» своей территорией. Попасть туда можно было только по действующей визе, которая выдавалась в консульстве. Гостем Министерства чистой и прикладной философии был Славой Жижек, который три часа читал лекцию «Женщина, Зло и Европа»."
          />
          <Q>Обсуждали конец капитализма после падения стены и распада СССР?</Q>
          <p>
            — Среди прочего, потому что капитализму больше было не с чем
            конкурировать. Например, еще Роза Люксембург незадолго до убийства в
            1919 году сказала: «Либо социализм, либо варварство». После эпохи
            сталинизма и развала социализма в 1989-м было сложно продолжать так
            мыслить. В «Фольксбюне» тогда провозгласили: «Либо варварство, либо
            варварство». То есть уже без иллюзий. Без иллюзий, что, во-первых,
            социализм еще может что-то спасти, но в то же время без иллюзий, что
            капитализм принесет какое-либо счастье.
          </p>
          <Q>Почему?</Q>
          <p>
            — Потому что лично я не чувствую себя комфортно в системе, которая
            живет только ради расширения и эффективности. Когда вы в Германии
            включаете телевизор, там постоянно в репортажах говорят: «Рост,
            рост, рост, экономика растет». Кажется, что этот рост провоцирует и
            увеличение свободы. Но только капитализм нуждается в росте. Связь
            капитализма и свободы не логична, а идеологична.
          </p>
          <Q>Почему это плохо?</Q>
          <p>
            — Потому что я хочу, чтобы сначала шел вопрос «Как жить?». А «рост»
            — это не ответ на него. Последним большим проектом Франка Касторфа в
            «Фольксбюне» стал «Фауст» Гете, первая и вторая части. В процессе мы
            поняли, что Фауст и Мефистофель вовсе не оппоненты, а близкие
            друзья. Оба формируют и управляют целыми мирами, как колонисты,
            бизнесмены или капиталисты — в зависимости от того, как вам удобнее
            их называть. Настоящей противоположностью Фауста является Обломов,
            он был бы неплохим началом отказа от системы эффективности. То есть
            прежде всего нужно пообщаться с господином Обломовым. Надо долго
            спать, ничего не делать и потом смотреть, что из этого выходит, а не
            быть господином Штольцем, который сразу предлагает: «Встаньте,
            господин Обломов, не надо весь день просто лежать». Надо сначала
            побыть очень ленивым и отказаться от всего этого либидо, от этой
            идеологии роста, поискать альтернативы.
          </p>
          <H3Styled>
            «Фауст и Мефистофель вовсе не оппоненты, а близкие друзья»
          </H3Styled>
          <p>
            Тогда станет очевидно, что капиталистическая экономика приносит
            пользу неравномерно, что в Европе, например, очень заметно. Разница
            между бедными и богатыми быстро растет: политика жесткой экономии в
            странах союза на краю континента доводит их граждан до ручки, а
            столицы Центральной Европы тем временем становятся трофеями
            спекуляций с недвижимостью. Базовое право на проживание поставлено
            под вопрос — так действует механизм вытеснения и исключения, города
            структурируются не по социальному запросу, а денежными потоками.
            Там, где я родился, коренные берлинцы практически не живут. Они
            просто не могут себе этого позволить.{" "}
          </p>
          <Q>
            Возвращаясь к альтернативе: когда мы в России слышим разговоры
            европейцев или американцев о том, что, возможно, есть какая-то
            хорошая альтернатива, у нас рефлекторно отвечают: «Мы там были! Мы
            знаем, что там, ребята! Там не лучше».
          </Q>
          <p>
            — Понимаю. Есть куча философов и литераторов — например, те же
            Вальтер Беньямин, Луи-Фердинанд Селин, Лион Фейхтвангер, а также
            Эрвин Пискатор, который довольно долго был художественным
            руководителем «Фольксбюне», — которые с любопытством ехали в
            Советский Союз, потому что надеялись увидеть нечто крупное, какую-то
            утопию. А потом все они разочаровывались. Я не идеализирую Советский
            Союз, но сейчас даже вот этой надежды и утопии нет.
          </p>
          <Q>
            Вы хотите сказать, что соревнование Западного блока с Восточным
            делало Запад лучше?
          </Q>
          <p>
            — Я думаю, да, это был очень важный момент. Советский Союз или даже
            ГДР были гипотетической альтернативой Западу, пускай в реальности
            они альтернативой не были. Как я понимаю, те, кто жил в Союзе, не
            очень его любили. Но было важно, что капитализм и западная система
            могли дышать, сами себя исправлять и двигаться в человеческую
            сторону, потому что на востоке маячила потенциальная утопия. А
            сейчас капитализм стал всемирным. У него нет альтернативы, и он
            адаптируется ко всем культурам.
          </p>
          <Q>Все эти дискуссии подвели вас к работе в театре?</Q>
          <p>
            — Мне был важен не театр сам по себе, а вещи, о которых надо было
            говорить, и я нашел в «Фольксбюне» пространство, где это было
            возможно. Для меня «Фольксбюне» был естественной средой обитания.
          </p>
          <Q>
            Вы проработали в нем десять лет. Может ли драматург в Германии
            обеспечить себя, будучи исключительно драматургом?
          </Q>
          <p>
            — Если ты постоянно работаешь в театре, то да. Но драматург в
            Германии — это не то же, что у вас.
          </p>
          <Q>
            К этому я как раз и веду. У нас есть уже устоявшийся термин
            «драматург в немецком смысле». Так что это такое? Это предполагает
            написание пьес?
          </Q>
          <p>
            — Это примерно то же, что у вас завлит. Я пишу тексты для театра, но
            не пьесы. Я пишу эссе.
          </p>
          <Q>
            И стратегическое планирование репертуара и деятельности театра тоже
            на вас?
          </Q>
          <p>
            — Да, при интенданте Франке Касторфе была группа драматургов, и это
            двойная тактика работы. С одной стороны, это всегда стратегия,
            длинный план на год, даже на несколько лет вперед, с другой —
            быстрое реагирование. Иногда от долгосрочных планов можно уснуть и
            нужно делать что-то актуальное, быть в моменте. Хотя и с этой
            актуальностью бывают сложности.
          </p>
          <Video
            id="gWerRcx6jqc"
            desc="Акустический концерт Мэрилина Мэнсона, «Фольскбюне», 2003 год"
          />
          <Q>В каком смысле?</Q>
          <p>
            — Я организовывал мероприятия — художественные проекты, конференции.
            Немцы очень любят диссидентов, но самое главное, чтобы диссидент был
            либо уже давно мертв (типа тех, которые были противниками нацистов),
            либо чтобы он был далеко. Скажем, в Африке или в России. Однажды я
            был на лекции о группе «Война». В аудитории сидели люди, которые
            никогда дорогу на красный не переходили, но все они были в восторге
            просто оттого, что в Питере можно нарисовать на мосту член.
          </p>
          <Q>
            Человек, как правило, очарован теми качествами, которые хотел бы
            иметь сам, но не имеет.
          </Q>
          <p>
            — Я чувствую в этом фальшь — просто тыкать пальцем вдаль вместе с
            людьми, которые, собственно, чем-то рисковали, и кричать: «Там у вас
            все плохо!» Я думаю, в Германии нужно заниматься собственными
            ранами-проблемами, которых предостаточно. В том числе чем-то
            рисковать самим. Ассоциировать себя с диссидентами может только тот,
            кто чувствует себя меньшинством.
          </p>
          <Q>Кто сейчас чувствует себя меньшинством в Германии?</Q>
          <p>
            — Я имею в виду, что надо самому побыть в шкуре меньшинства, чтобы
            критиковать других. «Фольксбюне» был местом, где мы могли об этом
            говорить. Но сейчас в прежнем виде его больше нет, и поэтому надо
            идти дальше. Надо искать, что сейчас соответствует реальности,
            современности, чтобы это наполняло и меня лично, и было при этом
            релевантным.
          </p>
          <Q>Это будет связано с театром?</Q>
          <p>
            — Я не знаю. Театр на втором месте. На первом — возможность
            высказать или сформулировать то, что тебя волнует, задать
            существенные вопросы и найти их художественное отражение. Может
            быть, я буду организовывать что-то на европейском уровне или
            соединять на мировом. Может быть, театр будет частью этого. Просто в
            Германии театр до сих пор уникальное место, потому что ты можешь
            делать там что хочешь, в том числе политические, философские или
            литературные события. Надо идти дальше и смотреть. Чем все это
            закончится, я не знаю. Будущее, как мы уже говорили, открыто.
          </p>
        </Section>
        <Share url={url} />
        <Other url={url} />
      </div>
    );
  }
}

export default Abuse;
