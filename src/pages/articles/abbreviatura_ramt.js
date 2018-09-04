import React from "react";
import styled from "styled-components";

import H1, { H1small } from "../../components/H1";
import ArticleHelmet from "../../components/ArticleHelmet";
import Img from "../../components/Img";
import H2 from "../../components/H2";
import H3 from "../../components/H3";
import Note, { NoteWrapper, NotedWord } from "../../components/Note";
import Section from "../../components/Section";
import P from "../../components/P";
import Date from "../../components/Date";
import Share from "../../components/Share";
import Other from "../../components/Other";
import Attention from "../../components/Attention";
import { TopCover } from "../../components/FillCover";

import cover from "../images/ramt/cover.jpg";
import borodin from "../images/ramt/borodin.jpg";

import Poem from "../../components/Poem";

const url = "https://teatralium.com/articles/abbreviatura_ramt";
const title =
  "«Аббревиатуру РАМТ мы не придумывали»: Алексей Бородин об истории своего театра в начале 90-х";

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

export class Raznoobrazie extends React.PureComponent {
  // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div>
        <ArticleHelmet
          url={url}
          image={borodin}
          width="1200"
          height="672"
          description="«Кто не репетирует, идите к Белому дому»."
          title={`${title} | Театралий`}
        />
        <TopCover>
          <Section margin="0" paddingTop="0rem">
            <Date>
              25 ноября 2017, текст:&nbsp;<b>Театралий</b>
            </Date>
            <H1 center>«Аббревиатуру РАМТ мы не придумывали»</H1>
            <H1small center>
              Алексей Бородин об истории своего театра в начале 90-х
            </H1small>
          </Section>
        </TopCover>
        <Section>
          <P>
            Режиссер и педагог Алексей Бородин руководит Российским
            академическим молодежным театром уже 37 лет: школьные спектакли в
            Шанхае, годы учебы в ГИТИСе у Юрия Завадского, лаборатория тюзовских
            режиссеров под руководством Марии Кнебель в Кирове, приглашение в
            московский Центральный детский театр Наталии Сац и работу над его
            главными постановками он{" "}
            <a href="https://www.corpus.ru/products/aleksej-borodin-na-beregah-utopij.htm">
              описал в книге «На берегах утопий»
            </a>, которая вышла в издательстве Corpus. «Театралий» публикует из
            нее отрывок о том, как детский театр стал молодежным и смог выжить в
            начале 90-х, когда страна рушилась, крыша протекала, а «денег не
            было и не предвиделось».
          </P>
        </Section>
        <Img
          outside
          src="https://pastvu.com/_p/d/4/c/9/4c9c42078d2ce889fab86b521306cd84.jpg"
          desc="Театральная площадь, 1991 год. Фото: "
          url="http://oldmos.ru/old/photo/view/70302"
          title="oldmos.ru"
          marginBottom="4rem"
          maxWidth="100%"
        />
        <Section>
          <H1Styled center>Академический молодежный</H1Styled>
          <NoteWrapper>
            <p>
              17 августа 1991-го мы пришли из отпуска репетировать «Лира», а 19
              августа — путч. Мы с <NotedWord>Лёлей</NotedWord> и с Еремиными —
              Ниной и Юрой — ночами на кухне слушали «Эхо Москвы». Помню, как
              позвонил <NotedWord>Щекочихин</NotedWord>: «Можно, я к тебе
              приеду, а то моя фамилия в каких-то расстрельных списках, и я
              переезжаю из одной квартиры в другую». 20 августа вокруг ЦДТ
              встали бэтээры. А на крыше Большого театра сидел снайпер.
              Колоссальное впечатление производил этот стрелок — сильнее, чем
              вся бронетехника.
            </p>
            <Note left>
              Лёля, жена Алексея Бородина Елена Владимировна; Юрий Еремин,
              театральный режиссер; Нина Акимова, актриса РАМТа; Юрий Решетов,
              ее муж, бывший посол России в Исландии.
            </Note>
            <Note top="30px">
              Юрий Щекочихин, журналист, писатель, драматург.
            </Note>
          </NoteWrapper>
          <NoteWrapper>
            <p>
              Я собрал труппу: «Все восстановится и будет так, как следует, а мы
              должны отвечать своим делом. Мы должны работать. Кто не
              репетирует, идите к Белому дому». Все актеры, свободные от
              репетиций, отправились туда под флагом, который сделал{" "}
              <NotedWord>Бенедиктов</NotedWord>. На двери висело объявление
              красной краской: «Коллектив ушел на защиту Белого дома». Мы,
              наверное, люди наивные, но для нас это было органично.
            </p>
            <Note top="60px">
              Станислав Бенедиктов, сценограф, главный художник РАМТа.
            </Note>
          </NoteWrapper>
          <NoteWrapper>
            <p>
              К семидесятилетию театра Стасик (Станислав Бенедиктов. — Прим.
              ред.) сделал оформление вечера, взяв части декораций разных
              спектаклей. Труппа сидела на сцене за столиками. Стасик пел,{" "}
              <NotedWord>Лена Долгина</NotedWord> плясала, Веселкин и Шувалов
              изображали нас с Ремизовым на руинах театра — будто крыша
              обвалилась и все окончательно рухнуло. В ложе собрались все наши
              дети, и в финале они выбегали к своим родителям на сцену по
              «дороге цветов», проложенной из зала, а до того еще пели песню.
              Юльен Балмусов читал пушкинскую «Осень»:
            </p>
            <Note top="60px">
              Елена Долгина, помощник художественного руководителя РАМТа по
              творческим вопросам; Алексей Веселкин и Борис Шувалов, актеры;
              Сергей Ремизов, директор театра.
            </Note>
          </NoteWrapper>
          <Poem>
            <span>Матросы вдруг кидаются, ползут</span>
            <span>Вверх, вниз — и паруса надулись, ветра полны;</span>
            <span>Громада двинулась и рассекает волны.</span>
            <span>Плывет. Куда ж нам плыть? </span>
          </Poem>
          <p>
            Я даже думал сказать в финале прекрасного этого вечера, где все
            объяснились в любви друг к другу: «Все, товарищи, на этом моя миссия
            кончилась».
          </p>
          <p>
            Наступили очень тяжелые времена. Денег не было и не предвиделось.
          </p>
          <p>
            У Михаила Иосифовича Яновицкого были налажены хорошие связи с
            хорошими людьми в министерстве. Он знал, как вести театр в прежней
            системе координат. Но она разрушилась. И в театре все рушилось,
            вплоть до того, что прорвало трубы и прямо по сцене текла вода. А
            Яновицкий, что было вовсе на него не похоже, странно бездействовал.
            Он сидел на служебном входе рядом с дежурным, и я спросил: «Михаил
            Иосифович, ну что ж вы сидите?» А на следующее утро он умер, потому
            что не понимал, как теперь быть и что делать — не выдержало сердце.
            Я тоже не понимал. Надо было, наверное, сразу, мгновенно
            мобилизоваться, но у меня не получилось. И уныние сильно отразилось
            на деле.
          </p>
          <p>
            Я мерил шагами свой кабинет и думал уходить из театра. Спас меня
            старый паркет, мне вдруг стало его жалко. Я смотрел на него, и
            приходило, пусть ложное (может, без меня стало бы только лучше),
            понимание ответственности.
          </p>
          <H3>Чем страшнее кризис, тем активнее нужно работать</H3>
          <NoteWrapper>
            <p>
              Параллельно общей разрухе все мы, руководители театров для
              несовершеннолетних зрителей, одновременно задумались о том, что
              надо менять названия наших учреждений. В ТЮЗе Гета Яновская и Кама
              Гинкас устраивали посиделки, собирали молодежь, обсуждали, как
              избавиться от этой клички — ТЮЗ. Не вышло. Корогодский мечтал свой
              ТЮЗ переименовать в «Театр нового поколения». То же самое
              происходило и в ЦДТ. До 1936 года здесь был Московский театр для
              детей, Центральным детским его назвала Наталия Сац. Но уже при
              Кнебель и при Эфросе облик театра определяли вечерние спектакли. В
              самом названии скрывалась какая-то неправда, несоответствие. От
              определения «детский театр» веяло «ведомственной» узостью. У
              театра должен быть свой зритель, а у зрителя должен быть выбор.
            </p>
            <Note>
              <Img
                src={cover}
                maxWidth="200px"
                marginTop="1rem"
                marginBottom="1rem"
                noBorder
              />
              Алексей Бородин{" "}
              <a href="https://www.facebook.com/events/369138970192608/">
                представит свою книгу 2 декабря в 18:00
              </a>{" "}
              на Международной ярмарке интеллектуальной литературы Non/fictio№19
              в ЦДХ.
            </Note>
          </NoteWrapper>
          <p>
            Некоторые друзья пробовали меня переубедить: «ЦДТ — это же фирменный
            знак». Но я упрямый. Когда еще только начинал работать в Центральном
            детском, понимал, что даже в девять лет никакой ребенок сам себя
            ребенком не считает. Мне нравится определение словаря Даля:
            «Молодость, младость — от младенчества до срединных лет».{" "}
          </p>
          <p>
            Не могу сказать, что день и ночь думал о переименовании театра, но
            как-то ехал в троллейбусе и меня прямо ударило: или сейчас, или
            никогда. А тут министром культуры назначили Евгения Юрьевича
            Сидорова. К нему-то я и пошел на следующий день. Помощником у него
            работала Нонна Михайловна Скегина, дружбой с которой я очень
            горжусь, и она призналась, что сама такого переименования не
            допустила бы (для нее ЦДТ — это Эфрос, и наоборот). Значит, мне
            повезло, что ее в тот день на работе не было. Сидоров предложил
            вынести вопрос на общее собрание и проголосовать. Так я и сделал,
            предупредив всех, что навязывать свое мнение не стану: «Вы
            голосуйте, а я отвернусь».
          </p>
          <p>
            Только один человек проголосовал против. Потому что переименование
            было логичным. На тот момент — восстановление справедливости.{" "}
          </p>
          <NoteWrapper>
            <p>
              Почва оказалась подготовлена. <NotedWord>Воронов</NotedWord>,
              настоящий столп ЦДТ, сказал: «Давно пора. Шах-Азизов, Мария
              Осиповна и Эфрос давно это обсуждали». Да, задолго до меня
              руководители театра думали о переименовании. Наталья Анатольевна
              Крымова хорошо назвала свою книгу об этих театрах — «Театр
              детства, отрочества, юности».
            </p>
            <Note>Иван Воронов, актер.</Note>
          </NoteWrapper>
          <NoteWrapper>
            <p>
              Я перед собранием «стариков» расспрашивал. Возражала только
              замечательная актриса Галина Дмитриевна Степанова. А молодежь —{" "}
              <NotedWord>Дворжецкий</NotedWord> и Веселкин — ликовала, что театр
              перестал быть «ведомственным». Не хотелось, конечно, отказываться
              от слова «центральный», но мы заменили его на «российский». Титул
              «академического» в свое время получили: министр культуры Юрий
              Серафимович Мелентьев нас поздравлял, в свое время этот красивый
              эпитет сулил льготы в финансировании.
            </p>
            <Note>Евгений Дворжецкий, актер.</Note>
          </NoteWrapper>
          <Img
            src="http://www.ramtograf.ru/november2009/pict/foto/strpamyati/shekochihin4.jpg"
            desc="Спектакль «Между небом и землей жаворонок вьется». Дмитрий – Алексей Веселкин, Терехов – Евгений Дворжецкий. Фото:"
            url="http://www.ramtograf.ru/november2009/strpamyati.html"
            title="Рамтограф"
            marginBottom="4rem"
          />
          <p>
            Были и люди, критиковавшие такое совмещение: молодежный с
            академическим. А дочь Наташа сказала: «Вот именно: молодежный и
            академический одновременно». Художественный общедоступный — тоже
            ведь парадокс!
          </p>
          <p>
            Аббревиатуру РАМТ мы не придумывали, она появилась в какой-то статье
            и с тех пор пошла в народ.
          </p>
          <p>
            Тем временем на творчество наступали социально-экономические
            процессы. Но испытания иногда выводят на совершенно новый уровень.
            По себе знаю: чем страшнее кризис, тем активнее нужно работать.{" "}
          </p>
          <p>
            Психологически мне очень помог курс, с которым мы в ГИТИСе выпустили
            «Наш городок» Торнтона Уайлдера.{" "}
          </p>
          <p>
            Играли его на малой сцене, которую потом у РАМТа отобрали и
            отрезали: снесли, когда строили новую сцену Большого театра.{" "}
          </p>
          <p>
            Яновицкий любил этот курс и добыл для него (просто невероятно!)
            десять мест в штатном расписании театра. Лена Галибина, Таня
            Матюхова, Наташа Чернявская, Олег Зима, Вера Зотова работают в
            театре до сих пор, стали отличными актерами.{" "}
          </p>
          <NoteWrapper>
            <p>
              Тогда для первого акта «Нашего городка» студенты под руководством
              Алексея Блохина сочиняли этюды, во втором уже я активно включился,
              а третий акт мы сделали за одну репетицию. Там есть эпизод, когда
              Эмилия, уже после смерти, вспоминает о подарках, которые ей,
              живой, дарила мама. Мы взяли макеты домиков из спектакля «Звездный
              мальчик» и поставили на авансцене — они, эти домики, становились
              подарками. В финале все актеры стояли возле них: «Люди не
              понимают, что такое жизнь, пока они живы. Может быть, когда-нибудь
              они поймут». Вот об этом получился спектакль.
            </p>
            <Note>
              «С первого взгляда я влюбился в Алексея Бородина и его театр —
              именно тот русский театр, каким я его воображал». Том Стоппард
            </Note>
          </NoteWrapper>
          <p>
            «Наш городок» — утрата и жизнь одновременно. Там такая вязь в
            спектакле: если кто-то чуть-чуть ошибался по внутреннему рисунку, по
            всем десяти актерам шел ток, и они немедленно поправляли. Пример
            исключительной собранности, когда сосредоточиваются природа, душа,
            сердце, ум. Я был горд, что мои студенты на такое способны.
            Фантастический курс, они и до сих пор держатся вместе.
          </p>
          <p>
            «Наш городок» позвали на фестиваль «Золотая репка» в Самару, где
            пришлось играть в зале не на шестьдесят человек, как у нас на Малой
            сцене, а на триста. На наше счастье Бенедиктов тоже поехал.
            Декораций в спектакле не было, но он тут же все придумал: ворота в
            арьерсцене приоткрыл, из-за них дал свет. Получилось очень
            выразительное пространство. Я говорю: «Ребята, надо не предать
            спектакль». И они ни на секунду не подвели. Актеры других театров им
            говорили: «Вы так играли, что мы не знаем, как это делать после
            вас».
          </p>
        </Section>
        <Img
          src="http://www.ramtograf.ru/2015/december2015/z_kassy/bilet-(18).jpg"
          marginBottom="4rem"
          maxWidth="100%"
        />
        <Section withHomepageLink>
          <p>
            За студенческим, гитисовским спектаклем «Наш городок» я поставил
            оперу «Отелло» в Московском музыкальном театре имени Станиславского
            и Немировича-Данченко.{" "}
          </p>
          <NoteWrapper>
            <p>
              Туда только что пришел директором{" "}
              <NotedWord>Владимир Урин</NotedWord>, и они с художественным
              руководителем Александром Тителем строили репертуар. Я с РАМТом
              собирался в Ростов, прямо к поезду подъехал Урин и предложил мне
              поставить у них «Отелло». Ответить просил уже на другой день.
              Кстати, по-моему, лучший учебник по режиссуре — режиссерский
              экземпляр «Отелло». Когда-то Станиславский из Италии пересылал
              сюда свои записи. Спектакля не вышло, зато остался фантастический
              разбор.{" "}
            </p>
            <Note>
              Владимир Урин возглавил Кировский ТЮЗ, когда Алексей Бородин стал
              там главным режиссером.
            </Note>
          </NoteWrapper>
          <p>
            Получив такое предложение, я ночь не спал и решил, что не прощу
            себе, если откажусь. И не жалею, что согласился.
          </p>
          <Attention fontColor="#a669c8">
            <div style={{ minWidth: 200, display: "block" }}>
              <H1 align="center">♦</H1>
            </div>
            С октября директор РАМТа Софья Апфельбаум находится под арестом
            из-за обвинения в мошенничестве, совершенном организованной группой
            в особо крупном размере. Нам очень жаль, что призывы к здравому
            смыслу не работают, а люди, которые могли бы продолжать делать свою
            важную и сложную работу, обвиняются государством в недоказанных
            преступлениях, в то время как масса коррупционеров продолжают
            плавать на яхтах в дорогих часах. Софья Михайловна, мы думаем и
            переживаем за вас и за ваших коллег.
          </Attention>
        </Section>
        <Share url={url} />
        <Other url={url} />
      </div>
    );
  }
}

export default Raznoobrazie;
