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
    shortDescription: 'The Re-food Movement is powered by the good will of the community, it takes the form of shared practical action and is sustained by ongoing resource activation.\n' +
    '\n' +
    'These dynamic and continuous processes work together to generate significant positive social impact for a wide spectrum of diverse community members.',
    description: '',
  },
  {
    id: 2,
    name: 'SPEAK',
    category: 'Cultural',
    image: Assets.logoSpeak,
    shortDescription: 'SPEAK is a linguistic and cultural program built to bring people closer together - a crowdsourcing language and culture exchange between migrants and locals that breaks barriers, promotes multilingualism, equality and democratizes language learning. Anyone can apply to learn or teach any language or culture including those of the country where they are residing.',
    description: '',
  },
  {
    id: 3,
    name: 'Grupo Lobo',
    category: 'Ambient',
    image: Assets.logoGrupoLobo,
    shortDescription: 'O GRUPO LOBO é uma associação não governamental de ambiente*, independente e sem fins lucrativos com estatuto de utilidade pública, fundado em 1985 para trabalhar a favor da conservação do lobo e do seu ecossistema em Portugal.\n',
    description: '',
  },
  {
    id: 4,
    name: 'Word Press Photo',
    category: 'Social',
    image: Assets.logoWorldPressPhoto,
    shortDescription: 'The World Press Photo Foundation is a major force in developing and promoting the work of visual journalists and visual storytellers, with a range of activities and initiatives that span the globe.',
    description: ''
  },
  {
    id: 5,
    name: 'O Cantinho da Milu',
    category: 'Ambient',
    image: Assets.logoCantinhoDaMilu,
    shortDescription: 'O Cantinho da Milu é uma Associação Protectora de Animais, sem fins lucrativos, situada em Setúbal, fundada e gerida pela Emília Silva, carinhosamente tratada por Milu.',
    description: ''
  },
  {
    id: 6,
    name: 'Ajuda de Berço',
    category: 'Social',
    image: Assets.logoAjudaDeBerco,
    shortDescription: 'A Ajuda de Berço é muito mais do que uma casa onde vivem muitos bebés, quarenta bebés.\n' +
    'A nossa Missão é sempre dar-lhes colo e contribuir para um projecto de vida duradouro e feliz. Dar o melhor que temos, sabemos e podemos',
    description: ''
  },
  {
    id: 7,
    name: 'CFA Institute',
    category: 'Social',
    image: Assets.logoCFAInstitute,
    shortDescription: 'The CFA Institute Research Foundation is a not-for-profit organization that sponsors independent, in-depth research on current issues important to investors and investment professionals around the world.',
    description: ''
  },
  {
    id: 8,
    name: 'Wikipedia',
    category: 'Cultural',
    image: Assets.logoWikipedia,
    shortDescription: 'Wikipedia is hosted by the Wikimedia Foundation, a non-profit organization that also hosts a range of other projects.',
    description: ''
  },
]

const mapStateToProps = (state, ownProps) => ({
  session: state.session,
  FirstRoute: () => <CausesList navigation={ownProps.navigation} causes={causes} category={'Social'} informative={state.informative}/>,
  SecondRoute: () => <CausesList navigation={ownProps.navigation} causes={causes} category={'Ambient'} informative={state.informative}/>,
  ThirdRoute: () =>  <CausesList navigation={ownProps.navigation} causes={causes} category={'Cultural'} informative={state.informative}/>,
});

export default connect(mapStateToProps, null)(FormRender);
