import React from 'react';

import GoalList from './components/GoalList';
import './App.css';
// this is a functional component
const App = () => {
  const courseGoals = [
    {
      id: 'CG1',
      text: 'Finish the Course',
    },
    {
      id: 'CG2',
      text: 'Learn all about the Course Main Topic',
    },
    {
      id: 'CG3',
      text: 'Help other students in the Course Q&amp;A',
    },
  ];

  return (
    <div className='course-goals'>
      <h2>Course Goals</h2>
      <GoalList goals={courseGoals} />
    </div>
  );
};

export default App;
