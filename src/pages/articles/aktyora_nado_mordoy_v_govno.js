import React from "react";
import Helmet from "react-helmet";
import Link from "gatsby-link";
import styled, { keyframes } from "styled-components";

import { phone } from "../../utils/media";
import H1, { H1small } from "../../components/H1";
import H3 from "../../components/H3";
import ArticleHelmet from "../../components/ArticleHelmet";
import Img from "../../components/ImgG";
import H2 from "../../components/H2";
import Gallery from "../../components/Gallery";
import Video from "../../components/Video";

import Small from "../../components/Small";
import Note, { NoteWrapper, NotedWord } from "../../components/Note";
import Section from "../../components/Section";
import P from "../../components/P";
import Date from "../../components/Date";
import Share from "../../components/Share";
import Other from "../../components/Other";

import FillCover, { TopCover } from "../../components/FillCover";

const url = "https://teatralium.com/articles/aktyora_nado_mordoy_v_govno/";
const title =
  "Неспящие в театре: типы зрителей на основе индуистской философии";

const StyledDate = styled(Date)`
  color: white;
  ${phone(`
    color: grey;
  `)};
`;

const H1Styled = styled(H1)`
  padding: 6rem 2rem 0;
  ${phone(`
    font-size: 1em;
    line-height: normal;
  `)};
`;

const H1Shadow = styled(H1)`
  -webkit-text-stroke: 1px rgba(255, 255, 255, 0.2);
  text-shadow: -10px 0 rgba(0, 255, 255, 0.4), 10px 0 rgba(255, 0, 255, 0.4);
`;

const Red = styled.span`
  color: red;
`;

export class Article extends React.PureComponent {
  // eslint-disable-line react/prefer-stateless-function
  render() {
    const { data } = this.props;
    return (
      <div>
        <ArticleHelmet
          url={url}
          image={data.cover.sizes.src}
          description="Дмитрий Лисин проецирует древнеиндийские варны на зрительный зал."
          title={`${title} | Театралий`}
        />
        <TopCover sizes={data.cover.sizes}>
          <Section margin="0">
            <H1Shadow size="4rem" color="purple">
              «Актера надо мордой в говно, и тогда он начинает <Red>жечь</Red>»
            </H1Shadow>
            <H1small center color="brown">
              Обесценивание, унижение и домогательства в театральных вузах
              страны
            </H1small>
            <StyledDate>
              24 марта 2018, текст:&nbsp;<b>Антон Хитров</b>, иллюстрация:&nbsp;<b
              >
                Алексей Сухов
              </b>
            </StyledDate>
          </Section>
        </TopCover>
        <Section>
          <P>
            Споры о театральной педагогике чаще посвящены тому, как учебная
            программа высших заведений соотносится с сегодняшним театром
            (спойлер: обычно туго). Но мало кого из профессионалов заботит, как
            образование влияет на психику будущих артистов, режиссеров и
            художников. Бывшие студентки театральных вузов России и Белоруссии
            рассказали Антону Хитрову, почему творческое образование обернулось
            для них травматичным опытом.
          </P>

          <H3>«Мне понадобился не один год, чтобы собрать себя заново»</H3>
          <H1small>Екатерина Строгова, актриса, окончила ГИТИС</H1small>
          <p>
            «Я вышла из ГИТИСа неуверенным в себе человеком, страшно боялась
            сцены, потому что меня приучили к мысли: что бы я ни делала — все
            ужасно. Нам говорили, что это наша русская школа: актера надо мордой
            в говно, и тогда он начинает жечь. Не начинает. Все люди разные.
            Может, есть железные, которым все равно. А мне нет. Профессии я
            научилась уже потом, работая в театре. Не понимаю, что я делала в
            институте четыре года.
          </p>
          <p>
            На втором курсе у нас появился преподаватель, чьим основным
            педагогическим методом были оскорбления. Он общался со мной матом:
            „Что ты, бл*ть, п*зд*, тут встала? Посмотри на себя: ты бездарная,
            не умеешь ни ходить, ни стоять, ты как швабра“. Кидался в меня
            книгами. Один раз отменил репетицию перед показом в учебном театре,
            сказав курсу: „Можете поблагодарить Екатерину за то, что у вас
            теперь нет прогона“. Непонятно, чем я это заслужила, я точно не
            играла хуже всех. На другой репетиции он не мог добиться от артистов
            того, чего хотел, стал биться в истерике, облил себя водой из
            двухлитровой бутылки. Плюс, конечно, сексуальное давление. Остаешься
            после занятия что-то с ним обсудить, он кладет руку на твое колено,
            ты ее убираешь и продолжаешь разговор: не хочется создавать
            конфликт, не одежду же на тебе рвут. А потом получаешь эротические
            СМС. Я пыталась аккуратно его урезонить, но человек же бухает и не
            всегда отдает себе отчет в своих действиях. Предав это огласке, я бы
            все равно ничего не добилась.
          </p>
          <p>
            Все это длилось три года, до самого выпуска. Как-то я в сто первый
            раз услышала, что я говно и у меня нет будущего, и попросила
            педагога об индивидуальном занятии: может, вы мне объясните, я
            готова оплатить. Занятие состоялось — может, даже полезное. Я
            начинаю собираться, и тут он подходит, поднимает юбку и лезет ко мне
            в трусы. После такого чувствуешь себя еще большим говном, потому что
            тебя не видят как творческую единицу вообще. Ты говоришь: „Не надо,
            что вы“. Он извиняется: „Не сдержался, ты такая красивая, молодая.
            Домой меня отвезешь?“ Отвозишь, слушаешь очередную тираду, какая ты
            бездарность. Прощаешься, едешь домой и думаешь: „Утопиться, что ли?“
          </p>
          <p>
            В его манере преподавания не было чего-то из ряда вон выходящего,
            она вписывалась в общий стиль института. Бедные студенты настолько
            счастливы, что их туда взяли, что готовы мириться с чем угодно. Ты
            думаешь: „Может, я этого заслуживаю? Наверное, меня зачислили по
            случайности, но, может, этот прекрасный человек меня чему-то
            научит?“ Люди не уходят, потому что боятся, что они больше нигде
            никому не будут нужны. И потом, отношения идут по синусоиде: сейчас
            тебя мордой в говно, а через полчаса педагог с тобой бухает.
          </p>
          <p>
            Мне кажется, проблема в том, что в театральной педагогике мало
            состоявшихся актеров и режиссеров. В основном это невостребованные
            люди, которые самоутверждаются за счет студентов. В здоровой
            ситуации ты получаешь эти эмоции из своей работы: сыграли, например,
            спектакль, и зал встал. Второй фактор заключается в том, что эта
            система воспроизводит сама себя: педагоги обращаются со студентами
            так же, как их учителя обращались с ними. Все психотерапевты
            проходят терапию — почему же педагогов никто не обследует? В
            актерской профессии ты раскрываешь самое трепетное — душу. Ее
            сломать — как раз плюнуть. У всех есть индивидуальность, просто
            показывать ее становится стремно, ведь тебя убеждали, что это никому
            не интересно. Вот трусы твои интересны, а индивидуальность — нет.
          </p>
          <p>
            Среди выпускников театральных вузов не так много людей остается в
            профессии. Это не потому, что они не могут найти работу: я же ее
            как-то нахожу. Это из-за травмы. Я не бросила профессию, потому что
            безумно люблю сцену. Никакая другая работа не дает такого адреналина
            — в первое время после института это и помогало пересилить
            неуверенность. Но мне понадобился не один год, чтобы собрать себя
            заново. Я посещала психотерапевта: платила деньги, чтобы понять, что
            моя индивидуальность прекрасна, что мне надо проявлять себя. У меня
            была одна успешная работа в ГИТИСе — мой первый самостоятельный
            отрывок. Я с большим трудом вернулась к тому состоянию, в котором
            его делала. Сейчас мне намного легче. Я прихожу на кастинг, и мне
            все равно, пройду я его или нет. Я больше не пытаюсь казаться
            хорошей, удобной и правильной, но шла я к этому долго».
          </p>
          <H3>
            «Если ты придешь на просмотр в красном платье или розовой мини-юбке,
            он пройдет не так успешно»
          </H3>
          <H1small>
            Александра (имя изменено по просьбе героини), художница по костюмам,
            окончила Школу-студию МХАТ
          </H1small>
          <p>
            «У нас на кафедре сценического костюма был эстетический
            тоталитаризм. Мы работали только с историческим костюмом: никаких
            поисков себя или стилизаций, никаких переносов сюжета во времени.
            Цвета — обязательно пастельные, грязненькие. За пять лет я не помню
            ни одной работы с кислотными цветами, с резкими сочетаниями. Демарши
            заканчивались очень скучно: тебя просто размазывали на показе, и
            все.
          </p>
          <p>
            Показы проходили так: сидит комиссия из 12 человек, ты стоишь у
            стенки, где висят твои эскизы, и они между собой дискутируют — с
            шуточками, прибауточками, полушепотом, — а с тобой почти не
            разговаривают. На первом курсе я была к такому не готова. В какой-то
            момент я просто разрыдалась и выбежала в туалет. Это была классика,
            такое происходило на каждом просмотре. Разве что к последним курсам
            все забили.
          </p>
          <p>
            Многое зависело от личного отношения педагога к тебе, твоему
            творчеству, характеру. Я была слишком шумная, веселая, громкая: в
            конце концов, когда мы поступили, нам было по 16 лет, мы были
            подростками. Со стороны студентов неформальное поведение не
            приветствовалось, а вот педагоги позволяли себе неформальность и
            переходы на личности. Например, меня сильно раздражало, когда нам
            намекали, как одеваться на занятия и показы. Если ты придешь на
            просмотр в красном платье или розовой мини-юбке, он пройдет не так
            успешно, как если бы на тебе был черный пиджак. Никто не говорил
            напрямую: „Ты одета вульгарно“, — но педагоги могли шутить об этом
            между собой в присутствии студента.
          </p>
          <p>
            Нужно было все время доказывать, что ты заслуживаешь здесь учиться,
            что ты достаточно хорош для МХАТа и вообще для театра. У педагогов
            была поговорка: „Закончишь — и пойдешь работать на сериалы“. Это
            было как „Иди и умри“. Отношение преподавателя могло поменяться, но
            всегда были девочки, которые все пять лет оставались „хорошими“, и
            те, кто считался „так себе“. Может, у меня поэтому такая обида на
            вуз, что я как раз была „так себе“. Притом что сейчас я работаю по
            специальности. Мы старались не включать конкуренцию, не
            соревноваться за любовь педагогов, относиться к этому с иронией.
          </p>
          <p>
            В первые годы я была „активным гражданином“: мечтала поменять
            систему обучения, думала, что она может стать актуальнее, полезнее.
            А потом просто забила — ко всему подходила формально, просто чтобы
            получить диплом. Ты все равно не победишь — только огребешь. У нас
            девочку выгнали со второго курса за хамство. Когда нам в сотый раз
            задали нарисовать орнамент от руки, она сказала: „Мне кажется, это
            бред. Я не понимаю, зачем мы этим занимаемся“, — или что-то в этом
            роде. Преподаватели сговорились и нарисовали ей незачеты по трем
            предметам, хотя она сдала все работы. Ее выгнали зимой, она была из
            Уфы, жила в общаге, ей было некуда деться. Да, она была грубовата,
            говорила больше, чем нужно, но после учебы за границей я поняла, что
            педагоги могут поддерживать дискуссии, а не просто затыкать рот
            недовольным.
          </p>
          <p>
            Кафедра воспитывает однотипных художников. На первом курсе мне
            нравилась стилизация исторического костюма, нравилось смешивать
            эпохи, но мои желания никого не интересовали: нужно было брать
            аутентичную картинку в библиотеке — и перерисовывать, желательно
            соблюдая пропорции и не меняя количество пуговиц. Ты приходишь:
            „Сейчас я вам покажу, какой я яркий художник“. А тебе дают понять:
            художником ты будешь после института.
          </p>
          <p>
            После Школы-студии я поехала учиться в Лондон, чтобы отделаться от
            ощущения, что существует „правильный“ подход к костюму. В
            магистратуре Уимблдонского колледжа искусств обучение устроено ровно
            наоборот. Никто не ставит под сомнение твой вкус. Их интересует, как
            ты мыслишь, как прикладываешь себя к тексту, к пространству. Ты
            выбираешь определенный метод и год его разрабатываешь. Руководитель
            курса ни разу не сказал, нравится ли ему то, что я делаю. Он мог
            говорить: „Вот здесь я не понимаю, как это работает“. За год
            магистратуры я так и не узнала, какие у него предпочтения».
          </p>
          <H3>«Это было похлеще раунда Гнойного против Оксимирона»</H3>
          <H1small>
            Олег Кармунин, журналист, окончил театроведческий факультет СПбГАТИ
          </H1small>
          <p>
            «Все было нормально до тех пор, пока я не начал публиковаться. С
            этого момента преподаватели стали пытаться меня всячески затроллить:
            придирались к словам, огрызались. Самой популярной претензией к моим
            текстам была: „У вас газетный стиль“, в переводе — „Дерьмо“.
          </p>
          <p>
            Ну да, студент нашел копеечную подработку в питерской редакции
            газеты „Известия“. Казалось бы, что тут такого? Но любимый вуз
            почему-то воспринимал мою деятельность как осквернение профессии. По
            мнению преподавателей, профессия — это когда ты пишешь рецензию на
            спектакль длиной в авторский лист (40 000 знаков, то есть примерно в
            два раза больше, чем этот материал. — Прим. авт.). Они не уточняли,
            что такой текст можно в лучшем случае распечатать и засунуть себе в
            задницу, потому что пять тысяч знаков — это максимум, который нужен
            сегодня для описания чего угодно.
          </p>
          <p>
            Самый запоминающийся случай был на уроке стилистики. Педагог
            попросила написать любой текст, и я, естественно, взял из готовых
            газетных. Не хочу сказать, что я Набоков, совершенно не претендую на
            то, что гениально пишу, но текст все-таки прошел через двух
            редакторов, корректора, и на работе всех устраивал. Но ровно
            половину пары стилист посвятила мне. Она зачитывала вслух куски
            статьи, громко фыркала, воздевала руки к небу и надменно шутила. Она
            сказала, что я позорю профессию, факультет и лично ее. Однокурсники
            тихо посмеивались, а я сидел и думал: „Неужели она уже 45 минут
            говорит про мою несчастную статью?“ Даже если текст не фонтан, разве
            можно так старательно издеваться? Это было похлеще раунда Гнойного
            против Оксимирона. Финальный панч был такой: „Газету, где это
            опубликовано, нужно вообще разорвать“. Я запомнил эту фразу, в
            редакции она потом стала мемом. Так я понял, что театроведческий
            факультет — вредное место. Здесь калечат психику детей и превращают
            студентов в конченых лузеров».
          </p>
          <H3>
            «Мы в Малом театре делаем великое искусство, а все вокруг — х****»
          </H3>
          <H1small>
            Марина (имя изменено по просьбе героини), режиссер, окончила
            театральное училище им. М. С. Щепкина по специальности «актерское
            искусство» и ГИТИС по специальности «режиссура театра»
          </H1small>
          <p>
            «Для меня театральный вуз стал продолжением ужасного советского
            детсада и интерната. Из интерната я сбежала в киношколу с абсолютно
            другой, демократической моделью отношений, но потом поступила в
            „Щепку“, и опять начался этот ад. Мастер нам кричал: „Вы не
            личности, вы кадры! Мы воспитываем кадры!“ Они растят послушных
            артистов, которые будут играть „кушать подано“ и не возникать. Мне
            все время хотелось сказать: „Вашу мать, если я вам неинтересна,
            зачем вы меня взяли? Вы обманули себя и обманываете меня“. Эти
            педагоги, выражаясь словами Станиславского, любили себя в искусстве.
            Они воспринимали нас как часть своей карьеры. Презентовали себя, не
            слишком заботясь о нас, и самоутверждались через наше унижение.
          </p>
          <p>
            Мне было 15 лет, я поступала всюду, как и все абитуриенты. Меня
            никуда не взяли — только в „Щепку“ вольным слушателем. Я с самого
            начала чувствовала, что это не то, что мне нужно, что мне не
            подходит эта атмосфера, но так хотела попасть в театральный мир, что
            осталась. Я была слишком маленькая, чтобы принимать решения типа „вы
            мне не понравились, пойду-ка я отсюда“. Если бы у меня не было в
            арсенале воспитания, интерната и прочего, если бы я росла свободным
            европейским человеком, я бы сразу послала их куда подальше.
            Официально меня зачислили после первого курса — сказали, что я
            трудолюбивая. Слышала, что рассуждали они так: жалко девочку, вроде
            из хорошей семьи, понятно, что артисткой не будет, но образование мы
            ей дадим — будет библиотекарем. Нельзя так набирать студентов в
            творческие вузы.
          </p>
          <p>
            Набирать их они старались из глубинки — дескать, мы ищем самородков.
            На самом деле им нужны были управляемые люди: чем зависимее, тем
            лучше. Я не могу назвать ни одного успешного артиста, окончившего
            эту мастерскую, притом что те мастера набирают курсы еще с советских
            времен. Одна девочка с моего курса переучилась и стала сценаристом,
            другой мальчик стал очень хорошим документалистом, я тоже ушла в
            режиссуру. Получается, то, что они дают, мало кому пригождается.
          </p>
          <p>
            Наши мастера застряли где-то в 50-х и нас тащили туда же. Мы делали
            отрывки по советской мутотени вроде „Угрюм-реки“, это был конец 90-х
            — начало нулевых, Серебренников уже вовсю работал. Они верили: мы в
            Малом театре делаем великое русское искусство, а все вокруг — х****.
            Даже Фоменко воспринимался как что-то кощунственное. Меня не любили
            за то, что я была правдорубкой, позволяла себе спорить. Но никакого
            диалога, никаких дискуссий быть не могло: любое мнение, отличное от
            их собственного, они считали посягательством на свое всевластие.
            Если попробуешь объяснить, что „Черный квадрат“ не фуфло, или
            поделишься своими театральными интересами, тебе ответят: „Нет, вы
            только посмотрите, вылупилась из яйца звезда, от горшка два вершка,
            мы не знаем — а она знает!“ Ты смотришь „Одну абсолютно счастливую
            деревню“, где тазики с водой превращаются в реку, вдохновляешься,
            пытаешься сделать что-то похожее — а педагог говорит: „Я не понимаю
            этого надуманного многозначительного символизма“.
          </p>
          <p>
            Каждый вечер, едва заканчивались занятия, я убегала из „Щепки“,
            чтобы успеть на вечерний спектакль — в ту же „Мастерскую Фоменко“,
            например. На следующий день мастер мог начать занятие такими
            словами: „Вот я проведу урок — кто-то еще сидит, обдумывает, что я
            сказал, а кто-то уже у метро“, — и поглядывает на меня: ты, мол,
            изменница, неверная.
          </p>
          <p>
            В конце второго курса нам объявили, что трое из нас недостойны
            учиться дальше, — я мечтала войти в эту троицу, но не вошла. Втихую,
            не забрав документы, я пошла поступать в ГИТИС к Сергею Женовачу.
            Это была ошибка — надо было встать и сказать: „Я ухожу“. Мне удалось
            пройти до конкурса, но Женовач узнал, где я учусь, и отказался меня
            брать: „Вы должны были принять решение, забрать документы и с чистой
            совестью поступать“. Сказал, что это неэтично с его стороны —
            переманивать студентов. Я осталась доучиваться в „Щепке“ и последние
            два курса пребывала в дичайшей депрессухе. Ни в какой канон я не
            вписывалась, педагоги не знали, что со мной делать, давали роли
            старух и служанок. На последнем курсе люди, устав от давления извне,
            стали объединяться в семьи, спасаться в личной жизни. Все
            переженились, на курсе было семь пар. Потом все расстались.
          </p>
          <p>
            Когда я получала второе, режиссерское образование в ГИТИСе, там была
            совершенно другая ситуация. Женовач никогда не задевал личное. Мы
            занимались исключительно профессией. Преподаватели называли нас
            „коллеги“ и обращались на вы — сразу чувствовалось, что тебя уважают
            и ценят. Но учиться все равно было непросто: не хотелось подводить
            педагогов».
          </p>
          <H3>
            «После театральной среды психологическое сообщество кажется
            санаторием»{" "}
          </H3>
          <H1small>
            Виолетта Никитик, психолог, училась на режиссера в Белорусском
            государственном университете культуры и искусств, ушла с третьего
            курса
          </H1small>
          <p>
            «Когда вы критикуете действие, это стимулирует человека к развитию.
            А когда оцениваете личность, как принято в театральных вузах
            („наиграла как корова“, „актриса актрисовна“, „актер ТЮЗа
            Задрыпенска“ и тому подобное), это травмирует.
          </p>
          <p>
            Отношение преподавателей ко мне менялось по принципу „нарциссических
            качелей“{" "}
            <i>
              (у нарциссов оценка себя, другого человека или группы может
              моментально меняться от идеализации к обесцениванию и обратно. —
              Прим. ред.)
            </i>. На первом курсе я была самой активной студенткой, меня
            хвалили, ставили высокие оценки. Но стоило мне подружиться со
            старшекурсницей, которая была в контрах с педагогами, и задать
            несколько неудобных вопросов на встрече с мэром, как три
            преподавателя по главным театральным специальностям стали меня
            игнорировать и занижать оценки. Тяжелее всего было с руководителем
            курса, который преподавал нам режиссуру. Я училась в школе с
            театральным уклоном, а когда поступила в университет, попала на курс
            к своему школьному учителю по театру. Раньше у нас были спокойные
            отношения, но в университете все изменилось: он стал унижать меня
            при всех, орать, выпускать агрессию. Где-то через год после того,
            как я отчислилась, он рассказал мне, что вел себя так специально: не
            хотел, чтобы остальные студенты думали, будто я его любимица (сейчас
            у нас прекрасные отношения). Его научили в каком-то российском
            училище, что творческого человека нужно унизить, чтобы тот
            разозлился и показал результат. Но в моем случае это не сработало. У
            меня другая психика: чтобы в чем-то преуспеть, мне нужна поддержка,
            уважение, чувство безопасности. Я знаю режиссеров, актеров, для
            которых все это такая же дикость, как и для меня. Один мой знакомый
            режиссер, психолог по первому образованию, вообще не верил в мои
            рассказы об университете.
          </p>
          <p>
            Однажды к нам на международный фестиваль приехал польский режиссер и
            драматург Себастьян Маевский, который выступил с очень
            воодушевляющим недельным тренингом, — было видно, сколько
            удовольствия он получает от работы. Оттуда я, вся такая окрыленная,
            пошла на занятие к своему педагогу. И вот он заводит монолог на
            полтора часа о том, как пытался создать антрепризу, залезал в долги,
            но ничего не получалось — люди, мол, не хотят ходить в театр, они
            лучше купят палку колбасы. Он говорил: „Девушки, если вас позовут
            замуж — идите замуж, рожайте детей, не жертвуйте семьей ради
            искусства“. Когда он закончил, я спросила у курса: „Кто-нибудь хочет
            заниматься театром после этой прекрасной лекции?“ Из двадцати
            человек руки подняли три. Я такая: „Окей, вопросов больше нет“. И
            отчислилась.
          </p>
          <p>
            После театральной среды психологическое сообщество показалось мне
            санаторием. С театром я не покончила: работала актрисой и помощником
            режиссера в пластическом театре, сейчас занимаюсь волонтерской
            работой, помогаю организовывать фестивали. Выпускникам театральных
            вузов, испытывающим проблемы с самооценкой, я бы посоветовала то же,
            что советовала мне моя знакомая (она выучилась на актрису, но сейчас
            преподает йогу и фитнес): помните, что оценка, которую давал вам
            педагог, — это мнение одного человека, каких в театральной среде
            сотни. Это мнение кажется вам важным только потому, что
            преподаватель был на тот момент авторитетной фигурой. Если человек
            оскорблял вас, вел себя непедагогично, непрофессионально, негуманно,
            к нему тем более не нужно прислушиваться и цепляться за его мнение.
            Чтобы отделаться от образа себя, навязанного педагогом, полезно
            получить обратную связь от новых авторитетов — коллег, режиссеров.
            Не нужно ждать их оценки, можно самому спросить: „Каков я как актер?
            Какова я как актриса?“ Если отношения доверительные, можно объяснить
            ситуацию: дескать, вот, у меня была травма, и теперь я боюсь
            заявлять о себе как о достойном, талантливом актере. В этом нет
            ничего стыдного».
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
  query GovnoImageQuery {
    govno1: imageSharp(id: { regex: "/govno/1.jpg/" }) {
      sizes(maxWidth: 1280) {
        ...GatsbyImageSharpSizes
      }
    }
    govno2: imageSharp(id: { regex: "/govno/2.jpg/" }) {
      sizes(maxWidth: 1280) {
        ...GatsbyImageSharpSizes
      }
    }
    govno3: imageSharp(id: { regex: "/govno/3.jpg/" }) {
      sizes(maxWidth: 1280) {
        ...GatsbyImageSharpSizes
      }
    }
    cover: imageSharp(id: { regex: "/govno/cover.png/" }) {
      sizes(maxWidth: 1280) {
        ...GatsbyImageSharpSizes
      }
    }
  }
`;
