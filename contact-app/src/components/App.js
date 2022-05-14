import React from "react";
import Header from "./Header";
import AddContact from "./AddContact";
import ContactList from "./ContactList";

const contacts = [
  {
    id: "1",
    name: "Shakir Ali",
    email: "shakir@gmail.com",
  },
  {
    id: "2",
    name: "Muhammad Din",
    email: "mdin@gmail.com",
  },
];
function App() {
  return (
    <div className="ui container">
      <Header />
      <AddContact />
      <ContactList contact={contacts} />
    </div>
  );
}

export default App;
