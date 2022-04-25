// react
import { useEffect, useState } from 'react';

// hooks
import { useAddContact } from '../../hooks/useAddContact';

// components
import { CreateAndViewLayout } from './../../components/createAndViewPagesLayout/CreateAndViewLayout';

export const CreateContact = () => {
  const [state, setState] = useState({
    username: '',
    surname: '',
    birthday: '',
    email: '',
    photo: '',
    category: '',
  });

  const addContact = useAddContact();
  const [image, setImage] = useState('');
  const [preview, setPreview] = useState('');

  useEffect(() => {
    if (image) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreview(reader.result);
        setState(state => ({ ...state, photo: reader.result }));
      };
      reader.readAsDataURL(image);
    } else setPreview(null);
  }, [image]);


  const handleInputs = (ev) => {
    setState(state => ({ ...state, [ev.target.name]: ev.target.value }));
  };

  const handleFileInput = (ev) => {
    const file = ev.target.files[0];
    file && file.type.substr(0, 5) === 'image' ? setImage(file) : setImage(file);
  };


  return (
    <>
      <CreateAndViewLayout title='Create new contact' fontPicture="create" />
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