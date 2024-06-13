interface textoProps {
  texto: string | JSX.Element;
  type?: "button" | "submit" | "reset" | undefined;
  onClick?: () => void;
  classeContando: string;
}

export function Botao({ texto, type, onClick, classeContando }: textoProps) {
  return (
    <button
      onClick={onClick}
      type={type}
      className={`${classeContando} h-10 px-10 rounded-lg hover:from-pink-900 hover:to-blue-900`}
    >
      {texto}
    </button>
  );
}
