import F2 from './f2';
import Class1 from './class1';
function F1(){
    let name = "pragyan" ;
    return (
      <div>
        <h2>this is Functional Comp 1 </h2>
        <F2 username={name}></F2>
        <Class1 userName={name}></Class1>
      </div>
    );
}

export default F1;

/*
obj= {
    username : pragyan
}

*/