import React, { useEffect, useState } from 'react';

import { useHistory } from 'react-router-dom';
import { connect } from 'react-redux';

import './progress-bar.scss';

export const ProgressBar = ({ loading }) => {
  if (loading) {
    return (
      <div className="progress-progress">
        <div className="indeterminate" />
      </div>
    );
  }
  return null;
};

export const ProgressSwitch = () => {
  const [state, setState] = useState(false);
  const {
    location: { pathname },
  } = useHistory();

  useEffect(() => {
    setState(true);
    const timeout = setTimeout(() => {
      setState(false);
      clearTimeout(timeout);
    }, 300);
  }, [pathname]);

  return <ProgressBar loading={state} />;
};

export const IndeterminateProgressBarState = ({ loading: status }) => {
  if (status) {
    return (
      <div className="progress-progress">
        <div className="indeterminate" />
      </div>
    );
  }
  return null;
};

const IndeterminateProgressBar = ({ loading }) => (
  <ProgressBar loading={loading} />
);

const mapStateToProps = ({ loadingReducer: { state } }) => ({
  loading: state,
});

export default connect(mapStateToProps, {})(IndeterminateProgressBar);
