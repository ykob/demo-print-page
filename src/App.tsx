import { Fragment, useRef } from 'react';
import { PrintPage, PrintPageColumn, PrintPageWrap } from '~/components/';
import { pageContent } from '~/constants/';

export default function App() {
  const ref = useRef<HTMLDivElement>(null);

  return (
    <div>
      <PrintPageWrap>
        <PrintPage>
          <div ref={ref}>
            {pageContent.map((content, index) => (
              <Fragment key={index}>{content}</Fragment>
            ))}
          </div>
        </PrintPage>
        <PrintPageColumn>
          {pageContent.map((content, index) => (
            <PrintPage key={index}>{content}</PrintPage>
          ))}
        </PrintPageColumn>
      </PrintPageWrap>
    </div>
  );
}
