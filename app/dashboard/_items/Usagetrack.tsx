"use client";
import { Button } from "@/components/ui/button";
import { Ghost } from "lucide-react";
import React, { useEffect, useState } from "react";
import { HISTORY } from "../history/page";
import { db } from "@/utils/db";
import { AIOutput } from "@/utils/schema";
import { eq } from "drizzle-orm";
import { useUser } from "@clerk/nextjs";

function Usagetrack() {
  const { user } = useUser();
  const [totalUsage, setTotalUsage] = useState<number>(0);

  useEffect(() => {
    user && GetData();
  }, [user]);

  const GetData = async () => {
    // @ts-ignore
    const result: HISTORY[] = await db
      .select()
      .from(AIOutput)
      .where(eq(AIOutput.createdBy, user?.primaryEmailAddress?.emailAddress));

    GetTotalUsage(result);
  };

  const GetTotalUsage = (result: HISTORY[]) => {
    let total: number = 0;
    result.forEach((element) => {
      total = total + Number(element.aiResponse?.length);
    });

    setTotalUsage(total);
    console.log(total);
  };

  return (
    <div className="mt-8 mb-14">
      <div className="bg-[#8513ef65] p-3 rounded-xl">
        <h2 className="text-white text-lg">Credits</h2>
        <div className="mt-3 h-2 bg-slate-300 w-full rounded-3xl">
          <div
            className="bg-black h-2 rounded-full"
            style={{
              width: (totalUsage / 100000) * 100 + "%",
            }}
          ></div>
        </div>
        <h2 className="text-sm font-semibold text-slate-200 mt-2">
          {totalUsage} / 100000 Credits Used
        </h2>
        <span className="font-semibold text-slate-200"></span>
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
