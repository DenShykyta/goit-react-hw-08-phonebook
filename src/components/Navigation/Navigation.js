import { NavLink } from 'react-router-dom';
import { useAuth } from 'hooks';
import css from './Navigation.module.css';

export const Navigation = () => {
  const { isLoggedIn } = useAuth();

  return (
    <nav>
      <NavLink
        className={css.link}
        to="/"
        style={({ isActive }) => ({
          fontWeight: isActive ? '700' : '400',
          color: isActive ? 'red' : 'black',
        })}
      >
        Home
      </NavLink>
      {isLoggedIn && (
        <NavLink
          className={css.link}
          to="/contacts"
          style={({ isActive }) => ({
            fontWeight: isActive ? '700' : '400',
             color: isActive ? 'red' : 'black',
          })}
        >
          Contacts
        </NavLink>
      )}
    </nav>
  );
};
