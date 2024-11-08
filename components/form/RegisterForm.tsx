"use client";
import { userRegister } from "@/lib/hooks/User";
import { Button, Input } from "@nextui-org/react";
import { useRouter } from "next/navigation";
import { Suspense, useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";

const RegisterForm = () => {
  const router = useRouter();
  const [isLoadingButton, setIsLoadingButton] = useState<string>("");

  const Schema = z.object({
    name: z.string().min(1, { message: "Name is required!" }),
    email: z.string().email({ message: "Invalid email address" }),
    password: z.string().min(1, { message: "Password is required!" }),
    confirmPassword: z
      .string()
      .min(1, { message: "Confirm Password is required!" }),
  });

  type FormData = z.infer<typeof Schema>;

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm({
    defaultValues: {
      name: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
  });

  const onSubmit = async (data: FormData) => {
    const result = await userRegister({
      fullname: data.name,
      email: data.email,
      password: data.password,
    });
  };
  return (
    <Suspense>
      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-6">
        <div className="relative">
          <Input
            label="Name"
            labelPlacement="outside"
            classNames={{
              label: "font-medium",
              inputWrapper:
                "rounded-[8px] bg-white border border-[rgba(15, 15, 15, 0.20)]",
              input: "text-[14px] font-normal leading-[140%]",
            }}
            variant="flat"
            type="text"
            id="name"
            autoComplete="name"
            placeholder="Enter Your Name Here......."
            {...register("name", {
              required: "Password is required!",
            })}
            errorMessage={errors.name?.message}
            isRequired
          />
          {errors.name && (
            <p className="text-red-500 text-sm">{errors.name.message}</p>
          )}
        </div>
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
            label="Password"
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
          <Input
            label="Confirm Password"
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
            placeholder="Confirm Password......."
            {...register("confirmPassword", {
              required: "Confirm Password is required!",
            })}
            errorMessage={errors.confirmPassword?.message}
            isRequired
          />
          {errors.confirmPassword && (
            <p className="text-red-500 text-sm">
              {errors.confirmPassword.message}
            </p>
          )}
        </div>
        <div className="relative">
          <Button
            isDisabled={isLoadingButton !== ""}
            isLoading={isLoadingButton === "loading"}
            type="submit"
            className="flex  cursor-pointer items-center justify-center rounded-lg border border-primary bg-primary p-4 text-white transition hover:bg-opacity-90"
          >
            Register Now
          </Button>
        </div>
      </form>
    </Suspense>
  );
};

export default RegisterForm;
