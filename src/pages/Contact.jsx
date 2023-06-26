import '../styles/contact.css'
import pizzaleft from '../assets/pizzaLeft.jpg'

const Contact = () => {
  return (
    <div className='contact'>
      <div
        className='left-side-contact'
        style={{ backgroundImage: `url(${pizzaleft})` }}
      ></div>
      <div className='right-side-contact'>
        <h1>Contact us</h1>
        <form id='contact-form' method='form'>
          <label htmlFor='name'>Full Name</label>
          <input name='name' placeholder='Enter your Full Name ' type='text' />
          <label htmlFor='email'>Email</label>
          <input name='email' placeholder='Enter your Email ' type='email' />
          <label htmlFor='message'>Message</label>
          <textarea
            rows='6'
            placeholder='Enter Message'
            name='message'
            required
          ></textarea>
          <button className='send-btn' type='submit'>
            Send Message
          </button>
        </form>
      </div>
    </div>
  )
}

export default Contact
