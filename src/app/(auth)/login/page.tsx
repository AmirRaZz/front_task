"use client";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useAuth } from "@/context/AuthContext";
import Link from "next/link";
import Button from "@/components/ui/Button";
import Loading from "@/components/ui/Loading";
import RHFTextField, { FormValues } from "@/components/ui/RHFTextField";

// Define the form values type - extending the FormValues interface
interface LoginFormValues extends FormValues {
  phone_email: string;
  password: string;
}

const schema = yup
  .object({
    phone_email: yup.string().required("شماره تلفن را وارد کنید"),
    password: yup.string().required("رمز عبور را وارد کنید"),
  })
  .required();

function LoginPage() {
  const {
    register,
    handleSubmit,
    formState: { errors, isLoading },
  } = useForm<LoginFormValues>({
    resolver: yupResolver(schema),
    mode: "onTouched",
  });

  const { signin } = useAuth();

  const onSubmit = async (values: LoginFormValues) => {
    await signin(values);
  };

  return (
    <div className="max-w-md mx-auto p-6 bg-white rounded-lg shadow-md mt-12">
      <h1 className="text-2xl font-bold text-gray-800 text-center mb-8">
        ورود
      </h1>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        <RHFTextField<LoginFormValues>
          label="شماره تلفن"
          name="phone_email"
          errors={errors}
          register={register}
          type="text"
          dir="ltr"
        />
        <RHFTextField<LoginFormValues>
          label="رمز عبور"
          name="password"
          errors={errors}
          register={register}
          type="password"
          dir="ltr"
        />
        <div>
          {isLoading ? (
            <div className="flex justify-center">
              <Loading />
            </div>
          ) : (
            <Button
              type="submit"
              variant="primary"
              className="w-full py-3 rounded-lg text-white bg-blue-600 hover:bg-blue-700 transition-colors"
            >
              ورود
            </Button>
          )}
        </div>
      </form>

      <div className="mt-6 text-center">
        <Link
          href="/signup"
          className="text-blue-600 hover:text-blue-800 transition-colors"
        >
          ایجاد حساب کاربری
        </Link>
      </div>
    </div>
  );
}

export default LoginPage;
