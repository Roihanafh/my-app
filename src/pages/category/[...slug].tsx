import { useRouter } from "next/router";

const HalamanCategory = () => {
    const { query } = useRouter();
    const slugArray = query.slug as string[] | undefined;

    return (
        <div>
            <h1>Halaman Category</h1>
            <p>Total Parameter: {slugArray ? slugArray.length : 0}</p>
            
            <h2>Daftar Parameter URL:</h2>
            {slugArray && slugArray.length > 0 ? (
                <ul>
                    {slugArray.map((item, index) => (
                        <li key={index}>
                            Parameter {index + 1}: {item}
                        </li>
                    ))}
                </ul>
            ) : (
                <p>Tidak ada parameter</p>
            )}

            <p>Path Lengkap: /category/{slugArray ? slugArray.join("/") : ""}</p>
        </div>
    );
};

export default HalamanCategory;
