import React from "react";
import Card from "./Card";
import Button from "./Button";
import classes from "./ErrorModel.module.css";

const ErrorModal = props => {
  return (
    <div className={classes.backdrop} onClick={props.onError}>
    <Card className={classes.modal}>
      <header className={classes.header}>
        <h1>
          {props.title}
        </h1>
      </header>
      <div className={classes.content}>
        <p>
          {props.message}
        </p>
      </div>
      <footer className={classes.actions}>
        <Button onClick={props.onError}>okay</Button>
      </footer>
    </Card>
    </div>
  );
};

export default ErrorModal;
