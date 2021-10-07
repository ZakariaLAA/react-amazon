import React from "react";
import "../CSS/Home.css";
import Product from "./Product";
function Home() {
  return (
    <div className="home">
      <div className="home__container">
        <img
          src="https://tbcdn.talentbrew.com/company/3413/v3_0/img/amazondelivers-social-share.jpg"
          className="home__image"
        />

        <div className="home__row">
          <Product
            id="222"
            title="VicTsing MM057 2.4G Wireless Mouse Portable Mobile Optical Mouse with USB Receiver, 5 Adjustable DPI Levels, 6 Buttons for Notebook, PC, Laptop, Computer, Macbook - Black"
            image="https://m.media-amazon.com/images/I/71gK7VlDnGL._AC_UY218_.jpg"
            price={9.99}
            rating={4}
          />
          <Product
            id="223"
            title="HP VH240a 23.8-inch Full HD 1080p IPS LED Monitor with Built-in Speakers and VESA Mounting"
            image="https://images-na.ssl-images-amazon.com/images/I/31PTviHMeUL._AC_US160_.jpg"
            price={101.19}
            rating={4}
          />
        </div>
        <div className="home__row">
          <Product
            id="224"
            title="Roku Express HD Streaming Media Player 2019"
            image="https://images-na.ssl-images-amazon.com/images/I/41A+LoN2W3L._AC_US160_.jpg"
            price={29.0}
            rating={5}
          />
          <Product
            id="225"
            title="Lenovo IdeaPad 3 14 Laptop, 14.0"
            image="https://images-na.ssl-images-amazon.com/images/I/41hCoCHfdjL._AC_US160_.jpg"
            price={449.99}
            rating={5}
          />
          <Product
            id="226"
            title="TP-Link AC1750 Smart WiFi Router - Dual Band Gigabit Wireless "
            image="https://images-na.ssl-images-amazon.com/images/I/415vAIn9uEL._AC_US160_.jpg"
            price={63.04}
            rating={5}
          />
        </div>
        <div className="home__row">
          <Product
            id="227"
            title="Apple iPad (10.2-inch, Wi-Fi, 32GB) - Space Gray (Latest Model)"
            image="https://images-na.ssl-images-amazon.com/images/I/41h0H4SCgPL._AC_US160_.jpg"
            price={329.99}
            rating={5}
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
