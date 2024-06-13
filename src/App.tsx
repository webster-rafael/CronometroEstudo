import { Cronometro } from "./components/Cronometro";
import { Footer } from "./components/Footer";
import { Formulario } from "./components/Formulário";
import { Lista } from "./components/Lista";

function App() {
  return (
    <main className="h-full">
      <section className="bg-zinc-900 rounded-lg w-[350px] sm:w-[800px] h-[590px] sm:h-[500px] flex sm:justify-between">
      <div className="sm:w-8/12 w-[60%]">
        <Formulario />
        <div className="w-svw max-w-[330px] sm:max-w-full sm:w-full sm:pt-0 pt-16 sm:pl-0 pl-4">
          <Cronometro />
        </div>
      </div>
      <div className="h-full sm:w-4/12 w-[40%]">
        <Lista />
      </div>
    </section>
      <Footer />
    </main>
    
  );
}

export default App;
