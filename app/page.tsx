import Image from 'next/image'
import dynamic from 'next/dynamic'
import { Suspense } from 'react'

const EditorComp = dynamic(() => import('./EditorComponent'), { ssr: false })

const markdown = `
# Hello world!
Check the EditorComponent.tsx file for the code .
`
export default function Home() {
  return (
    <div>Editor:
      <Suspense fallback={null}>
        <EditorComp markdown={markdown} />
      </Suspense>
    </div>
  )
}
