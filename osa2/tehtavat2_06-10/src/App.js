import { useEffect, useState } from 'react'
import Filter from './componets/Filter'
import PersonForm from './componets/PersonForm'
import Persons from './componets/Persons'
import axios from 'axios'

const App = () => {
  const [persons, setPersons] = useState([]) 
  const [newName, setNewName] = useState('New name')
  const [newNumber, setNewNumber] = useState('New number')
  const [filterData, setFilterData] = useState('')

  const personsToShow = filterData.length === 0 ? persons : persons.filter(person => person.name.toLocaleLowerCase().includes(filterData.toLocaleLowerCase()))

  // console.log(personsToShow + " " + filterData.length)

  useEffect(()=>{
    axios.get('http://localhost:3001/persons')
    .then(res=>{
      setPersons(res.data)
    })
  }, [])
 
  const handleNameChange = (e) =>{
    // console.log(e.target.value)
    setNewName(e.target.value)
  }

  const handleNumberChange = (e) =>{
    // console.log(e.target.value)
    setNewNumber(e.target.value)
  }
  
  const handleFilterData = (e) =>{
    // console.log(e.target.value)
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
      <Filter value={filterData} handleFilterData={handleFilterData}/>
      <h3>Add a new</h3>
      <PersonForm 
        addPerson={addPerson} 
        newName={newName} 
        handleNameChange={handleNameChange} 
        newNumber={newNumber} 
        handleNumberChange={handleNumberChange}/>
      <h2>Numbers</h2>
      <Persons personsToShow={personsToShow}/>
    </div>
  )

}

export default App