import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";

const useAdmin = () => {
  const { user, loading } = useAuth();
  const { data: isAdmin, isPending: isLoading } = useQuery({
    queryKey: [user?.email, "isAdmin"],
    enabled: !loading,
    queryFn: async () => {
      const res = await fetch(
        `https://hungry-place-restaurant-server.vercel.app/users/admin/${user?.email}`
      );
      return res.json();
    },
  });
  return [isAdmin, isLoading];
};

export default useAdmin;
