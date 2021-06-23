import React, { useState, useContext } from 'react';
import Link from 'next/link'
import { store } from '../../context/store';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faCalendarAlt,
  faChartBar,
  faFolder,
  faFolderOpen,
  faAlignJustify,
} from '@fortawesome/free-solid-svg-icons';


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
      <nav className="navbar">
        {' '}
        <FontAwesomeIcon
          className="navbar__icon"
          icon={faAlignJustify}
          onClick={handleDrawer}
        >
          menu
        </FontAwesomeIcon>
      </nav>
      <aside className={drawerClass.join(' ')}>
        <ul>
        <Link href="/">
          <li>
            <FontAwesomeIcon className="navIcon" icon={faFolderOpen} />
            <span>Folder</span>
          </li>
          </Link>
          <Link href="/statistics">
          <li>
            <FontAwesomeIcon className="navIcon" icon={faChartBar} />
            <span>Statistics</span>
          </li>
          </Link>
          <Link href="/calendar">
          <li>
            <FontAwesomeIcon className="navIcon" icon={faCalendarAlt} />
            <span>Calendar</span>
          </li>
          </Link>
        </ul>
      </aside>
    </div>
  );
};
export default leftNavLayout;
