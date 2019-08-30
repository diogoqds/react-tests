import React, { useState, useEffect } from 'react'

export default function TechList() {

  const [techs, setTech] = useState([])
  const [newTech, setNewTech] = useState('')

  function handleAddTech(event) {
    event.preventDefault()
    setTech([...techs, newTech])
    setNewTech('')
  }

  useEffect(() => {
    const storageTechs = localStorage.getItem('techs')
    if(storageTechs) {
      setTech(JSON.parse(storageTechs))
    }
  }, [])

  useEffect(() => {
    localStorage.setItem('techs', JSON.stringify(techs))
  }, [techs])

  return (
    <div data-testid="container">
      <ul data-testid="list">
        {
          techs.map(tech => (
            <li key={tech}>{tech}</li>
          ))
        }
      </ul>

      <form 
        data-testid="form"
        onSubmit={handleAddTech}
      >
        <input 
          data-testid="tech-input"
          value={newTech}
          onChange={event => setNewTech(event.target.value)}
        />
        <button 
          type="submit"
        >
          Adicionar
        </button>
      </form>
    </div>
  )
}
