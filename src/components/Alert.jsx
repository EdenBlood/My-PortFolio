
export default function Alert({alert}) {
  return (
    <div className={`${alert.error ? "bg-red-700" : "bg-purple-600"} text-center py-2 w-full uppercase text-md font-bold rounded-lg text-white`}>
      <p>{alert.msg}</p>
    </div>
  )
}
