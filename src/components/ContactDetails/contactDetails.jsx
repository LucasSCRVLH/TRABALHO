import styles from './ContactDetails.module.css';

export function ContactDetails({
  selectedContact,
  onDelete,
  onEdit,
  editing,
  setEditing,
  setName,
  setTel,
  setMail,
}) {
  return (
    <section className={styles.contactDetails}>
      <h2>Detalhes do Contato</h2>
      <img
        src="https://static.vecteezy.com/system/resources/previews/005/544/718/non_2x/profile-icon-design-free-vector.jpg"
        alt="Profile"
      />
      <p>Nome: {selectedContact.name}</p>
      <p>Telefone: {selectedContact.tel}</p>
      <p>E-mail: {selectedContact.mail}</p>

      <div>
        <button onClick={() => onDelete(selectedContact.id)}>Excluir</button>
        <button onClick={() => setEditing((prev) => !prev)}>
          {editing ? "Cancelar Edição" : "Editar"}
        </button>
      </div>

      {editing && (
        <form
          onSubmit={(e) => {
            e.preventDefault();
            onEdit(selectedContact.id);
          }}
          style={{ marginTop: "15px" }}
        >
          <input
            type="text"
            placeholder="Nome:"
            defaultValue={selectedContact.name}
            onChange={(e) => setName(e.target.value)}
          />
          <input
            type="tel"
            placeholder="Telefone:"
            defaultValue={selectedContact.tel}
            onChange={(e) => setTel(e.target.value)}
          />
          <input
            type="email"
            placeholder="E-mail:"
            defaultValue={selectedContact.mail}
            onChange={(e) => setMail(e.target.value)}
          />
          <button type="submit">Salvar</button>
        </form>
      )}
    </section>
  );
}