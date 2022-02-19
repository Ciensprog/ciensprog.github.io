import BrowserNavigation from '../BrowserNavigation';

import { developer } from '../../data';

import './styles.scss';

/*
|--------------------------------------------------------------------------
| Component
|--------------------------------------------------------------------------
|
| ...
|
*/

export default function Header() {
  return (
    <>
      <header className="main-header bg-grape">
        <div className="controls flex">
          <span className="control close bg-strawberry"></span>
          <span className="control minimize bg-banana"></span>
          <span className="control maximize bg-apple"></span>
        </div>
        <section className="editor font-bold">
          <div className="editor-line" />
          <div className="editor-line">
            <span className="property-class-name text-strawberry">Profile</span>
            <span className="property-dot text-editor-dot">.</span>
            <span className="property-method text-pitahaya">setFullname(</span>
            <span className="property-text text-banana">'{developer.name}'</span>
            <span className="property-method text-pitahaya">);</span>
          </div>
          <div className="editor-line add-dot-error">
            <span className="property-class-name text-strawberry">Profile</span>
            <span className="property-dot text-editor-dot">.</span>
            <span className="property-method text-pitahaya">setPosition(</span>
            <span className="property-text text-banana">'{developer.position}'</span>
            <span className="property-method with-error-semicolon text-pitahaya">)</span>
          </div>
          <div className="editor-line" />
        </section>
      </header>
      <BrowserNavigation />
    </>
  );
}
