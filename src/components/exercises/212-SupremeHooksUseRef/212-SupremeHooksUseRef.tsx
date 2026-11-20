import { useRef, useState } from 'react';

function SupremeHooksUseRef() {
  let variable = 0;
  const ref = useRef(0);
  const [state, setState] = useState(0);
  
  const handleVarClick = () => {
    variable = variable + 1;
    console.log('Var: ' + variable);
  };

  const handleRefClick = () => {
    ref.current = ref.current + 1;
    console.log('Ref: ' + ref.current);
  };

  const handleStateClick = () => {
    setState(state + 1);
    console.log('State: ' + state);
  };

  return (
    <div>
      <p>
        <button onClick={handleVarClick}>Var: {variable}</button>
      </p>
      <p>
        <button onClick={handleRefClick}>Ref: {ref.current}</button>
      </p>
      <p>
        <button onClick={handleStateClick}>State: {state}</button>
      </p>
    </div>
  );
}
export default SupremeHooksUseRef;