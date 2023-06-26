import '../styles/footer.css'
import { AiFillFacebook } from 'react-icons/ai'
import { AiFillInstagram } from 'react-icons/ai'
import { AiFillTwitterCircle } from 'react-icons/ai'

const Footer = () => {
  return (
    <footer>
      <div className='footer-container'>
        <div className='social-media-icon'>
          <AiFillFacebook />
          <AiFillInstagram />
          <AiFillTwitterCircle />
        </div>
        <p>&copy; 2023PizzaHub.com</p>
      </div>
    </footer>
  )
}

export default Footer
