import Header from '../../components/Header';
import Hello from '../../components/Hello';
import Footer from '../../components/Footer';

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
      <Header />
      <main className="page-home">
        <Hello />
        Page: Home
      </main>
      <Footer />
    </>
  );
}
