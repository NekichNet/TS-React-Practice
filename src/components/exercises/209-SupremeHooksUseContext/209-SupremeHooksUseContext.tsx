import { MyContext } from './MyContext';
import Parent from './Parent';

function SupremeHooksUseContext() {
  return (
    <div>
      <MyContext.Provider value={42}>
        <Parent />
      </MyContext.Provider>
    </div>
  );
}
export default SupremeHooksUseContext;
