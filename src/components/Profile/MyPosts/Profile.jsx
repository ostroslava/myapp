import  React from 'react';
import  s from './Profile.module.css';
const Profile = () => {
  return (
  <div className={s.content}>
  <div>
<img src='https://sun9-27.userapi.com/impf/uqo6PRSzPd2x5Qq7USKrN1afNxSz5J7iEYqM4A/hF9VUOS1oWs.jpg?size=605x807&quality=96&sign=213682232704471632fd1e05e3b3af0d&type=album'></img>
   </div>
   <div>
     ava+description
   </div>
   <div>
     my posts
   </div>
   <div>
     new posts
   </div>
  <div className={s.posts}>
   <div className={s.item}>
    1 post
   </div>
   <div className={s.item}>
    2 
   </div>
   </div>
</div>
  )
}
export default Profile;