import { NavLink } from 'react-router-dom';
import css from './AuthNav.module.css';

export const AuthNav = () => {
  return (
    <div>
      <NavLink
        className={css.link}
        to="/register"
        style={({ isActive }) => ({
          fontWeight: isActive ? '700' : '400',
          color: isActive ? 'red' : 'black',
        })}
      >
        Register
      </NavLink>
      <NavLink
        className={css.link}
        to="/login"
        style={({ isActive }) => ({
          fontWeight: isActive ? '700' : '400',
          color: isActive ? 'red' : 'black',
        })}
      >
        Log In
      </NavLink>
    </div>
  );
};
