"use client";

import { useRef, useState } from "react";
import { verifyToken } from "./action";
import SubmitButton from "../components/submit-button";

const OTP_LENGTH = 5;

export default function Page() {
  const [otp, setOtp] = useState<string[]>(Array(OTP_LENGTH).fill(""));
  const inputRefs = useRef<(HTMLInputElement | null)[]>(
    Array(OTP_LENGTH).fill(null),
  );

  const focusNextInput = (idx: number) => {
    if (idx < inputRefs.current.length - 1) {
      inputRefs.current[idx + 1]?.focus();
      setTimeout(() => {
        inputRefs.current[idx + 1]?.setSelectionRange(1, 1);
      }, 0);
    }
  };

  const focusPrevInput = (idx: number) => {
    if (idx > 0) {
      inputRefs.current[idx - 1]?.focus();
      setTimeout(() => {
        inputRefs.current[idx - 1]?.setSelectionRange(1, 1);
      }, 0);
    }
  };

  const handleKeyDown = (
    e: React.KeyboardEvent<HTMLInputElement>,
    idx: number,
  ) => {
    if (e.key === "ArrowRight") focusNextInput(idx);
    if (e.key === "ArrowLeft") focusPrevInput(idx);
    if (e.key === "Backspace" && !(e.target as HTMLInputElement).value)
      focusPrevInput(idx);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    idx: number,
  ) => {
    const value = e.target.value;

    if (isNaN(+value)) return;

    // Update the otp state array values
    setOtp((prevOtp) => {
      const newOtp = [...prevOtp];
      newOtp[idx] = value;
      return newOtp;
    });

    // Focus on next input
    value.trim() && focusNextInput(idx);
  };

  const handlePaste = (e: React.ClipboardEvent<HTMLInputElement>) => {
    const value = e.clipboardData.getData("text");

    if (isNaN(+value)) return;

    const updatedValue = value.split("").slice(0, OTP_LENGTH);
    setOtp(updatedValue);

    inputRefs.current.forEach((input) => input?.blur());
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Handle form submission logic here

    // Display the otp code
    alert(otp.join(""));
  };

  return (
    <form action={verifyToken}>
      <div className="mx-auto flex w-fit gap-x-4">
        {otp.map((input: string, idx: number) => (
          <input
            key={idx}
            ref={(el) => {
              inputRefs.current[idx] = el;
            }}
            type="text"
            value={input}
            maxLength={1}
            onChange={(e) => handleChange(e, idx)}
            onKeyDown={(e) => handleKeyDown(e, idx)}
            onPaste={(e) => handlePaste(e)}
            className="h-10 w-10 rounded-xl border border-transparent bg-[#2F2F2F1A] text-center focus:border-[#0077B6] focus:bg-[#CDEEFF80] focus:outline-none"
          />
        ))}
      </div>
      <footer className="mt-4 mb-10 text-center text-xs">
        <p>
          Didn&apos;t receive code?{" "}
          <button className="font-bold">Resend Again</button>
        </p>
      </footer>

      <div className="mt-6 flex justify-end">
        <SubmitButton pendingText="Verifying..." text="Verify" />
      </div>
    </form>
  );
}
