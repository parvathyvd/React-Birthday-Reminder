import React, { useState } from 'react';
import data from './data';
import List from './List';
const App = () => {

  const [people, setPeople] = useState(data);
  // const onClickHandler = ()=>{
  //   console.log('click');
  //   setPeople([]);
  // }
  return (
    <section className='container middle'>
      <h3>{people.length} Birthday Reminder</h3>
      <List people ={people}/>
      <button onClick={() => setPeople([])}>clear all</button>
    </section>
  )
}

export default App;
