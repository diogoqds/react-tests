import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux';

export default function TechListRedux() {

  const [newTech, setNewTech] = useState('')
  const techs = useSelector(state => state.techs)
  const dispatch = useDispatch()

  function handleAddTech(event) {
    event.preventDefault()
    dispatch({ type: 'ADD_TECH', payload: { techs: newTech } })
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
