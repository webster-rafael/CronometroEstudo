import { Trash2 } from "lucide-react";
import { useTarefas } from "../../hooks/useTarefas";

export function Lista() {
  const { tarefas, selecionaTarefa, selecionado, contando, removerTarefa } = useTarefas();

  const handleRemoverTarefa = (id: string) => {
    removerTarefa(id);
  };

  return (
    <aside className="flex flex-col w-full h-[400px] sm:h-full py-9  sm:py-2 sm:px-3">
      <h2 className="text-center sm:text-base text-sm py-1">Estudos do dia</h2>
      <ul className="flex flex-col px-2 gap-3 overflow-auto custom-scrollbar py-1">
        {tarefas.map((item) => (
          <li
            onClick={() => !item.completado && selecionaTarefa(item)}
            className={`bg-zinc-800 px-3 py-2 rounded-lg hover:transform hover:scale-105 duration-200 hover:rounded-lg hover:bg-gradient-to-r from-blue-900 to-pink-900 ${
              selecionado && selecionado.id === item.id
                ? "bg-gradient-to-r from-blue-900 to-pink-900"
                : ""
            } ${
              item.completado
                ? "bg-gradient-to-r from-green-600 to-green-950"
                : ""
            }`}
            key={item.id}
          >
            <div className="flex w-full justify-between">
              <h3>{item.tarefa}</h3>
              {selecionado && selecionado.id === item.id && contando ? (
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
              ) : item.completado ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  className="h-5 w-5 text-green-500"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              ) : null}
            </div>
            <div className="flex justify-between items-end">
              <span className="sm:text-base text-sm">{`${
                contando && selecionado && selecionado.id === item.id
                  ? "Contando..."
                  : item.completado
                  ? "Concluído"
                  : item.tempo
              }`}</span>
              <Trash2 onClick={() => handleRemoverTarefa(item.id)} className="size-4 text-white hover:scale-125" />
            </div>
          </li>
        ))}
      </ul>
    </aside>
  );
}
