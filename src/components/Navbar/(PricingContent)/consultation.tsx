import Link from "next/link";
const Consultation = () => {
 return (
  <div className="w-96 bg-white p-6 shadow-xl">
   <div className="my-auto space-y-10">
    <Link href="/">
     <h1 className="block text-xl font-semibold hover:underline text-yellow-600">
      Bagaimana cara menggunakan Cekatan POS?
     </h1>
    </Link>
   </div>
  </div>
 );
};

export default Consultation;
