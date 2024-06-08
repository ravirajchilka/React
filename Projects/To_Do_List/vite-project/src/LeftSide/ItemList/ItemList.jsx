import "../ItemList/ItemList.css";

function ItemList(props) {
  let item = props.itemValue.map((item, _) => {
    return (
      <div className="mt10 gridCl" key={Math.random()}>
        <div>{item}</div>
      </div>
    );
  });

  return <>{item}</>;
}

export default ItemList;
