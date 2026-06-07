import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from 'react-router-dom';

import Contact from './components/Contact.jsx';
import Experience from './components/Experience.jsx';
import Network from './components/Network.jsx';
import Services from './components/Services.jsx';
import Strategic from './components/Strategic.jsx';
function App() {
  return (
    <div className="hero-background">
      <Router>
        <nav className="navbar">
          <Link to="/" className="logo">
            RAILO
          </Link>

          <div className="nav-links">
            <Link to="/services">
            Payment
            </Link>

            <Link to="/experience">
              Experience
            </Link>

<Link to="/strategic">
              Network
            </Link>
            
            <Link to="/network">
              Markets
            </Link>

            

          </div>

          <Link to="/contact" className="cta-button">
            Contact
          </Link>
          
        </nav>

        <Routes>
          <Route
            path="/"
            element={
              <>
                <section id="center">
                  <div>
                    <p className="hero-text">
                      Payments, Market Entry & Regulatory Strategy
                      <br />
                      <span className="second-line">
                        for Latin America
                      </span>
                    </p>
                  </div>
                </section>

                <h2 id="introduccion">
                  Railo designs and executes payment, market entry, and
                  regulatory strategies for companies looking to launch,
                  operate, and scale across Chile and Latin America.
                 
                  By combining regulatory expertise, operational
                  experience, and a strong network of financial ecosystem
                  stakeholders, Railo enables companies to enter new
                  markets faster, reduce risk, and build scalable
                  operations from day one.
                 
                  Entering a new market requires far more than a
                  technical integration.
                 
                  Each country presents its own regulatory, operational,
                  commercial, and financial challenges that must be
                  addressed from the outset.
                 
                  Railo develops and implements tailored expansion
                  strategies that align with each client's business
                  model, growth objectives, and target markets.
                </h2>
              </>
            }
          />

          <Route path="/services" element={<Services />} />
          <Route path="/experience" element={<Experience />} />
          <Route path="/network" element={<Network />} />
          <Route path="/strategic" element={<Strategic />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
