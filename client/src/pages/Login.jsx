import Button from "@/_components/Button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/components/ui/use-toast";
import { useSigninMutation } from "@/slices/api/api.auth";
import { setCredentials } from "@/slices/authSlice";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom"

export default function LoginForm() {
  const { register, handleSubmit, reset, formState: { errors } } = useForm();
  const [signin, { data, isLoading, error }] = useSigninMutation();
  const { toast } = useToast()
  const dispatch = useDispatch()
  const navigate = useNavigate();
  const onSubmit = async (data) => {
    // Here you can handle login logic, such as sending the form data to your server
    if (error) {
      toast({
        title: error,
        description: "There was  problem in your request",
      })
    }
    console.log(data);
    const response = await signin(data).unwrap();
    dispatch(setCredentials(response));
    toast({
      title: "Successfully logged in.",
      // description: "There was  problem in your request",
    })
    reset();
    navigate("/");
  };

  return (
    <main className="flex items-center justify-center h-screen bg-neutral-100">
      <form onSubmit={handleSubmit(onSubmit)} className="py-16 bg-white border rounded-2xl shadow-lg p-8 m-auto max-w-lg grid gap-3" >
        <h3 className='my-4 text-2xl font-semibold' >Login</h3>
        {/* Username input */}
        <div>

          <Input
            type="email"
            placeholder="Email"
            {...register("email", { required: true })}
          />
          <div className="text-red-500">
            {errors.username && <span>This field is required</span>}
          </div>
        </div>

        {/* Password input */}
        <div>

          <Input
            type="password"
            placeholder="Password"
            {...register("password", { required: true })}
          />
          <div className="text-red-500">
            {errors.password && <span>This field is required</span>}
          </div>
        </div>
        <div className="mt-6 mx-auto">
          Don't have an account?{" "}
          <Link to="/signup" className="text-blue-500 hover:underline">
            Create an account
          </Link>
        </div>
        <Button variant="" type="submit">Login</Button>
      </form>
    </main>
  );
}
