import { useDispatch } from "react-redux";
import { addItem } from "../utils/cartSlice";

const ItemList = ({ items }) => {
  const dispatch = useDispatch();
  const handleAddItem = (item) => {
    dispatch(addItem(item));
  };

  return (
    <div>
      <div>
        {items.map((item) => {
          return (
            <div
              className="bg-slate-100 flex justify-between items-center text-left border-b-2 p-2 m-2 border-gray-50"
              key={item.card.info.id}
            >
              <div>
                <div>
                  <span>{item.card.info.name}</span>
                  <span> Rs. {item.card.info.price / 100}</span>
                </div>
                <p className="py-1  font-bold text-sm border-b-2">
                  {item.card.info.description}
                </p>
              </div>
              <div className="mx-1">
                <button
                  onClick={() => {
                    handleAddItem(item);
                  }}
                  type="button"
                  className="bg-blue-500 rounded-sm px-2 py-1 text-white text-sm"
                >
                  Add
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
export default ItemList;
