import Product from "./Product";
import "./css/Home.css";

function Home() {
  return (
    <div className="home">
      <div className="home_container">
        <img
          className="home_image"
          src="https://images-eu.ssl-images-amazon.com/images/G/31/img23/Fashion/GW/July/Apay/Deals-Unrec-PC-1500_2._CB598748121_.jpg"
          alt="banner"
        />

        <div className="home_row">
          <Product
            id="98468438768"
            title="Lean Startup: The Million Copy Bestseller Driving Entrepreneurs to Success"
            price={29.99}
            image="https://m.media-amazon.com/images/I/51T-sMqSMiL._SY264_BO1,204,203,200_QL40_FMwebp_.jpg"
            rating={3}
          />

          <Product
            id="9853168"
            title="Rossmann Professional 1600 Watts Stand Mixer, 100% Pure Copper Motor, 4 Safety Features, Metal Gears & Planetary Rotation, 6 Lit SS Bowl, Teflon Coated Accessories, 2 Years Warranty, Black"
            price={229.99}
            image="https://m.media-amazon.com/images/I/61oHdFNlkVL._AC_UY218_.jpg"
            rating={4}
          />
        </div>
        <div className="home_row">
          <Product
            id="54817849653"
            title="Samsung 27-inches 68.46cm 2560 X 1440 (WQHD) Pixels Odyssey G5 Gaming, Ultra WQHD, 144 Hz, 1ms, 1000R Curved Monitor, QLED, AMD FreeSync Premium LC27G55TQWWXXL, Black"
            price={899.99}
            rating={5}
            image="https://m.media-amazon.com/images/I/81cSdJuBbFL._AC_UY218_.jpg"
          />

          <Product
            id="98"
            title="Amazon Echo (3rd Generation) | Smart speaker with Alexa, Charcoal Fabric"
            price={99.99}
            rating={5}
            image="https://m.media-amazon.com/images/I/61MbLLagiVL._AC_UY218_.jpg"
          />

          <Product
            id="659"
            title="New Apple iPad Pro(12.9-incg,Wi-Fi,128GB) - Silver (4th Generation)"
            price={799.99}
            rating={4}
            image="https://m.media-amazon.com/images/I/81gC7frRJyL._AC_UY218_.jpg"
          />
        </div>
        <div className="home_row">
          <Product
            id="7963586"
            title="ASIAN Men's Synthetic Sports,Running,Casual Loafer Shoes for Boy's"
            price={199.99}
            rating={5}
            image="https://m.media-amazon.com/images/I/51dtEUJ0gbL._AC_SY200_.jpg"
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
