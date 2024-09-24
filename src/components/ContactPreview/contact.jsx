
import styles from './Contact.module.css';

export default function ContactPreview({ contact, onSelect }) {
  return (
    <ul className={styles.contactItemPreview}>
      <li>
        <div>
          <img
            src="https://static.vecteezy.com/system/resources/previews/005/544/718/non_2x/profile-icon-design-free-vector.jpg"
            alt="Profile"
          />
        </div>
        <div>
          <h3>{contact?.name}</h3>
          <p>{contact?.mail}</p>
          <p>{contact?.tel}</p>
        </div>
        <div>
          <button onClick={onSelect}>Exibir Detalhes</button>
        </div>
      </li>
    </ul>
  );
}