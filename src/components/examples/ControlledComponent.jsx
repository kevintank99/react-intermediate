import { useState } from "react";

export default function ControlledForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [errors, setErrors] = useState({});

  const validateField = (field, value) => {
    let fieldError = "";

    if (field === "name" && !value) fieldError = "Name is required";
    if (field === "email") {
      if (!value) fieldError = "Email is required";
    }

    setErrors((prev) => ({ ...prev, [field]: fieldError }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  
    // Final validation before submit
    let formErrors = {};
  
    if (!name) formErrors.name = "Name is required";
    if (!email) {
      formErrors.email = "Email is required";
    } 
  
    if (Object.keys(formErrors).length > 0) {
      setErrors(formErrors); // show errors instead of alert
    } else {
      setErrors({}); // clear errors
      console.log("Controlled Form Data:", { name, email });
    }
  };
  

  return (
    <form onSubmit={handleSubmit} className="p-4 border rounded">
      <h2 className="text-lg font-bold mb-4 text-black">Controlled Form</h2>

      <input
        type="text"
        value={name}
        onChange={(e) => {
          setName(e.target.value);
          validateField("name", e.target.value);
        }}
        placeholder="Name"
        className="border p-2 mb-1 w-full text-black"
      />
      {errors.name && <p className="text-red-500 mb-2">{errors.name}</p>}

      <input
        type="email"
        value={email}
        onChange={(e) => {
          setEmail(e.target.value);
          validateField("email", e.target.value);
        }}
        placeholder="Email"
        className="border p-2 mb-1 w-full text-black"
      />
      {errors.email && <p className="text-red-500 mb-2">{errors.email}</p>}

      <button type="submit" className="bg-black text-white px-4 py-2 rounded">
        Submit
      </button>
    </form>
  );
}
