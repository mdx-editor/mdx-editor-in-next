import Image from 'next/image'
import dynamic from 'next/dynamic'
import { Suspense } from 'react'

const EditorComp = dynamic(() => import('./EditorComponent'), { ssr: false })

const markdown = `
Hello **world**!
`

export default function Home() {
  return (
    <>
    <p>This is a bare-bones unstyled MDX editor without any plugins and no toolbar. Check the EditorComponent.tsx file for the code.</p>
      <p>To enable more features, add the respective plugins to your instance - see <a className="text-blue-600" href="https://mdxeditor.dev/editor/docs/getting-started">the docs</a> for more details.</p>
      <br />
    <div style={{border: '1px solid black'}}>
      <Suspense fallback={null}>
        <EditorComp markdown={markdown} />
      </Suspense>
    </div>
    </>
  )
}
