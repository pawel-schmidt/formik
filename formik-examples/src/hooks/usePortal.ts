import React from 'react';

export function usePortal() {
  const ref = React.useRef<HTMLDivElement>();
  const [_, setReady] = React.useState<boolean>(false);

  React.useEffect(() => {
    ref.current = document.body.appendChild(document.createElement('div'));
    setReady(true);
    return () => {
      if (ref.current) {
        document.body.removeChild(ref.current);
      }
      setReady(false);
    };
  }, []);

  return ref;
}
