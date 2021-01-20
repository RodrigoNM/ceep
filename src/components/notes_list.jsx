import React, { Component } from "react"
import NotesCard from "./notes_card"

class NotesList extends Component{
  render(){
    return(
      <ul>
        {Array.of("Trabalho","Trabalho", "Estudo").map(categoria => {
          return (
            <NotesCard/>
          );
        })}
      </ul>
    );
  }
}

export default NotesList;