import { useEffect, useRef } from 'react';
import { PrintPage, PrintPageWrap } from '~/components/';

export default function App() {
  const ref = useRef<HTMLDivElement>(null);
  const splitted = useRef<Element[]>([]);

  useEffect(() => {
    splitted.current = [];
    Array.from(ref.current!.children).map((child) => {
      splitted.current.push(child);
    });
    console.log('useEffect', splitted.current);
  }, []);

  return (
    <div>
      <PrintPageWrap>
        <PrintPage>
          <div ref={ref}>
            <h1>Print Page</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat
              voluptates, voluptatum, quae, quas quibusdam quidem voluptatibus
              voluptatem dolorum voluptate natus fugiat. Quisquam, voluptate
              voluptatum. Quisquam, voluptate voluptatum.
              <span>aaa</span>
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat
              voluptates, voluptatum, quae, quas quibusdam quidem voluptatibus
              voluptatem dolorum voluptate natus fugiat. Quisquam, voluptate
              voluptatum. Quisquam, voluptate voluptatum.
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat
              voluptates, voluptatum, quae, quas quibusdam quidem voluptatibus
              voluptatem dolorum voluptate natus fugiat. Quisquam, voluptate
              voluptatum. Quisquam, voluptate voluptatum.
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat
              voluptates, voluptatum, quae, quas quibusdam quidem voluptatibus
              voluptatem dolorum voluptate natus fugiat. Quisquam, voluptate
              voluptatum. Quisquam, voluptate voluptatum.
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat
              voluptates, voluptatum, quae, quas quibusdam quidem voluptatibus
              voluptatem dolorum voluptate natus fugiat. Quisquam, voluptate
              voluptatum. Quisquam, voluptate voluptatum.
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat
              voluptates, voluptatum, quae, quas quibusdam quidem voluptatibus
              voluptatem dolorum voluptate natus fugiat. Quisquam, voluptate
              voluptatum. Quisquam, voluptate voluptatum.
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat
              voluptates, voluptatum, quae, quas quibusdam quidem voluptatibus
              voluptatem dolorum voluptate natus fugiat. Quisquam, voluptate
              voluptatum. Quisquam, voluptate voluptatum.
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat
              voluptates, voluptatum, quae, quas quibusdam quidem voluptatibus
              voluptatem dolorum voluptate natus fugiat. Quisquam, voluptate
              voluptatum. Quisquam, voluptate voluptatum.
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat
              voluptates, voluptatum, quae, quas quibusdam quidem voluptatibus
              voluptatem dolorum voluptate natus fugiat. Quisquam, voluptate
              voluptatum. Quisquam, voluptate voluptatum.
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat
              voluptates, voluptatum, quae, quas quibusdam quidem voluptatibus
              voluptatem dolorum voluptate natus fugiat. Quisquam, voluptate
              voluptatum. Quisquam, voluptate voluptatum.
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat
              voluptates, voluptatum, quae, quas quibusdam quidem voluptatibus
              voluptatem dolorum voluptate natus fugiat. Quisquam, voluptate
              voluptatum. Quisquam, voluptate voluptatum.
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat
              voluptates, voluptatum, quae, quas quibusdam quidem voluptatibus
              voluptatem dolorum voluptate natus fugiat. Quisquam, voluptate
              voluptatum. Quisquam, voluptate voluptatum.
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat
              voluptates, voluptatum, quae, quas quibusdam quidem voluptatibus
              voluptatem dolorum voluptate natus fugiat. Quisquam, voluptate
              voluptatum. Quisquam, voluptate voluptatum.
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat
              voluptates, voluptatum, quae, quas quibusdam quidem voluptatibus
              voluptatem dolorum voluptate natus fugiat. Quisquam, voluptate
              voluptatum. Quisquam, voluptate voluptatum.
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat
              voluptates, voluptatum, quae, quas quibusdam quidem voluptatibus
              voluptatem dolorum voluptate natus fugiat. Quisquam, voluptate
              voluptatum. Quisquam, voluptate voluptatum.
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat
              voluptates, voluptatum, quae, quas quibusdam quidem voluptatibus
              voluptatem dolorum voluptate natus fugiat. Quisquam, voluptate
              voluptatum. Quisquam, voluptate voluptatum.
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat
              voluptates, voluptatum, quae, quas quibusdam quidem voluptatibus
              voluptatem dolorum voluptate natus fugiat. Quisquam, voluptate
              voluptatum. Quisquam, voluptate voluptatum.
            </p>
          </div>
        </PrintPage>
      </PrintPageWrap>
      <div>
        {ref.current && (
          <div dangerouslySetInnerHTML={{ __html: ref.current.outerHTML }} />
        )}
      </div>
    </div>
  );
}
