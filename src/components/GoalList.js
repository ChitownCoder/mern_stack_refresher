import React from 'react';

import './GoalList.css';

const GoalList = (props) => {
  console.log(props.goals);
  return (
    <div>
      <ul className='goal-list'></ul>
    </div>
  );
};

export default GoalList;
