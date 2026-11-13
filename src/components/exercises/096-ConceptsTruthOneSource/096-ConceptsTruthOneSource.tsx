import { useState } from 'react';
import TemperatureField from './TemperatureField';

function ConceptsTruthOneSource() {
  /**
   * Упражнение недоделано
   */

  const [temp, setTemp] = useState(0);
  const handleCel = (value: number) => {
    setTemp(value);
  };
  const handleFar = (value: number) => {
    setTemp(value);
  };
  const handleKel = (value: number) => {
    setTemp(value);
  };

  return (
    <div>
      <TemperatureField
        type="кельвинах"
        value={temp}
        revert={(temp: number) => temp}
        onChange={handleKel}
      />
      <TemperatureField
        type="цельсиях"
        value={temp - 273}
        revert={(temp: number) => temp + 273}
        onChange={handleFar}
      />
      <TemperatureField
        type="фаренгейтах"
        value={Math.floor((temp - 273.15) * (9 / 5) + 32)}
        revert={(temp: number) => Math.floor((temp - 32) * (9 / 5) + 273.15)}
        onChange={handleCel}
      />
    </div>
  );
}

export default ConceptsTruthOneSource;
