import { useState } from "react";
import { esportes } from "../data/esportes";
import "./Esportes.css";

const POR_PAGINA = 30;

export default function Esportes() {
  const [busca, setBusca] = useState("");
  const [categoria, setCategoria] = useState("Todas");
  const [soAdaptado, setSoAdaptado] = useState(false);
  const [soIdosos, setSoIdosos] = useState(false);
  const [visiveis, setVisiveis] = useState(POR_PAGINA);

  const categorias = ["Todas", ...new Set(esportes.map((e) => e.categoria))];

  const filtrados = esportes.filter((e) => {
    const combinaNome = e.nome.toLowerCase().includes(busca.toLowerCase());
    const combinaCategoria = categoria === "Todas" || e.categoria === categoria;
    const combinaAdaptado = !soAdaptado || e.adaptado;
    const combinaIdosos = !soIdosos || e.idosos;
    return combinaNome && combinaCategoria && combinaAdaptado && combinaIdosos;
  });

  const mostrados = filtrados.slice(0, visiveis);

  return (
    <section className="activities">
      <h2>Enciclopédia dos Esportes</h2>
      <p className="points-total">{filtrados.length} esportes para você se mover 💜</p>

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
      </div>

      {filtrados.length === 0 && <p>Nenhum esporte encontrado 😕</p>}

      <div className="activities-grid">
        {mostrados.map((esporte) => (
          <div
            className="activity-card"
            key={esporte.id}
            style={{ cursor: "default" }}
          >
            <h3>{esporte.nome}</h3>
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