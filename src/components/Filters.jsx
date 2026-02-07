function Filters({ setBrand, setMaxPrice }) {
  return (
    <div className="filters">
      <select onChange={(e) => setBrand(e.target.value)}>
        <option value="">Toutes les marques</option>
        <option value="Nike">Nike</option>
        <option value="Adidas">Adidas</option>
        <option value="ASICS">ASICS</option>
        <option value="JORDAN">JORDAN</option>
      </select>

      <input
        type="number"
        placeholder="Prix max"
        onChange={(e) => setMaxPrice(e.target.value)}
      />
    </div>
  );
}

export default Filters;