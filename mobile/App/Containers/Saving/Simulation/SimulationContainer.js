/**
 * Simulation Container
 *
 */
import { connect } from 'react-redux';
import FormRender from './SimulationView';

const initialInvestment = [
  { value: 0, label: '0' },
  { value: 500, label: '500' },
  { value: 1000, label: '1 000' },
  { value: 5000, label: '5 000' },
  { value: 10000, label: '10 000' },
  { value: 20000, label: '20 000' },
  { value: 50000, label: '50 000' },
  { value: 100000, label: '100 000' },
  { value: 200000, label: '200 000' }
];

const monthlyContribution = [
  { value: 0, label: '0' },
  { value: 20, label: '20' },
  { value: 50, label: '50' },
  { value: 75, label: '75' },
  { value: 100, label: '100' },
  { value: 250, label: '250' },
  { value: 500, label: '500' },
  { value: 1000, label: '1 000' },
  { value: 5000, label: '5 000' }
];

const yearPeriod = [
  { value: 1, label: '1 ano' },
  { value: 5, label: '5 anos' },
  { value: 10, label: '10 anos' },
  { value: 15, label: '15 anos' },
  { value: 20, label: '20 anos' },
  { value: 25, label: '25 anos' },
  { value: 30, label: '30 anos' },
  { value: 35, label: '35 anos' },
  { value: 40, label: '40 anos' }
];

const interestRate = [
  { value: 0.1, label: '0,1%' },
  { value: 0.5, label: '0,5%' },
  { value: 1, label: '1,0%' },
  { value: 2.5, label: '2,5%' },
  { value: 5, label: '5%' },
  { value: 7.5, label: '7,5%' },
  { value: 10, label: '10%' },
  { value: 15, label: '15%' },
  { value: 20, label: '20%' },
];

const mapStateToProps = (state) => ({
  interestRate,
  initialInvestment,
  yearPeriod,
  monthlyContribution,
  session: state.session,
});

const mapDispatchToProps = () => ({});

export default connect(mapStateToProps, mapDispatchToProps)(FormRender);
