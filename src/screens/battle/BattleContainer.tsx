import { connect } from 'react-redux';
import { RootState, AppDispatch } from 'store';
import { getPlayers, getEnemies } from 'store/battle/selectors';
import Battle from './Battle';

function mapStateToProps(state: RootState) {
  return {
    players: getPlayers(state.battle),
    enemies: getEnemies(state.battle)
  };
}

function mapDispatchToProps(dispatch: AppDispatch) {
  return {};
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Battle);
