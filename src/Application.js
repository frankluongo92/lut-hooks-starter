import React, { useRef } from 'react';
import Toggle from './utils/Toggle';
import { formSubmit } from './utils/Forms';
import { useTitleInput } from './utils/useTitleInput';
import Dishes from './components/Dishes';
import UserContext from './contexts/UserContext';

const Application = () => {
  const [ name, setName ] = useTitleInput('');
  const ref = useRef();

  return (
    <UserContext.Provider
      value={{
        user: false
      }}
    >
      <main className="main-wrapper" ref={ref}>
        <h1>Level Up Dishes</h1>
        <Toggle>Toggle Content</Toggle>
        <form onSubmit={e => {e.preventDefault();formSubmit(name, setName);}}>
          <input type="text" onChange={(e) => setName(e.target.value)} value={name}/>
          <input type="submit" value="submit"/>
        </form>
        <Dishes />
      </main>
    </UserContext.Provider>
  );
};

export default Application;
