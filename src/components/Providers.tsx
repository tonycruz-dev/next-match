'use client'
import { NextUIProvider } from '@nextui-org/system'
import React from 'react'

export default function Providers({children}: {children: React.ReactNode}) {
  return (
    <NextUIProvider>
        {children}
    </NextUIProvider>  )
}
