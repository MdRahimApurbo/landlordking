"use client";
import { Button, Input } from "@nextui-org/react";
import { useRouter } from "next/navigation";
import { Suspense, useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";

const LoginForm = () => {
  const router = useRouter();
  const [isLoadingButton, setIsLoadingButton] = useState<string>("");

  const Schema = z.object({
    email: z.string().email({ message: "Invalid email address" }),
    password: z.string().min(1, { message: "Password is required!" }),
  });

  type FormData = z.infer<typeof Schema>;

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm({
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit = async (data: FormData) => {
    console.log(data);
  };

  return (
    <Suspense>
      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-6">
        <div className="relative">
          <Input
            label="Email"
            labelPlacement="outside"
            classNames={{
              label: "font-medium",
              inputWrapper:
                "rounded-[8px] bg-white border border-[rgba(15, 15, 15, 0.20)]",
              input: "text-[14px] font-normal leading-[140%]",
            }}
            variant="flat"
            type="email"
            id="email"
            autoComplete="email"
            placeholder="Enter Your Email Here......."
            {...register("email", {
              required: "Email is required!",
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                message: "Invalid email address",
              },
            })}
            errorMessage={errors.email?.message}
            isRequired
          />
          {errors.email && (
            <p className="text-red-500 text-sm">{errors.email.message}</p>
          )}
        </div>
        <div className="relative">
          <Input
            labelPlacement="outside"
            classNames={{
              label: "font-medium",
              inputWrapper:
                "rounded-[8px] bg-white border border-[rgba(15, 15, 15, 0.20)]",
              input: "text-[14px] font-normal leading-[140%]",
            }}
            variant="flat"
            type="password"
            id="password"
            autoComplete="password"
            placeholder="Password......."
            {...register("password", {
              required: "Password is required!",
            })}
            errorMessage={errors.password?.message}
            isRequired
          />
          {errors.password && (
            <p className="text-red-500 text-sm">{errors.password.message}</p>
          )}
        </div>
        <div className="relative">
          <Button
            isDisabled={isLoadingButton !== ""}
            isLoading={isLoadingButton === "loading"}
            type="submit"
            className="flex  cursor-pointer items-center justify-center rounded-lg border border-primary bg-primary p-4 text-white transition hover:bg-opacity-90"
          >
            Submit Now
          </Button>
        </div>
      </form>
    </Suspense>
  );
};

export default LoginForm;
