import Notiflix from 'notiflix';
import { useSelector, useDispatch } from 'react-redux';
import { addContactThunk } from '../../redux/contacts/contactsThunk';
import { getContacts } from '../../redux/contacts/selectors';
import { useState } from 'react';

import css from './ContactForm.module.css';

export function ContactForm() {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const dispatch = useDispatch();
  const contacts = useSelector(getContacts);

  const handleInputChange = event => {
    const { name, value } = event.target;
    switch (name) {
      case 'name':
        setName(value);
        break;
      case 'number':
        setNumber(value);
        break;
      default:
        console.warn(`Тип поля - ${name} не обробляється!`);
    }
  };

  const handleSubmit = event => {
    event.preventDefault();

    if (
      contacts.some(
        contact =>
          contact.name.toLowerCase() === name.toLowerCase() ||
          contact.number === number
      )
    ) {
      Notiflix.Notify.info(`${name} or ${number} is already in contacts!`);
      return;
    }

    dispatch(addContactThunk({ name, number }));

    setName('');
    setNumber('');
  };
  return (
    <form className={css.form} onSubmit={handleSubmit}>
      <lable>
        Name
        <input
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          onChange={handleInputChange}
          value={name}
          placeholder="Input name ..."
          required
        />
      </lable>
      <lable>
        Number
        <input
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          onChange={handleInputChange}
          value={number}
          placeholder="Input number ..."
          required
        />
      </lable>
      <button type="submit">Add contact</button>
    </form>
  );
}
