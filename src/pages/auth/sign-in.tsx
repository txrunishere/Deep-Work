import { Mail, Lock } from "lucide-react";
import { Button } from "../../components";
import { Link, useNavigate } from "react-router";
import { supabase } from "../../utils/supabase";
import { useState } from "react";

export default function SignIn() {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [error, setError] = useState<string>("");
  const navigate = useNavigate();

  const handleUserSignIn = async (e: React.SyntheticEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError("");

    const { error, data } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (error) {
      console.error("Error signing in with Password:", error.message);
      setEmail("");
      setPassword("");
      setError(error.message);
      return;
    }

    if (data && data.user) navigate("/");
  };

  const handleGoogleSignIn = async () => {
    setError("");
    const { error } = await supabase.auth.signInWithOAuth({
      provider: "google",
      options: {
        redirectTo: `${window.location.origin}/auth/callback`,
      },
    });

    if (error) {
      console.error("Error signing in with Google:", error.message);
      setError(error.message);
    }
  };

  return (
    <div className="mx-auto w-full max-w-md px-4">
      <div className="mt-10 w-full rounded-xl border border-[#464554] bg-[#1b1b23] p-5 sm:p-8">
        {/* Form */}
        <form className="space-y-5" onSubmit={handleUserSignIn}>
          {/* Email */}
          <div>
            <label
              className="text-sm font-semibold tracking-wider text-white"
              htmlFor="email"
            >
              EMAIL ADDRESS
            </label>

            <div className="mt-2 flex items-center gap-3 rounded-md border border-[#464554] px-4 py-3 focus-within:border-purple-400">
              <Mail size={20} className="shrink-0 text-gray-400" />

              <input
                required
                className="w-full bg-transparent text-white outline-none placeholder:text-gray-500"
                type="email"
                id="email"
                placeholder="name@work.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
          </div>

          {/* Password */}
          <div>
            <label
              className="text-sm font-semibold tracking-wider text-white"
              htmlFor="password"
            >
              PASSWORD
            </label>

            <div className="mt-2 flex items-center gap-3 rounded-md border border-[#464554] px-4 py-3 focus-within:border-purple-400">
              <Lock size={20} className="shrink-0 text-gray-400" />

              <input
                required
                className="w-full bg-transparent text-white outline-none placeholder:text-gray-500"
                type="password"
                id="password"
                placeholder="••••••••"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
          </div>

          {/* Submit */}
          <Button type="submit" className="w-full">
            Sign In
          </Button>
        </form>

        <p className="text-sm text-red-400 text-center mt-2">{error}</p>

        {/* Divider */}
        <div className="my-6 h-px w-full rounded-full bg-gray-700" />

        {/* Footer */}
        <div className="text-center text-sm text-gray-300">
          <p>
            Don&apos;t have an account?{" "}
            <Link
              to="/sign-up"
              className="text-purple-300 transition-colors hover:text-purple-200 hover:underline"
            >
              Create account
            </Link>
          </p>
        </div>

        {/* OR Divider */}
        <div className="my-5 flex items-center">
          <div className="h-px w-full rounded-full bg-gray-700" />

          <p className="mx-3 text-sm text-gray-500">OR</p>

          <div className="h-px w-full rounded-full bg-gray-700" />
        </div>

        {/* Google Sign In */}
        <Button
          onClick={handleGoogleSignIn}
          variant="outline"
          className="flex w-full items-center justify-center gap-3 px-4 py-3"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="-3 0 262 262"
            preserveAspectRatio="xMidYMid"
            className="shrink-0"
          >
            <path
              d="M255.878 133.451c0-10.734-.871-18.567-2.756-26.69H130.55v48.448h71.947c-1.45 12.04-9.283 30.172-26.69 42.356l-.244 1.622 38.755 30.023 2.685.268c24.659-22.774 38.875-56.282 38.875-96.027"
              fill="#4285F4"
            />
            <path
              d="M130.55 261.1c35.248 0 64.839-11.605 86.453-31.622l-41.196-31.913c-11.024 7.688-25.82 13.055-45.257 13.055-34.523 0-63.824-22.773-74.269-54.25l-1.531.13-40.298 31.187-.527 1.465C35.393 231.798 79.49 261.1 130.55 261.1"
              fill="#34A853"
            />
            <path
              d="M56.281 156.37c-2.756-8.123-4.351-16.827-4.351-25.82 0-8.994 1.595-17.697 4.206-25.82l-.073-1.73L15.26 71.312l-1.335.635C5.077 89.644 0 109.517 0 130.55s5.077 40.905 13.925 58.602l42.356-32.782"
              fill="#FBBC05"
            />
            <path
              d="M130.55 50.479c24.514 0 41.05 10.589 50.479 19.438l36.844-35.974C195.245 12.91 165.798 0 130.55 0 79.49 0 35.393 29.301 13.925 71.947l42.211 32.783c10.59-31.477 39.891-54.251 74.414-54.251"
              fill="#EB4335"
            />
          </svg>

          <span className="text-sm font-medium">Sign in with Google</span>
        </Button>
      </div>
    </div>
  );
}
