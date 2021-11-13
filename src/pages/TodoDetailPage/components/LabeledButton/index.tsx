import styles from './LabeledButton.module.scss';

import cx from 'classnames';
import React from 'react';

interface LabeledButtonProps extends React.HTMLAttributes<HTMLButtonElement> {
  icon: React.ReactElement<
    React.FunctionComponent<
      React.SVGProps<SVGSVGElement> & {
        title?: string | undefined;
      }
    >
  >;
  label: string;
}

const LabeledButton = ({ className, icon, label, onClick }: LabeledButtonProps) => {
  return (
    <button className={cx(styles['labeled-button'], className)} onClick={onClick}>
      {icon}
      {label}
    </button>
  );
};

export default LabeledButton;
