import { connect } from 'react-redux';
import React from 'react';
import FormRender from './CausesView';
import { Assets } from '@theme/';
import CausesList from './CausesList/CausesListContainer';

const causes = [
  {
    id: 1,
    name: 'REFOOD',
    category: 'Social',
    image: Assets.logoRefood,
    shortDescription: 'A Re-food é uma organização independente, orientada por cidadãos, 100% voluntária, uma comunidade de caridade eco-humanitária, que trabalha para eliminar o desperdício de alimentos e a fome em cada bairro.\nA Re-food opera na e para a comunidade, trabalhando sem salários e evitando todo e qualquer custo ou investimentos que não servem a sua missão.',
    description: '<p>O Movimento Re-food apresenta novas respostas para os antigos desafios, ferramentas locais capazes de reparar danos globais e potencializar os cidad&atilde;os para mudar o mundo e melhorar as suas pr&oacute;prias comunidades.</p><h4>O que &eacute; poss&iacute;vel?</h4><p>A Re-food come&ccedil;ou por questionar...</p><h4>Nosso Desafio:</h4><p>&Eacute; poss&iacute;vel que o destino de 1/3 de todos os alimentos que produzimos seja o lixo?</p><p>&Eacute; poss&iacute;vel que n&oacute;s &ndash; n&oacute;s e voc&ecirc; - deitemos fora comida perfeitamente boa numa base di&aacute;ria, enquanto os nossos vizinhos passam por dificuldades?</p><p>&Eacute; poss&iacute;vel que nos esque&ccedil;amos que a comida &eacute; um bem precioso porque alimenta pessoas e que as pessoas tamb&eacute;m - todas as pessoas - s&atilde;o preciosas?</p><h4>Nossa resposta:</h4><p>&Eacute; poss&iacute;vel acabar com enormes quantidades de res&iacute;duos alimentares e resgatar toneladas de comida boa no nosso pr&oacute;prio bairro ou vizinhan&ccedil;a?</p><p>&Eacute; poss&iacute;vel recrutar, organizar e manter centenas de volunt&aacute;rios para resgatar comida todos os dias &ndash; na sua comunidade e na minha?</p><p>&Eacute; poss&iacute;vel fornecer comida resgatada para aqueles que precisam dela nas pr&oacute;prias comunidades onde a comida &eacute; resgatada - sem custos para os benefici&aacute;rios ou quase sem custos?</p><p>&Eacute; poss&iacute;vel manter um baixo custo de opera&ccedil;&atilde;o por bairro com um alto rendimento de resgate alimentar que envolve todos os setores da comunidade (pessoas respons&aacute;veis, empresas e institui&ccedil;&otilde;es) - e faz&ecirc;-lo estritamente com base na boa vontade?</p><h5>&Eacute; poss&iacute;vel - &eacute; Re-food.</h5>'
  },
  {
    id: 2,
    name: 'SPEAK',
    category: 'Cultural',
    image: Assets.logoSpeak,
    shortDescription: 'O SPEAK é um programa linguístico e cultural criado para aproximar pessoas - uma partilha de línguas e culturas entre migrantes e locais que quebra barreiras, promove o multilinguismo, a igualdade e democratiza a aprendizagem das línguas. Qualquer pessoa se pode inscrever para aprender ou ensinar uma língua ou cultura, incluindo a do país onde reside.',
    description: '<p>O SPEAK é um programa linguístico e cultural criado para aproximar pessoas - uma partilha de línguas e culturas entre migrantes e locais que quebra barreiras, promove o multilinguismo, a igualdade e democratiza a aprendizagem das línguas. Qualquer pessoa se pode inscrever para aprender ou ensinar uma língua ou cultura, incluindo a do país onde reside.</p><h4>Qual é a nossa utopia para um mundo melhor?</h4><p>Sociedades que integram, valorizam e potenciam a diversidade cultural. Um mundo que reconhece que há problemas sociais que não respeitam fronteiras e cujas soluções requerem o mundo no pleno da sua diversidade.</p><h4>Como chegamos mais perto da nossa visão?</h4><p>Ajudamos a resolver o problema da exclusão social de migrantes e contribuímos para a sua integração nas cidades onde vivem através de um programa de partilha de conhecimentos linguísticos e culturais que derruba a barreira linguística e que aproxima pessoas de origens diferentes. </p>',
  },
  {
    id: 3,
    name: 'Grupo Lobo',
    category: 'Ambient',
    image: Assets.logoGrupoLobo,
    shortDescription: 'O Grupo Lobo é uma associação não-governamental de ambiente (ONGA), independente e sem fins lucrativos, reconhecido com o estatuto de Utilidade Pública, fundado a 18 de Setembro de 1985. \n' +
    '\n' +
    'No âmbito do Programa Signatus, o Grupo Lobo iniciou uma estratégia cujas áreas de atuação visam a informação da opinião pública, o apoio a estudos científicos e a promoção de medidas práticas de conservação.',
    description: '<h4>Quem somos</h4><p>O Grupo Lobo é uma associação não-governamental de ambiente (ONGA), independente e sem fins lucrativos, reconhecido com o estatuto de Utilidade Pública, fundado a 18 de Setembro de 1985. </p><p>No âmbito do Programa Signatus, o Grupo Lobo iniciou uma estratégia cujas áreas de atuação visam a informação da opinião pública, o apoio a estudos científicos e a promoção de medidas práticas de conservação.</p><p>Esta Associação integra a APZA – Associação Portuguesa de Zoos e Aquários; o CCCL – Clube do Cão de Castro Laboreiro; a LPDA – Liga Portuguesa dos Direitos do Animal; a WSPA – World Society for the Protection of Animals; e é Confrade de Honra da Confraria Cão da Serra da Estrela.</p><h4>Missão & Valores</h4><p>O Grupo Lobo tem como missão trabalhar em prol da conservação do lobo e do seu ecossistema em Portugal e fomentar o interesse pelo lobo e pelas ciências que lhe respeitam através da informação da opinião pública. </p>',
  },
  {
    id: 4,
    name: 'Word Press Photo',
    category: 'Social',
    image: Assets.logoWorldPressPhoto,
    shortDescription: 'World Press Photo é uma organização independente sem fins lucrativos fundada em 1955 em Amsterdã.\nÉ conhecida por realizar anualmente a maior e mais prestigiada distinção de fotojornalismo do mundo.',
    description: '<p>The World Press Photo Foundation is a major force in developing and promoting the work of visual journalists and visual storytellers, with a range of activities and initiatives that span the globe. </p><h3>Our aims</h3><h4>To inspire</h4><p>We help visual journalists and visual storytellers present their work to a global audience, celebrate the highest standards of visual journalism, and encourage fresh insights and new perspectives..</p><h4>To educate</h4><p>The future of visual journalism and storytelling depends on developing diverse talent and exploring new opportunities. With visuals now at the heart of human communication, the need for visual literacy is greater than ever. Our many educational projects around the world, led by the annual Joop Swart Masterclass, foster both good journalistic practice and creative storytelling. Through research, analysis and debate involving both the profession and the public, we seek new ways forward in meeting the many challenges confronting image makers..</p><h4>To support</h4><p>We are committed to freedom of expression, freedom of speech and freedom of the press, and as they come under increasing threat, we are redoubling our efforts to connect with visual journalists and their global audience to create a positive future for high-quality reporting and storytelling that can be trusted.</p>'
  },
  {
    id: 5,
    name: 'O Cantinho da Milu',
    category: 'Ambient',
    image: Assets.logoCantinhoDaMilu,
    shortDescription: 'O Cantinho da Milu é uma Associação Protectora de Animais, sem fins lucrativos, situada em Setúbal, fundada e gerida pela Emília Silva, carinhosamente tratada por Milu.',
    description: '<p>O Cantinho da Milu é uma Associação Protectora de Animais, sem fins lucrativos, situada em Setúbal, fundada e gerida pela Emília Silva, carinhosamente tratada por Milu.</p><p>Nascida e criada em Angola numa família que prezava o amor aos animais, alí viveu até 1975, ano em que imigrou para Portugal.</p><p>Em 1993 quis o destino que ao passar pelo Marquês de Pombal, em Lisboa, encontrasse uma cadelinha, com pouco mais de 2 meses, em péssimo estado.</p><p>A Milu recolheu-a e em boa hora o fez, pois além de lhe ter sido diagnosticada uma parvovirose, teve também que, pouco tempo depois, ser operada aos intestinos.</p><p>A Twice, assim foi chamada a pequena sobrevivente,foi a primeira cadela da Milu em Portugal e acabou por a marcar profundamente, tendo sido talvez a grande responsável pelo rumo que a sua vida tomou.</p><p>Nos anos seguintes, a Milu cruzou-se com muitos mais animais abandonados, doentes, maltratados e acidentados. Não sendo capaz de ficar indiferente, foi prestando assistência e aumentando o número de cães recolhidos, até que em Fevereiro de 2007 adquiriu um terreno para os acolher a todos, realizando um sonho que começara a tomar forma quando a sua vida se cruzou com a da Twice, que hoje é a imagem do albergue.</p><p>Nasceu assim o Cantinho da Milu, que em Abril de 2011 foi oficialmente constituída como Associação Protectora de Animais, sem fins lucrativos.</p><p>Neste albergue, vivem à data de hoje, cerca de 700 cães, a maior parte dos quais totalmente a cargo do Cantinho, a que a Milu dedica todo o seu tempo, numa luta constante para que possam todos viver com o máximo bem-estar possível, recebendo os cuidados de que necessitam.</p><p>“Lutar, nunca desistir”, é o lema da Milu ! </p>'
  },
  {
    id: 6,
    name: 'Ajuda de Berço',
    category: 'Social',
    image: Assets.logoAjudaDeBerco,
    shortDescription: 'A Ajuda de Berço é muito mais do que uma casa onde vivem muitos bebés, quarenta bebés.\n' +
    'A nossa Missão é sempre dar-lhes colo e contribuir para um projecto de vida duradouro e feliz. Dar o melhor que temos, sabemos e podemos',
    description: '<p>Caro Amigo,</p><p>A Ajuda de Berço é muito mais do que uma casa onde vivem muitos bebés, quarenta bebés.</p><p>Desde que nos juntámos em 1998 para dar vida a este projecto, já por aqui passaram 349 bebés. E a nossa Missão é sempre dar-lhes colo e contribuir para um projecto de vida duradouro e feliz. Dar o melhor que temos, sabemos e podemos. Dar amor, segurança e afecto. Ajudar estes bebés a crescerem felizes enquanto estão nos nossos braços e colaborar na solução ideal para a vida de cada um deles.</p><p>No trabalho que desempenhamos procuramos que seja sempre visível que esta não é uma obra nossa, dos fundadores ou dos sócios, é uma obra de Deus, e por isso é uma obra de todos. Trabalhamos segundo os valores da caridade responsável e qualidade profissional, recorrendo a Madre Teresa de Calcutá para nos inspirarmos e sabermos entregar esta obra nas mãos de Deus. Por isso deixamos um texto em que ela nos tira as palavras da boca, para descrevermos aquilo que é para nós a Ajuda de Berço, e os valores em que acreditamos.</p>'
  },
  {
    id: 7,
    name: 'CFA Institute',
    category: 'Social',
    image: Assets.logoCFAInstitute,
    shortDescription: 'The CFA Institute Research Foundation is a not-for-profit organization that sponsors independent, in-depth research on current issues important to investors and investment professionals around the world.',
    description: '<h4>Mission</h4><p>The mission of CFA Institute is served by generating value for core investment management professionals and engaging with the core investment management industry to advance ethics, market integrity, and professional standards of practice, which collectively contributes value to society.</p><h4>Vision</h4><p>CFA Institute seeks to set professional standards for investment management practitioners and broadly engage other finance professionals through their interest and interactions with the investment management industry. Improving outcomes for investors advances our social mission and benefits members through greater demand for educated and ethical investment management professionals.</p><h4>Values</h4><p>As a global, independent organization, we play a role in being a steward and champion of the investment management industry.</p><p>In addition to direct benefits to their clients, the work of investment management professionals and the impact of the investment management industry also benefits society through improved investor outcomes and the resulting effective allocation of capital that drives economic growth and development.</p><h4>Strategy</h4><p>We aspire to develop global financial markets that serve the public interest. The overall outcomes that we believe will contribute to this aspiration are a community of educated, ethical investment management professionals and financial markets that reflect CFA Institute beliefs.</p>'
  },
  {
    id: 8,
    name: 'Wikipedia',
    category: 'Cultural',
    image: Assets.logoWikipedia,
    shortDescription: 'A Wikipédia é hospedada pela Fundação Wikimedia, uma organização sem fins lucrativos, que também é responsável por uma série de outros projetos.',
    description: '<p>A Wikip&eacute;dia &eacute; um projeto de enciclop&eacute;dia colaborativa, universal e multil&iacute;ngue estabelecido na internet sob o princ&iacute;pio wiki. Tem como prop&oacute;sito fornecer um conte&uacute;do livre, objetivo e verific&aacute;vel, que todos possam editar e melhorar. O projeto &eacute; definido pelos princ&iacute;pios fundadores.</p><p>Todos os editores da Wikip&eacute;dia s&atilde;o volunt&aacute;rios. Eles integram uma comunidade colaborativa, sem um l&iacute;der, na qual os membros coordenam os seus esfor&ccedil;os no &acirc;mbito dos projetos tem&aacute;ticos e diversos espa&ccedil;os de discuss&atilde;o.</p><p>Todos podem publicar conte&uacute;do on-line desde que sigam as regras b&aacute;sicas estabelecidas pela comunidade, como por exemplo a verificabilidade da informa&ccedil;&atilde;o ou notoriedade do tema. Debates e coment&aacute;rios sobre os artigos s&atilde;o bem-vindos. As p&aacute;ginas de discuss&atilde;o servem para centralizar reflex&otilde;es e avalia&ccedil;&otilde;es sobre como melhorar o conte&uacute;do da Wikip&eacute;dia.</p>'
  },
]

const mapStateToProps = (state, ownProps) => ({
  session: state.session,
  FirstRoute: () => <CausesList navigation={ownProps.navigation} causes={causes} category={'Social'} informative={state.informative}/>,
  SecondRoute: () => <CausesList navigation={ownProps.navigation} causes={causes} category={'Ambient'} informative={state.informative}/>,
  ThirdRoute: () =>  <CausesList navigation={ownProps.navigation} causes={causes} category={'Cultural'} informative={state.informative}/>,
});

export default connect(mapStateToProps, null)(FormRender);
