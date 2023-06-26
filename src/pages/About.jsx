import '../styles/about.css'
import aboutpizza from '../assets/aboutpizza.jpg'

const About = () => {
  return (
    <div className='about-container'>
      <div
        className='about-image'
        style={{ backgroundImage: `url(${aboutpizza})` }}
      ></div>
      <div className='about-text'>
        <h1>About us</h1>
        <p>
          Pizza is the world favourite fast food. We eat it everywhere at home,
          in restaurants, on street corners. Some three billion pizzas are sold
          each year in the United States alone, an average of 46 slices per
          person. But the story of how the humble pizza came to enjoy such
          global dominance reveals much about the history of migration,
          economics and technological change.
        </p>
      </div>
    </div>
  )
}

export default About
