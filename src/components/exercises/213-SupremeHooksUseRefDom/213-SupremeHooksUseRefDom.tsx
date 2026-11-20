import { useEffect, useRef, useState } from 'react';

function SupremeHooksUseRefDom() {
  const [colorState, setColorState] = useState(255);
  const buttonRef = useRef<HTMLButtonElement | null>(null);
  const intervalIdRef = useRef<number | null>(null);
  const color = useRef(255);

  useEffect(() => {
    
    if (intervalIdRef.current === null) {
      intervalIdRef.current = setInterval(() => {
        console.log('checking: ', { colorState });

        if (colorState < 255) {
          setColorState((prev) => prev + 20);
          console.log('recoloring: ', { colorState });
        }
      }, 1000);
    }
  }, [colorState]);

  const handleClick = () => {
    setColorState(0);
    console.log('clicked: ', { colorState });
  };

  const button = (
    <button ref={buttonRef} onClick={handleClick}>
      Кнопка
    </button>
  );

  buttonRef.current?.style.setProperty(
    'background-color',
    `rgb(255, ${colorState}, ${colorState})`,
  );

  return button;
}
export default SupremeHooksUseRefDom;
