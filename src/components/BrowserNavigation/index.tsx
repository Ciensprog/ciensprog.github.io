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
        <div className="reload ml-auto">
          <SvgIcon name="reload" />
        </div>
      </div>
      <div className="menu-dots ml-auto rounded">
        <span />
        <span />
        <span />
      </div>
    </section>
  );
}