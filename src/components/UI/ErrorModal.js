import React from "react";
import Card from "./Card";
import Button from "./Button";
 import classes from "./ErrorModel.module.css"
const ErrorModal = props => {
  return (
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
        <Button>okay</Button>
      </footer>
    </Card>
  );
};

export default ErrorModal;
