import  React from 'react';
import s from './Navbar.module.css';

/* let s = {
'nav': 'Navbar_nav__cmLd7',
'item': 'Navbar_item__3AlGY'

} */

let c1 = "item";
let c2 = "active";
let classes = c1 + " " + c2;
let classesNew = '${s.item} ${c2}';

const Navbar = () => {
    return  (<nav className={s.nav}>
    <div className={s.item}>
 Profile
    </div>
    
      <div className={'${s.item} ${s.active}'}>
  <a>Messages</a>
      </div>
      <div className={s.item}>
  <a>News</a>
      </div>
      <div className={s.item}>
  <a>Music</a>
      </div> 
      <div className={s.item}>
  <a>Settings</a>
      </div>
    
  </nav>
    )  
}

export default Navbar;