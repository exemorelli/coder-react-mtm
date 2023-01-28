import "./ItemListContainer.css";

const ItemListContainer = (props) => {
  const { greeting } = props;

  return <div className="saludo">{greeting}</div>;
};

export default ItemListContainer;
