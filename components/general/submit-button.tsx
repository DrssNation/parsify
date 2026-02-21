"use client";

import { useFormStatus } from "react-dom";
import { Button } from "../ui/button";
import { Loader2 } from "lucide-react";

interface generalSubmitButtonProps {
  text: string;
  icon?: React.ReactNode;
}

export function SubmitButton({ text, icon }: generalSubmitButtonProps) {
  const { pending } = useFormStatus();

  return (
    <Button
      type="submit"
      disabled={pending}
      className="bg-emerald-300 text-emerald-950 shadow-sm hover:bg-emerald-200"
    >
      {pending ? (
        <Loader2 className="size-4 animate-spin" />
      ) : (
        <>
          {icon && <div>{icon}</div>}
          {text}
        </>
      )}
    </Button>
  );
}
