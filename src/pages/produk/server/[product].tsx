import DetailProduk from "../../../views/DetailProduct";
import { ProductType } from "@/types/Product.type";

// Halaman detail produk dengan Server-Side Rendering (SSR)
const HalamanProdukServer = ({ product }: { product: ProductType }) => {
  return (
    <div>
      <h1>Detail Produk - SSR</h1>
      <DetailProduk products={product} />
    </div>
  );
};

export default HalamanProdukServer;

export async function getServerSideProps({ params }: { params: { product: string } }) {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/produk/${params?.product}`);
  const response: { data: ProductType } = await res.json();

  return {
    props: {
      product: response.data,
    },
  };
}
