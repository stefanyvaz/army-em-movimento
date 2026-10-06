import { esportes } from "./esportes";

export function normalizar(texto: string) {
  return texto
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase();
}

export function termoDoEsporte(titulo: string) {
  return titulo.split(" (")[0].split(" ou ")[0].split(" / ")[0].trim();
}

export function temNaEnciclopedia(titulo: string) {
  const termo = normalizar(termoDoEsporte(titulo));
  return esportes.some((e) => normalizar(e.nome).includes(termo));
}