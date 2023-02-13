import { lazy, Suspense, useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'

const LazyComponent = lazy(() => import('./LazyComponent'));

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Suspense fallback={null}>
        <LazyComponent />
      </Suspense>
      <button onClick={() => ({} as any).thing()}>Throw an error</button>
    </div>
  )
}

export default App
