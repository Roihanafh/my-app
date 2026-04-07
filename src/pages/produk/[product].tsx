import fetcher from "@/utils/swr/fetcher";
import { useRouter } from "next/router";
import useSWR from "swr";
import DetailProduk from "../../views/DetailProduct";
import { ProductType } from "@/types/Product.type";
import { GetServerSideProps } from "next";

const HalamanProduk = ({product}:{product: ProductType}) => {
  {/* digunakan client-side rendering */}
  // // const Router = useRouter();
  // // console.log(Router);
  // const { query } = useRouter();
  // const { data, error, isLoading } = useSWR(
  //   `/api/products/${query.produk}`,
  //   fetcher,
  // );
  // return (
  //   <div>
  //     <DetailProduk products={isLoading ? [] : data.data} />
  //   </div>
  // );
 

  return (
    <div>
      <DetailProduk products={product} />
    </div>
  )
};

export default HalamanProduk;


{/* digunakan server-side rendering */}
export const getServerSideProps: GetServerSideProps = async ({ params }) => {
  try {
    if (!params?.product) {
      return {
        notFound: true,
      };
    }

    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/produk/${params.product}`);

    if (!res.ok) {
      console.error(`API error: ${res.status}`);
      return {
        notFound: true,
      };
    }

    const response = await res.json();

    return {
      props: {
        product: response.data,
      },
      revalidate: 60,
    };
  } catch (error) {
    console.error("Error fetching product:", error);
    return {
      notFound: true,
    };
  }
};


// {/digunakan static-site generation/}
// export async function getStaticPaths() {
//   const res = await fetch('http://localhost:3000/api/products')
//   const response = await res.json()

//   const paths = response.data.map((product: ProductType) => ({
//     params: { produk: product.id }
//   }))
//   // console.log("Paths yang dihasilkan untuk produk:", paths); // Debugging: Tampilkan paths yang dihasilkan
//   return {
//     paths,
//     fallback: false
//   }
// }


// export async function getStaticProps({params}:{params:{produk:string}}) {
//     const res = await fetch(`http://localhost:3000/api/produk/${params?.produk}`);
//     // const response: ProductType[] = await res.json();       
//     const response: { data: ProductType[] } = await res.json();

//     // console.log("Data produk yang diambil dari API:", response); 
//     return {
//         props: {
//             product: response.data,
//         }                                   
//     }   
// }