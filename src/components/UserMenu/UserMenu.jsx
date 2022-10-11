import { useDispatch } from 'react-redux';
import { logOutUser } from 'redux/operationsAuth';

export const UserMenu = ({ name }) => {
  const dispatch = useDispatch();
  const logOut = () => {
    dispatch(logOutUser());
  };
  return (
    <div>
      <p>Welkom, {name}</p>
      <button onClick={logOut}>LOG OUT</button>
    </div>
  );
};
