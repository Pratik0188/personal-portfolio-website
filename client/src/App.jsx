import { Suspense, lazy } from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar.jsx';
import Footer from './components/Footer.jsx';
import Loader from './components/Loader.jsx';
import ErrorBoundary from './components/ErrorBoundary.jsx';
// import ProtectedRoute from './components/ProtectedRoute.jsx'; // kept for future use
import "./styles/App.css";

const Home = lazy(() => import('./pages/Home.jsx'));
const About = lazy(() => import('./pages/About.jsx'));
const Projects = lazy(() => import('./pages/Projects.jsx'));
const Contact = lazy(() => import('./pages/Contact.jsx'));
// const Login = lazy(() => import('./pages/Login.jsx'));         // kept for future use
// const Dashboard = lazy(() => import('./pages/Dashboard.jsx')); // kept for future use
const NotFound = lazy(() => import('./pages/NotFound.jsx'));

export default function App() {
  return (
    <div className="app-shell">
      <Navbar />
      <main className="app-content">
        <ErrorBoundary>
          <Suspense fallback={<Loader />}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/projects" element={<Projects />} />
              <Route path="/contact" element={<Contact />} />

              {/*
              <Route path="/login" element={<Login />} />
              <Route
                path="/dashboard"
                element={
                  <ProtectedRoute>
                    <Dashboard />
                  </ProtectedRoute>
                }
              />
              */}

              <Route path="*" element={<NotFound />} />
            </Routes>
          </Suspense>
        </ErrorBoundary>
      </main>
      <Footer />
    </div>
  );
}