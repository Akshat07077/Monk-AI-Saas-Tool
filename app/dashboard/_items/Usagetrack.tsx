"use client";
import { Button } from "@/components/ui/button";
import React, { useEffect, useState } from "react";
import { db } from "@/utils/db";
import { AIOutput } from "@/utils/schema";
import { eq } from "drizzle-orm";
import { useUser } from "@clerk/nextjs";

interface HISTORY {
  aiResponse?: string;
  createdBy: string;
}

function Usagetrack() {
  const { user } = useUser();
  const [totalUsage, setTotalUsage] = useState<number>(0);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (user) {
      GetData();
    }
  }, [user]);

  const GetData = async () => {
    setLoading(true);
    setError(null);
    try {
      // @ts-ignore
      const result: HISTORY[] = await db
        .select()
        .from(AIOutput)
        .where(
          eq(AIOutput.createdBy, user?.primaryEmailAddress?.emailAddress || "")
        );

      GetTotalUsage(result);
    } catch (error) {
      setError("Failed to fetch usage data");
      console.error("Error fetching usage data: ", error);
    } finally {
      setLoading(false);
    }
  };

  const GetTotalUsage = (result: HISTORY[]) => {
    let total = 0;
    result.forEach((element) => {
      total += element.aiResponse ? element.aiResponse.length : 0;
    });

    setTotalUsage(total);
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div className="mt-8 mb-14">
      <div className="bg-[#8513ef65] p-3 rounded-xl">
        <h2 className="text-white text-lg">Credits</h2>
        <div className="mt-3 h-2 bg-slate-300 w-full rounded-3xl">
          <div
            className="bg-black h-2 rounded-full"
            style={{
              width: Math.min((totalUsage / 100000) * 100, 100) + "%",
            }}
          ></div>
        </div>
        <h2 className="text-sm font-semibold text-slate-200 mt-2">
          {totalUsage} / 100000 Credits Used
        </h2>
      </div>
      <Button
        variant={"destructive"}
        className="btn-gradient mt-5 w-full hover:scale-110"
      >
        Upgrade
      </Button>
    </div>
  );
}

export default Usagetrack;
