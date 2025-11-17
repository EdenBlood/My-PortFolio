import DisplayTag from '@/components/ui/DisplayTag'

interface LabelProps {
  id: string
  camp: string
  t: string
}

export default function Label({ id, camp, t }: LabelProps) {
  return (
    <>
      <div className=" relative group w-fit">
        <label
          className="cursor-help text-lg md:text-2xl lg:text-lg  2xl:text-2xl"
          htmlFor={id}
        >
          {camp}
          <span className="text-fuchsia-400">*</span>:
        </label>

        <DisplayTag text={t} ubication="-top-9" />
      </div>
    </>
  )
}
