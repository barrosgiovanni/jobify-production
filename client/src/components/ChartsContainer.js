import React, { useState } from 'react';
import BarChart from './BarChart';
import AreaChart from './AreaChart';
import { useAppContext } from '../context/appContext';
import Wrapper from '../assets/wrappers/ChartsContainer';

function ChartsContainer() {
  const [barChart, setBarChart] = useState(true);
  const { monthlyApplications } = useAppContext();

  const data = monthlyApplications;

  return (
    <Wrapper>
      <h4>Monthly Applications</h4>
      <button type='button' onClick={() => setBarChart(!barChart)}>
        {barChart ? 'AreaChart' : 'BarChart'}
      </button>
      {barChart ? <BarChart data={data} /> : <AreaChart data={data} />}
    </Wrapper>
  );
}

export default ChartsContainer;
