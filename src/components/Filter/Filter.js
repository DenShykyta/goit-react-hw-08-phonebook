import { useSelector, useDispatch } from 'react-redux';
import css from './Filter.module.css';
import { setFilter } from '../../redux/contacts/filterSlice';
import { getFilterValue } from '../../redux/contacts/selectors';

export const Filter = () => {
  const filter = useSelector(getFilterValue);
  const dispatch = useDispatch();

  const handleChange = event => {
    const { value } = event.target;
    dispatch(setFilter(value));
  };

  return (
    <div className={css.filter}>
      <label className={css.filter__text}>
        Find contacts by name
        <input
          className={css.filter__input}
          type="text"
          placeholder="Type name ..."
          value={filter}
          onChange={handleChange}
        ></input>
      </label>
    </div>
  );
};
