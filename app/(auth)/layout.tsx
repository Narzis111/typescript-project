import Image from "next/image";
import bg from "../../public/bg.png";
import Navbar from "./Navbar";


export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section> 
     <Navbar />
     <div className="bg-auth-bg relative h-[86vh] max-h-screen overflow-y-auto mx-auto bg-cover bg-center bg-no-repeat py-20">   
      <div className="absolute left-1/2 top-1/2 w-full max-w-[400px] mx-auto -translate-x-1/2 -translate-y-1/2 rounded-[40px] bg-[#04031033] border-2 border-black px-10 py-10">       
        {children}
      </div>
      </div>
    </section>
  );
}
