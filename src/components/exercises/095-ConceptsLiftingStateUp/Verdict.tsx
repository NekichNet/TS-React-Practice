function Verdict({ temp }: { temp: number }) {
  return (
    <div>
      <p>Температура: {temp} °С</p>
      <p>
        Агрегатное состояние:{' '}
        {temp <= 0
          ? 'твёрдое'
          : temp < 100
            ? 'жидкое'
            : temp < 2200
              ? 'газ'
              : 'плазма'}
        .
      </p>
    </div>
  );
}

export default Verdict;
