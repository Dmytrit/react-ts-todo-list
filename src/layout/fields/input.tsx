import classNames from 'classnames'
import { ReactElement, useRef, useState } from 'react'

interface Props {
  type: string
  value: string
  label: string
  placeholder: string
  onChange: (value: string) => void
}

export function Input(props: Props): ReactElement {
  const { type, value, label, placeholder, onChange } = props
  const [inputFocused, setInputFocused] = useState(false)
  const [inputHovered, setInputHovered] = useState(false)
  const inputRef = useRef<HTMLInputElement>(null)

  const labelHandler = (event: React.MouseEvent<HTMLLabelElement>): void => {
    (event.target as HTMLLabelElement).style.cursor = 'text'
    setInputHovered(true)
  }

  return (
    <div className="relative rounded-sm shadow-sm">
      <input
        type={type}
        maxLength={29}
        className={classNames(
          inputHovered ? 'bg-cgray-200' : 'bg-cgray-100',
          // eslint-disable-next-line max-len
          'peer pl-2 h-8 w-full placeholder-transparent text-theme-primary rounded-sm shadow-sm border-b-2 border-gray-300 hover:bg-theme-smoke focus:outline-none focus:border-theme-accent focus:bg-theme-smoke',
        )}
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        label={label}
        placeholder={placeholder}
        value={value}
        onChange={(event): void => onChange(event.target.value)}
        onFocus={(): void => setInputFocused(true)}
        onBlur={(): void => setInputFocused(false)}
        ref={inputRef}
      />
      <label
        htmlFor={label}
        onMouseEnter={(event): void => labelHandler(event)}
        onMouseLeave={(): void => setInputHovered(false)}
        onClick={():void => { inputRef?.current?.focus() }}
        className={classNames(
          inputFocused ? 'text-blue-500' : 'text-gray-400',
          // eslint-disable-next-line max-len
          ' absolute -top-6 left-2 text-[#fc8700] text-base transition-all peer-placeholder-shown:text-lg peer-placeholder-shown:text-[#02a660] peer-placeholder-shown:top-0.5 peer-focus:-top-6 peer-focus:text-white peer-focus:text-base',
        )}
      >
        {label}
      </label>
    </div>
  )
}
