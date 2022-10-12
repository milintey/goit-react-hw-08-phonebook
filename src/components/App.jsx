import { GlobalStyle } from '../components/GlobalStyle/GlobalStyle';
import { Route, Routes } from 'react-router-dom';
import { ContactsPage } from './Pages/ContactsPage';
import { HomePage } from './Pages/HomePage';
import { SignUpPage } from './Pages/SignUpPage';
import { LogInPage } from './Pages/LogInPage';
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { selectIsRefreshing } from 'redux/selectors';
import { refreshUser } from 'redux/operationsAuth';
import { SiteNavigate } from './SiteNavigate/SiteNavigate';
import { RestrictedRoute } from './RestrictedRoute/RestrictedRoute';
import { PrivateRoute } from './PrivateRoute/PrivateRoute';

// function Blah() {
//   return (
//     <div>
//       <h2>This is the blah page</h2>
//     </div>
//   );
// }

export const App = () => {
  const dispatch = useDispatch();
  const isRefreshing = useSelector(selectIsRefreshing);

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return isRefreshing ? (
    'Refretch from Data'
  ) : (
    <div>
      <SiteNavigate />

      <Routes>
        <Route path="/home" element={<HomePage />} />
        <Route
          path="/signUpPage"
          element={
            <RestrictedRoute
              redirectTo="/contactsPage"
              component={<SignUpPage />}
            />
          }
        />
        <Route
          path="/logInPage"
          element={
            <RestrictedRoute
              redirectTo="/contactsPage"
              component={<LogInPage />}
            />
          }
        />
        <Route
          path="/contactsPage"
          element={
            <PrivateRoute
              redirectTo="/logInPage"
              component={<ContactsPage />}
            />
          }
        />
        {/* <Route path="/goit-react-hw-08-phonebook" element={<Blah />} /> */}
      </Routes>

      <GlobalStyle />
    </div>
  );
};
