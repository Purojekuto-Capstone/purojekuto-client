import {
  faCalendarAlt,
  faChartBar,
  faFolder,
  faFolderOpen,
  faAlignJustify,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';
import { store } from '../../context/store';
import { useContext } from 'react';

const leftNavLayout = () => {
  const [drawerPos, SetDrawerPos] = useState(1);
  const { dispatch } = useContext(store);

  const handleDrawer = () => {
    if (drawerPos < 2) {
      SetDrawerPos(drawerPos + 1);
      dispatch({ type: 'MAIN_TRIGGER', payload: 'mainOpen' });
    } else {
      SetDrawerPos(1);
      dispatch({ type: 'MAIN_TRIGGER', payload: 'mainMin' });
    }
  };

  let drawerClass = [];

  if (drawerPos === 1) {
    drawerClass.push('drawerMin');
  } else if (drawerPos === 2) {
    drawerClass.push('drawerOpen');
  } else {
    drawerClass = [];
  }

  return (
    <div>
      <navbar className="navbar">
        {' '}
        <FontAwesomeIcon
          className="navbar__icon"
          icon={faAlignJustify}
          onClick={handleDrawer}
        >
          menu
        </FontAwesomeIcon>
      </navbar>
      <aside className={drawerClass.join(' ')}>
        <ul>
          <li>
            <FontAwesomeIcon className="navIcon" icon={faFolderOpen} />
            <span>Folder</span>
          </li>
          <li>
            <FontAwesomeIcon className="navIcon" icon={faChartBar} />
            <span>Statistics</span>
          </li>
          <li>
            <FontAwesomeIcon className="navIcon" icon={faCalendarAlt} />
            <span>Calendar</span>
          </li>
        </ul>
      </aside>
    </div>
  );
};
export default leftNavLayout;
