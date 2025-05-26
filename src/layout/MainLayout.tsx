import type { FC, ReactNode } from "react"


type MainLayoutPropsp={
  children:ReactNode
}
const MainLayout: FC<MainLayoutPropsp> = ({children}) => {
  return (
    <main className="h-dvh flex flex-col">
        {children}
    </main>
  )
}

export default MainLayout
