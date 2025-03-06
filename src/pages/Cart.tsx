// import useStore from "../store/store";

const Cart = () => {
//   const { items, removeItem, clearItem, getTotal, updateQuantity } = useStore();

  return (
    <div>
      <h2>Shopping Cart</h2>
      {items.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        <div>
          <ul className="flex flex-col gap-3">
            {items.map((item) => (
              <li key={item.id}>
                <span>{item.name}</span>
                <span> - ${item.price}</span>
                <span> - Quantity: </span>
                <input
                  className="border rounded px-3 py-1"
                  type="number"
                  value={item.quantity}
                  onChange={(e) => updateQuantity(item.id, + e.target.value)}
                  min="1"
                />
                <button
                  className="border px-3 py-1 ml-3 rounded cursor-pointer hover:bg-gray-300"
                  onClick={() => removeItem(item.id)}
                >
                  Remove
                </button>
              </li>
            ))}
          </ul>
          <div>
            <p>Total: $ {getTotal()}</p>
            <button
              className="border px-3 py-1 rounded cursor-pointer hover:bg-gray-300"
              onClick={clearItem}
            >
              Clear Cart
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
