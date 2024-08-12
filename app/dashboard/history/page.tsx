import Templates from "@/app/(data)/Templates";
import { Button, buttonVariants } from "@/components/ui/button";
import { db } from "@/utils/db";
import { AIOutput } from "@/utils/schema";
import { currentUser } from "@clerk/nextjs/server";
import { desc, eq } from "drizzle-orm";
import Image from "next/image";
import React from "react";
import { TEMPLATE } from "../_items/Alltemplates";
import Copybtn from "./_components/Copybtn";

export interface HISTORY {
  id: Number;
  formData: string;
  aiResponse: string;
  templateSlug: string;
  createdBy: string;
}
async function History() {
  const user = await currentUser();

  /* @ts-ignore */
  const HistoryList: HISTORY[] = await db
    .select()
    .from(AIOutput)
    /* @ts-ignore */
    .where(eq(AIOutput?.createdBy, user?.primaryEmailAddress?.emailAddress))
    .orderBy(desc(AIOutput.id));
  const GetTemplateName = (slug: string) => {
    const template: TEMPLATE | any = Templates?.find(
      (item) => item.slug == slug
    );
    return template;
  };
  return (
    <div className="m-5 p-5 border rounded-lg text-white btn-gradient bg-slate-700">
      <h2 className="font-bold text-3xl">History</h2>
      <p className="text-slate-200">
        Search your previously generate AI content
      </p>
      <div className="grid grid-cols-9 md:grid-cols-7 font-bold bg-slate-700  mt-5 py-3 px-3">
        <h2 className=" md:col-span-2">TEMPLATE</h2>
        <h2 className="invisible md:visible md:col-span-2">AI RESP</h2>
        <h2 className=" ml-28 md:ml-0 md:col-span-2">WORDS</h2>
        <h2 className="hidden md:col-span-2">COPY</h2>
      </div>
      {HistoryList.map((item: HISTORY, index: number) => (
        <>
          <div className="grid grid-cols-2 md:grid-cols-7 my-5 py-3 px-3">
            <h2 className="col-span-2 flex md:gap-2 font-semibold items-center">
              <Image
                src={GetTemplateName(item?.templateSlug)?.icon}
                width={25}
                height={25}
                alt="icon"
              />
              {GetTemplateName(item.templateSlug)?.name}
            </h2>
            <h2 className="col-span-2 line-clamp-3 mr-3">{item?.aiResponse}</h2>
            <h2>{item?.aiResponse.length}</h2>
            <h2 className="p-4">
              <Copybtn aiResponse={item.aiResponse} />
            </h2>
          </div>
          <hr />
        </>
      ))}
    </div>
  );
}

export default History;
