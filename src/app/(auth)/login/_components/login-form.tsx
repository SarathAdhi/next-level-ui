"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { Form } from "@ui/form";
import { InputForm } from "@ui/input/input-form";
import React from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";

export const loginFormSchema = z.object({
  email: z.string().email(),
  password: z.string().min(8, {
    message: "Password must be at least 8 characters.",
  }),
});

type LoginValuesType = z.infer<typeof loginFormSchema>;

const defaultValues: LoginValuesType = {
  email: "",
  password: "",
};

const LoginForm = () => {
  const form = useForm<LoginValuesType>({
    resolver: zodResolver(loginFormSchema),
    defaultValues,
  });

  async function handleLogin(values: LoginValuesType) {
    // Handle login here

    console.log(values);
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(handleLogin)}
        className="w-full space-y-4"
      >
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

export default LoginForm;
