import { Suspense } from 'react';
import { Route, Routes, BrowserRouter as Router } from 'react-router-dom';
import GlobalStyle from './styles/globalStyles';
import PageNotFound from './components/shared/404';
import Members from './pages/Members';
import CreateMember from './pages/CreateMember';
import PageLoader from './components/shared/FullPageLoader';
import './App.css';

function App() {
  return (
    <>
      <GlobalStyle />
      <Suspense fallback={<PageLoader />}>
        <Router>
          <Routes>
            <Route index element={<Members />} />
            <Route path="/members" element={<Members />} />
            <Route path="/add/member" element={<CreateMember />} />
            <Route path="*" element={<PageNotFound />} />
          </Routes>
        </Router>
      </Suspense>
    
    </>
  );
}

export default App;
