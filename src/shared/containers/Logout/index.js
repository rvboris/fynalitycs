import React from 'react';
import { connect } from 'react-redux';
import { push } from 'react-router-redux';
import { createSelector } from 'reselect';
import { defineMessages, FormattedMessage, injectIntl } from 'react-intl';

import { authActions } from '../../actions';
import Spinner from '../../components/Spinner';
import styles from './style.css';

const messages = defineMessages({
  done: {
    id: 'container.logout.done',
    description: 'Logout exit message',
    defaultMessage: 'The logout is complete, return to the main page',
  },
  process: {
    id: 'container.logout.process',
    description: 'Logout process message',
    defaultMessage: 'Logout...',
  },
});

class Logout extends React.Component {
  static propTypes = {
    logout: React.PropTypes.func.isRequired,
    goMain: React.PropTypes.func.isRequired,
    process: React.PropTypes.bool.isRequired,
  };

  constructor(...args) {
    super(...args);

    if (IS_CLIENT) {
      this.props.logout().finally(Promise.delay(2000).then(this.props.goMain));
    }
  }

  render() {
    return (
      <div className={styles.container}>
        <Spinner />

        {
          this.props.process
            ? <h4><FormattedMessage {...messages.process} /></h4>
            : <h4><FormattedMessage {...messages.done} /></h4>
        }
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  logout: () => dispatch(authActions.logout()),
  goMain: () => dispatch(push('/')),
});

const selector = createSelector(
  state => state.auth.process,
  process => ({ process }),
);

export default injectIntl(connect(selector, mapDispatchToProps)(Logout));