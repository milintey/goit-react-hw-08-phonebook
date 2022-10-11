import { GlobalStyle } from '../components/GlobalStyle/GlobalStyle';
import { Route, Routes } from 'react-router-dom';
// import { Link } from 'react-router-dom';
import { ContactsPage } from './Pages/ContactsPage';
import { HomePage } from './Pages/HomePage';
import { SignUpPage } from './Pages/SignUpPage';
import { LogInPage } from './Pages/LogInPage';
import { SiteNavigate } from './SiteNavigate/SiteNavigate';

export const App = () => {
  return (
    <div>
      <SiteNavigate />

      <Routes>
        <Route path="/home" element={<HomePage />} />
        <Route path="/contactsPage" element={<ContactsPage />} />
        <Route path="/signUpPage" element={<SignUpPage />} />
        <Route path="/logInPage" element={<LogInPage />} />
      </Routes>

      <GlobalStyle />
    </div>
  );
};
