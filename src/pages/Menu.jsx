import '../styles/menu.css'
import { menuList } from '../helper/menuList'
const Menu = () => {
  return (
    <div className='menu-container'>
      <div className='menu-tittle'>
        <h1>Our Menu</h1>
      </div>
      <div className='menu-list'>
        {menuList.map((menus) => {
          const { id, img, name, price } = menus
          return (
            <div className='menu-item' key={id}>
              <img src={img} alt='pizza-img' />
              <h2>{name}</h2>
              <p>Nrs{price}</p>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default Menu
