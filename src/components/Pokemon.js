const Pokemon = (props) => {
  const typeToComponent = (typeList) => {
    return typeList.map((type) => (
      <span
        className={type.toLowerCase() + " badge"}
        key={typeList.indexOf(type)}
      >
        {type}
      </span>
    ));
  };
  return (
    <li className="collection-item avatar">
      <img src={props.img} alt="pokemon_image" className="circle" />
      <span class="title">
        {props.id}. {props.name}
      </span>
      <span className="type">{typeToComponent(props.type)}</span>
      <span className="biometrics">
        Height: <b>{props.height}</b> Weight: <b>{props.weight}</b>
      </span>
    </li>
  );
};

export default Pokemon;
