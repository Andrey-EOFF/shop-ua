import React from 'react'

export default function Header() {
  return (
    <header>
          <div className='header'>
              <span className='logo'>Home UA</span>
              <div className='nav'>
              <ul className='nav-list'>
                  <li className='nav-item'>Про нас</li>
                  <li className='nav-item'>Контакти</li>
                  <li className='nav-item'>Кабінет</li>
              </ul>
              </div>
          </div>
          <div className='presentation'></div>
    </header>
  )
}
