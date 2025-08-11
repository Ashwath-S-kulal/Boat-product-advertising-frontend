import Header from './components/Header';
import Home from './Pages/Home';
import Features from './Pages/Features';
import About from './Pages/About';
import Review from './Pages/Review';
import Related from './Pages/Related';
import Footer from './components/Footer';

function App() {
  
  return (
    <div className='h-screen'>
      <Header />
      <section id='home'>
        <Home/>
      </section>
      <section id='features'>
        <Features/>
      </section>
      <section id='about'>
        <About/>
      </section>
      <section id='review'>
        <Review/>
      </section>
      <section id='related'>
        <Related/>
      </section>
      <section id='footer'>
        <Footer/>
      </section>
    </div>
  );
}

export default App;
