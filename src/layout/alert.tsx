import { ReactElement } from 'react'

interface Props {
  messages: string
}

export function Alert(props: Props): ReactElement {
  const { messages } = props

  return (
    <div className="
      fixed z-20 bottom-8 right-4 w-full flex items-center justify-end"
    >
      <div className="w-full max-w-xs p-2 rounded-sm
        bg-white text-theme-accent text-lg font-bold"
      >
        {messages}
      </div>
    </div>
  )
}
