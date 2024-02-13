"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { Form } from "@ui/form";
import { InputForm } from "@ui/input/input-form";
import React from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";

export const registerFormSchema = z.object({
  username: z.string(),
  email: z.string().email(),
  password: z.string().min(8, {
    message: "Password must be at least 8 characters.",
  }),
});

type RegisterValuesType = z.infer<typeof registerFormSchema>;

const defaultValues: RegisterValuesType = {
  username: "",
  email: "",
  password: "",
};

const RegisterForm = () => {
  const form = useForm<RegisterValuesType>({
    resolver: zodResolver(registerFormSchema),
    defaultValues,
  });

  async function handleRegister(values: RegisterValuesType) {
    // Handle Register here

    console.log(values);
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(handleRegister)}
        className="w-full space-y-4"
      >
        <InputForm
          label="Username"
          name="username"
          placeholder="Sarath"
          description=""
          required
        />

        <InputForm
          label="Email"
          name="email"
          placeholder="hello@sarathadhi.com"
          description=""
          required
        />

        <InputForm label="Password" name="password" description="" required />
      </form>
    </Form>
  );
};

export default RegisterForm;
