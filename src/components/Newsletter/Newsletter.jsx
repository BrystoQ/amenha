import React, { useRef } from "react";
import base from "../../api/base";
import { Button } from "@mui/material";
import "./Newsletter.scss";

function Newsletter() {
  const emailRef = useRef();

  const [success, setSuccess] = React.useState(false);

  const addEmail = (e) => {
    e.preventDefault();
    const Email = emailRef.current.value;
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
  };

  return (
    <div className="newsletter">
      <form>
        <label>Inscrivez vous à notre newsletter ?</label>
        <input
          type="email"
          className="form-control"
          id="exampleInputEmail1"
          aria-describedby="emailHelp"
          ref={emailRef}
        />
        <Button
          type="submit"
          variant="contained"
          disableElevation
          className="button"
          onClick={addEmail}
        >
          En savoir plus
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
