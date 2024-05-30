'use client'
import {useEffect, useRef} from "react";
import WebViewer from "@pdftron/webviewer";

export default function Page() {
    const viewer = useRef(null);

    useEffect(() => {
      import('@pdftron/webviewer').then(() => {
        WebViewer(
          {
            path: '/webviewer/lib',
            initialDoc: '/files/demo.pdf',
          },
          viewer.current as any,
        ).then((instance :any) => {
            const { docViewer } = instance;
          });
      })
    }, []);

  return (
      <main>
          <div className="MyComponent">
              <div className="webviewer" ref={viewer} style={{height: '85vh', maxHeight: '85vh'}}></div>
          </div>
      </main>
  );
}