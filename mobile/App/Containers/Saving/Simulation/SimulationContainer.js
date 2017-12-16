/**
 * Simulation Container
 *
 */
import { connect } from 'react-redux';
import FormRender from './SimulationView';

const initialInvestment = [
  { value: 0, label: '0' },
  { value: 5000, label: '5000' },
  { value: 10000, label: '10000' },
  { value: 15000, label: '15000' },
  { value: 20000, label: '20000' },
  { value: 25000, label: '25000' },
  { value: 30000, label: '30000' },
  { value: 35000, label: '35000' },
  { value: 40000, label: '40000' },
  { value: 45000, label: '45000' },
  { value: 50000, label: '50000' },
  { value: 55000, label: '55000' },
  { value: 60000, label: '60000' },
];

const monthlyContribution = [
  { value: 0, label: '0' },
  { value: 100, label: '100' },
  { value: 200, label: '200' },
  { value: 300, label: '300' },
  { value: 400, label: '400' },
  { value: 500, label: '500' },
  { value: 600, label: '600' },
  { value: 700, label: '700' },
  { value: 800, label: '800' },
  { value: 900, label: '900' },
  { value: 1000, label: '1000' },
];

const yearPeriod = [
  { value: 5, label: '5' },
  { value: 6, label: '6' },
  { value: 7, label: '7' },
  { value: 8, label: '8' },
  { value: 9, label: '9' },
  { value: 10, label: '10' },
  { value: 11, label: '11' },
  { value: 12, label: '12' },
  { value: 13, label: '13' },
  { value: 14, label: '14' },
  { value: 15, label: '15' },
];

const interestRate = [
  { value: 1, label: '1%' },
  { value: 2, label: '2%' },
  { value: 3, label: '3%' },
  { value: 4, label: '4%' },
  { value: 5, label: '5%' },
  { value: 6, label: '6%' },
  { value: 7, label: '7%' },
  { value: 8, label: '8%' },
  { value: 9, label: '9%' },
  { value: 10, label: '10%' },
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
