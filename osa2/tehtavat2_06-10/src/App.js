import { useState } from 'react'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456' },
    { name: 'Ada Lovelace', number: '39-44-5323523' },
    { name: 'Dan Abramov', number: '12-43-234345' },
    { name: 'Mary Poppendieck', number: '39-23-6423122' }
  ]) 
  const [newName, setNewName] = useState('New name')
  const [newNumber, setNewNumber] = useState('New number')
  const [filterData, setFilterData] = useState('')
 
  const handleNameChange = (e) =>{
    // console.log(e.target.value)
    setNewName(e.target.value)
  }

  const handleNumberChange = (e) =>{
    // console.log(e.target.value)
    setNewNumber(e.target.value)
  }
  
  const handleFilterData = (e) =>{
    console.log(e.target.value)
    setFilterData(e.target.value)
  }


  const addPerson = (e) =>{
    e.preventDefault()
    const personObject = {
      name: newName,
      number: newNumber
    }

    const samePerson = persons.filter(p=> p.name === newName)

    if(samePerson.length > 0){
      alert(`${newName} is already added to phonebook`)
    } else{
      setPersons(persons.concat(personObject))
      setNewName('')
      setNewNumber('')
    }
  }
 
  return (
    <div>
      <h2>Phonebook</h2>
      <p>filter shown with <input value={filterData} onChange={handleFilterData}/></p>
      <form onSubmit={addPerson}>
        <div>name: <input value={newName} onChange={handleNameChange}/></div>
        <div>number: <input value={newNumber} onChange={handleNumberChange}/></div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      {
        persons.map((person)=> <p key={person.name}>{person.name} {person.number}</p>)
      }
    </div>
  )

}

export default App