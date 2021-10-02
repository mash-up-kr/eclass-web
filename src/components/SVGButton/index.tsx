import styles from './SVGButton.module.scss';

import cx from 'classnames';

interface SVGButtonProps {
  className?: string;
  icon: React.ReactElement<
    React.FunctionComponent<
      React.SVGProps<SVGSVGElement> & {
        title?: string | undefined;
      }
    >
  >;
}

const SVGButton = ({ className, icon }: SVGButtonProps) => {
  return <button className={cx(styles['svg-button'], className)}>{icon}</button>;
};

export default SVGButton;
