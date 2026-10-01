import { useState } from 'react';
import './index.css';
import Home from './pages/Home';
import Preloader from './components/Preloader';

/* ==========================================
   APP ROOT
   - Renders professional branded preloader
   - Renders the Home page
   ========================================== */

function App() {
  const [loading, setLoading] = useState(true);

  return (
    <>
      <Preloader onComplete={() => setLoading(false)} />
      <Home isAppLoading={loading} />
    </>
  );
}

export default App;
