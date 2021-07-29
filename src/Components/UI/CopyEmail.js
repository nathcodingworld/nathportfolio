import React, { Component } from "react";
import classes from "./CopyEmail.module.css";

export default class CopyEmail extends Component {
  constructor(props) {
    super(props);
    this.state = { copySuccess: false };
  }

  copyCodeToClipboard() {
    const el = this.textArea;
    el.select();
    document.execCommand("copy");
    this.setState({ copySuccess: true });
  }

  returnHandler() {
    this.setState({ copySuccess: false });
  }

  render() {
    return (
      <div className={classes.design}>
        <textarea ref={(textarea) => (this.textArea = textarea)} value="nathaniel.1stacc@gmail.com" cols={25} rows={1} className={classes.textocopy} onMouseLeave={() => this.returnHandler()} />
        {this.state.copySuccess ? (
          <div className={classes.result}>Copied!</div>
        ) : (
          <button onClick={() => this.copyCodeToClipboard()} className={classes.btn}>
            Copy to Clipboard
          </button>
        )}
      </div>
    );
  }
}
