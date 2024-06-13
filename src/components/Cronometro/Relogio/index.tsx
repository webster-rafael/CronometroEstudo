interface tempoProps {
  tempo: number
}

export function Relogio({ tempo }: tempoProps) {
  

  const minutos = Math.floor(tempo / 60);
  const segundos = tempo % 60;
  const [minutoDezena, minutoUnidade] = String(minutos).padStart(2, '0')
  const [segundoDezena, segundoUnidade] = String(segundos).padStart(2, '0');
  return (
    <>
      <span className="bg-zinc-950 text-9xl rounded-lg">{minutoDezena}</span>
      <span className="bg-zinc-950 text-9xl rounded-lg">{minutoUnidade}</span>
      <span className=" text-6xl">:</span>
      <span className="bg-zinc-950 text-9xl rounded-lg">{segundoDezena}</span>
      <span className="bg-zinc-950 text-9xl rounded-lg">{segundoUnidade}</span>
    </>
  );
}
