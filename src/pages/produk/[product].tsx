import fetcher from "@/utils/swr/fetcher";
import { useRouter } from "next/router";
import useSWR from "swr";
import DetailProduk from "../../views/DetailProduct";
import { ProductType } from "@/types/Product.type";

// Halaman detail produk dengan Client-Side Rendering (CSR)
const HalamanProduk = () => {
  const { query } = useRouter();
  const productParam = query.product;
  const productId = Array.isArray(productParam) ? productParam[0] : productParam;

  const { data, error, isLoading } = useSWR<{ data: ProductType }>(
    productId ? `/api/produk/${productId}` : null,
    fetcher,
  );

  if (!productId) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Gagal memuat data produk.</div>;
  }

  if (!data || isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <DetailProduk products={data.data} />
    </div>
  );
};

export default HalamanProduk;