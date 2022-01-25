import React from 'react'
import "./Home.css"
import Product from './Product'

function Home() {
  return (
    <div className='home'>
      <img className='home_image' src='https://rukminim1.flixcart.com/flap/1800/1800/image/633bb8d337305dba.jpg?q=80' alt='' />

      <div className='home_row'>
        <Product
          id='50PUT7605/94'
          title="APPLE iPhone 12 Mini (White, 64 GB) 12MP TrueDepth Front Camera with Night Mode, 4K Dolby Vision HDR Recording"
          price={2530}
          rating={4}
          image='https://rukminim1.flixcart.com/image/416/416/kg8avm80/mobile/d/g/b/apple-iphone-12-mini-dummyapplefsn-original-imafwgbfhfevaajh.jpeg?q=70'
        />
        <Product
          id='50PUT7605/94'
          title="PHILIPS 7600 Series 126 cm (50 inch) Ultra HD (4K) LED Smart TV "
          price={230}
          rating={5}
          image='https://rukminim1.flixcart.com/image/416/416/kqqykcw0/mobile/j/5/7/galaxy-f22-sm-e225flbdins-samsung-original-imag4z99fp4qdfby.jpeg?q=70'
        />
      </div>
      <div className='home_row'>
        <Product
          id='50PUT7605/94'
          title="
          Introducing Blink Video Doorbell | Two-way audio, HD video, motion and chime app alerts, and Alexa enabled — wired or wire-free (Black) "
          price={60}
          rating={5}
          image='https://m.media-amazon.com/images/I/41te-uzWxDL._SL1000_.jpg'
        />
        <Product
          id='50PUT7605/94'
          title="All-new Echo Dot (4th Gen) | Smart speaker with Alexa | Charcoal "
          price={80}
          rating={3}
          image='https://m.media-amazon.com/images/I/71fnXKyRa4L._AC_UL320_.jpg'
        />
        <Product
          id='50PUT7605/94'
          title="Apple AirPods with Charging Case Bluetooth Headset with Mic  (White, True Wireless) "
          price={190}
          rating={4}
          image='https://rukminim1.flixcart.com/image/416/416/kpinwy80/headphone/x/r/e/mmef2hn-a-apple-original-imag3qe9hphsevrt.jpeg?q=70'
        />
      </div>
      <div className='home_row'>
        <Product
          id='50PUT7605/94'
          title="
          Sony A80J 65 inch BRAVIA XR OLED 4K Ultra HD HDR Smart Google TV with Dolby Vision & Atmos (XR65A80J) "
          price={1560}
          rating={5}
          image='https://www.sony.ca/image/470f7a084863d7314d94b7df60f7362e?fmt=pjpeg&wid=1014&hei=396&bgcolor=F1F5F9&bgc=F1F5F9'
        />
      </div>
    </div>
  )
}

export default Home
