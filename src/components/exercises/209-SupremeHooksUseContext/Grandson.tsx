import { useContext } from 'react';
import { MyContext } from './MyContext';

function Grandson() {
  const age = useContext(MyContext);

  return <div>Возраст внука: {age / 2}</div>;
}

export default Grandson;
