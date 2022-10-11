import { GlobalStyle } from '../components/GlobalStyle/GlobalStyle';
import { Route, Routes } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { ContactsPage } from './Pages/ContactsPage';
import { HomePage } from './Pages/HomePage';
import { SignUpPage } from './Pages/SignUpPage';
import { LogInPage } from './Pages/LogInPage';
import { UserMenu } from './UserMenu/UserMenu';
import { useSelector } from 'react-redux';
import { selectLogedIn } from 'redux/selectors';

export const App = () => {
  const userLogedIn = useSelector(selectLogedIn);
  console.log(userLogedIn);
  return (
    <div>
      <nav>
        <div>
          <Link to="/">HOME</Link>
          {userLogedIn && <Link to="/contactsPage">CONTACTS</Link>}
        </div>

        {userLogedIn ? (
          <UserMenu name={'Ilya'} />
        ) : (
          <div>
            <Link to="/signUpPage">SIGN UP</Link>
            <Link to="/logInPage">LOG IN</Link>
          </div>
        )}
      </nav>

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/signUpPage" element={<SignUpPage />} />
        <Route path="/logInPage" element={<LogInPage />} />
        <Route path="/contactsPage" element={<ContactsPage />} />
      </Routes>

      <GlobalStyle />
    </div>
  );
};
