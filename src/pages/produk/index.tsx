import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import TampilanProduk from "../../views/product";
import useSWR from "swr";
import fetcher from "../../utils/swr/fetcher";

const kategori = () => {
  // const [isLogin, setIsLogin] = useState(false);
  const { push } = useRouter();
  const [products, setProducts] = useState([]);
  // console.log("products:", products);
  // useEffect(() => {
  //   if (!isLogin) {
  //     push("/auth/login");
  //   }
  // },[]);

  const { data , error, isLoading} = useSWR("/api/produk", fetcher);
  

  return (
    <div>
      <TampilanProduk products={isLoading ? [] : data?.data} />
    </div>
  );
};

export default kategori;