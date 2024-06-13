import { useContext } from "react";
import { TarefasContext } from "../contexts/tarefasContext";

export const useTarefas = () => useContext(TarefasContext);
