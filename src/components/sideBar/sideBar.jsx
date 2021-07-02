import React, { useState, useContext } from 'react';
import Link from 'next/link'
import {useRouter} from 'next/router';
import { store } from '../../context/store';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import {
  faCalendarAlt,
  faChartBar,
  faFolder,
  faFolderOpen,
  faAlignJustify,
  faSignOutAlt,
} from '@fortawesome/free-solid-svg-icons';


const leftNavLayout = () => {
  const [drawerPos, SetDrawerPos] = useState(1);
  const { dispatch } = useContext(store);
  const router = useRouter()

  const handleDrawer = () => {
    if (drawerPos < 2) {
      SetDrawerPos(drawerPos + 1);
      dispatch({ type: 'MAIN_TRIGGER', payload: 'mainOpen' });
    } else {
      SetDrawerPos(1);
      dispatch({ type: 'MAIN_TRIGGER', payload: 'mainMin' });
    }
  };
  let HandleSignOut = () => {
    dispatch({ type: 'CLEAN_USER' });
    router.push('/login')
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
          {/* <Link href="/calendar">
          <li>
            <FontAwesomeIcon className="navIcon" icon={faCalendarAlt} />
            <span>Calendar</span>
          </li>
          </Link> */}
          <li className="signout" onClick={() => HandleSignOut()}>
            <FontAwesomeIcon  icon={faSignOutAlt} />
          </li>
        </ul>
      </aside>
    </div>
  );
};
export default leftNavLayout;
