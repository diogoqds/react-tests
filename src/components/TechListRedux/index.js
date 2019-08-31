import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { addTech } from '../../redux/actions/tech';
export default function TechListRedux() {

  const [newTech, setNewTech] = useState('')
  const dispatch = useDispatch()
  const techs = useSelector(state => state.techs)

  function handleAddTech(event) {
    event.preventDefault()
    dispatch(addTech(newTech))
    setNewTech('')
  }

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
