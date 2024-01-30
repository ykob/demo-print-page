import { ComponentProps } from 'react';
import { css, cx } from 'styled-system/css';

type PrintPageProps = ComponentProps<'div'>;

export function PrintPage({ children, className, ...props }: PrintPageProps) {
  return (
    <div className={cx(styles.wrap, className)} {...props}>
      {children}
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
};
