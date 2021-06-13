import React from 'react';

const headerLayout = () => {
  return (
    <header className="layout__header">
      <div>
      <h1 className="layout__header--logo"><strong>^_^Puro</strong>jecuto</h1>
      </div>
      
      <nav >
        <ul className="nav">
          <li>📀</li>
          <li>🔉</li>
          <li>😎</li>
          <li>Username</li>
        </ul>
      </nav>
    </header>
  );
};
export default headerLayout;
