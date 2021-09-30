import { useEffect } from "react";

function Fun() {
  useEffect(() => {
    return () => console.log("--unmounted---");
  });
  return (
    <div>
      <h2> fun comp</h2>
    </div>
  );
}

export default Fun;
