// react
// import { useState } from 'react';

// components
import { Container } from '../../components/container/Container';

// material ui
import Button from '@mui/material/Button';
// import { useAddContact } from '../../hooks/useAddContact';
import { ContactInput } from '../../components/input/ContactInput';

// css
import styles from './createCOntact.module.css';

// images
import create from '../../assets/images/create.jpg';

// icons
import { FaHammer } from 'react-icons/fa';

// переместить в const
const inputData = [
  { label: 'Name', name: 'username', type: 'text' },
  { label: 'Surname', name: 'surname', type: 'text' },
  { label: 'Phone', name: 'phone', type: 'tel' },
  { label: 'Email', name: 'email', type: 'email' },
  { label: 'Category', name: 'category', type: 'text' },
  { label: 'Birthday', name: 'birthday', type: 'text' },
];

export const CreateContact = () => {
  // const [state, setState] = useState({
  //   username: '',
  //   surname: '',
  //   birthday: '',
  //   email: '',
  //   photo: '',
  //   category: '',
  // });

  // const addContact = useAddContact();

  // function handleInput(ev) {
  //   return ev.target.name === 'photo' ? setState(state => ({ ...state, [ev.target.name]: ev.target.files[0].name })) : setState(state => ({ ...state, [ev.target.name]: ev.target.value }));
  //   // console.log(ev.target.files[0].name);
  // }

  return (
    <div>
      <Container>
        <div className={styles.inner} >
          <div className={styles.info}>
            <h2>Create new contact</h2>

            <img src={create} alt="new contact" />
          </div>



          <div className={styles.inputbox}>
            <div>
              {inputData.map(input => {
                return <ContactInput key={input.name} {...input} />;
              })}
            </div>
            <Button className={styles.button} variant="contained" >
              Create <FaHammer className={styles.icon} />
            </Button>
          </div>

        </div>
      </Container>
    </div>
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