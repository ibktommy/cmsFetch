import HeroImg from '../assets/hero.svg'

const Home = () => {
  return (
    <section className="hero">
      <div className="hero-center">
        <div className="hero-title">
          <h1>contentful CMS</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim eveniet ad tempore ab itaque porro perferendis, ullam magnam ut quidem aliquam amet quos nam asperiores a exercitationem ex quis. Porro, excepturi minima! Cumque, enim tempora.
          </p>
        </div>
        <div className="img-container">
          <img src={HeroImg} alt="hero-img" className='img'/>
        </div>
      </div>
    </section>
  )
}

export default Home