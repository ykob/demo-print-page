import { ComponentProps } from 'react';
import { css, cx } from 'styled-system/css';

type PrintPageProps = ComponentProps<'div'>;

export function PrintPageColumn({
  children,
  className,
  ...props
}: PrintPageProps) {
  return (
    <div className={cx(styles.wrap, className)} {...props}>
      {children}
    </div>
  );
}

const styles = {
  wrap: css({
    display: 'flex',
    flexDirection: 'column',
    gap: 4,
  }),
};
