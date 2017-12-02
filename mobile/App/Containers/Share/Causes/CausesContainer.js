import { connect } from 'react-redux';
import React from 'react';
import FormRender from './CausesView';
import { Assets } from '@theme/';
import CausesList from './CausesList/CausesListContainer';

const causes = [
  {
    image: Assets.grupoLobo,
    category: 'Social',
    cause: 'Grupo Lobo',
    description: 'Etiam eget diam et elit gravida vestibulum. Integer in orci viverra, pharetra nisl nec, condimentum  aliquam augue. Suspendisse potenti. Suspendisse nec urna vitae nulla efficitur bibendum id et lacus. Fusce quis nisl vitae lorem fringilla ornare. Quisque eu ex et mauris iaculis molestie nec et neque.'
  },
  {
    image: Assets.wikipedia,
    category: 'Social',
    cause: 'Wikipedia',
    description: 'Etiam eget diam et elit gravida vestibulum. Integer in orci viverra, pharetra nisl nec, '
  },
  {
    image: Assets.amnistia,
    category: 'Social',
    cause: 'Amnistia Internacional',
    description: 'Vestibulum sagittis, est non luctus imperdiet, nibh mauris congue arcu, eget bibendum diam sem ac nisi. '
  },
  {
    image: Assets.wordpress,
    category: 'Social',
    cause: 'World Press Photo',
    description: 'Aenean rhoncus, nunc eget pulvinar dictum, libero arcu rhoncus ligula, a euismod nisl nisi gravida orci. Donec sed lacus placerat, elementum enim vel, rhoncus nisl.'
  },
]

const mapStateToProps = (state) => ({
  session: state.session,
  FirstRoute: () => <CausesList causes={causes} category={'Social'} informative={state.informative}/>,
  SecondRoute: () => <CausesList causes={causes} category={'Ambiental'} informative={state.informative}/>,
  ThirdRoute: () =>  <CausesList causes={causes} category={'Cultural'} informative={state.informative}/>,
});

export default connect(mapStateToProps, null)(FormRender);
