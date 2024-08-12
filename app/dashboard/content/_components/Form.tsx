"use client";
import React, { useState } from "react";
import { TEMPLATE } from "../../_items/Alltemplates";
import Image from "next/image";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Loader } from "lucide-react";
interface PROPS {
  maintemplate?: TEMPLATE;
  userData: any;
  loader: boolean;
}

function Form({ maintemplate, userData, loader }: PROPS) {
  const [formData, setformdata] = useState<any>();

  const Handlechange = (e: any) => {
    const { name, value } = e.target;
    setformdata({ ...formData, [name]: value });
  };

  const onSubmit = (e: any) => {
    e.preventDefault();
    userData(formData);
  };
  return (
    <div className="p-5 md:w-[45vh] text-white btn-gradient shadow-md shadow-cyan-600 border rounded-lg">
      {/* @ts-ignore */}
      <Image src={maintemplate?.icon} alt="icon" height={70} width={70} />
      <h2 className="mb-2 text-3xl font-bold text-violet-700">
        {maintemplate?.name}
      </h2>
      <p className="text-sm">{maintemplate?.desc}</p>
      <form onSubmit={onSubmit}>
        {maintemplate?.form?.map((item, index) => (
          <div className="flex flex-col mt-10 mb-10 font-semibold">
            <label htmlFor="" className="text-slate-200">
              {item.label}
            </label>
            {item.field == "input" ? (
              <Input
                className="mt-1"
                name={item.name}
                required={item?.required}
                onChange={Handlechange}
              />
            ) : item.field == "textarea" ? (
              <Textarea className="mt-1" />
            ) : null}
          </div>
        ))}
        <Button
          type="submit"
          disabled={loader}
          className="bg-violet-800 hover:scale-105 hover:bg-violet-700 w-full py-6"
        >
          {loader && <Loader className="animate-spin" />}
          Generate Content
        </Button>
      </form>
    </div>
  );
}

export default Form;
