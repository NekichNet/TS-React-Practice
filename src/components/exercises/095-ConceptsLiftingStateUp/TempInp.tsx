interface TempInpProps {
  temp: number;
  changeTemp: (temp: number) => void;
}

function TempInp({ temp, changeTemp }: TempInpProps) {
  return (
    <input
      value={temp}
      onChange={(
        event: React.ChangeEvent<HTMLInputElement, HTMLInputElement>,
      ) => {
        changeTemp(Number(event.target.value));
      }}
    />
  );
}

export default TempInp;
