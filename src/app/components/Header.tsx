import React, { useContext, useState } from 'react'
import { PostContext } from '../contexts/PostContext';

function Header() {

  const postCtx = useContext(PostContext);
  const [titleInput, setTitleInput] = useState('');
  const [bodyInput, setBodyInput] = useState('');

  const handleAddButton = () => {
    if(titleInput && bodyInput) {
      postCtx?.addPost(titleInput, bodyInput)
      setTitleInput('');
      setBodyInput('');
    }
  }

  return (
    <header>
      <h1 className='text-3xl'>Titulo da pagina</h1>
      <div>
        <input className='p-3 border border-gray-700 rounded-lg' type="text" placeholder='digite um titulo' value={titleInput} onChange={({target}) => setTitleInput(target.value)} />
        <textarea className='p-3 border border-gray-700 rounded-lg' placeholder='digite um corpo' value={bodyInput}
        onChange={({target}) => setBodyInput(target.value)}></textarea>
        <button className='p-3 border border-gray-700 rounded-lg bg-sky-700'
        onClick={handleAddButton}>Adicionar</button>
      </div>
    </header>
  )
}

export default Header
