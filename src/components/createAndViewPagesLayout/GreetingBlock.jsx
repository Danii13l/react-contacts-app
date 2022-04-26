// css
import styles from './createAndViewLayout.module.css';

// images
import create from '../../assets/images/create.jpg';
import view from '../../assets/images/view.jpg';


export const GreetingBlock = ({ title, fontPicture }) => {
  return (
    <div className={styles.info}>
      <h2>{title}</h2>
      <img src={fontPicture === 'create' ? create : view} alt="new contact" />
    </div>
  );
};
