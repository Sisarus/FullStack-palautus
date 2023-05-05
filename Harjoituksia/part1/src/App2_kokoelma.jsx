import Note from './components/Note'
  
const App2_kokoelma = ({notes}) => {
  return (
    <div>
      <h1>Notes</h1>
      <ul>
        {notes.map(note =>
          <Note note={note}/>
        )}
      </ul>
    </div>
  )
}

export default App2_kokoelma