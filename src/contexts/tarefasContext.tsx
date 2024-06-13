/* eslint-disable react-refresh/only-export-components */
import { createContext, useContext, useState, ReactNode, useEffect } from "react";
import { v4 as uuidv4 } from 'uuid';
import { tarefasProps } from "../types/tarefa";

interface TarefasContextType {
  tarefas: tarefasProps[];
  handleEstudo: (value: string) => void;
  handleSubmit: (e: React.FormEvent) => void;
  handleTempo: (value: string) => void;
  estudo: string;
  tempo: string;
  selecionaTarefa: (tarefaSelecionada: tarefasProps) => void;
  selecionado: tarefasProps | undefined;
  finalizarTarefa: () => void;
  contando: boolean;
  setContando: (value: boolean) => void;
  setTarefas: (tarefas: tarefasProps[]) => void;
  removerTarefa: (id: string) => void;

}

interface TarefasProviderProps {
  children: ReactNode;
}

export const TarefasContext = createContext<TarefasContextType>({
  tarefas: [],
  handleEstudo: () => {},
  handleSubmit: () => {},
  handleTempo: () => {},
  estudo: "",
  tempo: "",
  selecionaTarefa: () => {},
  selecionado: undefined,
  finalizarTarefa: () => {},
  contando: false,
  setContando: () => {},
  setTarefas: () => {},
  removerTarefa: () => {}

});

export const TarefasProvider = ({ children }: TarefasProviderProps) => {
  const [estudo, setEstudo] = useState("");
  const [tempo, setTempo] = useState("00:00");
  const [tarefas, setTarefas] = useState<tarefasProps[]>(() => {
    const storedTarefas = localStorage.getItem('tarefas');
    return storedTarefas ? JSON.parse(storedTarefas) : [];
  });
  const [selecionado, setSelecionado] = useState<tarefasProps>();
  const [contando, setContando] = useState<boolean>(false);

  // Atualiza o localStorage sempre que 'tarefas' mudar
  useEffect(() => {
    localStorage.setItem('tarefas', JSON.stringify(tarefas));
  }, [tarefas]);

  const handleEstudo = (value: string) => setEstudo(value);
  const handleTempo = (value: string) => setTempo(value);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setTarefas((prevTarefas) => [
      ...prevTarefas,
      {
        tarefa: estudo,
        tempo: tempo,
        selecionado: false,
        completado: false,
        id: uuidv4(),
      },
    ]);
    setEstudo("");
    setTempo("00:00");
  };

  function selecionaTarefa(tarefaSelecionada: tarefasProps) {
    setSelecionado(tarefaSelecionada);
    setTarefas(tarefasAnteriores =>
      tarefasAnteriores.map(tarefa => ({
        ...tarefa,
        selecionado: tarefa.id === tarefaSelecionada.id ? true : false
      }))
    );
  }

  const removerTarefa = (id: string) => {
    setTarefas(tarefas.filter((tarefa) => tarefa.id !== id));
  };

  function finalizarTarefa() {
    if (selecionado) {
      setSelecionado(undefined);
      setTarefas((tarefasAnteriores) =>
        tarefasAnteriores.map((tarefa) => {
          if (tarefa.id === selecionado.id) {
            return {
              ...tarefa,
              selecionado: false,
              completado: true,
            };
          }
          return tarefa;
        })
      );
      window.location.reload();
    }
  }

  return (
    <TarefasContext.Provider value={{
      tarefas,
      handleEstudo,
      handleSubmit,
      handleTempo,
      estudo,
      tempo,
      selecionaTarefa,
      selecionado,
      finalizarTarefa,
      contando,
      setContando,
      setTarefas,
      removerTarefa,
    }}>
      {children}
    </TarefasContext.Provider>
  );
};

export const useTarefas = () => useContext(TarefasContext);
