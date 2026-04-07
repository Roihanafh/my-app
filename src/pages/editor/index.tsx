import dynamic from "next/dynamic";

const EditorToolbar = dynamic(
  () => import("@/components/editor/EditorToolbar"),
  {
    ssr: false,
    loading: () => <p>Memuat toolbar editor...</p>,
  }
);

const HalamanEditor = () => {
  return (
    <div>
      <div className="editor">
        <h1>Halaman Editor</h1>
        <p>
          Selamat datang di halaman editor! Halaman ini khusus untuk mengelola
          dan mengedit konten aplikasi. Gunakan akses editor untuk meninjau,
          memperbarui, dan memastikan kualitas konten yang ditampilkan.
        </p>
        <EditorToolbar />
      </div>
    </div>
  );
};

export default HalamanEditor;
