function List(){
  const fruits = [{name:"a",cal:"95"},
  {name:"b",cal:"75"},
  {name:"m",cal:"55"},
  {name:"o",cal:"45"},
  {name:"p",cal:"35"}];
  const listitems = fruits.map((o) => <li>{o}</li>);
  return (<ul>{listitems}</ul>);
}
export default List;
