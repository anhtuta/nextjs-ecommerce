import React from 'react';
import { ldsRing, loadingFs } from './Loading.module.scss';

/**
 * Ref: https://loading.io/css/
 */
const Loading = (props) => {
  const { show, fullscreen = true } = props;
  const className = fullscreen ? loadingFs : '';
  return show ? (
    <div className={className}>
      <div className={ldsRing}>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  ) : null;
};

export default Loading;
