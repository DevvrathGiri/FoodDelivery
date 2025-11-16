import { CDN_URL } from '../utils/constants';
type RestaurantCardProps = {
  resData: {
    cloudinaryImageId: string;
    name: string;
    cuisines: string[];
    avgRating: string;
    costForTwo: number;
    deliveryTime: number;
  };
};

const RestaurantCard = ({resData}:RestaurantCardProps) => {
   

    const {
        cloudinaryImageId,
        name,
        cuisines,
        avgRating,
        costForTwo,
        deliveryTime,
    } = resData;

    return (
        <div
            className="res-card"
            style={{
                backgroundColor: '#f0f0f0',
            }}
        >
            <img
                className="res-logo"
                src={CDN_URL + cloudinaryImageId}
                alt="Biryani"
            />

            <h3>{name}</h3>
            <h4>{cuisines.join(', ')}</h4>
            <h4>{avgRating} stars</h4>
            <h4>₹{costForTwo / 100} FOR TWO</h4>
            <h4>{deliveryTime} minutes</h4>
        </div>
    );
};

export default RestaurantCard;
