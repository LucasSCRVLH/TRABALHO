const DB_KEY = "@test";

export const STORAGE_SERVICE = {
 
  listContacts: () => {
    const storage = localStorage.getItem(DB_KEY);
    return storage ? JSON.parse(storage) : [];
  },

  createContact: (contactName, contactTel, contactMail) => {
    const storage = STORAGE_SERVICE.listContacts();

    if (!contactName || !contactTel || !contactMail) {
      return alert("Todos os campos são obrigatórios");
    }

    const newContact = {
      id: Date.now(), 
      name: contactName,
      tel: contactTel,
      mail: contactMail,
    };

    const updatedContacts = [...storage, newContact];
    localStorage.setItem(DB_KEY, JSON.stringify(updatedContacts));

    return newContact; 
  },

  updateContact: (contactId, updatedContact) => {
    const storage = STORAGE_SERVICE.listContacts();

    const contactIndex = storage.findIndex((item) => item.id === contactId);
    if (contactIndex === -1) {
      return alert("Contato não encontrado");
    }

    storage[contactIndex] = { ...storage[contactIndex], ...updatedContact };

    localStorage.setItem(DB_KEY, JSON.stringify(storage));

    return storage[contactIndex]; 
  },

 
  deleteContact: (contactId) => {
    const storage = STORAGE_SERVICE.listContacts();

    const updatedContacts = storage.filter((item) => item.id !== contactId);

    if (storage.length === updatedContacts.length) {
      return alert("Contato não encontrado");
    }

    localStorage.setItem(DB_KEY, JSON.stringify(updatedContacts));
    return true; 
  },

  getContactById: (contactId) => {
    const storage = STORAGE_SERVICE.listContacts();
    return storage.find((contact) => contact.id === contactId) || null;
  },
};
