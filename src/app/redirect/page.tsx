import { redirect } from 'next/navigation'
type Props = {}

export default function page({}: Props) {
  redirect('https://www.canva.com/design/DAGmxbFAQCw/O9sJSEDLjHs7mxdn1DMiFg/edit?utm_content=DAGmxbFAQCw&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton')
  return (
    <div>Redirecting...</div>
  )
}
