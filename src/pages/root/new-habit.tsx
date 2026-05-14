import { X } from "lucide-react";
import { Link } from "react-router";
import { Button } from "../../components";
import { useState } from "react";

export default function NewHabit() {
  const [habit, setHabit] = useState<string>("");
  const [goal, setGoal] = useState<string>("");
  const [frequency, setFrequency] = useState<"daily" | "weekly">("daily");

  const handleCreateHabit = async () => {};

  return (
    <div className="max-w-xl mx-auto px-2 mt-8">
      <div className="border-2 border-[#464554] py-4 rounded-xl bg-[#1b1b23]">
        <div className="flex items-center justify-between px-4">
          <div>
            <h3 className="text-2xl font-semibold">New Habit</h3>
            <p className="w-xs md:w-md">
              Define a new ritual for your high performance routine.
            </p>
          </div>
          <div>
            <Link to={"/"}>
              <X />
            </Link>
          </div>
        </div>

        <div className="w-full my-4 h-px bg-gray-500" />

        <div className="px-4 space-y-6">
          <div className="flex flex-col gap-1">
            <label className="primary-text font-semibold" htmlFor="habit">
              HABIT NAME
            </label>
            <input
              required
              value={habit}
              onChange={(e) => setHabit(e.target.value)}
              type="text"
              className="bg-[#0d0d15] rounded-lg py-2 px-4 border-2 border-[#464554] focus:outline-none"
              name="habit"
              placeholder="e.g., Strategic Planning"
            />
          </div>

          <div className="flex flex-col gap-1">
            <label className="primary-text font-semibold" htmlFor="frequency">
              FREQUENCY
            </label>
            <div className="space-x-2">
              <Button
                onClick={() => setFrequency("daily")}
                className="py-2"
                variant={frequency === "daily" ? "default" : "outline"}
              >
                Daily
              </Button>
              <Button
                onClick={() => setFrequency("weekly")}
                className="py-2"
                variant={frequency === "weekly" ? "default" : "outline"}
              >
                Weekly
              </Button>
            </div>
          </div>

          <div className="flex flex-col gap-1">
            <div className="flex items-center justify-between">
              <label
                className="primary-text font-semibold"
                htmlFor="primaryGoal"
              >
                PRIMARY GOAL
              </label>
              <p className="text-gray-400 text-xs">OPTIONAL</p>
            </div>
            <textarea
              className="bg-[#0d0d15] rounded-lg py-2 px-4 border-2 border-[#464554] resize-none focus:outline-none"
              name="primaryGoal"
              placeholder="What outcome are you tracking?"
              rows={3}
              value={goal}
              onChange={(e) => setGoal(e.target.value)}
            />
          </div>
        </div>

        <div className="px-4 pt-6 ">
          <div className="border bg-[#0d0d15] border-[#464554] border-dashed rounded px-6 py-4 flex gap-4 items-center">
            <div className="flex items-center gap-1">
              <div className="size-3 rounded-xs bg-green-400" />
              <div className="size-3 rounded-xs bg-green-500" />
              <div className="size-3 rounded-xs bg-green-600" />
              <div className="size-3 rounded-xs bg-green-700" />
              <div className="size-3 rounded-xs bg-green-800" />
            </div>
            <div className="max-w-2xs md:max-w-md">
              <p className="text-gray-400 font-semibold">
                Momentun begins after the first check-in.
              </p>
            </div>
          </div>
        </div>

        <div className="w-full my-4 h-px bg-gray-500" />

        <div className="px-4 flex items-center justify-end gap-4">
          <Link to={"/"}>
            <button>Cancel</button>
          </Link>

          <Button disabled={!habit} onClick={handleCreateHabit}>
            Create Habit
          </Button>
        </div>
      </div>
    </div>
  );
}
