import DetailProduk from "../../../views/DetailProduct";
import { ProductType } from "@/types/Product.type";

// Halaman detail produk dengan Static Site Generation (SSG)
const HalamanProdukStatic = ({ product }: { product: ProductType }) => {
  return (
    <div>
      <h1>Detail Produk - SSG</h1>
      <DetailProduk products={product} />
    </div>
  );
};

export default HalamanProdukStatic;

export async function getStaticPaths() {
  const res = await fetch("http://127.0.0.1:3000/api/produk");
  const response: { data: ProductType[] } = await res.json();

  const paths = response.data.map((product) => ({
    params: { product: product.id },
  }));

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }: { params: { product: string } }) {
  const res = await fetch(`http://127.0.0.1:3000/api/produk/${params.product}`);
  const response: { data: ProductType } = await res.json();

  return {
    props: {
      product: response.data,
    },
  };
}
