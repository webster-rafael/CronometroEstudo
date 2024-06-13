import { useTarefas } from "../../hooks/useTarefas";
import { Botao } from "./button";

export function Formulario() {
  const { handleEstudo, handleSubmit, handleTempo, estudo, tempo } =
    useTarefas();

  return (
    <form
      className="w-full grid grid-cols-2 gap-2 col-span-2 py-10 px-5"
      onSubmit={handleSubmit}
    >
      <div className="flex flex-col w-full gap-4">
        <label htmlFor="tarefa">Adicione um novo estudo</label>
        <input
          onChange={(e) => handleEstudo(e.target.value)}
          className="w-full bg-zinc-800 py-2 px-1 text-sm rounded-lg border border-white/30"
          type="text"
          value={estudo}
          name="tarefa"
          id="tarefa"
          placeholder="O que você quer estudar?"
          required
        />
      </div>
      <div className="flex flex-col gap-4">
        <label>Tempo</label>
        <input
          className="w-full bg-zinc-800 py-2 px-1 text-sm rounded-lg border border-white/30"
          type="time"
          step="1"
          value={tempo}
          onChange={(e) => handleTempo(e.target.value)}
          name="tempo"
          id="tempo"
          min="00:00:00"
          max="24:00:00"
          required
        />
      </div>
      <div className="h-12 pt-10 col-span-2 w-full flex justify-center items-center">
        <Botao
          classeContando="bg-gradient-to-r from-pink-600  to-blue-600"
          type="submit"
          texto={"Adicionar"}
        />
      </div>
    </form>
  );
}
