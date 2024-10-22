import ForgotPasswordForm from "./forgot-password-form";

function ForgotPassword() {
  return (
    <>
      <header className="mb-8 text-center">
        <h1 className="mb-3 font-extrabold lg:text-2xl">Forget password</h1>
        <p>Enter your valid email address where you receive otp.</p>
      </header>

      <main>
        <ForgotPasswordForm />
      </main>
    </>
  );
}

export default ForgotPassword;
