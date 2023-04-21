import React, { useRef } from "react";
import base from "../../api/base";
import { Button } from "@mui/material";
import "./Newsletter.scss";

const isEmail = (email) =>
  /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(email);

function Newsletter() {
  const emailRef = useRef();

  const [success, setSuccess] = React.useState(false);
  const [error, setError] = React.useState(false);

  const addEmail = (e) => {
    e.preventDefault();
    const Email = emailRef.current.value;

    if (!isEmail(Email)) {
      setTimeout(() => {
        setError(false);
      }, 3000);
      setError(true);
    } else {
      base("Amenha").create({ Email }, function (err, record) {
        if (err) {
          console.error(err);
          return;
        }
        if (record) {
          setTimeout(() => {
            setSuccess(false);
          }, 3000);
          setSuccess(true);
        }
      });
    }
  };

  return (
    <div className="newsletter">
      <form>
        <label>Inscrivez vous à notre newsletter ?</label>
        {error ? (
          <p className="error">Veuillez entrer une adresse mail valide !</p>
        ) : (
          <p className="errorNotDisplay"></p>
        )}
        <input
          type="email"
          className="form-control"
          id="exampleInputEmail1"
          aria-describedby="emailHelp"
          placeholder="Votre email"
          ref={emailRef}
          pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"
        />
        <Button
          type="submit"
          variant="contained"
          disableElevation
          className="button"
          onClick={addEmail}
        >
          Je m'inscris
        </Button>
      </form>
      {success ? (
        <p className="success">Merci pour votre inscription !</p>
      ) : (
        <p className="success"></p>
      )}
    </div>
  );
}

export default Newsletter;
