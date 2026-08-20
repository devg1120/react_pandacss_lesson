

const lesson1 = `
import { useState } from 'react';

export default function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div style={{ textAlign: 'center' }}>
      <p>クリック数: {count}</p>
      <button onClick={() => setCount(count + 1)}>
        増やす OK2
      </button>
    </div>
  );
}

`;


export { lesson1 };

