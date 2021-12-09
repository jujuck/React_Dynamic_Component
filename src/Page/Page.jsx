import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

import Blue from '../components/Blue';
import Red from '../components/Red';
import Green from '../components/Green';
const Page = () => {
  const [data, setData] = useState([]);
  const { page } = useParams();
  useEffect(() => {
    console.log(page)
    axios
      .get(`./data/${page}.json`)
      .then(res => {
        setData(res.data);
        console.log(res.data)
      })
  }, [page])
  const getComponent = (type, data) => {
    switch (type) {
      case 'blue':
        return <Blue data={data} />;
      case 'green':
        return <Green data={data} />;
      case 'red':
        return <Red data={data} />;
      default:
        break;
    }
  };
  const createComponent = () => {
    const res = data.map((comp) => getComponent(comp.component, comp.data));
    return res;
  };
  return (
    <div>
      {createComponent()}
    </div>
  )
}

export default Page
