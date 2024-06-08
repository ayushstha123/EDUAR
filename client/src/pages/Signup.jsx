import Button from "@/_components/Button";
import { Input } from "@/components/ui/input";
import { useSignupMutation } from "@/slices/api/api.auth";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom"
import { useToast } from "@/components/ui/use-toast"
import { useDispatch } from "react-redux";
import { setCredentials } from "@/slices/authSlice";

export default function Signup() {
  const { register, handleSubmit, reset, formState: { errors } } = useForm();
  const [signup, { data, isLoading, error }] = useSignupMutation();
  const { toast } = useToast()
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const onSubmit = async (data) => {
    // Here you can handle signup logic, such as sending the form data to your server
    if (error) {
      toast({
        title: error,
        description: "There was  problem in your request",
      })
    }
    console.log(data);
    const response = await signup(data).unwrap();
    dispatch(setCredentials(response));
    toast({
      title: "Successfully created your account",
      // description: "There was  problem in your request",
    })
    reset();
    navigate("/")
  };

  return (
    <main className="flex items-center justify-center h-screen bg-neutral-100">
      <form onSubmit={handleSubmit(onSubmit)} className="py-16 bg-white border rounded-2xl shadow-lg p-8 m-auto w-[400px] grid gap-3" >
        <h3 className='my-4 text-2xl font-semibold' >Signup</h3>
        {/* Name input */}
        <div>
          <Input
            type="text"
            placeholder="Full Name"
            {...register("name", { required: true })}
          />
          <div className="text-red-500">
            {errors.name && <span>This field is required</span>}
          </div>
        </div>

        {/* Username input */}
        <div>
          <Input
            type="text"
            placeholder="Username"
            {...register("username", { required: true })}
          />
          <div className="text-red-500">
            {errors.username && <span>This field is required</span>}
          </div>
        </div>

        {/* Email input */}
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

        {/* Roll number input */}
        <div>
          <Input
            type="text"
            placeholder="Roll Number"
            {...register("rollno", { required: true })}
          />
          <div className="text-red-500">
            {errors.rollNumber && <span>This field is required</span>}
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

        {/* Level input */}
        <div>
          <Input
            type="text"
            placeholder="Level"
            {...register("level", { required: true })}
          />
          <div className="text-red-500">
            {errors.level && <span>This field is required</span>}
          </div>
        </div>
        <div className="mt-6">
          Already have an account ?{" "}
          <Link to="/login" className="text-blue-500 hover:underline">
            Login
          </Link>
        </div>
        <Button type="submit">Sign Up</Button>
      </form>
    </main>
  );
}
