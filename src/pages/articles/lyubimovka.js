import React from "react";

import H1, { H1small } from "../../components/H1";
import H4 from "../../components/H4";
import Img from "../../components/Img";
import Section from "../../components/Section";
import P from "../../components/P";
import Date from "../../components/Date";
import Share from "../../components/Share";
import Gallery from "../../components/Gallery";
import Small from "../../components/Small";
import Video from "../../components/Video";
import ArticleHelmet from "../../components/ArticleHelmet";
import Other from "../../components/Other";

import lub from "../images/lyubimovka/lub.jpg";

import img1 from "../images/lyubimovka/1.jpg";
import img2 from "../images/lyubimovka/2.jpg";
import img3 from "../images/lyubimovka/3.jpg";
import img4 from "../images/lyubimovka/4.jpg";
import img5 from "../images/lyubimovka/5.jpg";
import img6 from "../images/lyubimovka/6.jpg";
import ppp from "../images/ppp.gif";

const images = [img1, img2, img3, img4, img5, img6];

const url = "https://teatralium.com/articles/lyubimovka";
const title =
  "«Меня волнует вся х**ня»: организатор любимовки Анна Банасюкевич о стране, в которой мы живем";

export class Lyubimovka extends React.PureComponent {
  // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div>
        <ArticleHelmet
          url={url}
          image={img5}
          description="Одиночество, интернет и феминизм."
          title={`${title} | Театралий`}
        />
        <Section>
          <H1>«Меня волнует вся х**ня»</H1>
          <H1small>
            организатор любимовки Анна Банасюкевич о стране, в которой мы живем
          </H1small>
          <Date>
            23 октября 2017, текст:&nbsp;<b>Анна Банасюкевич</b>
          </Date>
          <P>
            На фестиваль молодой драматургии{" "}
            <a href="http://lubimovka.ru/">«Любимовка»</a> в этом году прислали
            544 пьесы. «Театралий» попросил его соорганизатора, театрального
            критика Анну Банасюкевич рассказать, о чем эти пьесы и чего нового
            они могут дать театру.
          </P>
        </Section>
        <Img maxWidth="100%" src={lub} />
        <Small outside>Фото: Андрей Хиловский</Small>
        <Section paddingTop="2rem" withHomepageLink>
          <p>
            Каждый год мы получаем по несколько сотен текстов – наши отборщики,
            а это критики, драматурги, режиссеры выбрали для фестиваля 2017 года
            двадцать четыре. Отдельной строкой – фриндж-программа «Спорная
            территория», у нее своя команда и свои цели. «Спорную территорию»
            придумали еще в прошлом году с надеждой найти тексты, которые менее
            всего походили бы на пьесу. Тексты, которые, как нам казалось, могли
            бы бросить вызов сегодняшней сцене и наметить пути для театра
            будущего. Во фриндже-2017 – семь текстов. Есть еще и кураторская
            офф-программа – в этом году пьесы известных авторов собирал в афишу
            критик Павел Руднев.
          </p>
          <H4>Новая норма</H4>
          <p>
            Каждый год мы пытаемся размышлять об этом – как меняется
            драматургия, о чем думают те, кому сейчас двадцать или тридцать лет.
            Есть темы, тенденции, которые тянутся и причудливо деформируются на
            протяжении нескольких последних лет: например, не первый год пишут о
            чатах, об интернете, о том, как соцсети меняют принципы нашего
            общения; авторы имитируют или используют документальную переписку,
            но в этом году появились тексты инсайдерского характера. Тексты,
            погружающие нас в мир стримеров и блогеров – в мир совсем непонятный
            и неведомый, со своими законами, мифологией и языком, который
            читается как мудреная шифровка. Или коммуникативная драма – жанр не
            новый, но вот, например, в прошлом году появилась пьеса Олега
            Колосова «Неодушевленная Галина номер два», в которой главный герой
            сознательно отказывается от связи с миром, не хочет вписываться в
            привычные схемы семейного, дружеского толка. Герой, живущий с
            манекеном, в этой пьесе – не чудик, не фрик, его поведение
            представлено как выбор осознанный и, более того, вполне разумный. По
            сути, это текст о новой норме.
          </p>
          <Video id="ka4NtGNwK2Y" />
          <Small>
            Читка пьесы «Неодушевленная Галина номер два», режиссер Женя
            Беркович
          </Small>
          <H4>Взросление и фатализм</H4>
          <p>
            Тема человека инфантильного популярна в драматургии последние лет
            десять-пятнадцать – так ощущают себя авторы, так они видят
            окружающих их людей. И все же, в основном эти тексты – про
            тридцатилетних или около того. Но последние несколько лет у театров
            юного зрителя нет права жаловаться на отсутствие подростковых пьес –
            они всплывают то там (например, на конкурсе Новой сцены
            Александринского театра «Новая пьеса для детей»), то здесь. Эта
            волна напоминает о ранних пьесах Василия Сигарева про кричащее
            одиночество и неустроенность, незащищенность растущего человека во
            враждебном ему мире. Сейчас нет, может быть, такого социального
            накала, да и пьесы подростковые очень разные: кто-то описывает
            просто незнакомый, замкнутый мир (как это сделал несколько лет назад
            Павел Пряжко в тексте «Карина и Дрон»), а кто-то строит пьесу на
            жестком конфликте с окружением, с взрослой и уверенной фальшью.
            Например, в пьесе Тони Яблочкиной «Юра» среда очень важна – и
            ощущение маленького города, где все рядом и все знакомы, и
            обстановка в семье, где никто никого не любит, где насилие еле-еле
            прикрыто маской благополучия. Девочка Ася ненавидит отчима, а мать
            презирает за безволие, она приходит в чужую семью, к чужим мальчикам
            не за любовью, а просто, чтобы выйти за дверь, чтобы почувствовать
            себя не объектом, а субъектом. Хотя здесь есть вопрос и
            неоднозначность – Ася делает шаг, вроде бы, к свободе, а на самом
            деле, просто ищет, к кому бы прикрепиться, раз прежние связи рвутся.
            Такая история про испуганное перекати-поле, которому надо куда-то
            приткнуться. Она придет в комнату к мальчику Юре, сядет и будет
            сидеть упрямо, даже если будут волоком тащить. Юрин брат вытащит ее
            из этой квартиры, и она будет сидеть дома у него. Лишь бы кто спас,
            лишь бы кто-то что-то объяснил, хотя веры кому-либо уже никакой.
            Героиня замыкается в молчании - нет смысла говорить, раз нет шанса
            договориться и быть понятым. Это прямая рифма с пьесой Анастасии
            Букреевой «Ганди молчал по субботам», где юный герой, уставший от
            вранья, тоже выбирал молчание, невмешательство как доступную форму
            протеста.
          </p>
          <p>
            В пьесе Марии Дудко «На сцене» совсем все по-другому: здесь
            отдельные короткие сцены – как будто смотришь кино. Чуть-чуть (но
            совсем чуть-чуть) похоже на Пряжко: как будто мы зрители намеренно
            скучного реалити-шоу. Не такого, где мексиканские страсти, а где
            обычная подсмотренная жизнь – вдруг что-то и случается, но может и
            не случиться, все бесконечные разговоры. Интересно, как люди
            разговаривают, как веселятся, как выглядят – автор подчеркивает
            постоянную демонстративную смену имиджа одной из своих героинь.
            Одиночество здесь такое же, что и в пьесе Яблочкиной, но рассказать
            про это можно по-разному, да и социальная среда, очевидно, иная. С
            пьесой Дудко отчасти перекликается текст Полины Коротыч «На
            Шостаковича, 5», ненадрывная история о маете молодых, о смешном
            расхождении поколенческих идеалов.
          </p>
          <Gallery
            images={images}
            alt="Любимовка"
            desc="«Любимовка-2017». Фотографии Андрея Хиловского"
          />
          <p>
            Страшная история под Псковом, где так и непонятно как погибли
            подростки Катя и Денис, конечно, многих взбудоражила – встречались
            даже тексты, цитирующие их последние записи с ютуба. Пьеса Игоря
            Яковлева «На луне» - вымысел, но в центре внимания - суицид
            подростка, человека, обманутого и использованного, не нашедшего
            спасения даже в цинизме. Есть здесь интересный нюанс - переписка в
            контакте становится миром, где выстраиваются отношения, причём
            отношения непрямые, опосредованные. Это про невозможность и
            невыносимость прямого разговора. В пьесе Маши Конторович «Мама, мне
            оторвало руку» разговор об отчаянном стремлении преодолеть
            равнодушное отношение мира к себе завуалирован под фантасмагорию, в
            которой молодая героиня беседует с воображаемым суперменом.
          </p>
          <H4>Гендер и жизнь</H4>
          <p>
            В последние годы девушки все больше пишут пьесы, это уже не новость:
            гендерный состав драматургии меняется. Много текстов исповедального
            характера, много пьес о тяжелой женской доле, о неудовлетворенности
            в отношениях. Но стали появляться и пьесы с яростным четко
            артикулированным феминистским высказыванием, пьесы, предлагающие
            женщинам иные системы ценностей, не зацикленные на удачном
            замужестве. Таковы пьесы украинского драматурга Натальи Блок, на
            Любимовку попал ее текст «Меня волнует вся х...ня». Это история о
            современной художнице, ярком, модном и независимом человеке, остро
            ощущающем унижение в отношениях с коллегой. Блок пишет о том, как
            уязвима женщина в любви, в обществе, живущем по мужским правилам.
            Сам текст - остросюжетный триллер с политическим отливом: друг
            героини попадает в плен, та, несмотря на обиды, готова на все, чтобы
            собрать денег на выкуп. Но самопожертвование не влечет за собой
            награду. Главное в этом манифестационном тексте Блок - бешеная
            энергия, ярость, с которой героиня, а вместе с ней и автор, кричит –
            я не хочу быть женщиной в этом мужском мире, здесь у меня нет
            шансов, здесь – только каждодневная борьба за достоинство.
          </p>
          <p>
            Пьеса Дмитрия Соколова «Родной» - о гомосексуале, уехавшем из своего
            села покорять столицу. История не столько про взаимоотношение полов,
            сколько про странные человеческие союзы, которыми удивляет иногда
            жизнь. О том, что человек текуч, и любая характеристика временна –
            легковесный цинизм сменяется внезапным «приходом», когда какое-то
            чрезвычайное событие безжалостно проясняет мозг. Пьеса похожа на
            сборник показаний – каждый из действующих лиц рассказывает о своем
            видении драматических событий, и каждый меняется – интересно
            наблюдать, как рушатся стереотипы, как остывают первые реакции,
            основанные на страхе и гневе.
          </p>
          <Img marginTop="2rem" marginBottom="1em" src={ppp} />
          <H4>Пьесы-призраки</H4>
          <p>
            Всегда интересно читать тексты, которые оказываются не тем, за что
            себя выдают – пьесы-перевертыши. Это - про работу с формой, в первую
            очередь, которая позволяет как-то исподволь деформировать
            первоначально заданные темы, завести зрителя во внезапные дебри.
            Такая, например, пьеса «Карась» Марины Дадыченко, ученицы Натальи
            Скороход, из Петербурга: ее текст вырастает из мелкой бытовой
            ситуации, почти из анекдота. Молодая девушка купила в магазине
            живого карася, но что с ним делать не знает, поэтому звонит по
            скайпу матери, которая отдыхает в Индии. Автор подробно описывает
            картинку – расплывающиеся лица на экране телефона, пиксели,
            металлические голоса при плохой связи. Вдруг в этой истории
            появляется что-то линчевское – мир оказывается необъяснимым, полным
            тайн. В московской раковине бьется в предсмертных агониях несчастная
            рыба, а по реке Ганг плывут мертвые.
          </p>
          <p>
            Пьеса Натальи Милантьевой «Пилорама плюс» кажется, по началу,
            социальным высказыванием – это история про странную, неказистую
            любовь работяги к женщине из другого социального слоя. Но из
            монолога героя или его письма к возлюбленной узнаешь что-то
            сорокинское, про распадение языка и сознания. Работяга, сжигаемый
            смертельной страстью, оказывается персонажем чуть ли не
            Достоевского, а его энергия на грани безумия оживляет даже станки в
            цеху, с которыми он ведет напряженную беседу о любви и жизни.
          </p>
          <p>
            На самом деле, такой обзор довольно субъективен – сложно в одном
            тексте описать несколько десятков пьес, каждая из которых достойна
            разговора о новых темах, языке или форме. Например, пьеса братьев
            Перепалец «Убийство», написанная как комедийные триллер, говорит о
            тоске современного человека по рефлексии, по утраченному чувству
            вины, а «Текстогенератор. Дальние родственники» Елены Демидовой из
            фриндж-программы с помощью компьютерной программы дробит
            документальные интервью в странную мозаику, из которой собирается
            спектакль. Так или иначе, тексты Любимовки – повод поговорить о том,
            какой театр уже существует, а какой предлагают новые тексты. ♦
          </p>
        </Section>
        <Share url={url} />
        <Other url={url} />
      </div>
    );
  }
}

export default Lyubimovka;
