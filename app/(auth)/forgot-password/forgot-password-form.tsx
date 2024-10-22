"use client";

import { useFormState } from "react-dom";
import SubmitButton from "../components/submit-button";
import TextInput from "../components/text-input";
import { updatePassword } from "./action";
import { FormState } from "./definition";

const initialState: FormState = {
  email: [],
  message: [],
};

export default function ForgotPasswordForm() {
  const [state, formAction] = useFormState(updatePassword, initialState);

  return (
    <form action={formAction} className="w-full">
      {state.message && state.message?.length > 0 && (
        <p aria-live="polite" className="mb-4 text-center text-sm text-red-500">
          {state.message[0]}
        </p>
      )}

      <div>
        <h2 className="font-semibold mb-2">Email Address</h2>
        <TextInput
          label="Email"
          name="email"
          icon="./icons/message.svg"
          placeholder=""
          type="text"
          errors={state}
        />
         <p className="flex justify-end text-xs">Provide your account email</p>
      </div>
     
      <div className="mt-6 flex justify-end">
        <SubmitButton pendingText="Resetting..." text="Reset" />
      </div>
    </form>
  );
}
