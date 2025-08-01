export default function DisplayTag({ text, ubication }) {
  return (
    <>
      <span
        className={`absolute scale-0 group-hover:scale-100 transition transform w-max bg-fuchsia-950 text-white text-xs 2xl:text-lg px-2 py-1 rounded-md shadow-md z-50 ${ubication}`}
      >
        {text}
      </span>
    </>
  )
}
