import Link from "next/link";
const Other = () => {
 return (
  <div className="w-96 bg-white p-6 shadow-xl">
   <div className="my-auto space-y-10">
    <Link href="https://wa.me/6282295533992">
     <h1 className="block text-xl font-semibold hover:underline mb-3 text-yellow-600">
      Hubungi Kami
     </h1>
    </Link>
    <Link href="/">
     <h1 className="block text-xl font-semibold hover:underline mb-3 text-yellow-600">
      Karir Cekatan
     </h1>
    </Link>
    <Link href="/">
     <h1 className="block text-xl font-semibold hover:underline text-yellow-600">
      Layanan Pengaduan
     </h1>
    </Link>
   </div>
  </div>
 );
};

export default Other;
