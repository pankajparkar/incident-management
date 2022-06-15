import './app.module.scss';
import { IncidentFeatureList } from '@incident-management/incident/feature/list';
import { Footer } from '@incident-management/shared/footer';
import { Navbar } from '@incident-management/shared/navbar';

import { Route, Routes, Link, Navigate } from 'react-router-dom';

export function App() {
  return (
    <>
      <Navbar />
      <div role="navigation">
        <ul>
          <li>
            <Link to="/incident/list">Home</Link>
          </li>
          <li>
            <Link to="/page-2">Page 2</Link>
          </li>
        </ul>
      </div>
      <Routes>
        <Route path="/incident/list" element={<IncidentFeatureList />} />
        <Route
          path="/page-2"
          element={
            <div>
              <Link to="/">Click here to go back to root page.</Link>
            </div>
          }
        />
        <Route path="" element={<Navigate replace to="/incident/list" />} />
      </Routes>
      {/* END: routes */}
      <Footer />
    </>
  );
}

export default App;
