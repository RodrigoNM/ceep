import React, { Component } from "react"

class NotesCard extends Component{
  render(){
    return(
      <li>
        <header>
          <h3>Titulo</h3>
        </header>
        <p>
          Escreva sua nota
        </p>
      </li>
    );
  }
}

export default NotesCard;