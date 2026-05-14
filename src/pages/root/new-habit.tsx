import { X } from "lucide-react";
import { Link, useNavigate } from "react-router";
import { useState } from "react";

import { Button } from "../../components";
import { useAuth } from "../../context/auth-context";
import { supabase } from "../../utils/supabase";

type Frequency = "daily" | "weekly";

export default function NewHabit() {
  const navigate = useNavigate();
  const { session } = useAuth();

  const [habit, setHabit] = useState("");
  const [goal, setGoal] = useState("");
  const [frequency, setFrequency] = useState<Frequency>("daily");

  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleCreateHabit = async () => {
    if (loading) return;

    setError("");

    const trimmedHabit = habit.trim();
    const trimmedGoal = goal.trim();

    if (!trimmedHabit) {
      setError("Habit name is required.");
      return;
    }

    if (!session?.user?.id) {
      setError("You must be signed in to create a habit.");
      return;
    }

    setLoading(true);

    try {
      const { error: insertError } = await supabase.from("habits").insert({
        name: trimmedHabit,
        goal: trimmedGoal || null,
        frequency,
        user_id: session.user.id,
      });

      if (insertError) {
        throw insertError;
      }

      setHabit("");
      setGoal("");
      setFrequency("daily");

      navigate("/");
    } catch (err) {
      console.error(err);

      setError(
        err instanceof Error
          ? err.message
          : "Failed to create habit. Please try again.",
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-xl mx-auto mt-8 px-2">
      <div className="rounded-xl border-2 border-[#464554] bg-[#1b1b23] py-4">
        <div className="flex items-center justify-between px-4">
          <div>
            <h1 className="text-2xl font-semibold">New Habit</h1>

            <p className="w-xs md:w-md text-gray-300">
              Define a new ritual for your high performance routine.
            </p>
          </div>

          <Link
            to="/"
            aria-label="Close"
            className="rounded-md p-1 transition hover:bg-white/5"
          >
            <X size={20} />
          </Link>
        </div>

        <div className="my-4 h-px w-full bg-gray-500" />

        <div className="space-y-6 px-4">
          <div className="flex flex-col gap-1">
            <label htmlFor="habit" className="primary-text font-semibold">
              HABIT NAME
            </label>

            <input
              id="habit"
              type="text"
              value={habit}
              onChange={(e) => setHabit(e.target.value)}
              placeholder="e.g., Strategic Planning"
              disabled={loading}
              maxLength={100}
              className="rounded-lg border-2 border-[#464554] bg-[#0d0d15] px-4 py-2 focus:outline-none focus:ring-2 focus:ring-purple-500 disabled:opacity-50"
            />
          </div>

          <div className="flex flex-col gap-1">
            <label className="primary-text font-semibold">FREQUENCY</label>

            <div className="space-x-2">
              <Button
                type="button"
                onClick={() => setFrequency("daily")}
                className="py-2"
                variant={frequency === "daily" ? "default" : "outline"}
                disabled={loading}
              >
                Daily
              </Button>

              <Button
                type="button"
                onClick={() => setFrequency("weekly")}
                className="py-2"
                variant={frequency === "weekly" ? "default" : "outline"}
                disabled={loading}
              >
                Weekly
              </Button>
            </div>
          </div>

          <div className="flex flex-col gap-1">
            <div className="flex items-center justify-between">
              <label
                htmlFor="primaryGoal"
                className="primary-text font-semibold"
              >
                PRIMARY GOAL
              </label>

              <p className="text-xs text-gray-400">OPTIONAL</p>
            </div>

            <textarea
              id="primaryGoal"
              rows={3}
              value={goal}
              onChange={(e) => setGoal(e.target.value)}
              placeholder="What outcome are you tracking?"
              disabled={loading}
              maxLength={500}
              className="resize-none rounded-lg border-2 border-[#464554] bg-[#0d0d15] px-4 py-2 focus:outline-none focus:ring-2 focus:ring-purple-500 disabled:opacity-50"
            />
          </div>

          {error && (
            <div className="rounded-lg border border-red-500/30 bg-red-500/10 px-4 py-3 text-sm text-red-400">
              {error}
            </div>
          )}
        </div>

        <div className="px-4 pt-6">
          <div className="flex items-center gap-4 rounded border border-dashed border-[#464554] bg-[#0d0d15] px-6 py-4">
            <div className="flex items-center gap-1">
              <div className="size-3 rounded-xs bg-green-400" />
              <div className="size-3 rounded-xs bg-green-500" />
              <div className="size-3 rounded-xs bg-green-600" />
              <div className="size-3 rounded-xs bg-green-700" />
              <div className="size-3 rounded-xs bg-green-800" />
            </div>

            <div className="max-w-2xs md:max-w-md">
              <p className="font-semibold text-gray-400">
                Momentum begins after the first check-in.
              </p>
            </div>
          </div>
        </div>

        <div className="my-4 h-px w-full bg-gray-500" />

        <div className="flex items-center justify-end gap-4 px-4">
          <Link to="/">
            <button
              type="button"
              disabled={loading}
              className="text-gray-300 transition hover:text-white disabled:opacity-50"
            >
              Cancel
            </button>
          </Link>

          <Button
            type="button"
            disabled={!habit.trim() || loading}
            onClick={handleCreateHabit}
          >
            {loading ? "Creating..." : "Create Habit"}
          </Button>
        </div>
      </div>
    </div>
  );
}
