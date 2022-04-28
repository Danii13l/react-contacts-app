// hooks
import { useAddContact } from '../hooks/useAddContact';
// components
import { CreateAndViewLayout } from './../components/createAndViewPagesLayout/CreateAndViewLayout';
import { Error } from '../components/error/Error';

export const CreateContact = () => {
  const { addContact, errorAdd } = useAddContact();

  return (
    <>
      {errorAdd && <Error />}
      {!errorAdd && <CreateAndViewLayout addContact={addContact} fontPicture="create" title="Create new contact" />}
    </>
  );
};
