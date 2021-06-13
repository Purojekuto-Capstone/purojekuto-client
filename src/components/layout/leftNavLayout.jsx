import { faCalendarAlt, faChartBar, faFolder, faFolderOpen } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

const leftNavLayout = () => {
  return (
    <nav className="layout__leftNav">
      <ul>
        <li><FontAwesomeIcon icon={faFolderOpen}/></li>
        <li><FontAwesomeIcon icon={faChartBar}/></li>
        <li><FontAwesomeIcon icon={faCalendarAlt}/></li>
      </ul>
    </nav>
  );
};
export default leftNavLayout;
