import { ThemeProvider } from 'styled-components';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { theme } from './Theme';

// PAGES
import HomePage from './Pages/Home/Home';
import AboutPage from './Pages/About/About';
import ContactPage from './Pages/Contact/Contact';
import DetailsPage from './Pages/ProjectDetails/ProjectDetails';
import ProjectsPage from './Pages/Projects/Projects';
// PAGES

// COMPONENTS
import Navbar from '../src/Components/Navbar/Nav/Navbar';
// COMPONENTS

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Navbar />
        <Switch>
          <Route path='/project/:id'>
            <DetailsPage />
          </Route>
          <Route path='/about'>
            <AboutPage />
          </Route>
          <Route path='/projects'>
            <ProjectsPage />
          </Route>
          <Route path='/contact'>
            <ContactPage />
          </Route>
          <Route path='*'>
            <HomePage />
          </Route>
        </Switch>
      </Router>
    </ThemeProvider>
  );
}
export default App;
