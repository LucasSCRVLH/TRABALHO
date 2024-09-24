import { useEffect, useState } from "react";
import { Header } from "./components/Header/header";
import ContactPreview from "./components/ContactPreview/contact";
import { STORAGE_SERVICE } from "./services/storage.js";
import { ContactDetails } from "./components/ContactDetails/contactDetails.jsx"; 
function App() {
  const [contacts, setContacts] = useState([]);
  const [name, setName] = useState("");
  const [tel, setTel] = useState("");
  const [mail, setMail] = useState("");
  const [selectedContact, setSelectedContact] = useState(null);
  const [editing, setEditing] = useState(false);


  useEffect(() => {
    const savedContacts = STORAGE_SERVICE.listContacts();
    setContacts(savedContacts);
  }, []);

 
  function handleSubmit(e) {
    e.preventDefault();
    if (!name || !tel || !mail) {
      return alert("Todos os campos são obrigatórios");
    }

    STORAGE_SERVICE.createContact(name, tel, mail);
    alert("Contato adicionado com sucesso!");

    const updatedContacts = STORAGE_SERVICE.listContacts();
    setContacts(updatedContacts);
    clearForm();
  }

 
  function handleDelete() {
    if (selectedContact) {
      STORAGE_SERVICE.deleteContact(selectedContact.id);
      const updatedContacts = STORAGE_SERVICE.listContacts();
      setContacts(updatedContacts);
      alert("Contato removido com sucesso!");
      clearForm();
    }
  }
  function handleEdit(contactId) {
    const updatedContact = { id: contactId, name, tel, mail };

    
    STORAGE_SERVICE.updateContact(contactId, updatedContact);
    alert("Contato atualizado com sucesso!");

    
    const updatedContacts = STORAGE_SERVICE.listContacts();
    setContacts(updatedContacts);

   
    clearForm();
    setEditing(false);
  }

  function clearForm() {
    setName("");
    setTel("");
    setMail("");
    setSelectedContact(null);
    setEditing(false);
  }

  return (
    <>
      <Header />
      <main>
        <aside className="ContactList">
          <section className="ContactForm">
            <form onSubmit={handleSubmit}>
              <legend>ADICIONAR CONTATO</legend>
              <input
                type="text"
                placeholder="Nome:"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
              <input
                type="tel"
                placeholder="Telefone:"
                value={tel}
                onChange={(e) => setTel(e.target.value)}
              />
              <input
                type="email"
                placeholder="E-mail"
                value={mail}
                onChange={(e) => setMail(e.target.value)}
              />
              <button type="submit">Adicionar</button>
            </form>
          </section>
          <section className="ContactListMain">
            {contacts.length > 0 ? (
              contacts.map((contact, index) => (
                <ContactPreview
                  key={index}
                  contact={contact}
                  onSelect={() => setSelectedContact(contact)}
                />
              ))
            ) : (
              <p>Nenhum contato encontrado</p>
            )}
          </section>
        </aside>

        {selectedContact && (
          <ContactDetails
            selectedContact={selectedContact}
            onDelete={handleDelete}
            onEdit={handleEdit}
            editing={editing}
            setEditing={setEditing}
            setName={setName}
            setTel={setTel}
            setMail={setMail}
          />
        )}
      </main>
    </>
  );
}

export default App;
