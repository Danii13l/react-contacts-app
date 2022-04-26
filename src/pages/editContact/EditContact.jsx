// react
import { useEffect } from 'react';

// components
import { CreateAndViewLayout } from './../../components/createAndViewPagesLayout/CreateAndViewLayout';
import { Loading } from '../../components/loading/Loading';
import { Error } from './../../components/error/Error';

// router
import { useParams } from 'react-router-dom';

// hooks
import { useGetContact } from './../../hooks/useGetContact';
import { useUpdateContact } from '../../hooks/useUpdateContact';


export const EditContact = () => {
  const { id } = useParams();

  const { contact, getContact, error, loading } = useGetContact();

  useEffect(() => {
    getContact(id);
  }, []);

  const { updateContact, errorUpdata } = useUpdateContact();

  return (
    <>
      {loading && <Loading />}
      {error && <Error />}
      {errorUpdata && <Error />}
      {!loading && !error && <CreateAndViewLayout title='Edid contact' fontPicture="edit" id={id} data={contact} botton={'edit'}
        updateContact={updateContact} />}
    </>
  );
};
