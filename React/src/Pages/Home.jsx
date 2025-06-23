import React from 'react';
import About from './About.jsx'
 // or '../Pages/About.jsx' depending on folder

const Home = ({ items, user }) => {
  return (
    <div>
      <About items={items} user={user} />
    </div>
  );
};

export default Home;