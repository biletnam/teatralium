import React from 'react'
import Helmet from 'react-helmet'
import Link from 'gatsby-link'
import styled from 'styled-components'

import { phone } from '../../utils/media'
import H1, { H1small } from '../../components/H1'
import ArticleHelmet from '../../components/ArticleHelmet'
import Img from '../../components/Img'
import H4 from '../../components/H4'
import Small from '../../components/Small'
import Gallery from '../../components/Gallery'
import Note, { NoteWrapper, NotedWord } from '../../components/Note'
import Section from '../../components/Section'
import P from '../../components/P'
import Date from '../../components/Date'
import Share from '../../components/Share'
import Masks from '../../components/Masks'
import Rest from '../../components/Rest'
import Video from '../../components/Video';

import lead from '../images/np1.jpg'

import i2 from '../images/np2.jpg'
import i3 from '../images/np3.jpg'
import schwanz from '../images/schwanz.jpg'
import collage1 from '../images/collage1.jpg'

const images = [i2, i3]

const url = 'https://teatralium.com/articles/neperevodimiy_russkiy_nadryv'

const Smaller = styled.span`
  font-size: 3rem;
  background-color: black;
  color: white;
  padding: 1rem;
  font-weight: normal;
  text-transform: lowercase;
  padding-left: 3rem;
  text-align: left;
  display: block;
  ${phone('font-size: 1rem;')}`;

const Red = styled.span`
  background-color: dodgerBlue;
  color: red;
  padding: 1rem;
  font-weight: normal;
  text-transform: lowercase;
  padding-left: 3rem;
  text-align: left;
  display: block;`;

const Orange = styled.span`
  background-color: red;
  padding: 1rem;
  font-style: normal;
  color: yellow;
  font-weight: normal;
  text-transform: lowercase;
  padding-left: 3rem;
  text-align: left;
  display: block;`;

export class Bol extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div>
        <ArticleHelmet
          url={url}
          image={lead}
          description="Приятные люди размышляют об интересных вещах"
          title="Непереводимый русский надрыв: Юрий Муравицкий и Валерий Печейкин о любви и хаосе | Театралий"
        />
        <Section>
          <Date>22 октября 2017, текст: <b>Настя Николаева</b></Date>
          <H1 center><Smaller>Непереводимый</Smaller><Red>русский</Red><Orange>надрыв</Orange></H1>
          <H1small center>Юрий Муравицкий и Валерий Печейкин о любви и хаосе</H1small>
          <P>В московском Центре им. Мейерхольда, казанской лаборатории «Угол» и театре «18+» в Ростове-на-Дону состоялись показы русско-германской постановки <a href="http://meyerhold.ru/vizhu-tebya-znayu-tebya-ich-sehe-dich-ich-kenne-dich/" target="_blank">«Вижу тебя, знаю тебя / Ich sehe dich, ich kenne dich»</a>. Больше играть спектакль, к сожалению, не планируется, но этот опыт показался нам настолько важным, что мы решили подробно расспросить режиссера Юрия Муравицкого и драматурга Валерия Печейкина о том, как это было. Корреспондент «Театралия» Настя Николаева поговорила с Печейкиным и Муравицким про то, как за десять дней написать текст и поставить по нему спектакль с русскими и немецкими актерами, а также про отрыжку системы Станиславского в современном российском театре и отличия между живыми и мертвыми художниками.</P>
          </Section>
            <Img maxWidth="100%" src={lead} />
          <Section>
          <p style={{ paddingTop: '7rem' }}><b>Настя Николаева</b>: Во-первых, спасибо за то, что не забыли про айн цвай полицай. Во-вторых, расскажите про процесс сборки тучи исторической информации и современных интервью в готовый спектакль. У вас было всего десять дней, но получилась редкая для российского театра работа: не пафосная, лаконичная, при этом объемная и серьезная.</p>
          <Video marginBottom="3rem" url="https://www.youtube.com/embed/dSy2DcATYUo" />
          <p><b>Печейкин</b>: Ретроспективный взгляд часто гораздо более линеен, чем сам процесс, который гораздо иррациональнее, чем мы можем представить. Если когда-нибудь про нас будут снимать кино, какие-то заслуженные артисты будут играть Юрия Муравицкого и меня, наверное, эту часть нашей биографии постараются рационализировать, чтобы рассказать, как мы это делали. В работе над «Вижу тебя, знаю тебя» была прекрасная доля хаоса, с одной стороны, и невероятная конкретность материала — с другой. Материал — это тексты Вальтера Беньямина, Вальтера Гропиуса, Мейерхольда, Кандинского, Хуго Балля и прочих, которые дал наш научный консультант Игорь Чубаров.</p>
          <p><b>НН</b>: Он нам как раз <Link to="/articles/mne_ploho_mne_skuchno">рассказывал</Link>, что ненавидит театр.</p>
          <p><b>Печейкин</b>: So am I, поэтому я им и занимаюсь, но это уже другая тема. Вот, пока мы с вами говорим, Юра играет в тетрис.</p>
          <p><b>Муравицкий</b>: Не, я хотел сказать, что тоже ненавижу театр, но потом подумал, что странно: три человека, которые делали спектакль, ненавидят театр. Наверное, это перебор. <i>(Смеется.)</i></p>
          <NoteWrapper>
            <p><b>Печейкин</b>: Так вот, материал, который дал Игорь, для меня был новым, я не был в контексте тех событий. Но в то же время он показался мне чрезвычайно конкретным и энциклопедичным, что для меня как драматурга было проблемой и могло стать в дальнейшем проблемой для режиссера и актеров. Нужно было с этим что-то делать, поэтому наша работа в <NotedWord>Schloß Bröllin</NotedWord> и заключалась в том, что мы разминали эту глину, добавляли туда воду, Аллу Пугачеву, другие темы и обстоятельства, взгляды.</p>
            <Note top="100px">Schloß Bröllin — художественная резиденция, которая находится в старинной усадьбе XIII века в 130 километрах на северо-восток от Берлина. Там в рамках лаборатории и готовился спектакль «Вижу тебя, знаю тебя».</Note>
          </NoteWrapper>

          <p><b>НН</b>: Вы эти обстоятельства как находили — наугад? Ну, например, проверю-ка я, как был связан Шнитке с Пугачевой, вдруг там что-то интересное.</p>

          <Video url="https://www.youtube.com/embed/7_VXedyev5Q" />
          <Small>VII. Гибель Фауста из кантаты Альфреда Шнитке «История доктора Иоганна Фауста». Композитор пригласил Аллу Пугачеву исполнить как раз это танго Мефистофеля, но не сложилось, помешала <a href="https://www.youtube.com/watch?v=wARES8zN0Dg" target="_blank">мистика</a>.</Small>


          <p><b>Печейкин</b>: Нет, не наугад: материал, который дал нам Игорь Чубаров, был невероятно подробно разобран. А Шнитке и прочее пришло из моей головы. Я понял, что у нас не хватает литературы в чистом виде (так появился Набоков) и не хватает музыки (так возник Шнитке, про чью коллизию с Пугачевой я знал). Надо сказать, что мы подошли к этой истории с немецкой точностью. Продюсер сказала, что нужны ссылки, подтверждающие обстоятельства, которые я упоминаю. Я в тот момент лежал с температурой, с телефона мне было сложно это сделать. Тогда она сказала, что мы убираем то, что не подтверждено документально. Так что весь материал, который мы использовали, авторизован, а импровизация и фантазии пришли от режиссера и артистов. То есть нам неизвестно, как конкретно лежали в ванне Ася Лацис, Бернхард Райх и Вальтер Беньямин; что они пили и в каком порядке; какая была вода: теплая или холодная. Это на совести режиссера.</p>


          <Img src={collage1} marginBottom="1rem" />
          <Small>Ася Лацис и Вальтер Беньямин</Small>

          <p><b>Муравицкий</b>: Может, там вообще был только душ, а ванны не было. Это вольная трактовка. На самом деле Валера сейчас ненавязчиво сформулировал принцип работы нашей лаборатории: это сочетание хаоса и упорядоченности. Это то, что я считаю залогом успеха во взаимодействиях между Германией и Россией. Сочетая это, мы получаем нечто объемное и полноценное. На первой репетиции мы просто выписали все, что у нас было, на этом, как это называется... Флипчарте?</p>

          <p><b>Печейкин</b>: Флипборд.</p>


          <Img src={schwanz} marginBottom="1rem" />
          <Small>Это флипчарт</Small>


          <p><b>Муравицкий</b>: Ага. А потом еще пару дней мы добавляли туда все, что есть в историческом и современном контексте, например интервью немцев и русских про Берлин и Москву, пока не пришли в ужас от объема информации. Тогда мы загрузили им актеров, загрузились сами и начали все это переваривать. На этот процесс ушло очень много времени. Буквально в последние три дня все начало собираться в четкую структуру, а начали мы с хаоса: мы ходили, размышляли, придумывали. В момент, когда все должно было продвинуться к сборке, мы с Валерой сели в комнате без окон и дверей, чтобы у нас не было возможности отвлекаться на прекрасную немецкую осеннюю природу и людей. Мы задались вопросом «В какую игру мы играем?».</p>
          <p>На нас давило огромное количество материала, тем, героев, мимо которых нельзя пройти; нас смущало, что мы вынуждены делать не спектакль, а презентацию в Power Point — доклад о российско-немецких отношениях. Тогда в эту комнату пришло решение: то, что нам кажется минусом, использовать как плюс. Мы стали играть в игру, как будто мы говорим с людьми, которые вообще не понимают и не знают очень многого о российско-немецких отношениях, такую подробную, рассказанную простыми предложениями историю. В этот момент все сошлось, мы поняли, что игра может получиться интересной, что она будет не в тягость, а, наоборот, придаст этому объему материала художественную форму.</p>

          <p><b>НН</b>: Мне кажется, у многих зрителей возник интерес, как вы выбирали этих героев, то есть что делает этот спектакль именно русско-немецким, а не русско — каким-то.</p>

          <NoteWrapper>
            <p><b>Печейкин</b>: Да, например, я гораздо лучше разбираюсь в музыке, и мне бы хотелось говорить о Стравинском, Прокофьеве и Шостаковиче. Но их связи с Германией не так очевидны и проявлены, как у Шнитке. Стравинский бывал в Германии, но ее не любил и жить там не хотел. <NotedWord>Набоков</NotedWord> был в Германии, тоже не любил, уехал оттуда, но оставил очень образный фрагмент в романе. Так что мы брали то, что нам казалось маркером отношений с двух сторон. Поэтому у нас был такой дресс-код: ты можешь войти в наш клуб, если ты немец, побывавший в Москве, или русский, побывавший в Берлине.</p>
            <Note top="90px">Речь идет об эпизоде из романа «Дар», в котором русский эмигрант Федор Константинович Годунов-Чердынцев едет в трамвае и рассматривает случайно толкнувшего его немца.</Note>
          </NoteWrapper>
           
          <p><b>Муравицкий</b>: Или участник событий, с этим связанных. Надо сказать, что, помимо Игоря Чубарова, информацию собирала Анна Саррэ, продюсер этого проекта, которая записала огромное количество интервью, с которыми потом работали актеры. Это происходило достаточно демократично. Мы сказали: «Ребята, у нас есть огромное количество интервью, записанных на видео. Пожалуйста, выберите интересных персонажей и то, что вам хотелось бы сказать». Мы как люди, настроенные идеалистически, решили, что если мы играем в игру под названием «Лаборатория», то мы должны играть в нее честно, и делали все, чтобы каждый был не только исполнителем. Ведь подавляющее большинство актеров считают, что их профессия заключается в том, что нужно встать там, где скажет режиссер, и сказать что-то так, как скажет режиссер. У нас все должны были внести в эту лабораторную работу то, что они хотели сказать по этому вопросу. Плюс Валера предложил актерам делать заметки, записывать впечатления, и в итоге появился, например, прекрасный монолог Тристана о его путешествии в Москву. Получился винегрет из материала.</p>

          <p><b>НН</b>: Как раз хотела спросить про актерство — может, это и есть ответ. В отличие от большинства спектаклей, которые идут на всех сценах всея Руси, у вас никто не орет, не возносит руки к небу и не кривляется. При этом все эти кривлянья считаются системой Станиславского, но больше похожи на ее отрыжку.</p>

          <p><b>Муравицкий</b>: Абсолютно согласен, отличное слово. Я теперь всегда буду так говорить: «Отрыжка системы Станиславского».</p>

          <p><b>НН</b>: Ну правда, ведь не вы одни знаете про существование Брехта.</p>

          <NoteWrapper>
            <p><b>Муравицкий</b>: Все знают, что есть такой Брехт, но на этом знания о Брехте заканчиваются — это притом что современный театр, постдраматический в том числе, основан на системе Брехта, а не Станиславского. Ее важный момент — неотождествление себя с образом, который ты как актер исполняешь. Присутствие самого актера именно как актера на сцене — одна из основ системы Бертольта Брехта. Наш спектакль построен на этом, недаром мы взяли эту <NotedWord>цитату Беньямина</NotedWord> в качестве эпиграфа. Она — ключ к нашему спектаклю. В работе с актерами я постоянно возвращался к этой цитате, просил осмыслить ее, напоминал о том, что они тут прежде всего актеры, которые играют спектакль, рассказывают историю, ведут игру. Персонажей у нас огромное количество, и если бы они начали в каждого героя погружаться, это была б шизофрения и ад на Земле. Всегда же ищешь в том, что делаешь, помимо темы, о которой хотелось бы высказаться, личный фетиш, связанный с театральной формой. Так что для меня этот проект — это, во-первых, возможность поработать с немецкими актерами, во-вторых, возможность поработать в брехтовской или постбрехтовской структуре, взяв за основу его метод. Для меня это был дополнительный личный кайф.</p>
            <Note top="135px">Речь идет о фразе «Если традиционный театр пытается по мере сил скрыть процесс деланья, то эпический театр «выставляет швы наружу». <Rest /> Это противодействует развлечению, зато стимулирует работу мысли и высвобождает личный опыт».</Note>
          </NoteWrapper>

          <p><b>НН</b>: В этом смысле с немецкими актерами проще?</p>

          <p><b>Муравицкий</b>: В какой-то момент с ними проще, а в какой-то — проще с нашими. Это сочетание хаоса и упорядоченности. Наши актеры гораздо лучше себя чувствуют в хаосе, если сбить первоначальные настройки о том, что им нужно выучить текст и встать вот тут. Если сказать им: «Ребят, давайте что-нибудь попридумываем», — откуда-то из космоса они начинают доставать идеи. А когда ты начинаешь заниматься структурой, упорядочиванием, монтажом, немцы чувствуют себя спокойнее и увереннее и в каких-то моментах бывают гораздо точнее с точки зрения задач, которые ты им ставишь. Русские актеры сохраняют спонтанность, амплитуду колебания плюс-минус полтора метра вправо и влево. И этот принцип «швы наружу» является основой системы координат в этом спектакле, в котором мы не прячемся ни за что, не делаем затемнений. Это, кстати, была отдельная работа с человеком, который занимался светом. Я ему объяснял, что не надо делать затемнения между сценами, мы должны видеть переходы, это часть спектакля, не надо уводить в темноту и набирать новую картинку через темноту, потому что тогда мы ставим актера в ситуацию, что он должен в темноте перевоплотиться в какой-то образ. Свет загорается — и он уже в роли Брехта, например.</p>

          <p><b>НН</b>: Помните, на премьере кто-то из двоих выступавших перед началом чиновников сказал, что примечательно, что спектакль показывают в Центре им. Мейерхольда, потому что эта личность сыграла большую роль в российско-немецких отношениях. Настолько большую, что мы знаем, что потом случилось, и с Сергеем Третьяковым тоже. Это напоминает тот момент с Павленским, когда кто-то из прокуратуры назвал здание Лубянки культурной ценностью, потому что там содержались выдающиеся деятели культуры. У вас в спектакле нет сцен и героев, напрямую связанных с политикой. Вы специально решили говорить именно о том, что заявлено в программке, — об отношениях между людьми, о культурных связях?</p>

          <p><b>Печейкин</b>: Да, потому что любовь побеждает политику. Это во-первых. Во-вторых, потому что политика всегда сиюминутна, тем более с двухсторонней оптикой совершенно непонятно, как на эти вещи смотреть. Вернее, эта оптика дает наиболее объективный взгляд, когда ты понимаешь, что ни к одной стороне, кроме стороны разума, присоединяться не нужно. В-третьих, политика у нас в том или ином виде упоминается.</p>

          <p><b>Муравицкий</b>: Мне кажется, у нас очень много политики.</p>

          <p><b>Печейкин</b>: Ну, то, что произошло с Третьяковым, — это политика. Даже любовь и секс — это политика. У нас одно из изданий после легализации гей-браков в Германии выпустило статью с заголовком «Германия отгородилась от нас гей-кордоном». Оказывается, между Россией и Германией появилась такая незримая граница. Для меня открытием того, что все на свете — политика, был момент, когда я десять лет назад гулял по ВДНХ со своей немецкой переводчицей. Мы остановились возле памятника «Рабочий и колхозница», и я сказал, что мне эта скульптура нравится, потому что она такая эпическая, симфоническая! На что переводчица ответила: «А мне нет, потому что для меня это грубый символ тоталитаризма». Так что я понял, что в чистом виде нет неполитического искусства. Мне просто эта штука нравилась, а для кого-то это символ совка, всего, что подавляет. Так что политика у нас есть, и все, что есть…</p>

          <p><b>Муравицкий</b>: Это политика. Я считаю, что у нас получился политический спектакль, могу даже сказать, что мне контрабандой и полунамеками удалось протащить в него свои личные политические взгляды. Но суть не в этом, здесь очень важен вектор направления движения и взгляд. Вы видите то, на что хотите смотреть. Если вы смотрите на небо, вы видите небо. И если бы мы направили свой взгляд на политику, если бы мы пошли сильно в эту сторону, у нас бы получилась плоская конфликтная неприятная история, злая и агрессивная. Мы могли, конечно, пройтись по ситуации в Германии, где на выборах впервые за много лет, слава богу, не победили, но все-таки набрали 13 % правые популисты. Но мы все об этом знаем и хотим говорить о другом. Так что важен вектор: либо мы движемся к политике, либо от нее. Конечно, мы двигались от: мы говорим, что хотим быть свободными от политики, но когда мы заявляем это, мы все равно оказываемся в плоскости политики, потому что наши желания преодолеть какие-то преграды сталкиваются с тем, что эти преграды всегда связаны с политикой. Искусство связано с отсутствием границ, политика наоборот. При всем нашем желании сделать неполитический спектакль мы все равно сделали политический.</p>

          <p><b>Печейкин</b>: Есть еще один регистр, который называется «гражданская позиция». Не политическая, а гражданская. Предпоследняя сцена — это слова о Кирилле Серебренникове, очень важные для всех нас. Мы долго думали, как это может прозвучать, и поняли, что не нужно делать сцену, посвященную Кириллу, потому что она добавит этой истории ложный пафос. Он все-таки человек, к счастью, живой, здоровый, активный, он не отошел в историю, как наши герои, поэтому мы поняли, что сделать ее можно, кстати, очень по-брехтовски: просто встать и сказать.</p>

          <p><b>НН</b>: Да, ребята из культурных ведомств на первом ряду сидели и переглядывались.</p>

          <p><b>Муравицкий</b>: Я рад, что они пришли, что они это увидели.</p>

          <p><b>НН</b>: Мы ведь редко встречаемся и не знаем, кто эти люди.</p>

          <p><b>Муравицкий</b>: Именно. Поэтому им нужно приходить и видеть такие спектакли, им надо понимать, что это за территория, что на ней мы не должны оглядываться на их мнение о том, что можно говорить, а что нет. Когда я перед началом пришел на площадку, чтобы проверить, все ли готово, мужчина, который говорил речь перед спектаклем, сидел на сцене на стуле в декорации и копался в телефоне. То есть человек считает, что даже это его территория. Но это не так.</p>


          <Video url="https://giphy.com/embed/xT9IgJzG217XtbnuwM" />
          <Small>Фото: Екатерина Краева</Small>

          <p><b>НН</b>: Перейдем к эфемерному. Можете объяснить то, что вы называете в программке «невидимой связью между [странами] длиною в сто лет»? Как вы сами осознаете, ощущаете этот опыт, о котором говорите в спектакле?</p>

          <p><b>Муравицкий</b>: Не знаю, я просто очень люблю Берлин, это мой любимый город на планете Земля. Понимаю, что это очень необъективно, что кто-то больше любит Нью-Йорк, Лондон или Барселону. Но когда я впервые прилетел в Берлин и вышел из самолета, у меня впервые в жизни не было ощущения, что я на чужой территории. Я почувствовал, что будто никуда не улетал. Эта в хорошем смысле разреженность воздуха, отсутствие напряжения! А когда я стал знакомиться в резиденции Schloß Bröllin, то на подсознательном уровне понял, почему русские и немцы могут общаться и находить общий язык. Не могу это вербализировать, но я это почувствовал, проговорив на своем ломаном английском полчаса с одним из арт-директоров резиденции.</p>

          <p><b>Печейкин</b>: Не знаю, как зафиксировать эфемерность, потому что, фиксируя, мы ее убиваем. Но, мне кажется, невероятное влияние друг на друга оказали две культуры, в частности живописная и музыкальная. Баховский метод контрапункта для российской музыки обладал и обладает колоссальным значением, Чайковский ездил на премьеру «Кольца нибелунга» Вагнера, это было огромное событие в его жизни и для мировой музыки. Это сегодня можно смотреть прямые трансляции, а тогда нужно было кому-то ехать. И наш величайший композитор поехал смотреть премьеру их величайшего композитора и, что называется, вернулся живым, с очень неоднозначными впечатлениями. Ведь мы находимся на каких-то эмоциональных, ментальных полюсах, и все лучшее, самое интересное происходит на их пересечении, если они у полюсов бывают. Композитор Шнитке — это такой промышленный сплав противоположностей: чтобы соединить два металла, нужна очень высокая температура и давление, и вот история соединила в отдельных головах немецкую пунктуальность и русскую душу. Все это в огромных кавычках, но послушайте музыку, и вы поймете, как это работает, как из очень жесткого математического каркаса вырываются хтонические русские подтексты. Вот это и становится произведением искусства. Для меня эта столетняя история — это никак не история войн и шпионажа, а история, оставшаяся в произведениях искусства.</p>


          <Video marginBottom="1rem" url="https://www.youtube.com/embed/XmhZS4hr2gU" />  
          <Small>В конце 60-х Шнитке написал музыку для мультфильма Андрея Хржановского «Стеклянная гармоника», который сразу же запретила цензура.</Small>

          <p><b>НН</b>: У вас Берлин — это улицы композиторов, техно и любовь, а Москва — из дневника Беньямина, суровая, покрытая льдом. Вы же понимали, что у зрителя это вызовет вопросы. Девушка на обсуждении после спектакля об этом говорила, хотя мы понимаем, что все так и есть, конечно.</p>

          <p><b>Муравицкий</b>: Ну вот, мы же понимаем, что это так.</p>

          <p><b>Печейкин</b>: Вопрос звучит так: «Почему вы согласны со мной?» (Смеется.)</p>

          <p><b>Муравицкий</b>: Да, почему вы решили показать все как есть, а не прикрепить к Москве пару ярких цветочков? (Смеется.) Москва, мне кажется, впечатляет другим. В свое время я был влюблен и очарован этим городом, но это было в начале 2000-х. Могу только с сожалением констатировать, что та Москва, которую я вижу сейчас, сильно отличается от Москвы, в которую я в свое время влюбился. Для меня архитектура, то, как город выглядит внешне, очень много значит. И последние преобразования, которыми многие очень довольны, выхолащивание городской среды — это страшно. Это уничтожает идентичность. Все говорят: «Вот, правильно ларьки убрали, стало намного чище». Не знаю, не уверен, что это правильно. «Вот, плитка, как красиво сделали тротуары». Не знаю, плитка очень холодная, асфальт теплее. «Вот, порядок навели». Не знаю, я люблю хаос.</p>

          <p><b>Печейкин</b>: Но тогда тебе должно нравиться то, что происходит!</p>

          <p><b>Муравицкий</b>: Нет, мне кажется, это попытка уйти от собственной идентичности. Люди, выросшие в коммуналках, всю жизнь пытаются все закрасить ровным цветом, все вычистить и сделать везде евроремонт.</p>

          <p><b>НН</b>: А как же огромные яйца, которые изредка появляются на улицах?</p>

          <p><b>Муравицкий</b>: Ну это китч, что об этом говорить. Но я люблю Москву, я же здесь живу. Просто становится немного горько, что город превращается в безвкусную жвачку. Это мое ощущение от того, что сейчас происходит с Москвой. А то, что было здесь сто лет назад, мы можем знать как раз по впечатлениям Беньямина и других.</p>

          <p><b>Печейкин</b>: И про вечный ремонт у него там есть! Мне кажется, современная Москва в спектакле присутствует. Она, может, выглядит критически, но все-таки мы в ней живем и имеем право ее критиковать. И мне очень нравится, что с Москвой происходит, так и надо. Снесли ларьки? Хорошо. Поставят назад? Тоже будет прекрасно. Заметьте, если их вернут, будет столько же крику. Плитка — замечательно, асфальт тоже. Москва учит меня стихийному буддизму: ни к чему не привязываться. Потому что все, к чему ты привязался, завтра снесет экскаватор. Москва в том состоянии, в котором мы ее застали, — шумно-кипящий город. Так сложилось; может, это и есть ее облик. Во всяком случае, как мы выяснили, ремонт идет уже сто лет.</p>

          <p><b>Муравицкий</b>: Тристан, например, в своем монологе очень хорошо отзывается о метро.</p>

          <p><b>НН</b>: Меня еще интересуют словосочетания «культурный обмен» и «мост между государствами». Это такие канцелярские, протокольные выражения, и очень часто этот культурный обмен такой же: приехали люди в кокошниках, станцевали хоровод под «Ой, то не вечер», все напряженно похлопали и разошлись по домам — или пить вместе (при хорошем раскладе). Насколько мы в этом смысле отличаемся от немцев?</p>

          <p><b>Муравицкий</b>: Я недавно об этом думал. Здесь очень важно поддерживать инициативу снизу, самоорганизующиеся культурные связи, обмены, а не насаждать. Надо запретить людям этим заниматься, это глупость несусветная. Если театр хочет поехать на гастроли в Германию, надо поддержать его попытку, дать каких-то денег, потому что ездить на гастроли за свои деньги невозможно. Нужно поддерживать фестивали, которые создают люди по своей инициативе, проекты, когда, например, немецкий режиссер едет в Москву ставить спектакль и наоборот. Формальные мероприятия культурного обмена должны умереть с XX веком. Раньше казалось, что это будет работать, можно было написать в плане на год десять мероприятий, их осуществить, и кому-то что-то это должно было дать. Ничего это никому не даст. Ну, кроме пьянок после выступлений в кокошниках.</p>

          <p><b>Печейкин</b>: Здесь есть ценное отличие. Насколько я знаю, например, по программе Гете-Института, для них важно, чтобы на мероприятии, которое они поддерживают, был живой действующий немецкий художник в широком смысле, то есть гражданин Германии, создающий современное искусство. Государство поддерживает живых людей, которые пишут музыку, литературу, живопись и так далее, а не только исполнительское искусство, когда пианист играет то, что было написано много лет назад. Мы в России оказались в ситуации, когда мы транслируем на Запад исполнительские вещи. Мы говорим: «У нас прекрасная исполнительская школа, мы прочтем, станцуем или сыграем текст или музыку, написанную 250 лет назад». Но по сей день художники продолжают что-то делать; они живые, им надо есть. Очень важно поддерживать производителей смыслов, какими бы эти смыслы ни были. Во-вторых, говоря про сам обмен, можно вспомнить о теории информации, потому что сегодня невероятно важны качество передачи информации и ее понятность. Поэтому перед нами стояла задача, которая регулярно возникает у природы и пищепрома. Природа помещает все нужное в семечко, а пищепром — в кубик «Магги». И семечко, и кубик нуждаются в том, чтобы их поливали. Мы сделали такое семечко, которое в себе раскрывается, ну а чего-чего, а воды в русских [хватает]. Одна Пугачева — это просто гейзер, который бьет изнутри.</p>

          <p><b>Муравицкий</b>: Да, чтобы жизнь появилась, надо дать ей возможность для этого. Не надо все постоянно вычищать.</p>

          <p><b>НН</b>: Как листья убирают с газонов! Кто это вообще придумал?!</p>

          <p><b>Муравицкий</b>: Да, как стирание со всех стен граффити, которое давно стало атрибутом городского ландшафта. Пусть это будет, дайте возможность существовать самоорганизующейся энергии, она гораздо более жизнеспособна. Вот в центре городской культуры «Правда» образовалась уникальная среда, которая никем не была запланирована, просто люди стали что-то делать, там огромное количество студий, люди играют музыку, это ценно. А сейчас, я так понимаю, ее будут сносить.</p>

          </Section>
          <Gallery images={images} />
          <Small outside>«Вижу тебя, знаю тебя», фото: Екатерина Краева</Small>
          <Section>
          <p><b>НН</b>: Как немецким актерам этот проект?</p>

          <p><b>Муравицкий</b>: Ну, им тяжело с нами, конечно. Мы очень хаотичные, спонтанные, мы привыкли в этой стране действовать по ситуации, потому что жизнь все время вносит коррективы. Мы себя в этом чувствуем комфортно, а они привыкли к другому. Это я ни в коем случае не рассуждаю в категориях «хорошо» и «плохо». Мне кажется, нам всем было интересно. Мы все должны стараться идти друг другу навстречу.</p>

          <p><b>НН</b>: Хочу под конец еще про надрыв спросить, которого у вас в спектакле нет: никто не страдает, не хлопает дверьми, в чувствах не убегает со сцены. Я часто слышу или читаю в интернете отзывы зрителей, из которых видно, что самый большой комплимент, который люди могут сказать о драматическом спектакле, это то, что он заставляет задуматься. Русскому зрителю нужен надрыв, вечные неразрешимые вопросы, чтобы задуматься, или это стереотип?</p>

          <p><b>Муравицкий</b>: Я как раз думаю, что есть такая задача, то есть, в принципе, я с этим согласен. Мы большую часть времени живем неосознанно и иногда боимся заходить на какие-то территории своего разума, потому что там нас ждут неприятные новости. Если мы отгораживаемся от этого, это нас не защищает — наоборот, мы натыкаемся на это в очередной раз. Сколько ни беги от реальности или от себя, все равно тебя догонят. Поэтому заставлять задумываться — это миссия, не всегда одобряемая широкими массами, но тем не менее нужная. Но надрыв для этого не нужен. Он должен быть внутри зрителя во время просмотра спектакля — какой-то момент звенящей тишины, которая близка к ужасу, или исцеляющий смех, когда ты обсмеиваешь какие-то свои страхи. Но это должно происходить в зале, а надрыв на сцене — это как раз конвенция российского театра. «Я сейчас на сцене пострадаю за вас, посмеюсь и поплачу, рубаху разорву, а вы спокойно сидите, мне как бы сопереживайте, а потом за то, что я мучился, вы подарите мне цветы и похлопаете». Зритель должен чувствовать. А актеры, режиссер и драматург — это манипуляторы, шаманы, диджеи и бармены, которые что-то создают. Вот мы с Валерой сделали коктейль и дали попробовать зрителю. Вы попробовали и говорите: «Ммммм».</p>

          <p><b>Печейкин</b>: У меня надрыв!</p>

          <p><b>Муравицкий</b>: «Вау, я испытал сейчас надрыв, как вы это сделали?» А мы такие: «А вот».</p>

          <NoteWrapper>
            <p><b>Печейкин</b>: Интересно, можно ли перевести слово «<NotedWord>надрыв</NotedWord>» на немецкий? Этим словом озаглавлены три главы романа «Братья Карамазовы»: «Надрыв в гостиной», «Надрыв в избе» и «Надрыв на улице». Как это очень странное русское слово, означающее крайнюю степень нервного напряжения, дошедшего до кризиса и выплеска, переводится и насколько им вообще знакомо это состояние? Язык дает возможность обнаружить базовые реакции того или иного народа. Так что хочешь не хочешь, все, что мы делаем, это так или иначе рефлексия на надрыв. Хороший спектакль — это когда случился надрыв у кого-то в зале, на сцене, но где-то надрыв должен быть!</p>
            <Note top="-25px">В немецкой «Википедии» есть статья, посвященная слову «<a href="https://de.wikipedia.org/wiki/Nadryw" target="_blank">Nadryw</a>». Переводчица Светлана Гайер в немецкой версии «Братьев Карамазовых» впервые использовала транслитерацию, поскольку считала, что это слово практически непереводимо. Под «Надрывом на улице» Валерий Печейкин имеет в виду надрыв «И на чистом воздухе».</Note>
          </NoteWrapper>


          <p><b>НН</b>: Я просто давно мечтаю поплакать в театре.</p>

          <p><b>Печейкин</b>: Это вы кошелек в театре не теряли!</p>

          <p><b>Муравицкий</b>: Ну, кстати, один русский, который очень давно эмигрировал в Германию, на предпоказе в Schloß Bröllin два раза за спектакль плакал. Я тоже люблю, когда меня пробивает на слезу в театре, очень это ценю, особенно когда ты не понимаешь, отчего это происходит.</p>

          <p><b>Печейкин</b>: Я никогда в театре не плакал. Единственный раз я плакал, когда смотрел фильм «Страсти Жанны д’Арк» немецкого режиссера Карла Теодора Дрейера. Это были потоком льющиеся слезы от того, как это невероятно сделано. Я понял, что смотрю кино невероятной высоты. «Я так никогда не сделаю», — думал я в тот момент.</p>

          <p><b>Муравицкий</b>: Слезу вышибить или заставить смеяться в принципе несложно, вопрос в том (сейчас очень цинично скажу), сколько стоит этот смех и слезы. При этом я люблю тупые шутки, но все равно важно, как ты добиваешься эмоционального эффекта.</p>

          <p><b>НН</b>: Например, смешно у вас актеры просто в ванну залезали.</p>

          <p><b>Печейкин</b>: А еще один из них напутал текст и сказал, что Берлин — столица России.</p>

          <p><b>НН</b>: Что Берлин — столица Москвы.</p>

          <p><b>Печейкин</b>: Да! Ну, дай бог, дай бог.</p>

          <Video marginBottom="1rem" url="https://www.youtube.com/embed/FyRKS4q3auU" />  
          <Small>Перейдем от Шнитке к немецкому техно</Small>

        </Section>
        <Share url={url} />
      </div>
    );
  }
}

export default Bol;
