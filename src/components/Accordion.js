import React from 'react';

const Accordion = ({ sections, toggleHide }) => {
  const handleToggle = (index) => {
    return toggleHide(index);
  };

  return (
    <div>
      <h1>Accordion</h1>
      <ul>
        {sections.map((section, i) => (
          <li key={i}>
            <button onClick={() => handleToggle(i)}>{section.title}</button>
            <p>{!section.hide ? section.content : null}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Accordion;
