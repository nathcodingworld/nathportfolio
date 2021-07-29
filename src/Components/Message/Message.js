import classes from "./Message.module.css";
import Header from "../UI/Header";
import icon from "../../Assets/myiconlite.png";
import { database } from "../Database/Firebase";
import { useState } from "react";
import CopyEmail from "../UI/CopyEmail";

function Message() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  function onSubmitHandler(event) {
    event.preventDefault();
    database
      .collection("contacts")
      .add({
        name: name,
        email: email,
        message: message,
      })
      .then(() => {
        alert("Message has been submitted");
      })
      .catch((error) => {
        alert(error.message);
      });

    setName("");
    setMessage("");
    setEmail("");
  }
  return (
    <section className={classes.section}>
      <Header></Header>
      <div className={classes.message}>
        <div className={classes.contact}>
          <h1>Contact</h1>
          <form className={classes.form} onSubmit={onSubmitHandler}>
            <input className={classes.inputfield} type="text" placeholder="Name" name="name" value={name} onChange={(e) => setName(e.target.value)}></input>
            <input className={classes.inputfield} type="email" placeholder="Enter Email" name="email" value={email} onChange={(e) => setEmail(e.target.value)}></input>
            <textarea rows="10" className={classes.textfield} type="text" placeholder="Write Message" name="message" value={message} onChange={(e) => setMessage(e.target.value)}></textarea>
            <button type="submit" id="submit" className={classes.btn}>
              SUBMIT
            </button>
          </form>
          <label className={classes.label}>My Email</label>
          <CopyEmail></CopyEmail>
          <label className={classes.label}>My Number</label>
          <div className={classes.number}>0932442398</div>
        </div>
      </div>
      <footer className={classes.footer}>
        <img className={classes.imgicon} src={icon} alt="icon"></img>
        <h3 className={classes.copyright}>
          NATHANIEL MORALES <span className={classes.year}> © 2021</span>
        </h3>
      </footer>
    </section>
  );
}

export default Message;
