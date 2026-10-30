interface TemperatureFieldProps {
  type: string;
  value: number;
  revert: (temp: number) => number;
  onChange: (temp: number) => void;
}

function TemperatureField({
  type,
  value,
  revert,
  onChange: handleChange,
}: TemperatureFieldProps) {
  return (
    <div>
      <span>Температура в {type}: </span>
      <input
        value={value}
        onChange={(
          event: React.ChangeEvent<HTMLInputElement, HTMLInputElement>,
        ) => {
          handleChange(revert(Number(event.target.value)));
        }}
      />
    </div>
  );
}

export default TemperatureField;
