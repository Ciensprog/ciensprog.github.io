import BrowserNavigation from '../../components/BrowserNavigation';
import Hello from '../../components/Hello';

/*
|--------------------------------------------------------------------------
| Page
|--------------------------------------------------------------------------
|
| ...
|
*/

export default function Home() {
  return (
    <>
      <main className="page-home page-extend">
        <BrowserNavigation />
        <Hello />
      </main>
    </>
  );
}
