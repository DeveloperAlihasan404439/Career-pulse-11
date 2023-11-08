import { useQuery } from "@tanstack/react-query";

const useMyBids = () => {
    const { data, isLoading, refetch } = useQuery({
        queryKey: ["mybids"],
        queryFn: async () => {
          const catagoresData = await fetch('http://localhost:5000/myBids');
          const catagorys = await catagoresData.json();
          return catagorys;
        },
      });
    return {data, isLoading, refetch};
};

export default useMyBids;