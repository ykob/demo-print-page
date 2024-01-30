import { Fragment, useEffect, useRef, useState } from 'react';
import {
  PrintPage,
  PrintPageColumn,
  PrintPageInner,
  PrintPageWrap,
} from '~/components/';
import { pageContent } from '~/constants/';

export default function App() {
  const ref = useRef<HTMLDivElement>(null);
  const ref2 = useRef<HTMLDivElement>(null);
  const [breakedContent, setBreakedContent] = useState<JSX.Element[][]>([]);

  useEffect(() => {
    if (!ref.current || !ref2.current) return;

    const contents: JSX.Element[][] = [[]];
    const rect = ref2.current.getBoundingClientRect();
    const children: Array<HTMLElement> = Array.prototype.slice.apply(
      ref.current.childNodes,
    );
    let index = 0;
    let offsetTop = 0;

    children.forEach((child, i) => {
      const childRect = child.getBoundingClientRect();
      if (childRect.bottom - offsetTop > rect.bottom) {
        contents.push([]);
        index += 1;
        offsetTop = childRect.top;
      }
      contents[index].push(pageContent[i]);
    });
    setBreakedContent(contents);
  }, []);

  return (
    <div>
      <PrintPageWrap>
        <PrintPage>
          <div ref={ref2}>
            <PrintPageInner>
              <div ref={ref}>
                {pageContent.map((content, index) => (
                  <Fragment key={index}>{content}</Fragment>
                ))}
              </div>
            </PrintPageInner>
          </div>
        </PrintPage>
        <PrintPageColumn>
          {breakedContent.map((page, index) => (
            <PrintPage key={index}>
              <PrintPageInner>
                {page.map((content, index) => (
                  <Fragment key={index}>{content}</Fragment>
                ))}
              </PrintPageInner>
            </PrintPage>
          ))}
        </PrintPageColumn>
      </PrintPageWrap>
    </div>
  );
}
