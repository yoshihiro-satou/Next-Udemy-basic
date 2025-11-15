import CliientComponent from "@/components/ClientComponent"
import Link from "next/link"
export default function ServerComponent() {
  console.log('Server')
  return (
    <div>
      サーバー
      <CliientComponent />
      <Link href="/about">About</Link>
    </div>
  )
}
