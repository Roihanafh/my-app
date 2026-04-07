import { useRouter } from "next/router";
import useSWR from "swr";
import DetailProduk from "../../views/DetailProduct";
import { ProductType } from "@/types/Product.type";
import fetcher from "@/utils/swr/fetcher";
import { GetServerSideProps } from "next";

interface HalamanProdukProps {
  initialData?: { data: ProductType };
}

// Halaman detail produk dengan Server-Side Rendering (SSR) + Client-Side Rendering fallback
const HalamanProduk = ({ initialData }: HalamanProdukProps) => {
  const { query } = useRouter();
  const productParam = query.product;
  const productId = Array.isArray(productParam) ? productParam[0] : productParam;

  const { data, error, isLoading } = useSWR<{ data: ProductType }>(
    productId ? `/api/produk/${productId}` : null,
    fetcher,
    { fallbackData: initialData },
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

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { product } = context.params!;
  const productId = Array.isArray(product) ? product[0] : product;

  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/api/produk/${productId}`,
    );

    if (!response.ok) {
      return {
        notFound: true,
      };
    }

    const data = await response.json();

    return {
      props: {
        initialData: data,
      },
      revalidate: 60, // ISR: revalidate setiap 60 detik
    };
  } catch (error) {
    console.error('Error fetching product:', error);
    return {
      props: {
        initialData: null,
      },
    };
  }
};

export default HalamanProduk;