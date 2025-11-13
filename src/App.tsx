import ReactDOM from "react-dom/client";

//Heading component:
//   -Logo
//   -Home, About, Cart

const Heading = () => {
  return (
    <div className="heading">
      <div>
        <img
          className="logo"
          src="https://tse3.mm.bing.net/th/id/OIP._SxXgkQcDfZbB6rrIqoLPwHaF7?pid=Api&P=0&h=180"
        />
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};

//Body Compoinent
// <div>
//  -search
// <div/>
//
// <div>
//  -res-container
//    -res-card
//      -res-logo
//      -res-name
//      -cusinies
//      -ratings
//      -Delivey time
// <div/>

const RestaurantCard = () => {
  return ( 
    <div className="res-card">
      <img
        className="res-logo"
        alt="res-logo"
        src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/RX_THUMBNAIL/IMAGES/VENDOR/2025/5/29/8e4e013f-7c31-4c7b-b3e4-4c734008b775_25397.jpg"
      />
      <h4>Oven Story Pizza</h4>
      <h4>Italian</h4>
      <h4>4.2</h4>
      <h4>30 Minutes</h4>
    </div>
  );
};

const Body = () => {
  return (
    <div className="body">
      <div className="search">search</div>
      <div className="res-container">
        <RestaurantCard />
        <RestaurantCard />
        <RestaurantCard />
        <RestaurantCard />
        <RestaurantCard />
        <RestaurantCard />
        <RestaurantCard />
        <RestaurantCard />
        <RestaurantCard />
        <RestaurantCard />
        <RestaurantCard />
        <RestaurantCard />
        <RestaurantCard />
        <RestaurantCard />
        <RestaurantCard />
        <RestaurantCard />
      </div>
    </div>
  );
};

const AppLayout = () => {
  return (
    <div className="app">
      <Heading />
      <Body />
    </div>
  );
};

export default AppLayout;

const root = ReactDOM.createRoot(document.getElementById("root")!);
root.render(<AppLayout />);
