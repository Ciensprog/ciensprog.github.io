import { MouseEvent } from 'react';

import SvgIcon from '../SvgIcon';

import './styles.scss';

/*
|--------------------------------------------------------------------------
| Component
|--------------------------------------------------------------------------
|
| ...
|
*/

const actionReloadPage = (event: MouseEvent<HTMLAnchorElement>) => {
  event.preventDefault();

  const probability = 35; // Percentage
  const randomNumber = Math.floor(Math.random() * 100);

  if (randomNumber <= probability) {
    window.location.reload();
  }
};

export default function BrowserNavigation() {
  return (
    <section className="browser-navigation bg-white flex items-center justify-center">
      <div className="form flex justify-center items-center ml-auto relative rounded">
        <div className="url-wrapper flex items-center ml-auto">
          <div className="icon">
            <SvgIcon name="lock" />
          </div>
          <div className="text-indicator" />
        </div>
        <a href="#" className="reload cursor-default ml-auto" onClick={actionReloadPage}>
          <SvgIcon name="reload" />
        </a>
      </div>
      <div className="menu-dots ml-auto rounded">
        <span />
        <span />
        <span />
      </div>
    </section>
  );
}