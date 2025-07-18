import { Routes, Route, NavLink } from 'react-router-dom';
import Home from './pages/Home';
import Projects from './pages/Projects';
import Coursework from './pages/Coursework';
import OtherInterests from './pages/OtherInterests';

function App() {
  return (
    <div className="app-container">
      <nav className="navbar">
        <NavLink
          to="/"
          className={({ isActive }) => isActive ? 'nav-button active' : 'nav-button'}
        >
          Home
        </NavLink>
        <NavLink
          to="/projects"
          className={({ isActive }) => isActive ? 'nav-button active' : 'nav-button'}
        >
          Projects
        </NavLink>
        <NavLink
          to="/coursework"
          className={({ isActive }) => isActive ? 'nav-button active' : 'nav-button'}
        >
          Coursework
        </NavLink>
        <NavLink
          to="/other-interests"
          className={({ isActive }) => isActive ? 'nav-button active' : 'nav-button'}
        >
          Other Interests
        </NavLink>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/coursework" element={<Coursework />} />
        <Route path="/other-interests" element={<OtherInterests />} />
      </Routes>
    </div>
  );
}

export default App;
