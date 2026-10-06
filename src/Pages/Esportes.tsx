import { useState, useEffect } from "react";
import { esportes } from "../data/esportes";
import "./Esportes.css";
import { useSearchParams } from "react-router-dom";
import { normalizar } from "../data/busca";

const POR_PAGINA = 30;

export default function Esportes() {
 const [params] = useSearchParams();
const [busca, setBusca] = useState(params.get("busca") ?? "");
  const [categoria, setCategoria] = useState("Todas");
  const [soAdaptado, setSoAdaptado] = useState(false);
  const [soIdosos, setSoIdosos] = useState(false);
  const [soFavoritos, setSoFavoritos] = useState(false);
  const [visiveis, setVisiveis] = useState(POR_PAGINA);

  const [favoritos, setFavoritos] = useState<number[]>(() => {
    const salvo = localStorage.getItem("esportes-favoritos");
    return salvo ? JSON.parse(salvo) : [];
  });

  useEffect(() => {
    localStorage.setItem("esportes-favoritos", JSON.stringify(favoritos));
  }, [favoritos]);
  useEffect(() => {
  window.scrollTo(0, 0);
}, []);

  function alternarFavorito(id: number) {
    if (favoritos.includes(id)) {
      setFavoritos(favoritos.filter((f) => f !== id));
    } else {
      setFavoritos([...favoritos, id]);
    }
  }

  const categorias = ["Todas", ...new Set(esportes.map((e) => e.categoria))];

  const filtrados = esportes.filter((e) => {
const combinaNome = normalizar(e.nome).includes(normalizar(busca));    const combinaCategoria = categoria === "Todas" || e.categoria === categoria;
    const combinaAdaptado = !soAdaptado || e.adaptado;
    const combinaIdosos = !soIdosos || e.idosos;
    const combinaFavorito = !soFavoritos || favoritos.includes(e.id);
    return (
      combinaNome &&
      combinaCategoria &&
      combinaAdaptado &&
      combinaIdosos &&
      combinaFavorito
    );
  });

  const mostrados = filtrados.slice(0, visiveis);

  return (
    <section className="activities">
      <h2>Enciclopédia dos Esportes</h2>
      <p className="points-total">
        {filtrados.length} esportes para você se mover 💜
      </p>

      <input
        className="sport-search"
        type="text"
        placeholder="Buscar esporte..."
        value={busca}
        onChange={(e) => {
          setBusca(e.target.value);
          setVisiveis(POR_PAGINA);
        }}
      />

      <div>
        <select
          className="sport-select"
          value={categoria}
          onChange={(e) => {
            setCategoria(e.target.value);
            setVisiveis(POR_PAGINA);
          }}
        >
          {categorias.map((cat) => (
            <option key={cat} value={cat}>
              {cat}
            </option>
          ))}
        </select>
      </div>

      <div className="sport-checks">
        <label>
          <input
            type="checkbox"
            checked={soAdaptado}
            onChange={(e) => {
              setSoAdaptado(e.target.checked);
              setVisiveis(POR_PAGINA);
            }}
          />{" "}
          ♿ Adaptado
        </label>
        <label>
          <input
            type="checkbox"
            checked={soIdosos}
            onChange={(e) => {
              setSoIdosos(e.target.checked);
              setVisiveis(POR_PAGINA);
            }}
          />{" "}
          👵 Indicado para idosos
        </label>
        <label>
          <input
            type="checkbox"
            checked={soFavoritos}
            onChange={(e) => {
              setSoFavoritos(e.target.checked);
              setVisiveis(POR_PAGINA);
            }}
          />{" "}
          ❤️ Meus favoritos ({favoritos.length})
        </label>
      </div>

      {filtrados.length === 0 && (
        <p>
          {soFavoritos && favoritos.length === 0
            ? "Você ainda não favoritou nenhum esporte. Toque no 🤍 de um card! 💜"
            : "Nenhum esporte encontrado 😕"}
        </p>
      )}

      <div className="activities-grid">
        {mostrados.map((esporte) => (
          <div
            className="activity-card"
            key={esporte.id}
            style={{ cursor: "default" }}
          >
            <div className="sport-head">
              <h3>{esporte.nome}</h3>
              <button
                className="sport-heart"
                onClick={() => alternarFavorito(esporte.id)}
                aria-label={
                  favoritos.includes(esporte.id)
                    ? "Tirar dos favoritos"
                    : "Adicionar aos favoritos"
                }
              >
                {favoritos.includes(esporte.id) ? "❤️" : "🤍"}
              </button>
            </div>
            {esporte.descricao && <p>{esporte.descricao}</p>}
            <div className="activity-tags">
              <span className="tag">{esporte.categoria}</span>
              <span className="tag">{esporte.tipo}</span>
              {esporte.adaptado && <span className="tag">♿ adaptado</span>}
              {esporte.idosos && <span className="tag">👵 idosos</span>}
              {esporte.pais && <span className="tag">🌍 {esporte.pais}</span>}
            </div>
          </div>
        ))}
      </div>

      {visiveis < filtrados.length && (
        <button
          className="sport-more"
          onClick={() => setVisiveis(visiveis + POR_PAGINA)}
        >
          Ver mais ({filtrados.length - visiveis} restantes)
        </button>
      )}
    </section>
  );
}