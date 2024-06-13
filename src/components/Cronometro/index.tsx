import { useEffect, useState } from "react";
import { Botao } from "../Formulário/button";
import { Relogio } from "./Relogio";
import { useTarefas } from "../../contexts/tarefasContext";
import { TempoParaSegundos } from "../../common/utils/time";

export function Cronometro() {
  const { selecionado, finalizarTarefa, setContando, contando } = useTarefas();
  const [tempo, setTempo] = useState<number>(0);

  useEffect(() => {
    if (selecionado?.tempo) {
      setTempo(TempoParaSegundos(selecionado.tempo));
    }
    
  }, [selecionado]);

  function regressiva(contador: number = 0) {
    setContando(true);
    setTimeout(() => {
      if (contador > 0) {
        setTempo(contador - 1);
        return regressiva(contador - 1);
      }
      finalizarTarefa()
    }, 1000);
  }

  return (
    <div className="w-full flex flex-col gap-2 pt-16 sm:py-10 sm:px-5">
      <p className="text-center sm:text-base text-sm">Escolha um estudo e inicie o cronômetro</p>
      <div className="sm:w-full flex gap-1 justify-center items-center px-3 py-2 bg-zinc-800 rounded-lg">
        <Relogio tempo={tempo} />
      </div>
      <div className="h-12 w-full flex justify-center items-center">
        <Botao classeContando={`${contando ? 'bg-red-500' : 'bg-gradient-to-r from-pink-600  to-blue-600'}`} onClick={() => regressiva(tempo)} texto={contando ? (
            <>
            <svg
            className="animate-spin h-5 w-5 text-white"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
          >
            <circle
              className="opacity-25"
              cx="12"
              cy="12"
              r="10"
              stroke="currentColor"
              strokeWidth="4"
            ></circle>
            <path
              className="opacity-75"
              fill="currentColor"
              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
            ></path>
          </svg>
            </>
            
        ) : 'Começar'} />
      </div>
    </div>
  );
}
