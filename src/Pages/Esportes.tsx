import { useState } from "react";
import { esportes } from "../data/esportes";

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
    <main style={{ padding: "24px", maxWidth: "900px", margin: "0 auto" }}>
      <h1>Enciclopédia dos Esportes</h1>
      <p>{filtrados.length} esportes para você se mover 💜</p>

      <input
        type="text"
        placeholder="Buscar esporte..."
        value={busca}
        onChange={(e) => {
          setBusca(e.target.value);
          setVisiveis(POR_PAGINA);
        }}
        style={{ width: "100%", padding: "10px", marginBottom: "12px" }}
      />

      <select
        value={categoria}
        onChange={(e) => {
          setCategoria(e.target.value);
          setVisiveis(POR_PAGINA);
        }}
        style={{ width: "100%", padding: "10px", marginBottom: "12px" }}
      >
        {categorias.map((cat) => (
          <option key={cat} value={cat}>
            {cat}
          </option>
        ))}
      </select>

      <div style={{ marginBottom: "16px" }}>
        <label style={{ marginRight: "16px" }}>
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

      <ul style={{ listStyle: "none", padding: 0 }}>
        {mostrados.map((esporte) => (
          <li
            key={esporte.id}
            style={{
              border: "1px solid #ccc",
              borderRadius: "12px",
              padding: "12px 16px",
              marginBottom: "12px",
            }}
          >
            <h3>{esporte.nome}</h3>
            <p>
              {esporte.categoria} • {esporte.tipo}
            </p>
            {esporte.adaptado && <span>♿ Adaptado </span>}
            {esporte.idosos && <span>👵 Indicado para idosos</span>}
          </li>
        ))}
      </ul>

      {visiveis < filtrados.length && (
        <button
          onClick={() => setVisiveis(visiveis + POR_PAGINA)}
          style={{ padding: "10px 20px", borderRadius: "20px" }}
        >
          Ver mais ({filtrados.length - visiveis} restantes)
        </button>
      )}
    </main>
  );
}