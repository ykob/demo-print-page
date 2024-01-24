import { ComponentProps } from 'react';
import { css, cx } from 'styled-system/css';

type PrintPageProps = ComponentProps<'div'>;

export function PrintPage({ children, className, ...props }: PrintPageProps) {
  return (
    <div className={cx(styles.wrap, className)} {...props}>
      <div className={styles.inner}>{children}</div>
    </div>
  );
}

const styles = {
  wrap: css({
    boxSizing: 'border-box',
    width: '210mm',
    height: '297mm',
    p: '10mm',
    bg: 'gray.200',
  }),
  inner: css({
    overflow: 'hidden',
    width: 'calc(210mm - 10mm * 2)',
    height: 'calc(297mm - 10mm * 2)',
  }),
};
