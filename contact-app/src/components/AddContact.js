import React from "react";

class AddContact extends React.Component {
  render() {
    return (
      <div className="ui fixed main">
        <h2>Add Contact</h2>
        <div className="ui form">
          <div className="field">
            <label>Name</label>
            <input type="text" name="name" placeholder="Name" />
          </div>
          <div className="field">
            <label>Email</label>
            <input type="text" name="email" placeholder="Email" />
          </div>
          <button className="ui button blue">Add Contact</button>
        </div>
      </div>
    );
  }
}

export default AddContact;
