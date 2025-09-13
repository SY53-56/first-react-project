export default function Button({ name, onClick, active }) {
  return (
    <button
      onClick={onClick}
      className={`px-4 py-2 rounded-lg font-medium text-white transition-all duration-300
        ${active ? "bg-yellow-500" : "bg-gray-500 hover:bg-gray-600"}`}
    >
      {name}
    </button>
  );
}
