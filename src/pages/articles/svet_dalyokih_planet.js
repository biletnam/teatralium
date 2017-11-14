import React from 'react'
import H1, { H1small } from '../../components/H1'
import Img from '../../components/Img'
import H4 from '../../components/H4'
import Small from '../../components/Small'
import Section from '../../components/Section'
import P from '../../components/P'
import Date from '../../components/Date'
import Share from '../../components/Share'
import ArticleHelmet from '../../components/ArticleHelmet'
import Other from '../../components/Other'

import a1 from '../images/svet_dalyokih_planet/berlin.jpg'
import a2 from '../images/svet_dalyokih_planet/bulez.jpg'
import a3 from '../images/svet_dalyokih_planet/3.jpg'
import a4 from '../images/svet_dalyokih_planet/bruxelles.jpg'
import a5 from '../images/svet_dalyokih_planet/5.jpg'
import a6 from '../images/svet_dalyokih_planet/6.jpg'
import a7 from '../images/svet_dalyokih_planet/london.jpg'
import a8 from '../images/svet_dalyokih_planet/8.jpg'
import a9 from '../images/svet_dalyokih_planet/dusseldorf.jpg'
import a10 from '../images/svet_dalyokih_planet/10.jpg'

const url = 'https://teatralium.com/articles/svet_dalyokih_planet'
const title = 'Свет далеких планет: обзор европейских премьер нового сезона'

export class Svet extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div>
        <ArticleHelmet
          url={url}
          image={a1}
          description="Куда ехать, что смотреть."
          title={`${title} | Театралий`}
        />
        <Section>
          <H1>Свет далеких планет</H1>
          <H1small>обзор европейских премьер нового сезона</H1small>
          <Date>22 октября 2017, текст:&nbsp;<b>Виктор Вилисов</b></Date>
          <P>Для тех, кто в путешествии вместо автобусной экскурсии «Огни города X» предпочитает вечер в театре, «Театралий» составил список наиболее интересных премьер сезона 2017-2018 года.</P>
          <H4 marginTop="3rem">Berliner Ensemble, Берлин</H4>
          <Img marginTop="2rem" marginBottom="1em" src={a1} />
          <Small>«Der kaukasische Kreidekreis», фото: Matthias Horn</Small>
          <p>В сентябре в этом театре состоялось событие почти эпического масштаба: пьесу Бертольта Брехта «Кавказский меловой круг» <a target="_blank" href="https://www.berliner-ensemble.de/inszenierung/der-kaukasische-kreidekreis">поставил</a> немецкий режиссер Михаэль Тальхаймер. Порядку ради следует напомнить, что Брехт не только основал этот театр, но и ставил там собственные пьесы, а его спектакль по «Кавказскому меловому кругу» после гастролей во Франции стал считаться одним из самых концентрированных воплощений брехтовского театрального метода. Бегло ознакомиться с режиссурой Тальхаймера безболезненно можно, с одной стороны, по видеозаписи спектакля <a target="_blank" href="https://vk.com/video-129481581_456239042">«Эмилия Галотти»</a> по трагедии Лессинга, а с другой — по совсем недавней его постановке пьесы Хайнера Мюллера (который перед своей смертью, к слову, успел побыть руководителем Berliner Ensemble) <a target="_blank" href="https://vk.com/video-129481581_456239175">«Миссия»</a>. </p>
          <p>Другая потенциально громкая премьера — спектакль <a target="_blank" href="https://www.berliner-ensemble.de/inszenierung/les-miserables">«Отверженные»</a> по роману Виктора Гюго ставит Франк Касторф, указанный одновременно как режиссёр постановки и редактор. Сообщается, что в этом театре Касторф ставит впервые после длительного перерыва с 1996 года. Нельзя также не сказать, что в новом сезоне продолжатся показы спектакля Роберта Уилсона <a target="_blank" href="https://www.berliner-ensemble.de/inszenierung/endspiel">«Конец игры»</a> по Беккету, впервые показанного в прошлом году. Именно с труппой Berliner Ensemble Уилсон поставил значительную часть своих лучших спектаклей в 2000-х: <a target="_blank" href="https://vk.com/video-129481581_456239132">«Сонеты Шекспира»</a>, «Трёхгрошовая опера», «Питер Пэн», «Фауст 1 + 2», «Лулу».</p>
          <H4 marginTop="3rem">Pierre Boulez Saal, Берлин</H4>
          <Img marginTop="2rem" marginBottom="1em" src={a2} />
          <Small>Фото: Lovis Ostenrik</Small>
          <p>В 2017 году западный мир отмечает пятисотлетие Реформации. По этому поводу Роберт Уилсон совместно с Rundfunkchor Berlin (Берлинский радио-хор) специально для концертного зала имени Пьера Булеза поставил музыкальный спектакль или, точнее, спектакулярный концерт <a target="_blank" href="https://www.rundfunkchor-berlin.de/konzerte/luther-dancing-with-the-gods/">«LUTHER dancing with the gods»</a>. Проект, видимо, продолжает редкую для Уилсона линию неоперных музыкальных спектаклей (<a target="_blank" href="https://vk.com/video-129481581_456239143">«St John Passion»</a>, <a target="_blank" href="https://vk.com/video-129481581_456239197">«Adam’s Passion»</a>). Он построен на основе четырех мотетов Баха, а также композициях Стива Райха и норвежского композитора Кнута Нюстедта. В спектакле будут использованы тексты Мартина Лютера, а также фрагменты из Библии и стихи крупного американского поэта Уильяма Карлоса Уильямса. Известны технические возможности концертного зала, в котором все это будет происходить, в частности, его способность превращаться в амфитеатр с круглой сценической площадкой в центре, поэтому вдвойне интересно, каким в этом спектакле будет пространственное решение, учитывая приверженность Уилсона к традиционным коробочным сценам.</p>
          <H4 marginTop="3rem">Schaübuhne, Берлин</H4>
          <Img marginTop="2rem" marginBottom="1em" src={a3} />
          <Small>«Lenin», фото: Florian Baumgarten</Small>
          <p>Сразу три важнейших для современного театрального ландшафта деятеля покажут свои премьеры в грядущем сезоне Шаубюне: Герберт Фритш, Томас Остермайер, Мило Рау. Швейцарский режиссер Рау, которому после его «Московских процессов» запрещен въезд в Россию, ставит спектакль <a target="_blank" href="https://www.schaubuehne.de/en/produktionen/lenin-2.html/m=360">«ЛЕНИН»</a>. Судя по описанию, задача мощнейшая: через состояние Ленина в последние годы жизни отобразить настроение нынешнего российского общества, зажатого между революцией и реакцией, апатией и пробуждением.</p>
          <p>Томас Остермайер ставит спектакль <a target="_blank" href="https://www.schaubuehne.de/en/produktionen/rueckkehr-nach-reims-2.html/m=360">«Возвращение в Реймс»</a> по одноименному роману 2013 года французского писателя Дидье Эрибона, который родился в этом самом Реймсе. В случае необходимости, подготовить себя к Остермайеру можно на примерах его <a target="_blank" href="https://vk.com/video950123_171672895">«Ричарда III»</a> и <a target="_blank" href="https://vk.com/video137909041_456239306">«Гамлета»</a>.</p>
          <p>Герберт Фритш, начинавший как актер, в последние годы выбился на фронтир режиссерского театра со своим безошибочно узнаваемым стилем — гротескным китчем, в котором марталеровские идиоты форсированы до эпилептического невроза. На этот раз Фритш ставит спектакль <a target="_blank" href="https://www.schaubuehne.de/en/produktionen/zeppelin-2.html/m=360">«Цеппелин»</a> по мотивам творчества австрийского писателя начала прошлого века Эдена фон Хорвата. Фритш здесь выступает не только режиссером, но и сценографом: на сцене огромный металлический каркас дирижабля, вокруг которого, судя по всему, и будет совершаться действо.</p>
          <H4 marginTop="3rem">La Monnaie, Брюссель</H4>
          <Img marginTop="2rem" marginBottom="1em" src={a4} />
          <Small>«Bluebeard’s Castle» & «The Miraculous Mandarin»</Small>
          <p>Следует, видимо, признать, что бельгийский театр La Monnaie на сегодняшний день является самым интересным оперным театром в мире. Как минимум, именно он наиболее радикально реализует концепцию режиссерской оперы: тут ставили, кажется, все: от Лепажа до Варликовского. В грядущем сезоне ни того, ни другого не ожидается, зато ожидается сразу два Оливье Пи: прославленный французский режиссер оперы и драмы, во-первых, восстанавливает собственную постановку <a target="_blank" href="https://www.lamonnaie.be/en/program/426-dialogues-des-carmelites">«Диалогов кармелиток»</a> 2013 года, а во-вторых, ставит <a target="_blank" href="https://www.lamonnaie.be/en/program/429-lohengrin">«Лоэнгрина»</a> Вагнера.</p>
          <p>Из других премьер следует обратить внимание на <a target="_blank" href="https://www.lamonnaie.be/en/program/430-the-miraculous-mandarin-bluebeard-s-castle">двойной спектакль</a>, поставленный Кристофом Коппенсом: балет Бартока «Чудесный мандарин» и его же одноактная опера «Замок герцога Синяя Борода». Коппенс вообще-то дизайнер и модельер, однако тесно связан с театром. В прошлом сезоне в этом же театре он дебютировал с оперой Леоша Яначека «Приключения лисички-плутовки», где выступил и режиссером, и сценографом, и художником по костюмам; спектакль получился почти грандиозный, посмотреть его можно <a target="_blank" href="https://vk.com/video-129481581_456239165">здесь</a>.</p>
          <H4 marginTop="3rem">Opera National de Paris, Париж</H4>
          <Img marginTop="2rem" marginBottom="1em" src={a6} />
          <Small>«Boris Godounov», фото: Anton Ginzburg</Small>
          <p>Четыре с половиной часа Кшиштофа Варликовского — вот что в октябре и ноябре предлагает парижская опера. Режиссер, имя которого олицетворяет большую часть современного польского театра, в Париже ставит <a target="_blank" href="https://www.operadeparis.fr/en/season-17-18/opera/don-carlos">«Дона Карлоса»</a> Верди. Ознакомившись с доступными к просмотру оперными спектаклями Варликовского (<a target="_blank" href="https://vk.com/video-129481581_456239200">«Женщина без тени»</a>, <a target="_blank" href="https://vk.com/video-129481581_456239112">«Замок герцога Синяя Борода»/«Голос человека»</a>, <a target="_blank" href="https://vk.com/video-129481581_456239093">«Медея»</a>, <a target="_blank" href="https://vk.com/video-129481581_456239223">«Меченые»</a>), можно понять, что это must-see. Кроме того, режиссер Иво ван Хове, уже знаменитый своими эпическими интерпретациями политическим драм, ставит свой первый спектакль в Парижской опере — <a target="_blank" href="https://www.operadeparis.fr/en/season-17-18/opera/boris-godounov">«Бориса Годунова»</a> Мусоргского. Владимир Юровский в качестве дирижера, видимо, призван добавить в постановку немножко русскости. </p>
          <H4 marginTop="3rem">Royal Opera House, Лондон</H4>
          <Img marginTop="2rem" marginBottom="1em" src={a7} />
          <Small>Фото: http://www.roh.org.uk/</Small>
          <p>И чтобы далеко не отходить от Варликовского, обязательно следует сказать, что в Лондоне будущей весной покажут его постановку оперы Яначека <a target="_blank" href="http://www.roh.org.uk/productions/from-the-house-of-the-dead-by-krzysztof-warlikowski">«Из мертвого дома»</a>. Это последняя опера Леоша Яначека, к которой он сам написал либретто по повести Достоевского «Записки из мертвого дома». Про спектакль пока ничего не известно, но, наверное, и не особо надо: помимо прославленного имени режиссера в списке создателей фигурирует и другое — Теодор Курентзис, дирижер.</p>
          <H4 marginTop="3rem">Teatr Wielki — Polish National Opera, Варшава</H4>
          <Img marginTop="2rem" marginBottom="1em" src={a8} />
          <Small>«Pelleas et melisande», фото: teatrwielki.pl</Small>
          <p>В самом большом оперном театре Польши в новом сезоне, помимо «Дамы с камелиями» Джона Ноймайера, две новых потенциально интересных оперных постановки. Первая — <a target="_blank" href="http://teatrwielki.pl/en/repertoire/calendar/2017-2018/the-fiery-angel/">«Огненный ангел»</a> Прокофьева, которую ставит Мариуш Трелиньски совместно со своим постоянным художником и сценографом Борисом Кудличкой. С ним же в прошедшем сезоне этот польский режиссер очень достойно поставил <a target="_blank" href="https://vk.com/video2604263_456239077">«Тристана и Изольду»</a> Вагнера в Метрополитан. Вторая премьера — <a target="_blank" href="http://teatrwielki.pl/en/repertoire/calendar/2017-2018/pelleas-et-melisande/">«Пеллеас и Мелизанда»</a> Дебюсси, которую ставит легендарная британская режиссер Кэти Митчелл.</p>
          <H4 marginTop="3rem">Düsseldorfer Schauspielhaus, Дюссельдорф</H4>
          <Img marginTop="2rem" marginBottom="1em" src={a9} />
          <Small>«Die Orestie», фото: Thomas Rabsch</Small>
          <p>Молодой немецкий режиссер и актер Саймон Сольберг, дебютировавший в 2006 году со спектаклем «Одиссея. Перезагрузка», поставил в Дюссельдорфе трехчастную трагедию Эсхила <a target="_blank" href="https://www.dhaus.de/programm/a-z/die-orestie/">«Орестея»</a>. Судя по трейлерам предыдущих его работ, это будет энергичное действо с элементами физического театра и заимствованиями из того же Тальхаймера. И опять же нельзя не сказать, что в грядущем сезоне в этом дюссельфдорском театре будут показывать поставленный в начале этого года спектакль Роберта Уилсона <a target="_blank" href="https://www.dhaus.de/programm/a-z/der-sandmann/">«Песочный человек»</a> по новелле Гофмана. </p>
          <H4 marginTop="3rem">TR Warszawa, Варшава</H4>
          <Img marginTop="2rem" marginBottom="1em" src={a10} />
          <Small>Фото: trwarszawa.pl</Small>
          <p>В театре под руководством еще одного выдающегося польского режиссера Гжегожа Яжины в сентябре состоялась премьера, режиссер которой не указывается. В описании спектакля <a target="_blank" href="http://trwarszawa.pl/en/spektakle/gen/">«G.E.N.»</a> в разделе «Команда» перечислены имена 55 человек, некоторые из них участвуют в постановке и в качестве актеров. Кроме того, в списке указан сам Яжина, а также (сюрприз) российский хореограф Иван Естегнеев. Сообщается, что спектакль является ответом на фильм Ларса фон Триера «Идиоты», однако не ставит перед собой задачу критиковать социально-политическое устройство страны, а только желает поразмышлять о природе человека, который, по мнению авторов, несмотря на цивилизационный и эволюционный прогресс, морально не развивается. ♦</p>
        </Section>
        <Share url={url} />
        <Other url={url} />
      </div>
    )
  }
}

export default Svet
