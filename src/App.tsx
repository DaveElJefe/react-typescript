import React, { useEffect, useRef, useState } from 'react';
import './App.css';
import List from './components/List';
import Form from './components/Form';
import {Suscriptor} from './types';

interface AppState {
  subs: Array<Suscriptor>
  newSubsNumber: number
}

/*const Initial_State = [
  {
    nickname: 'dapelu',
    subMonths: 3,
    avatar: 'https://i.pravatar.cc/150?u=dapelu',
    description: 'Dapelu hace de moderador a veces'
  },
  {
    nickname: 'sergio_serrano',
    subMonths: 7,
    avatar: 'https://i.pravatar.cc/150?u=sergio_serrano',
  }
]*/

function App() {
  const [subs, setSubs] = useState<AppState["subs"]>([])
  const [newSubsNumber, setNewSubsNumber] = useState<AppState["newSubsNumber"]>(0) 
  const divRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    //setSubs(Initial_State)
    /*const fetchSubs = (): Promise<any> => {
      return fetch('http://localhost:3000/subs').then(res => res.json())
    }
    fetch('http://localhost:3000/subs')
      .then(res => res.json())
      .then(subs => {
        console.log(subs)
        setSubs(subs)
      })*/
  }, [])

  const handleNewSub = (newSub: Suscriptor): void => {
    setSubs(subs => [...subs, newSub])
  }

  return (
    <div className="App" ref={divRef}>
      <h1>Suscriptores</h1>
      <List subs={subs}/>
      New subs: {newSubsNumber}
      <Form onNewSub={handleNewSub}/>
    </div>
  );
}

export default App;
