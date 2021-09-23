function FunComp() {
  let name = "Kalyani";

  function handleClick (){
    name=  name.toUpperCase();
    alert(name)
  }
  return (
    <div>
      <h2>Functional Component created by {name}</h2>
      <h2>Second element</h2>
      <button onClick={handleClick}>toUpperCase</button>
    </div>
  );
}

export default FunComp;
