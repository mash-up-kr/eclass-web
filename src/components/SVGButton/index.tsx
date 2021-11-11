import styles from './SVGButton.module.scss';

import cx from 'classnames';
import React from 'react';

interface SVGButtonProps extends React.HTMLAttributes<HTMLButtonElement> {
  icon: React.ReactElement<
    React.FunctionComponent<
      React.SVGProps<SVGSVGElement> & {
        title?: string | undefined;
      }
    >
  >;
}

const SVGButton = ({ className, icon, onClick }: SVGButtonProps) => {
  return (
    <button className={cx(styles['svg-button'], className)} onClick={onClick}>
      {icon}
    </button>
  );
};

export default SVGButton;
