import React, { useEffect } from "react";

export default function CleanUp() {
  useEffect(() => {
    return () => {
      alert('desmontando um component')
    }
  });

  return <div>Estou montando</div>;
}
