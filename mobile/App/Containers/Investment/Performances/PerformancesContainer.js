/**
 * Performances Container
 *
 */
import { connect } from 'react-redux';
import FormRender from './PerformancesView';

const data = [
  { x: 'Jan/16', y: 5.00000 },
  { x: 'Fev/16', y: 5.13149 },
  { x: 'Mar/16', y: 5.14509 },
  { x: 'Abr/16', y: 5.12552 },
  { x: 'Mai/16', y: 5.20657 },
  { x: 'Jun/16', y: 5.34381 },
  { x: 'Jul/16', y: 5.38145 },
  { x: 'Ago/16', y: 5.35287 },
  { x: 'Set/16', y: 5.32910 },
  { x: 'Out/16', y: 5.31220 },
  { x: 'Nov/16', y: 5.32126 },
  { x: 'Dec/16', y: 5.36743 },
  { x: 'Jan/17', y: 5.30220 },
  { x: 'Fev/17', y: 5.40268 },
  { x: 'Mar/17', y: 5.42551 },
  { x: 'Abr/17', y: 5.42961 },
  { x: 'Mai/17', y: 5.45766 },
  { x: 'Jun/17', y: 5.41954 },
  { x: 'Jul/17', y: 5.38028 },
  { x: 'Ago/17', y: 5.37660 },
  { x: 'Set/17', y: 5.41566 },
  { x: 'Out/17', y: 5.54561 },
  { x: 'Nov/17', y: 5.45118 },
];

const mapStateToProps = (state) => ({
  session: state.session,
  data,
});

const mapDispatchToProps = () => ({});

export default connect(mapStateToProps, mapDispatchToProps)(FormRender);
