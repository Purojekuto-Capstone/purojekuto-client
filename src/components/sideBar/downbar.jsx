import React from 'react'
import Link from 'next/link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faCalendarAlt,
  faChartBar,
  faFolder,
  faFolderOpen,
  faAlignJustify,
} from '@fortawesome/free-solid-svg-icons';

const downbar = () => {
    return (
        <footer >
        <ul>
        <Link href="/">
          <li>
            <FontAwesomeIcon className="navIcon" icon={faFolderOpen} />
          </li>
          </Link>
          <Link href="/statistics">
          <li>
            <FontAwesomeIcon className="navIcon" icon={faChartBar} />

          </li>
          </Link>
          <Link href="/calendar">
          <li>
            <FontAwesomeIcon className="navIcon" icon={faCalendarAlt} />
          </li>
          </Link>
        </ul>
      </footer>
    )
}

export default downbar
