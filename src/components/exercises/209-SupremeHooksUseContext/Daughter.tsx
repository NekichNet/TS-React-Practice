import { useContext } from 'react';
import Grandson from './Grandson';
import { MyContext } from './MyContext';

function Daughter() {
  const age = useContext(MyContext);

  return (
    <div>
      Возраст дочери: {age}
      <Grandson />
    </div>
  );
}

export default Daughter;
