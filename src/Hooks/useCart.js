import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";

const useCart = () => {
  const { user } = useAuth();
  const token = localStorage.getItem("access-token");

  const { refetch, data: cart = [] } = useQuery({
    queryKey: ["carts", user?.email],
    queryFn: async () => {
      const res = await fetch(
        `https://hungry-place-restaurant-server.vercel.app/carts?email=${user?.email}`,
        {
          headers: { authorization: `Bearer ${token}` },
        }
      );

      return res.json();
    },
  });

  return [cart, refetch];
};
export default useCart;
