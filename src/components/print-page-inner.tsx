import { ComponentProps } from 'react';
import { css, cx } from 'styled-system/css';

type PrintPageInnerProps = ComponentProps<'div'>;

export function PrintPageInner({
  children,
  className,
  ...props
}: PrintPageInnerProps) {
  return (
    <div className={cx(styles.wrap, className)} {...props}>
      {children}
    </div>
  );
}

const styles = {
  wrap: css({
    overflow: 'hidden',
    width: 'calc(210mm - 10mm * 2)',
    height: 'calc(297mm - 10mm * 2)',
    '& p': {
      pt: 8,
    },
  }),
};
