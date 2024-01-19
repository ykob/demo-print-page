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
    minHeight: '297mm',
    bg: 'gray.200',
  }),
  inner: css({
    p: '10mm',
  }),
};
