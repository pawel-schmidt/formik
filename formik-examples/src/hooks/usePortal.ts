import React from 'react';

export function usePortal() {
  const [container, setContainer] = React.useState<null | HTMLDivElement>(null);
  React.useEffect(() => {
    const el = document.body.appendChild(document.createElement('div'));
    setContainer(el);
    return () => {
      setContainer(null);
      if (container) {
        document.body.removeChild(container);
      }
    };
  }, []);
  return container;
}
