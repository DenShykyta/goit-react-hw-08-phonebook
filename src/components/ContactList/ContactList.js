import { useSelector, useDispatch } from 'react-redux';
import { deleteContactThunk } from '../../redux/contacts/contactsThunk';
import { getFilteredContacts } from '../../redux/contacts/selectors';
import css from './ContactList.module.css';

export function ContactList() {
  const dispatch = useDispatch();

  const visibleContacts = useSelector(getFilteredContacts);
  return (
    <ul className={css.contacts__list}>
      {visibleContacts.map(({ id, name, number }) => (
        <li className={css.contacts__item} key={id}>
          <p>
            {name}: {number}
          </p>
          <button
            className={css.contacts__btn}
            onClick={() => dispatch(deleteContactThunk(id))}
          >
            Del
          </button>
        </li>
      ))}
    </ul>
  );
}
