import React, { useState, useEffect } from "react";

export default function CountAutomatic() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    setTimeout(() => setCount(count + 1), 1000);
  });

  return <div>{count} seconds</div>;
}
