// import { create } from "zustand";
// import { createJSONStorage, persist } from "zustand/middleware";

// type CartItem = {
//   id: number;
//   name: string;
//   price: number;
//   quantity: number;
// };

// type CartStore = {
//   items: CartItem[];
//   addItem: (item: CartItem) => void;
//   removeItem: (id: number) => void;
//   clearItem: () => void;
//   getTotal: () => number;
//   updateQuantity: (id: number, quantity: number) => void;
// };

// const useStore = create<CartStore>()(
//   persist(
//     (set, get) => ({
//       items: [],
//       addItem: (item) =>
//         set((state) => {
//           const existingItem = state.items.find((cart) => cart.id === item.id);
//           if (existingItem) {
//             return {
//               items: state.items.map((cart) =>
//                 cart.id === item.id
//                   ? { ...cart, quantity: cart.quantity + item.quantity }
//                   : cart
//               ),
//             };
//           }
//           return {
//             items: [...state.items, item],
//           };
//         }),
//       removeItem: (id) =>
//         set((state) => {
//           return {
//             items: state.items.filter((cart) => cart.id !== id),
//           };
//         }),
//       clearItem: () => set({ items: [] }),
//       getTotal: () => {
//         const state = get();
//         return state.items.reduce(
//           (total, cart) => (total + cart.price) * cart.quantity,
//           0
//         );
//       },
//       updateQuantity: (id, quantity) =>
//         set((state) => {
//           return {
//             items: state.items.map((cart) =>
//               cart.id === id ? { ...cart, quantity } : cart
//             ),
//           };
//         }),
//     }),
//     {
//       name: "shoping-cart",
//       storage: createJSONStorage(() => sessionStorage),
//     }
//   )
// );
// export default useStore;

import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";

type AuthStore = {
  accessToken: string | null;
  refreshToken: string | null;
  setAccessToken: (token: string) => void;
  setRefreshToken: (token: string) => void;
  logout: () => void;
  // login:()=>void
  // logout:()=>void
};

const useAuthStore = create<AuthStore>()(
  persist(
    (set) => ({
      accessToken: null,
      refreshToken: null,
      setAccessToken: (token) => set({ accessToken: token }),
      setRefreshToken: (token) => set({ refreshToken: token }),
      logout: () => set({ accessToken: null, refreshToken: null }),
    }),
    {
      name: "access-token",
      storage: createJSONStorage(() => sessionStorage),
    }
  )
);

export default useAuthStore;
