interface AlertProps {
  msg: string
  error: boolean
}

export default function Alert({ msg, error }: AlertProps) {
  return (
    <div
      className={`${error ? 'bg-red-700' : 'bg-purple-600'} text-center py-2 w-full uppercase text-md font-bold rounded-lg text-white`}
    >
      <p>{msg}</p>
    </div>
  )
}
