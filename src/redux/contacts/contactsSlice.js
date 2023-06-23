import { createSlice } from '@reduxjs/toolkit';
import {
  addContactThunk,
  deleteContactThunk,
  getContactsThunk,
} from './contactsThunk';

const handlePending = state => {
  state.isLoading = true;
};
const handleFulfilledGet = (state, { payload }) => {
  state.isLoading = false;
  state.items = payload;
  state.error = null;
};
const handleFulfilledAdd = (state, { payload }) => {
  state.isLoading = false;
  state.items = [payload, ...state.items]; /*state.items.push(payload)*/
  state.error = null;
};
const handleFulfilledDel = (state, { payload }) => {
  state.isLoading = false;
  state.items = state.items.filter(item => item.id !== payload);
  state.error = null;
};
const handleRejected = (state, { payload }) => {
  state.isLoading = false;
  state.error = payload;
};

export const contactsSlice = createSlice({
  name: 'contacts',
  initialState: { items: [], isLoading: false, error: null },
  extraReducers: builder => {
    builder
      .addCase(getContactsThunk.pending, handlePending)
      .addCase(getContactsThunk.fulfilled, handleFulfilledGet)
      .addCase(getContactsThunk.rejected, handleRejected)

      .addCase(deleteContactThunk.pending, handlePending)
      .addCase(deleteContactThunk.fulfilled, handleFulfilledDel)
      .addCase(deleteContactThunk.rejected, handleRejected)

      .addCase(addContactThunk.pending, handlePending)
      .addCase(addContactThunk.fulfilled, handleFulfilledAdd)
      .addCase(addContactThunk.rejected, handleRejected);
  },
});

export const { addContact, deleteContact } = contactsSlice.actions;
export default contactsSlice.reducer;
