import Templates from '@/app/(data)/Templates'
import React from 'react'
import Image from 'next/image'
import { TEMPLATE } from './Alltemplates'
import Link from 'next/link'


function TemplateCard(item:TEMPLATE) {
    return (
      <Link href={'/dashboard/content/'+item.slug} >
      <div className='mt-5 btn-gradient gap-3 p-5  rounded-lg shadow-cyan-400 border-2 border-b-0 border-cyan-600 bg-[#181b20] 
      flex flex-col  cursor-pointer h-full hover:scale-105 transition-all hover:shadow-purple-700 hover:shadow-lg '>
          <Image src={item.icon} alt='icon' width={50} height={50}/>
          <h2 className=' text-white font-semibold text-lg'>{item.name}</h2>
          <p className='text-slate-200 line-clamp-3'>{item.desc}</p>
            </div>
      </Link>      )
}

export default TemplateCard