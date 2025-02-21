interface ModelProps {
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const Model = ({ setIsOpen }: ModelProps) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-50">
      <div className="bg-white p-6 rounded-lg shadow-lg w-96">
        <h2 className="text-xl font-semibold mb-4">Reset Password</h2>
        <p className="text-gray-600 mb-4">
          Enter your email to receive a reset link.
        </p>
        <input
          type="email"
          placeholder="Email"
          className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <div className="flex justify-end mt-4">
          <button
            onClick={() => setIsOpen(false)}
            className="bg-gray-400 text-white px-4 py-2 rounded-lg hover:bg-gray-500 mr-2"
          >
            Cancel
          </button>
          <button className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600">
            Submit
          </button>
        </div>
      </div>
    </div>
  );
};

export default Model;
