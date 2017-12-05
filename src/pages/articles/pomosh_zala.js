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
import Video from '../../components/Video'
import Small from '../../components/Small'
import Note, { NoteWrapper, NotedWord } from '../../components/Note'
import Section from '../../components/Section'
import P from '../../components/P'
import Date from '../../components/Date'
import Share from '../../components/Share'
import Other from '../../components/Other'
import Gallery from '../../components/Gallery'


import img1 from '../images/pomosh_zala/1.jpg'
import img2 from '../images/pomosh_zala/2.jpg'
import img3 from '../images/pomosh_zala/3.jpg'
import img4 from '../images/pomosh_zala/4.jpg'
import img5 from '../images/pomosh_zala/5.jpg'

import cover from '../images/pomosh_zala/cover.jpg'

const url = 'https://teatralium.com/articles/pomosh_zala'
const title = 'Помощь зала: социальный театр от Боба Уилсона до Бориса Павловича'

const H2Styled = styled(H2)`
  font-size: 1.713em;
  margin-bottom: 3rem;
`

const H1Styled = styled(H1small)`
  margin-top: 7rem;
`

const ImgStyled = styled(Img)`
  margin-top: 5rem;
  margin-bottom: 5rem;
`

const H3Styled = styled(H3)`
  margin-top: 5rem;
  margin-bottom: 5rem;
`

const images = [img1, img2, img3]

export class Pomosh extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div>
        <ArticleHelmet
          url={url}
          image={cover}
          width="1200"
          height="672"
          description="Арт-терапия, психодрама и Театр угнетенных."
          title={`${title} | Театралий`}
        />
        <Section>
          <Date>5 декабря 2017, текст:&nbsp;<b>Виктор Вилисов</b></Date>
          <H1 center>Помощь зала</H1>
          <H1small center>социальный театр от Боба Уилсона до Бориса Павловича</H1small>
          <P>В конце ноября спектаклем «Разговоры» открылось социокультурное пространство <a href="https://www.facebook.com/apartment.talks/">«Квартира»</a> на набережной Мойки в Петербурге. В постановке Бориса Павловича, основанной на диалогах петербургских литераторов начала прошлого века, вместе с актерами участвуют люди с расстройством аутического спектра — студенты центра «Антон тут рядом». О социальных театральных проектах написано немало, но всегда приятно получить более-менее полную картину происходящего: от истоков до современных практик. «Театралий» отвлек резонансного Виктора Вилисова от его основного вида деятельности, чтобы тот разобрался, как возникла арт-терапия, что такое психодрама и почему мы все можем играть в театре угнетенных.</P>
          <p>В 1984 году Роберт Уилсон привез в Париж спектакль «Письмо королеве Виктории» («A Letter for Queen Victoria»), впервые показанный в Италии. На парижский показ он пригласил свою 88-летнюю бабушку Альму Хэмилтон, живущую в Техасе. Почти в каждом публичном выступлении, которое у Уилсона сводится к примерно одинаковому набору анекдотов, он пересказывает ее ответ на вопрос о самочувствии по прилете: «Oh, I am doing pretty good, Bob, but you should know that I have to take nine pills a day to stay alive. Three diabetic pills, two vitamin pills, one blood pressure pill, one liver pill, one heart pill, and without all those pills I’d just collapse», — мол, у меня все хорошо, вот только мне нужно глотать по девять таблеток в день, чтобы не помереть. Боб предложил ей принять участие в его спектакле в роли королевы Виктории, она с большой радостью согласилась, переживая только о том, что ей следует говорить на сцене. Уилсон сказал, что тирада про таблетки будет в самый раз. </p>
          <Img
            src={cover}
            desc="Роберт Уилсон в спектакле «Письмо королеве Виктории», 1974 год. Фото: © Philippe Gras"
            marginBottom="4rem"
          />
          <p>Годом ранее для спектакля «Жизнь и эпоха Иосифа Сталина» («The Life and Times of Joseph Stalin») Уилсон выхватил незнакомого человека на улице, который, на его взгляд, был похож на Сталина, и убедил его сыграть в постановке. Занятием непрофессиональных актеров в современном театре сегодня поди кого-нибудь удиви, однако представьте, что вы попали на спектакль, коллектив перформеров которого состоит из больного шизофренией, человека с аутизмом, трансвестита, гомосексуала с девиантным поведением из бедной семьи и человека на инвалидной коляске. Впрочем, чего тут представлять, — это состав типичной труппы Пиппо Дельбоно, да и Ромео Кастеллуччи среди многих других режиссеров замечен в привлечении к постановкам секс-работниц и других представителей социума, оказавшихся в сложных жизненных обстоятельствах. Представьте тогда, что на сцене все происходит не для того, чтобы, собственно, показать зрителям спектакль, а для того, чтобы людям, в нем играющим, значительно полегчало — каждому по-своему. Это называется театр-терапия, и это, кажется, одно из самых перспективных направлений немедикаментозной помощи при подобных проблемах. </p>
          <H1Styled>Арт-терапия, психодрама и Театр угнетенных</H1Styled>
          <p>Психотерапевтическое сообщество относит театр к разновидности арт-терапии. Сам термин «арт-терапия» был введен в 1942 году британским художником Адрианом Хиллом, но подобные практики бытуют еще с конца XVIII века, когда они были включены в широкий раздел «моральной помощи» и применялись в основном к психиатрическим больным. Все это пошло от идеи, что фантазии ментально нездоровых людей следует не подавлять, а, напротив, изучать — как отражение того, что происходит у них в голове. В этом есть чисто лечебная необходимость: нельзя вылечить то, чего не понимаешь, а через искусство, как считается, пациенты способны выразить себя и свое внутреннее состояние. Поэтому в психиатрических клиниках давным-давно начали практиковать арт-терапию, которая заключалась, как правило, в рисовании, которое до сих пор считается самым распространенным ее подразделом. Однако в действительности она включает в себя несколько разделов, которые имеют отношение к танцу, музыке/пению, литературе и театру, из которого, в свою очередь, выделяются драматерапия и кукольная терапия. Эти два понятия описываются, собственно, двумя типами театра: нарративного/разговорного и кукольного. Драматерапия базируется строго на тексте и диалогах, проговаривании и проигрывании разного рода ситуаций; кукольная же работает с пациентами средствами кукольного театра. Поскольку здесь важно физическое взаимодействие манипулятора с марионеткой, такой тип терапии имеет отношение скорее к сенсомоторному развитию пациента, нежели к накоплению социальных навыков.</p>
          <H3Styled>Может ли обладать терапевтическим эффектом конвенциональный театр, в котором не задаются целью кого-то вылечить?</H3Styled>
          <p>Профессионализация арт-терапии началась в середине прошлого века в англоговорящих и европейских государствах. Появились такие люди, как Адриан Хилл или Эдвард Адамсон, которые внедряли в собственную лечебную практику элементы арт-терапии. По мере распространения этих идей в профессиональном сообществе процесс перерос в учреждение ассоциаций: в 1964 году была основана Британская ассоциация арт-терапевтов. Аналогичная ассоциация в США была сформирована в 1969-м: уже двумя десятилетиями ранее в Штатах методы арт-терапии применялись для работы с детьми, вывезенными из немецких концлагерей.</p>
          <Video id="ok9Hb5m4r7E" desc="Терапевтический театр Якоба Морено, 1948 год" />
          <p>Театротерапия же берет свое начало еще в первой трети XX века. Развитие этой практики связано с деятельностью австро-американского психиатра и психосоциолога Якоба Морено. Во-первых, следует отметить, что именно Морено принадлежит введение в оборот понятия «групповая терапия»: в 1917 году, еще будучи студентом Венского университета, он собрал группу секс-работниц, которым пытался помочь разобраться с проблемами стигматизации и других социальных давлений. Во-вторых, именно Морено вводит в психотерапию термин «психодрама» (которая, впрочем, не является в строгом смысле групповой терапией). Понятие появилось в начале 1920-х, когда Морено основал импровизационную театральную компанию «Театр спонтанности». На этих представлениях (разыгрывавшихся, впрочем, по конкретным текстам) в нарративе наступал определенный момент, когда исполнители обращались к публике и мотивировали их взаимодействовать: предлагать решения, ходы, развязки сюжетов. Морено полагал, что такой способ работы является продолжением психоанализа: ему казалось важным преодолеть пассивность пациента и заставить его перейти к действиям, в ходе которых он наиболее полноценно сможет помочь психотерапевту и себе решить терапевтические задачи. Интересно, что имея в виду исключительно врачебные цели, Морено также внес свой вклад в развитие собственно театральных новаций, имеющих отношение прежде всего к изменению позиции зрителя.</p>
          <p>Работая над идеей психодрамы, Якоб Морено обращался к ключевому для тогдашнего театра понятию игры. Через проигрывание ролей и ситуаций, взятых из реальной жизни, как он полагал, пациенты способны получать необходимый для реабилитации социальный, психический, культурный и сенсомоторный опыт. Получение такого опыта помогает трансформировать личность пациента, расширять его представления о горизонте собственных интеллектуальных и физических возможностей. Не говоря о том, что разыгрывание ролей и пародирование является составной частью процесса выучивания социальных навыков в бихевиористской психотерапии, в социальных науках игра вообще занимает место одного из важнейших способов социализации. </p>
          <p>Другой заметный деятель театра на стыке с психотерапией — бразильский режиссер Аугусту Боал (1931–2009). Изначально Боал занимался исключительно социальным театром с сильным политическим зарядом и уклоном в документалистику: в Бразилии он ставил классические пьесы, адаптированные к тяжелой политической ситуации, а затем перешел на совсем демократические (в смысле порога понимания) музыкальные спектакли со злободневным содержанием, которые стали причиной его ареста и изгнания из страны. Основанный им в 70-х Театр угнетенных работал уже непосредственно как психотерапия (по Боалу, угнетенные — это «простые люди» вообще, не имеющие возможности говорить и действовать под гнетом государства).</p>
          <Video id="y5cYAz6n4Ag" desc="Аугусту Боал и Театр угнетенных" />
          <p>Многократно отмечая, что сам он не занимается психологическими проблемами, а только разбирает социальные драмы для помощи людям в бытовых и политических ситуациях, Боал в значительной части своей деятельности наследовал методам Морено: одной из главных его задач было нивелировать разницу между актерами и зрителями. Он использовал разные тактики пробуждения сознания и осмысления зрителями собственного тела, чтобы реализовать демократическую цель: дать безмолвным людям, сидящим в зале, возможность говорить и действовать самим — в частности, самим принимать решения о развязке пьесы (спектакли в многочисленных Театрах угнетенных, как правило, доходили по заранее прописанному сценарию до кульминации, после чего предполагалось вступление аудитории). Боал даже придумал специальный термин «spect-actor» («действующий в спектакле») вместо «spectator» («зритель»), чтобы обозначить форму существования человека в таком типе театра.</p>
          <p>Коротко продолжая разговор о теоретиках театротерапии и учитывая, что в театре до сих пор присутствует разделение на перформера и наблюдателя, нельзя оставить без внимания имя русско-французского драматурга Николая Евреинова (1879–1953), который также <a href="https://moluch.ru/archive/62/9351/">разрабатывал</a> свою теорию лечения театром — обращенную как раз не только к исполнителям, но и непосредственно к публике. Театр, по его мнению, с помощью имманентной ему жестокости художественного образа воздействует на зрителя и заставляет его меняться.</p>
          <H1Styled>Художественные задачи против медицинских</H1Styled>
          <p>Существует точка зрения, несколько вольно интерпретирующая идею драматерапии, но в целом почти верная. Она сводится к тому, что в сущности нет никакой разницы между терапевтическим театром и театром обыкновенным. Формально это правда, однако количество и качество театральных элементов (и их взаимодействие) в драматерапии делают ее специальным видом театра, который все-таки ближе к психотерапии, чем к искусству. Везде отмечается достаточно низкий уровень художественного качества текстов, которые разыгрываются на сеансах драматерапии; то есть «Гамлета» они, конечно, тоже ставят, но широко распространена практика сочинения текстов специально под каждую психотерапевтическую группу — этим занимаются специальные люди. Такая потребность обусловлена необходимостью максимально высветить в тексте проблему или ситуацию, которую нужно проработать с пациентом. В заслуженных художественных текстах очень часто конфликт бывает неочевидно проговорен или скрыт за слоями артистического материала. Тексты же для драматерапии нуждаются в некоторой примитивизации и концентрации внимания на конкретной проблеме. Наконец, у этого вида театра есть вполне определенная цель — поправить психическое и социальное здоровье пациента. Театр как терапия, вероятно, может быть спектакулярным для какой-то аудитории. Открытым остается вопрос, может ли обладать терапевтическим эффектом конвенциональный театр, в котором не задаются целью кого-то вылечить. Само понятие катарсиса в древнегреческой эстетике и античной философии, кажется, отвечает на этот вопрос положительно.</p>
          <H3Styled>Человек «вспоминает» или узнает о собственном потенциале — интеллектуальном, гуманистическом, физическом, а также рефлексирует по поводу собственных ценностей</H3Styled>
          <p>Роберт Уилсон, о котором шла речь в начале, своей ранней деятельностью это также подтверждает. Известна его дотеатральная творческая работа с детьми с разными нарушениями и особенностями психики и физиологии. Из многочисленных интервью Уилсона понятно, что он всегда преследовал собственные художественные задачи, однако невозможно не заметить тот мощный психотерапевтический заряд, которым обладают его ранние спектакли с участием подростков с особенностями: «Взгляд глухого» («Deafman Glance», 1970), «Письмо королеве Виктории» («A Letter for Queen Victoria», 1974), «Эйнштейн на пляже» («Einstein on the Beach», 1976). Он дает этим людям обрести собственный голос и манеру присутствия на сцене. По одной только дальнейшей художественной карьере Кристофера Ноулза, участвовавшего в некоторых спектаклях Уилсона, можно понять мощь незашоренной театральной терапии. До встречи с Уилсоном Ноулз учился в коррекционной школе, где его способ мышления и речи «исправляли» до нормального. Забегая вперед, следует сказать, что драматерапия в ее текущем виде все-таки далека от той натуральной творческой свободы, которую, например, давал Ноулзу Уилсон. Те тексты и рисунки, которые сочинял 13-летний мальчик с аутизмом, не имели бы никакого смысла для стандартной группы театротерапии. Там его попросили бы выучить роль или долго смотреть своему визави в глаза, что, вероятно, обновило бы его социальный опыт, но вряд ли так мощно сказалось бы на его творческом потенциале.</p>
          </Section>
          <Gallery images={images} />
          <Img
            src={img4}
            desc="После «Взгляда глухого», семичасовой беззвучной оперы, вдохновленной другом и коллегой Уилсона Рэймондом Эндрюсом, Уилсон встретил молодого человека Кристофера Ноулза. Он был поражен моделью речи мальчика; через некоторое время они начали работать вместе. Уилсон вспоминал, что однажды абсолютно на ровном месте Ноулз произнес: «Дорогая мадам, наивеличайшая из всех леди, хотя я никоим образом не удостоен чести быть вам представленным и даже бесконечно от этой чести далек...» Обескураженный Уилсон спросил его, что это было, и Ноулз ответил: «Письмо королеве Виктории». Фото:"
            title="robertwilson.com/lqv"
            url="http://robertwilson.com/lqv"
          />
          <Section>
          <p>Как правило, терапевтические театры-студии и студии драматерапии являются носителями стереотипа о театре как о пространстве диалога, разыгрывания ролей и проникновения в психологические тонкости взаимоотношений между двумя или более людьми. Однако расширяя фокус от исполнительства к производству спектакля в целом, можно значительно увеличить арсенал терапевтических средств театра для различных групп людей. Это становится особенно очевидным, если учесть синтез искусств в современном театре. В арт-терапии же до сих пор принято разделение на рисуночную терапию, музыкотерапию, танцевальную и так далее. </p>
          <p>Следует понимать, что, как и психотерапия вообще, терапия театром рассчитана на максимально широкий круг людей, которые могут обладать или не обладать особенностями психики или физиологии. Прежде чем переходить к примерам, нужно упомянуть о конкретных целях, которые разнообразные организаторы театротерапии себе ставят. В первую очередь подразумевается, что через терапию театром пациент улучшает собственные когнитивные способности. С некоторой небрежностью к точности терминов можно разделить гипотетические результаты такой терапии на интровертные и экстравертные. К первой группе относятся все трансформации личности, которые обуславливают отношение человека к самому себе. Предполагается, что в ходе театральных занятий у пациента кристаллизуется образ: самооценка приближается к адекватной, внутри появляется некий центр тяжести, нивелирующий навязанные социальные роли и стигмы, человек «вспоминает» или узнает о собственном потенциале — интеллектуальном, гуманистическом, физическом, а также рефлексирует по поводу собственных ценностей. Проигрывая типичные социальные ситуации, люди могут разрабатывать техники действия в опасных ситуациях, а люди с зависимостями, например, имеют шанс глубже понять негативные последствия для собственной личности и здоровья употребления тех или иных веществ. </p>
          <p>Вторая группа имеет отношение к максимально широкому спектру работы, связанной с социальными контактами и публичным или частным самовыражением пациента. В ходе театральных занятий люди получают возможность обзавестись принятыми в социуме паттернами поведения в разнообразных ситуациях, не говоря о том, что групповая игра формирует или улучшает способность к взаимодействию на близких дистанциях: прямые взгляды в глаза, прикосновения, умение определять чужие эмоции и интонацию речи через голос, мимику и жесты.</p>
          <p>Эффективность театротерапии (как и арт-терапии вообще) — вопрос дискуссионный. Если терапия с помощью изображения чего-либо на бумаге опирается — как минимум на базовых стадиях своего развития — на теоретические построения (предположения) Фрейда и Юнга, то теоретическая основа терапии театром (заложенная в числе прочих Морено и Боалом) значительно более расплывчатая. Основная сложность в исследовании эффективности этого метода заключается в том, что он применяется в полевых условиях, где почти невозможно как бы отгородить пациента от других методов лечения. Соответственно, даже если результаты будут выразительными, из них не получится выделить изолированную долю успеха, обусловленную театротерапией. В одном из примеров, о котором будет сказано ниже, авторы исследования отмечают, что «основным критерием эффективности проводимой работы является субъективная удовлетворенность пациентов занятиями в театральной студии, выражающаяся в повышении их самооценки, улучшении качества жизни, признании их творческих возможностей окружающими, желании участвовать в новых театральных и концертных постановках».</p>
          <H1Styled>Софокл против стресса</H1Styled>
          <p>Театротерапия, как уже было сказано, применяется в работе с представителями широчайшего набора социальных групп: легкие и тяжелые психиатрические больные, люди с разнообразными зависимостями, люди с травматическим военным или бытовым опытом, заключенные, люди без ярко выраженных проблем, тем не менее неудовлетворенные своим способом социального существования. Однако же наиболее часто используемой театротерапия стала в работе с людьми с расстройствами аутистического спектра. В этом смысле большой интерес вызывает кейс, описанный в <a href="https://www.ncbi.nlm.nih.gov/pmc/articles/PMC3055998/">этом исследовании</a> 2010 года.</p>
          <p>Для проекта <a href="http://vkc.mc.vanderbilt.edu/senselab/">SENSE</a> (Social Emotional NeuroScience Endocrinology) Theatre была собрана группа из восьми детей (одна девочка и семь мальчиков) с расстройствами аутистического спектра, в которую были включены восемь детей (по четыре мальчика и девочки) без особенностей развития. Эта группа (участники от 6 до 17 лет) принимала участие в создании мюзикла, в результате чего, как предполагали исследователи, дети с аутизмом смогут улучшить фундаментальные социальные навыки (в частности, восприятие эмоций и запоминание лиц). Кроме того, была сформулирована гипотеза о возможности биологических изменений в организмах детей после занятий, а именно уменьшении количества стресс-гормона кортизола в слюне и увеличении количества окситоцина в крови. Биологические замеры проводились за неделю до первой репетиции, а затем в течение трех месяцев по несколько раз в дни двухчасовых репетиций, которые сначала проходили один раз, а затем по три-четыре раза в неделю.</p>
          <Img
            src={img5}
            desc="«Квартира. Разговоры». Фото: vk.com/public150834381"
          />
          <NoteWrapper>
            <p>Мюзикл был разбит на несколько сцен: сначала дети разучивали песни, затем позиции на сцене и простые движения, после — хореографию. Широко использовалось так называемое видеомоделирование: детей из второй группы без особенностей записывали на видео, которое давали смотреть детям из первой группы для разучивания ролей, в том числе эмоциональных реакций, движений и жестов. Результаты показали заметное снижение уровня кортизола; что характерно, оно происходило в первые полтора месяца. После этого уровень снижался, но уже незначительно. Улучшение в распознавании эмоций на лице было почти незаметным, однако память на лица в тест-группе после занятий была очевидно лучше, чем вначале. </p>
            <Note top="-120px">Спектакль «Разговоры» покажут 16 и 17 декабря в рамках Первого фестиваля горизонтального театра и OFF-программы фестиваля NET.</Note> 
          </NoteWrapper>
          <p>Схожие цели преследует театротерапия в работе с больными шизофренией. Они обладают похожим набором расстройств: утеря социальных навыков, нераспознавание эмоций и интонаций, невозможность реализации эффективного социального контакта. С 2008 года в Кировской областной психиатрической больнице им. Бехтерева работает театральная студия «Белый ветер». <a href="https://cyberleninka.ru/article/n/teatr-terapiya-kak-metod-reabilitatsii-bolnyh-shizofreniey">В исследовании</a>, в котором данная студия присутствует в качестве примера, поясняется, как именно театротерапия может повлиять на дестигматизацию пациентов, на увеличение мотивации и самоуважения, раскрытие человеческого потенциала и приближение к сколько-нибудь активной социальной жизни. Как и везде, в данном случае театральные занятия — лишь один (и не главный) из применяемых методов лечения пациентов, поэтому выяснить его изолированную эффективность не представляется возможным. Как уточняется в тексте работы, «основным критерием эффективности проводимой работы является субъективная удовлетворенность пациентов». </p>
          <p>В 2009 году в США была основана театральная компания Theater of War Productions. Изначально они занимались тем, что устраивали театрализованные читки двух текстов Софокла — «Аякс» и «Филоктет» — перед американскими солдатами на территории военных баз и поселений. Прежде всего эта работа направлена на лечение посттравматического стрессового расстройства и связанных с ним жестокостью, агрессией и другими последствиями. Поскольку компания занимается практической деятельностью, а не исследовательской, о результатах говорить сложно. Однако в <a href="https://www.newyorker.com/culture/culture-desk/theatre-of-war-sophocles-message-for-american-veterans">тексте</a> The New Yorker об этой организации люди, работающие там, приводят несколько примеров того, с каких глубин отчаяния эти читки доставали солдат. Начиная с тривиального признания молодого рядового, что долгое время он думал о самоубийстве, но теперь его жизнь спасена, и заканчивая монологом 24-летнего солдата, побывавшего в Ираке и Афганистане, о том, как он после войны хотел убивать людей, понимал, что это недопустимо, и не мог рассказать об этом своей жене. Трагедийные тексты странным образом пробуждают в людях с посттравматическим стрессовым расстройством желание говорить о самых чудовищных вещах, которые их мучают. Это, конечно, не может не иметь терапевтического эффекта. </p>
          <Video id="Hkhm3mnJ19A" desc="«Theater of War»" />
          <p>Помимо этих двух текстов Софокла, Theater of War Productions постепенно запустила еще 15 проектов для разных аудиторий. В проекте «Антигона в Фергюсоне» компания помощью текста Софокла обращалась к проблеме взаимодействия полиции и локальных комьюнити; проект «Прометей в тюрьме» использовал текст Эсхила для работы с заключенными и оздоровления отношений в среде сокамерников; «Геркулес в Бруклине» повествовал словами Еврипида о проблеме огнестрельного оружия и насилия и так далее. Кроме античных трагедий, организаторы брали и современные тексты для работы с аудиторией, испытывавшей проблемы с алкогольной и наркотической зависимостью, жертвами сексуального насилия. Судя по доступным видео, с художественной точки зрения все это выглядит так же чудовищно, как и весь американский театр целиком, но главное ведь не это, а то, что такая работа действительно помогает. </p>
          <p>В городе Фолл-Ривер штата Массачусетс <a href="https://www.statnews.com/2016/08/23/theater-trauma-teenagers/">действует</a> театральная группа Trauma Drama. Она предназначена для «трудных подростков» с девиантным поведением или подвергшихся разным видам насилия: травле, сексуальному насилию, насилию в семье. Арсенал методов организации сводится к простым театральным представлениям, в которых импровизация и сочинительство важнее исполнения. Подростки проигрывают одну социальную ситуацию за другой, таким образом научаясь избегать и разрешать конфликты, проговаривать собственные проблемы вслух и вытаскивать из подсознания свои травмы. Работники центра отмечают, что ведут исследования на предмет эффективности такой работы: заполняют опросники и анкеты, проводят интервью со студентами и замеряют некоторые физиологические данные вроде сердечного ритма и дыхания, которые демонстрируют уровень стресса. Результаты, впрочем, опубликованы до сих пор не были.</p>
          <Video id="FKVfsA03wHw" desc="«Кристофер и отец», интегрированный театр-студия «Круг II». Участники студии — подростки, молодые люди и взрослые как с особенностями развития (интеллектуальная недостаточность, психические заболевания, соматические заболевания, нарушения опорно-двигательного аппарата, генетические заболевания, нарушения слуха), так и без таковых." />
          <p>Российская театральная индустрия (если вообще позволительна такая формулировка) тоже идет проторенной дорогой в этом направлении. Во-первых, в России существует Российская арт-терапевтическая ассоциация, которая к театру в целом отношения никакого не имеет, но работает с ним как с одним из нескольких направлений терапии искусством. Во-вторых, значителен и выразителен тот опыт, который существует в инклюзивных проектах российских режиссеров, фондов и театральных компаний. Хотя бы то, что спектакль Бориса Павловича «Язык птиц» стал в прошедшем сезоне лауреатом «Золотой маски» в номинации «Эксперимент», уже о многом говорит, как и вообще творческая биография Павловича, который, к слову, <a href="http://expert.ru/russian_reporter/2017/05/ya-adept-vremeni-nevelikoj-rezhissuryi/">говорил</a>, что не очень хочет, чтобы то, что он делает, ассоциировалось с инклюзивным движением. Это очень понятно: Павлович все-таки прежде всего режиссер, а не психотерапевт. Он, как и другие представители социального театра, разросшегося в России за последнее время и набирающего обороты, преследует, если можно об этом за него говорить, художественные цели. Большая удача для аудитории, что это — намеренно или нет — осуществляет еще и терапевтические функции, как в сторону зрителей, так и в сторону участников.</p>
        </Section>
        <Share url={url} />
        <Other url={url} />
      </div>
    );
  }
}

export default Pomosh;
