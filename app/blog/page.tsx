import React from 'react';
import Blogs from '@/components/blog/Blogs';

const page = () => {
  return (
    <div className='px-24 max-sm:px-4 max-md:px-16'>
      <Blogs heading='All Blogs'/>
    </div>
  )
}

export default page