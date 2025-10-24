
import { useState } from "react";

function NameTag() {
  const [name, setName] = useState("");
  const [title, setTitle] = useState("");
  const [company, setCompany] = useState("");

  function updateName(e) {
    setName(e.target.value);
  }
  function updateTitle(e) {
    setTitle(e.target.value);
  }
  function updateCompany(e) {
    setCompany(e.target.value);
  }

  return (
    <div>
      <form>
        <input value={name} onChange={updateName} type="text" placeholder="Full Name" />
        <input value={title} onChange={updateTitle} type="text" placeholder="Job Title" />
        <input value={company} onChange={updateCompany} type="text" placeholder="Company" />
      </form>

      <div>
        <h6> NAME TAG</h6>
        <p style={{ display: name ? "flex" : "none" }}>Hello, my name is {name}</p>
        <p style={{ display: title ? "flex" : "none" }}>{title}</p>
        <p style={{ display: company ? "flex" : "none" }}>{company}</p>
      </div>
    </div>
  );
}

export default NameTag;
