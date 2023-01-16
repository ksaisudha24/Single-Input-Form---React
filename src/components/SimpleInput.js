import { useState, useRef } from "react";

const SimpleInput = (props) => {
  const [enteredName, setEnteredName] = useState("");
  const [error, setError] = useState(false);
  // const nameRef = useRef("");

  const onSubmitHandler = (event) => {
    event.preventDefault();
    // console.log(nameRef.current.value);
    if (enteredName.trim() === "") {
      setError(true);
      console.log("Invalid");
      return;
    }
    console.log(enteredName);
    setEnteredName("");
    setError(false);
  };

  const onChangeHandler = (event) => {
    setEnteredName(event.target.value);
    if (event.target.value.trim() === "") {
      setError(true);
      return;
    }
    setError(false);
  };

  const onBlurHandler = (event) => {
    if (enteredName.trim() === "") {
      setError(true);
    }
  };

  const formClasses = `form-control + ${error ? "invalid" : ""}`;
  return (
    <form onSubmit={onSubmitHandler}>
      <div className={formClasses}>
        <label htmlFor="name">Your Name</label>
        <input
          /* ref={nameRef} */ type="text"
          id="name"
          onChange={onChangeHandler}
          onBlur={onBlurHandler}
          
        />
        {error && <p className="error-text"> Name must not be empty! </p>}
      </div>
      <div className="form-actions">
        <button disabled={enteredName.trim() === ""}>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
