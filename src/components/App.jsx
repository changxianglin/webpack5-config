import '../styles/index.scss'
import Recipes  from './Recipes';
import sword from '../images/swc-sword.png'
import swordSvg from '../images/sword.svg'

const App = () => {
  return (
    <>
      <section className='hero'></section>
      <main>
        <section>
          <h1>Oh hai React!</h1>
        </section>
      </main>
      <img src={sword} alt="sword" width="250" />
      <img src={swordSvg} ali="swordSvg" width="250" />
      <Recipes />
    </>
  )
}

export default App;