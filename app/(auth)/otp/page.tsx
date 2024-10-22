import OTPForm from "./otp-form";
import { cookies } from "next/headers";

function Verification() {
  const email = cookies().get("email");

  return (
    <>
      <header className="mb-10 text-center">
        <h1 className="mb-3 font-bold lg:text-xl">
          Enter Verification Code!
        </h1>
        <p className="text-xs">
          We have sent a 5 digit verification code on{" "} <br />
          <span className="flex items-center justify-center gap-x-2 font-bold">
            {String(email)}
            {/* <div className="h-4 w-4 rounded-full bg-[#004485]" /> */}
          </span>
        </p>
      </header>

 <main>
        <OTPForm />
      </main>
      

     

     
    </>
  );
}

export default Verification;
