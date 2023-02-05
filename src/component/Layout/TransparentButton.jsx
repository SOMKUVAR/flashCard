const TransparentButton = (props) => {
  return (
    <button
      onClick={props.onClick}
      type="button"
      className="inline-block px-3 py-2.5 bg-transparent text-blue-600 text-bold text-sm leading-tight uppercase 
      rounded hover:text-blue-700 hover:bg-transparent focus:bg-transparent focus:outline-none focus:ring-0 font-bold
      active:bg-transparent transition duration-150 ease-in-out">
      {props.children}
    </button>
  );
};

export default TransparentButton;
