import DisplayTag from './DisplayTag'

interface LabelProps {
  id: string
  camp: string
}

export default function Label({ id, camp }: LabelProps) {
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
