import { useEffect } from 'react';

function handleClick(event: PointerEvent) {
  if (event.target instanceof HTMLElement) {
    if (event.target.style.backgroundColor === 'green') {
      event.target.style.setProperty('background-color', 'red');
    } else {
      event.target.style.setProperty('background-color', 'green');
    }
  }
}

function SupremeHooksUseEffectGlobalHandlers() {
  useEffect(() => {
    document.body.addEventListener('click', handleClick);
    console.log('mount');

    return () => {
      document.body.removeEventListener('click', handleClick);
      console.log('unmount');
    };
  }, []);

  return <div>206. SupremeHooksUseEffectGlobalHandlers</div>;
}

export default SupremeHooksUseEffectGlobalHandlers;
