const DefultButton = ({ name, onClick }) => {
  return (
    <input
      type="submit"
      value={name}
      className="mt-4 px-15 py-3 bg-gray-700 text-white rounded-md hover:bg-gray-800 transition cursor-pointer"
      onClick={onClick}
    />
  );
};

export default DefultButton;
