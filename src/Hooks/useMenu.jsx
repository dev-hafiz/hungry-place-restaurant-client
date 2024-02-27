import { useQuery } from "@tanstack/react-query";

const useMenu = () => {
  // useEffect(() => {
  //   fetch("https://hungry-place-restaurant-server.vercel.app/menu")
  //     .then((res) => res.json())
  //     .then((data) => {
  //       setItems(data);
  //       setLoading(loading);
  //     });
  // }, [loading]);
  const {
    data: items = [],
    isPending: loading,
    refetch,
  } = useQuery({
    queryKey: ["items"],
    queryFn: async () => {
      const res = fetch(
        "https://hungry-place-restaurant-server.vercel.app/menu"
      );
      return (await res).json();
    },
  });

  return [items, loading, refetch];
};

export default useMenu;
