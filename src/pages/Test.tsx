import useStore from "../store/useAuthStore";

const products = [
  { id: 1, name: "Product 1", price: 10 },
  { id: 2, name: "Product 2", price: 20 },
  { id: 3, name: "Product 3", price: 30 },
  { id: 4, name: "Product 4", price: 25 },
  { id: 5, name: "Product 5", price: 50 },
];

const Test = () => {
  const { addItem } = useStore();
  return (
    <>
      <div>
        <h2>Products</h2>
        <div className="bg-blue-300 p-6">
          {products.map((product) => (
            <div key={product.id} className="bg-cyan-50 gap-4 flex py-4 px-2">
              <span>
                {product.name} - ${product.price}
              </span>
              <button
                className="border px-3 py-1 rounded cursor-pointer hover:bg-gray-300"
                onClick={() => addItem({ ...product, quantity: 1 })}
              >
                Add to Cart
              </button>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Test;
