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
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

const SVGButton = ({ className, icon, onClick }: SVGButtonProps) => {
  return (
    <button className={cx(styles['svg-button'], className)} onClick={onClick}>
      {icon}
    </button>
  );
};

export default SVGButton;
