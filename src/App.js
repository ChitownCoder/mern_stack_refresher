import React, { useState } from 'react';

import GoalList from './components/GoalList/GoalList';
import NewGoal from './components/NewGoal/NewGoal';
import './App.css';

// this is a functional component
const App = () => {
  const [courseGoals, setCourseGoals] = useState([
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
  ]);

  const addNewGoalHandler = (newGoal) => {
    // setCourseGoals(courseGoals.concat(newGoal));
    setCourseGoals((prevCourseGoals) => prevCourseGoals.concat(newGoal));
  };

  return (
    <div className='course-goals'>
      <h2>Course Goals</h2>
      <NewGoal onAddGoal={addNewGoalHandler} />
      <GoalList goals={courseGoals} />
    </div>
  );
};

export default App;
