"use client";

import { useFormStatus } from "react-dom";

export default function SubmitButton({
  pendingText,
  text,
}: {
  pendingText: string;
  text: string;
}) {
  const { pending } = useFormStatus();

  return (
    <button
      type="submit"
      disabled={pending}
      className="w-2/3 rounded-full bg-[#49BBBD] px-10 py-2 text-md font-bold text-white transition-all duration-150 hover:bg-[#0077B6]/90 disabled:cursor-not-allowed"
    >
      {pending ? pendingText : text}
    </button>
  );
}
