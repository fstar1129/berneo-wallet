import { connect } from 'react-redux';
import {
  setSeedPhraseBackedUp,
  initializeThreeBox,
} from '../../../../store/actions';
import { getOnboardingInitiator } from '../../../../selectors';
import { setCompletedOnboarding } from '../../../../store/actions';
import ConfirmSeedPhrase from './confirm-seed-phrase.component';


const firstTimeFlowTypeNameMap = {
  create: 'New Wallet Created',
  import: 'New Wallet Imported',
};

const mapStateToProps = (state) => {
  const {
    metamask: { firstTimeFlowType },
  } = state;

  return {
    completionMetaMetricsName: firstTimeFlowTypeNameMap[firstTimeFlowType],
    onboardingInitiator: getOnboardingInitiator(state),
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    setCompletedOnboarding: () => dispatch(setCompletedOnboarding()),
    setSeedPhraseBackedUp: (seedPhraseBackupState) =>
      dispatch(setSeedPhraseBackedUp(seedPhraseBackupState)),
    initializeThreeBox: () => dispatch(initializeThreeBox()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ConfirmSeedPhrase);
