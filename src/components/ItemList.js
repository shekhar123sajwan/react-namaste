const ItemList = ({ items }) => {
  return (
    <div>
      <div>
        {items.map((item) => {
          return (
            <div
              className=" text-left border-b-2 p-2 m-2 border-gray-50"
              key={item.card.info.id}
            >
              <div className="">
                <span>{item.card.info.name}</span>
                <span> Rs. {item.card.info.price / 100}</span>
              </div>
              <p className="py-1  font-bold text-sm border-b-2">
                {item.card.info.description}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
};
export default ItemList;
