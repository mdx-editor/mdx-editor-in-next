import React from 'react'
'use client'
import dynamic from 'next/dynamic'
import '@mdxeditor/editor/style.css'

const MDXEditor = dynamic(
  () => import('@mdxeditor/editor').then((mod) => mod.MDXEditor), 
  { ssr: false }
)

export default function Editor() {
  return <MDXEditor markdown='hello world' />
}
