import React from "react";
import "./Home.css";
import Product from "./Product";

function Home() {
  return (
    <div className="home">
      <div className="home__container">
        <img
          className="home__image"
          src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
          alt=""
        />
        <div className="home__row">
            <Product
                id="90829332"
                title="Elgato Cam Link 4K — Broadcast Live, Record via DSLR, Camcorder, or Action Cam, 1080p60 or 4K at 30 Fps, Compact HDMI Capture Device, USB 3.0"
                price={105}
                rating={4}
                image="https://m.media-amazon.com/images/I/61pWBRbG98L._AC_UY218_.jpg"
            />
            <Product
                id="90829332"
                title="Asus AM4 TUF Gaming X570-Plus (Wi-Fi) AM4 Zen 3 Ryzen 5000 & 3rd Gen Ryzen ATX Motherboard With PCIe 4.0, Dual M.2, 12+2 With Dr. MOS power stage, USB 3.2 Gen 2 And Aura Sync RGB lighting"
                price={144.99}
                rating={4}
                image="https://m.media-amazon.com/images/I/91rZkdZy3VL._AC_UY218_.jpg"
            />
            <Product
                id="90829332"
                title="Corsair Vengeance RGB Pro 32GB (2x16GB) DDR4 3200 (PC4-25600) C16 Desktop Memory - Black"
                price={134}
                rating={5}
                image="https://m.media-amazon.com/images/I/81EEpt-xy0L._AC_UY218_.jpg"
            />
        </div>

        <div className="home__row">

            <Product
                id="12321341"
                title="The Lean Startup: How Constant Innovation Creates Radically Successful Businesses Paperback"
                price={29.99}
                image="https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._AC_SY400_.jpg"
                rating={5}
            />
            <Product
                id="49538094"
                title="Kenwood kMix Stand Mixer for Baking, Stylish Kitchen mixer with K-beater, Dough Hook and
                    Whisk, 5 Litre Glass Bowl"
                price={239.0}
                rating={4}
                image="https://images-na.ssl-images-amazon.com/images/I/81O%2BGNdkzKL._AC_SX450_.jpg"
            />
        </div>

        <div className="home__row">
            <Product
                id="4903850"
                title="Samsung LC49RG90SSUXEN 49' Curved LED Gaming Monitor"
                price={199.99}
                image="https://images-na.ssl-images-amazon.com/images/I/71Swqqe7XAL._AC_SX466_.jpg"
                rating={3}
            />
            <Product
                id="23445930"
                title="Amazon Echo (3rd generation) | Smart speaker with Alexa, Charcol Fabric"
                price={98.99}
                image="https://5.imimg.com/data5/XQ/CM/RW/SELLER-82344205/amazon-echo-plus-500x500.jpg"
                rating={5}
            />
            <Product
                id="3254354345"
                title="New Apple iPad Pro (12.9-inch, Wi-Fi, 128GB) - Silver (4th Generation)"
                price={598.99}
                rating={4}
                image="https://images-na.ssl-images-amazon.com/images/I/816ctt5WV5L._AC_SX385_.jpg"
            />
        </div>

        <div className="home__row">
            <Product
                id="90829332"
                title="Samsung LC49RG90SSUXEN 49' Curved LED Gaming Monitor - Super Ultra Wide Dual WQHD 5120 x 1440"
                price={1094.98}
                rating={4}
                image="https://images-na.ssl-images-amazon.com/images/I/6125mFrzr6L._AC_SX355_.jpg"
            />
        </div>
        <div className="home__row">
            <Product
                id="90829332"
                title="Apple AirPods Pro"
                price={183.08}
                rating={5}
                image="https://m.media-amazon.com/images/I/71zny7BTRlL._AC_UY218_.jpg"
            />
            <Product
                id="90829332"
                title="TOZO T10 Bluetooth 5.0 Wireless Earbuds with Wireless Charging Case IPX8 Waterproof TWS Stereo Headphones in Ear Built in Mic Headset Premium Sound with Deep Bass for Sport Black"
                price={28}
                rating={5}
                image="https://m.media-amazon.com/images/I/71Hy1JKI4+L._AC_UY218_.jpg"
            />
            <Product
                id="90829332"
                title="Mpow CH6S Kids Headphones with Microphone Over-Ear/On-Ear, HD Sound Sharing Function Headphones for Children Boys Girls, Volume Limited Safe 85dB/94dB Foldable Headset w/Mic"
                price={11}
                rating={5}
                image="https://m.media-amazon.com/images/I/71tuneVA4hL._AC_UY218_.jpg"
            />
        </div>
        <div className="home__row">
            <Product
                id="90829332"
                title="COWIN E7 Active Noise Cancelling Headphones Bluetooth Headphones with Microphone Deep Bass Wireless Headphones Over Ear, Comfortable Protein Earpads, 30 Hours Playtime for Travel/Work, Black"
                price={45}
                rating={5}
                image="https://m.media-amazon.com/images/I/41WzHq0SkRL._AC_UY218_.jpg"
            />
            <Product
                id="90829332"
                title="VicTsing MM057 2.4G Wireless Mouse Portable Mobile Optical Mouse with USB Receiver, 5 Adjustable DPI Levels, 6 Buttons for Notebook, PC, Laptop, Computer, Macbook - Black"
                price={9}
                rating={5}
                image="https://m.media-amazon.com/images/I/71gK7VlDnGL._AC_UY218_.jpg"
            />
        </div>
        <div className="home__row">
            <Product
              id="90829332"
              title="Roam Universal Premium Bike Phone Mount for Motorcycle - Bike Handlebars, Adjustable, Fits iPhone 11, X, XR, 8 | 8 Plus, 7 | 7 Plus, 6s Plus | Galaxy, S10, S9, S8, Holds Phones Up to 3.5 Wide"
              price={17}
              rating={5}
              image="https://m.media-amazon.com/images/I/713fujBvS9L._AC_UY218_.jpg"
            />
            <Product
              id="90829332"
              title="Mpow 071 USB Headset/ 3.5mm Computer Headset with Microphone Noise Cancelling, Lightweight PC Headset Wired Headphones, Business Headset for Skype, Webinar, Cell Phone,"
              price={30}
              rating={4}
              image="https://m.media-amazon.com/images/I/613HP9LCCsL._AC_UY218_.jpg"
            />
            <Product
              id="90829332"
              title="Jelly Comb 2.4G Slim Wireless Mouse with Nano Receiver MS001 (Black and Gold)"
              price={7.97}
              rating={4}
              image="https://m.media-amazon.com/images/I/61lB0Ugp4aL._AC_UY218_.jpg"
            />
        </div>
        <div className="home__row">
            <Product
                id="90829332"
                title="ASUS F512JA-AS34 VivoBook 15 Thin And Light Laptop, 15.6” FHD Display, Intel i3-1005G1 CPU, 8GB RAM, 128GB SSD, Backlit Keyboard, Fingerprint, Windows 10 Home in S Mode, Slate Gray"
                price={496.90}
                rating={4}
                image="https://m.media-amazon.com/images/I/81fstJkUlaL._AC_UY218_.jpg"
            />
        </div>
      </div>
    </div>
  );
}

export default Home;
