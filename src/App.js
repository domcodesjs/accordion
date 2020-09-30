import React, { useState } from 'react';
import Accordion from './components/Accordion';

function App() {
  const [sections, setSections] = useState([
    {
      title: 'Section 1',
      content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
      hide: true
    },
    {
      title: 'Section 2',
      content:
        'Cupiditate tenetur aliquam necessitatibus id distinctio quas nihil ipsam nisi modi!',
      hide: true
    },
    {
      title: 'Section 3',
      content:
        'Animi amet cumque sint cupiditate officia ab voluptatibus libero optio et?',
      hide: true
    }
  ]);

  const toggleHide = (index) => {
    const copy = [...sections];
    copy[index].hide = !copy[index].hide;
    return setSections(copy);
  };

  return (
    <main>
      <Accordion sections={sections} toggleHide={toggleHide}></Accordion>
    </main>
  );
}

export default App;
