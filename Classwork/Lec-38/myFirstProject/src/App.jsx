import React from 'react'
import LearnJSX from './Components/LearnJSX.jsx'
import TernaryOperator from './Components/TernaryOperator.jsx'
import Person from './Components/Person.jsx'
import Practice from './Components/Practice.jsx'
import Flipkart from './Components/Flipkart.jsx'
import './App.css'
const App = () => {
  return (
<>

{/* <LearnJSX/> */}
{/* <TernaryOperator/> */}
{/* <div className='main_data'>
<Person name="Tushar" age="25" crush="Piggy"/>
<Person name="Kanav" age="23" crush="Swati"/>
<Person name="Ramya" age="22" crush="Raman"/>
</div> */}
{/* <div className='main_data'>
<Practice book="The Haunting of Hill House" author="Shirley Jackson" description="It is the story of four seekers who arrive at a notoriously unfriendly pile called Hill House: Dr. Montague, an occult scholar looking for solid evidence"/>
<Practice book="Misery" author="Stephen King" description="Paul Sheldon. He's a bestselling novelist who has finally met his biggest fan. Her name is Annie Wilkes and she is more than a rabid reader "/>
<Practice book="Mexican Gothic" author="Silvia Moreno-Garcia" description="After receiving a frantic letter from her newly-wed cousin begging for someone to save her from a mysterious doom, Noemí Taboada heads to High Place, a distant house in the Mexican countryside. "/>
</div> */}
<div className='main_card'>
<Flipkart img ="https://images.samsung.com/is/image/samsung/p6pim/in/ua43t5450akxxl/gallery/in-fhd-t5310-428860-ua43t5450akxxl-532972981?$730_584_PNG$" description="Best of QLED TVs" price="₹7,000 Off on Exch"/>
<Flipkart img ="https://www.sony.co.in/image/3d3a90045fd945574b42b191f60f34e6?fmt=pjpeg&wid=165&bgcolor=FFFFFF&bgc=FFFFFF" description="Speakers & Soundbars" price="Shop Now"/>
<Flipkart img ="https://www.titancompany.in/sites/default/files/71OSM91LomL._AC_UY1000__0.png" description="Premium Smart Wearables" price="From ₹2,799"/>
<Flipkart img ="https://m.media-amazon.com/images/I/41VkBk0C3hS.jpg" description="Gamepads" price="From ₹699"/>
<Flipkart img ="https://xtrapowertools.com/site-img/product/16844723521597944911646702203530f.png" description="Power Tools" price="Up to 55% Off"/>
</div>
</>
  )
}
export default App;