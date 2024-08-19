import { cn } from '@/lib/utils'
import React from 'react'


interface Props {
    children: React.ReactNode;
    className?: string;
}

const Wrapper = ({children,className}:Props) => {
  return (
    <div className={cn("w-full h-full mx-auto max-w-screen-xl px-4 md:px-20",className)}
    >
        {children}
    </div>
  )
}

export default Wrapper