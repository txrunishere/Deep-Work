import { useEffect } from "react";
import { useNavigate } from "react-router";
import { supabase } from "../../utils/supabase";

export default function AuthCallback() {
  const navigate = useNavigate();

  useEffect(() => {
    const handleAuthCallback = async () => {
      try {
        const url = new URL(window.location.href);
        const code = url.searchParams.get("code");

        if (!code) {
          navigate("/sign-in");
          return;
        }

        const { data, error } =
          await supabase.auth.exchangeCodeForSession(code);

        if (error) {
          console.error("Session exchange failed:", error.message);
          navigate("/sign-in");
          return;
        }

        if (!data.session) {
          navigate("/sign-in");
          return;
        }

        navigate("/", {
          replace: true,
        });
      } catch (err) {
        console.error("OAuth callback error:", err);
        navigate("/sign-in");
      }
    };

    handleAuthCallback();
  }, [navigate]);

  return (
    <div className="flex min-h-screen items-center justify-center">
      <p>Signing you in...</p>
    </div>
  );
}
