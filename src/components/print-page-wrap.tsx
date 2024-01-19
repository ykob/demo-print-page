import { ComponentProps } from 'react';
import { css, cx } from 'styled-system/css';

type PrintPageProps = ComponentProps<'div'>;

export function PrintPageWrap({
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
    p: 8,
    bg: 'gray.900',
  }),
};
