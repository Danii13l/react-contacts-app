// react
import { useEffect, useState } from 'react';

// components
import { Container } from '../container/Container';
import { InputsBlock } from './InputsBlock';
import { AvatarBlock } from './AvatarBlock';
import { GreetingBlock } from './GreetingBlock';
// css
import styles from './createAndViewLayout.module.css';

export const CreateAndViewLayout = ({ id, data, addContact, title, fontPicture, updateContact, botton }) => {

  const [state, setState] = useState({
    username: '',
    surname: '',
    birthday: '',
    email: '',
    photo: '',
    category: '',
    phone: ''
  });

  const [errorImg, setErrorImg] = useState(false);
  const [image, setImage] = useState('');

  useEffect(() => {
    id && setState(data);
  }, []);

  useEffect(() => {
    if (image) {
      if (image.size < 70999) {
        setErrorImg(false);
        const reader = new FileReader();
        reader.onloadend = () => {
          setState(state => ({ ...state, photo: reader.result }));
        };
        reader.readAsDataURL(image);
      } else {
        setErrorImg(true);
        setState(state => ({ ...state, photo: '' }));
      }
    }
  }, [image]);

  const handleInputs = (ev) => {
    setState(state => ({ ...state, [ev.target.name]: ev.target.value }));
  };

  const handleFileInput = (ev) => {
    const file = ev.target.files[0];
    file && file.type.substr(0, 5) === 'image' ? setImage(file) : setImage(file);
  };

  const sendToServerData = (ev) => {
    ev.preventDefault();
    !errorImg && addContact ? addContact(state) : updateContact(id, state);
  };

  return (
    <Container>
      <div className={styles.inner} >
        <GreetingBlock title={title} fontPicture={fontPicture} />
        <div className={styles.inputbox}>
          <InputsBlock state={state} handleInputs={handleInputs} sendToServerData={sendToServerData} botton={botton} />
          <AvatarBlock preview={state.photo} handleFileInput={handleFileInput} />
          {errorImg && <h2 className={styles.imgError}>The picture`s size is too big!</h2>}
        </div>
      </div>
    </Container>
  );
};
