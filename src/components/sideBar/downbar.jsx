import React, { useEffect, useContext, useState } from 'react';
import { store } from '../../context/store';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faCalendarAlt,
  faChartBar,
  faFolder,
  faFolderOpen,
  faAlignJustify,
  faSignOutAlt,
} from '@fortawesome/free-solid-svg-icons';
import { getUserInfo } from '../../utils/services';

const downbar = () => {
  const { dispatch, state } = useContext(store);
  const [user, setUser] = useState(null);
  const { theme, token } = state;
  const config = {
    headers: { Authorization: `Bearer ${token}` },
  };

  useEffect(() => {
    getUserInfo(config)
      .then((res) => {
        setUser(res);
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);

  return (
    <footer className="footer">
      <Link href="/">
        <div>
          <FontAwesomeIcon className="navIcon" icon={faFolderOpen} />
        </div>
      </Link>
      <Link href="/statistics">
        <div>
          <FontAwesomeIcon className="navIcon" icon={faChartBar} />
        </div>
      </Link>
      <div>
        <FontAwesomeIcon className="navIcon" icon={faSignOutAlt} />
      </div>

      <div>
        <img
          className="profilePicture"
          src={user ? user.picture : ''}
          alt={user ? user.name : ''}
        />
      </div>
    </footer>
  );
};

export default downbar;
