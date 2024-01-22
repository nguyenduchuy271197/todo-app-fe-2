export default function TodoFilter({ onlyComplete, onFilter }) {
  return (
    <div className="flex items-center gap-2 mt-4">
      <input
        type="checkbox"
        className="checkbox"
        checked={onlyComplete ? "checked" : ""}
        onChange={(e) => onFilter(e.target.checked)}
      />
      <label>Lọc task đã hoàn thành</label>
    </div>
  );
}
