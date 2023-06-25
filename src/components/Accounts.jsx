function Accounts(props) {
  return (
    <div>
      {props.data.map((element, index) => {
        return (
          <div
            className={`compte ${index % 2 === 0 ? "even" : "odd"}`}
            key={index}
          >
            <div className={`nomcompte ${index % 2 === 0 ? "even" : "odd"}`}>
              <h2 className="enfantcompte">{element.name}</h2>
              <p className="enfantcompte">{element.balance} €</p>
            </div>
            {element.operations.map((element) => (
              <div className="transactions">
                <p className="ladate">{element.date}</p>
                <p className="transacdesc">{element.description}</p>
                <p>{element.amount} €</p>
              </div>
            ))}
          </div>
        );
      })}
    </div>
  );
}
export default Accounts;
