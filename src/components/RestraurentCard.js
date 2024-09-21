import { useContext } from "react";
import { Link } from "react-router-dom";
import UserContext from "../utils/UserContext";

const RestraurentCard = (props) => {
  const { resData } = props;
  const { loggedInUser } = useContext(UserContext);

  const { id, cloudinaryImageId, name, avgRating } = resData?.info;
  return (
    <Link to={`/restaurants/${id}`} className="m-3">
      <div className="  hover:bg-orange-200 min-h-[285px] max-h-[300px] overflow-hidden p-1 w-[200] border-[1px] border-[solid] border-[gray] rounded-lg">
        <img
          className="rounded-lg"
          src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/${cloudinaryImageId}`}
          alt="img"
        />
        <h4 className="font-bold ">{name}</h4>
        <h5>{avgRating} star</h5>
        <h5 className="font-bold text-sm text-blue-300">
          User: {loggedInUser}
        </h5>
      </div>
    </Link>
  );
};

export default RestraurentCard;
