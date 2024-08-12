"use client";
import React, { useState } from "react";
import Form from "../_components/Form";
import Output from "../_components/Output";
import { TEMPLATE } from "../../_items/Alltemplates";
import Templates from "@/app/(data)/Templates";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { json } from "stream/consumers";
import { chatSession } from "@/utils/Aimodel";
import { AIOutput } from "@/utils/schema";
import { db } from "@/utils/db";
import moment from "moment";

import { User } from "@clerk/nextjs/server";
import { useUser } from "@clerk/nextjs";
import Footer from "@/app/Home/_components/Footer";
interface PROPS {
  params: {
    slugs: string;
    // aiOutput: string;
  };
}
function ContentForm(props: PROPS) {
  const [loader, setLoader] = useState(false);
  const [aiOutput, SetaiOutput] = useState<any>();
  const maintemplate: TEMPLATE | undefined = Templates?.find(
    (item) => item.slug == props.params["slugs"]
  );
  const { user } = useUser();
  const Generate = async (formData: any) => {
    setLoader(true);
    const Prompt = maintemplate?.aiPrompt;
    const MainPrompt = JSON.stringify(formData) + ", " + Prompt;

    const result = await chatSession.sendMessage(MainPrompt);
    SetaiOutput(result.response.text());
    await SaveinDb(
      JSON.stringify(formData),
      maintemplate?.slug,
      result.response.text()
    );
    setLoader(false);
  };

  const SaveinDb = async (formData: any, slug: any, aiResponse: string) => {
    const result = await db.insert(AIOutput).values({
      formData: formData,
      templateSlug: slug,
      aiResponse: aiResponse,
      createdBy: user?.primaryEmailAddress?.emailAddress,
    });
    console.log(result);
  };
  return (
    <div className="p-5">
      <Link href={"/dashboard"}>
        <Button className="bg-violet-800 hover:bg-fuchsia-700">
          {" "}
          <ArrowLeft /> Back
        </Button>
      </Link>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-0 py-5">
        <Form
          loader={loader}
          userData={(v: any) => Generate(v)}
          maintemplate={maintemplate}
        />
        <Output aiOutput={aiOutput} />
      </div>
      <Footer />
    </div>
  );
}

export default ContentForm;
