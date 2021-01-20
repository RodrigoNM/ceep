import NotesList from "./components/notes_list"
import NotesForm from "./components/notes_form"
import { Component } from "react";

class App extends Component {
  render(){
    return (
      <section>
        <NotesForm/>
        <NotesList/>
      </section>
    );
  }
}

export default App;
