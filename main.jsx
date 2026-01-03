import React from 'react'
import { createRoot } from 'react-dom/client'

function App() {
  return (
    <div style={{ padding: '20px', textAlign: 'center', color: '#9d0a0e' }}>
      <h1>Frontier Redemption Loading...</h1>
      <p>If you see this, React is working!</p>
    </div>
  )
}

const container = document.getElementById('root');
const root = createRoot(container);
root.render(<App />);
