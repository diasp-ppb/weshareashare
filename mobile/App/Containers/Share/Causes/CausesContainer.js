import { connect } from 'react-redux';
const _ = require('lodash');
import { TabViewAnimated, TabBar, SceneMap } from 'react-native-tab-view';
import FormRender from './CausesView';
import { Assets } from '@theme/';

const causes = [
  {
    image: Assets.grupoLobo,
    category: 'People',
    cause: 'Grupo Lobo',
    description: 'Etiam eget diam et elit gravida vestibulum. Integer in orci viverra, pharetra nisl nec, condimentum  aliquam augue. Suspendisse potenti. Suspendisse nec urna vitae nulla efficitur bibendum id et lacus. Fusce quis nisl vitae lorem fringilla ornare. Quisque eu ex et mauris iaculis molestie nec et neque.'
  },
  {
    image: Assets.wikipedia,
    category: 'People',
    cause: 'Wikipedia',
    description: 'Etiam eget diam et elit gravida vestibulum. Integer in orci viverra, pharetra nisl nec, '
  },
  {
    image: Assets.amnistia,
    category: 'People',
    cause: 'Amnistia Internacional',
    description: 'Vestibulum sagittis, est non luctus imperdiet, nibh mauris congue arcu, eget bibendum diam sem ac nisi. '
  },
  {
    image: Assets.wordpress,
    category: 'People',
    cause: 'World Press Photo',
    description: 'Aenean rhoncus, nunc eget pulvinar dictum, libero arcu rhoncus ligula, a euismod nisl nisi gravida orci. Donec sed lacus placerat, elementum enim vel, rhoncus nisl.'
  },
]

const mapStateToProps = (state) => {
  let category = state.category ? state.category : 'People';
  let causesFiltered = _.filter(causes, ['category', category]);
  return {
    session: state.session,
    informative: state.informative ? state.informative : true,
    causes: causesFiltered,
  };
}

const mapDispatchToProps = () => ({
  submit: null,
});

export default connect(mapStateToProps, mapDispatchToProps)(FormRender);
