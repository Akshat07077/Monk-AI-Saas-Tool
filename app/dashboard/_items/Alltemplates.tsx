import React, { useEffect, useState } from 'react'
import Templates from '@/app/(data)/Templates'
import TemplateCard from './TemplateCard'

  export interface TEMPLATE{
    name:string,
    desc:string,
    icon:string,
    category:string,
    slug:string,
    aiPrompt:string,
    form?:FORM[]
}

export interface FORM{
    label:string,
    field:string,
    name:string,
    required?:boolean
}
function Alltemplates({searchInput}:any) {
  const [Alltemplate,setAlltemplate]=useState(Templates)
  useEffect(() => {
    if (searchInput)
    {
      const data = Templates.filter(item =>
        item.name.toLowerCase().includes(searchInput.toLowerCase())
      );
      setAlltemplate(data)
    }
    else {
      setAlltemplate(Templates)
    }

  }, [searchInput])
  return (
    <div className='grid grid-cols-2 gap-y-10 md:grid-cols-3 lg:grid-cols-3 mb-10 gap-5 pb-5 p-10'>
        {Alltemplate.map((item:TEMPLATE,index:number)=>(
            <TemplateCard {...item} />
        ))}
    </div>  )
}

export default Alltemplates