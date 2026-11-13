import { useState } from 'react';
import { MyContext } from './MyContext';
import Parent from './Parent';

function SupremeHooksContextUpdate() {
  const [age, setAge] = useState(50);

  return (
    <div>
      <MyContext.Provider value={age}>
        <Parent />
      </MyContext.Provider>
      <button
        onClick={() => {
          setAge(age + 1);
        }}
      >
        Постареть
      </button>
    </div>
  );
}
export default SupremeHooksContextUpdate;
