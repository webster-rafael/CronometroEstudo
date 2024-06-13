import { Cronometro } from "./components/Cronometro";
import { Formulario } from "./components/Formulário";
import { Lista } from "./components/Lista";

function App() {
  return (
    <main className="bg-zinc-900 rounded-lg w-[800px] h-[500px] flex justify-between">
      <div className="w-8/12">
        <Formulario />
        <Cronometro />
      </div>
      <div className="h-full w-4/12">
        <Lista />
      </div>
    </main>
  );
}

export default App;
