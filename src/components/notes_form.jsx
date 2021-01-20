import { render } from "@testing-library/react"
import React, { Component } from "react"

class NotesForm extends Component{
  render(){
    return(
      <form>
        <input type="text" placeholder="titulo" />
        <textarea placeholder="Nota" />
        <button>Enviar</button>
      </form>
    );
  }
}

export default NotesForm;