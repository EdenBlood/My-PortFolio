import DisplayTag from './DisplayTag'

export default function Label({ id, camp }) {
  return (
    <>
      <div className=" relative group w-fit">
        <label className="cursor-help text-lg 2xl:text-2xl" htmlFor={id}>
          {camp}
          <span className="text-fuchsia-400">*</span>:
        </label>

        <DisplayTag text="CampoObligatorio" />
      </div>
    </>
  )
}
