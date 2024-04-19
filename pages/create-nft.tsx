/* eslint-disable @next/next/no-img-element */
import React, { useCallback, useMemo, useState } from 'react'

import {useDropzone, type Accept } from 'react-dropzone'
import Image from 'next/image'
import { useTheme } from 'next-themes'
import images from '../assets'
import Input from '@/components/helper/Input'
import { Button } from '@/components'

const CreateNft = () => {

  const [ fileUrl, setFileUrl] =  useState(null);
  const [formInput, setFromInput] = useState({
    price: '',
    name: '',
    description: '',
  })

  const {theme} =  useTheme();

  const onDrop = useCallback(() => {

  },[]);

  const {getRootProps, getInputProps, isDragActive, isDragAccept, isDragReject } = useDropzone({
    onDrop,
    accept: 'image/*' as unknown as Accept,
    maxSize: 5000000,
  });

  const fileStyle = useMemo(()=>{
   return ( `dark:bg-nft-black-1 bg-white border dark:border-white border-nft-gray-2 flex flex-col items-center p-5 rounded-sm border-dashed 
   
   ${isDragActive && 'border-file-active'}
   ${isDragAccept && 'border-file-accept'}
   ${isDragReject && 'border-file-reject'}  
   
   `
  )
  }, [isDragActive, isDragAccept,isDragReject])


  return (
    <div className='flex justify-center sm:px-4 p-12'>
      
      <div className='w-3/5 md:w-full'>

      <h1 className="font-poppins dark:text-white text-nft-black-1 text-2xl minlg:text-4xl font-semibold ml-4 xs:ml-0">Create new NFT</h1>

      <div className='mt-16'> 

<p className="font-poppins dark:text-white text-nft-black-1 font-semibold text-xl" >Upload File</p>

<div className='mt-4'>

<div {...getRootProps()} className={fileStyle}>
<input {...getInputProps()} />
<div className='flexCenter flex-col text-center'>
<p className="font-poppins dark:text-white text-nft-black-1 font-semibold text-xl" >PNG, JPG, GIF, SVG, WEBM Max 100mb.</p>

<div className='my-12 w-full flex justify-center'>
  <Image
  src={images.upload}
  alt='upload Image'
  width={100}
  height={100}
  objectFit='contain'
  className={theme === 'light' ? 'filter invert' : '' }

  />
</div>

<p className="font-poppins dark:text-white text-nft-black-1 font-semibold text-sm" >Drag and Drop File</p>

<p className="font-poppins dark:text-white text-nft-black-1 font-semibold text-sm mt-2" >or Browse media on your device</p>

</div>
</div>

{fileUrl && (
  <aside>
    <div>
      <img src={fileUrl} alt='file' />
    </div>
  </aside>
)}

</div>
   </div>

   <Input
     inputType = "input"
     title = "Name"
     placeholder = "NFT Name"
     handleClick={(e)=> {
      setFromInput({...formInput, name: e.target.value});
     }}
   />
   <Input
     inputType = "textarea"
     title = "Description"
     placeholder = "NFT Description"
     handleClick={(e)=> {
      setFromInput({...formInput, description: e.target.value});
     }}
   />
   <Input
     inputType = "number"
     title = "Price"
     placeholder = "NFT Price"
     handleClick={(e)=> {
      setFromInput({...formInput, price: e.target.value});
     }}
   />


   <div className='mt-7 w-full flex justify-end'>

   <Button
   btnName='Create NFT'
   classStyles='rounded-xl'
   handleClick={()=> {}}
   />

   </div>

      </div>

    </div>
  )
}

export default CreateNft;