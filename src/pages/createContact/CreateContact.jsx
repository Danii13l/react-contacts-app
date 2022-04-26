// hooks
import { useAddContact } from '../../hooks/useAddContact';

// components
import { CreateAndViewLayout } from './../../components/createAndViewPagesLayout/CreateAndViewLayout';
import { Error } from './../../components/error/Error';


export const CreateContact = () => {

  const { addContact, errorAdd } = useAddContact();

  return (
    <>
      {errorAdd && <Error />}
      {!errorAdd && <CreateAndViewLayout addContact={addContact} fontPicture="create" title="Create new contact" />}
    </>
  );
};



// // {
//   "createdAt": "1998-12-28T20:24:22.668Z",
//   "name": "Christina Zulauf",
//   "surname": "Reichert",
//   "phone": "949-709-5773 x7218",
//   "category": "in",
//   "photo": "",
//   "email": "Wilfredo_Collins3@yahoo.com",
//   "birthday": "1997-06-08T11:28:16.403Z",
//   "id": "3"
//  },