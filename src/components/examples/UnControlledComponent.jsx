import { useRef, useState } from "react";

export default function UncontrolledForm() {
  const nameRef = useRef();
  const emailRef = useRef();
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

    const name = nameRef.current.value;
    const email = emailRef.current.value;

    let formErrors = {};
    if (!name) formErrors.name = "Name is required";
    if (!email) formErrors.email = "Email is required";


    if (Object.keys(formErrors).length > 0) {
      setErrors(formErrors);
    } else {
      setErrors({});
      console.log("Uncontrolled Form Data:", { name, email });
    }
  };

  return (
    <form onSubmit={handleSubmit} className="p-4 border rounded mt-4">
      <h2 className="text-lg font-bold mb-4 text-black">Uncontrolled Form</h2>

      <input
        type="text"
        ref={nameRef}
        placeholder="Name"
        className="border p-2 mb-1 w-full text-black"
        onChange={(e) => validateField("name", e.target.value)}
      />
      {errors.name && <p className="text-red-500 mb-2">{errors.name}</p>}

      <input
        type="email"
        ref={emailRef}
        placeholder="Email"
        className="border p-2 mb-1 w-full text-black"
        onChange={(e) => validateField("email", e.target.value)}
      />
      {errors.email && <p className="text-red-500 mb-2">{errors.email}</p>}

      <button type="submit" className="bg-black text-white px-4 py-2 rounded">
        Submit
      </button>
    </form>
  );
}
