import { useRef, useState } from 'react'
import Label from './Label'
import TitleSection from './TitleSection.astro'
import Alert from './Alert'
import emailjs from '@emailjs/browser'

interface MailFormData {
  name: string
  email: string
  message: string
}

interface IAlert {
  msg: string
  error: boolean
}

export default function Contact() {
  const form = useRef<HTMLFormElement>(null)

  const [mailInfo, setMailInfo] = useState<MailFormData>({
    name: '',
    email: '',
    message: ''
  })

  const [alert, setAlert] = useState<IAlert>({
    msg: '',
    error: false
  })

  const [loading, setLoading] = useState<boolean>(false)

  const resetForm = () => {
    setMailInfo({
      name: '',
      email: '',
      message: ''
    })
  }

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setMailInfo({
      ...mailInfo,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setLoading(true)
    // Validar que todos los campos tengan información
    if (Object.values(mailInfo).some((value) => String(value).trim() === '')) {
      setAlert({ msg: 'Todos los campos son obligatorios', error: true })
      setTimeout(() => setAlert({ msg: '', error: false }), 4000)
      setLoading(false)
      return
    }

    try {
      const result = await emailjs.sendForm(
        import.meta.env.PUBLIC_SERVICE_ID,
        import.meta.env.PUBLIC_TEMPLATE_ID,
        form.current,
        import.meta.env.PUBLIC_PUBLIC_KEY
      )

      setAlert({ msg: 'Correo enviado correctamente', error: false })

      resetForm()
      setLoading(false)
      setTimeout(() => setAlert({ msg: '', error: false }), 4000)
    } catch (error) {
      setAlert({ msg: 'Hubo un error al enviar el correo', error: true })
      setLoading(false)
      setTimeout(() => setAlert({ msg: '', error: false }), 4000)
    }
  }

  return (
    <>
      <form
        ref={form}
        onSubmit={handleSubmit}
        className="bg-gray-card p-8 rounded-2xl space-y-4 2xl:space-y-6 shadow-lg shadow-black/50"
      >
        <legend className="text-lg md:text-xl 2xl:text-4xl font-semibold mb-10">
          Llena el formulario y nos mantendremos en{' '}
          <span className="text-fuchsia-500">contacto via Mail.</span>
        </legend>

        {alert.msg && <Alert msg={alert.msg} error={alert.error} />}

        <div className="space-y-2 2xl:space-y-3">
          <Label id="name" camp="Nombre" />
          <input
            value={mailInfo.name}
            onChange={handleChange}
            disabled={loading}
            className="border-2 border-gray-300/30 rounded-md w-full py-1 px-2 2xl:py-2 2xl:px-4 text-md 2xl:text-2xl peer invalid:border-red-500 invalid:text-red-500 focus:outline-none disabled:cursor-not-allowed disabled:opacity-75"
            type="text"
            id="name"
            name="name"
            placeholder="Tú Nombre..."
            maxLength={20}
          />
          <p className="hidden peer-invalid:visible text-red-500 text-sm 2xl:text-lg peer-invalid:flex gap-2 items-center">
            <span className="text-xs border-2 rounded-full size-4 font-semibold inline-flex items-center justify-center">
              i
            </span>
            Ingresa un nombre valido
          </p>
        </div>

        <div className="space-y-2 2xl:space-y-3">
          <Label id="email" camp="Email" />
          <input
            value={mailInfo.email}
            onChange={handleChange}
            disabled={loading}
            className="border-2 border-gray-300/30 rounded-md w-full py-1 px-2 2xl:py-2 2xl:px-4 text-md 2xl:text-2xl peer invalid:border-red-500 invalid:text-red-500 focus:outline-none disabled:cursor-not-allowed disabled:opacity-75"
            type="email"
            id="email"
            name="email"
            placeholder="Tú Email de Contacto..."
            maxLength={30}
          />
          <p className="hidden peer-invalid:visible text-red-500 text-sm 2xl:text-lg peer-invalid:flex gap-2 items-center">
            <span className="text-xs border-2 rounded-full size-4 font-semibold inline-flex items-center justify-center">
              i
            </span>
            Ingresa un mail valido
          </p>
        </div>

        <div className="space-y-2 2xl:space-y-3">
          <Label id="message" camp="Información" />
          <textarea
            value={mailInfo.message}
            onChange={handleChange}
            disabled={loading}
            className="border-2 border-gray-300/30 rounded-md w-full py-1 px-2 2xl:py-2 2xl:px-4 text-md 2xl:text-2xl peer invalid:border-red-500 invalid:text-red-500 focus:outline-none disabled:cursor-not-allowed disabled:opacity-75"
            name="message"
            id="message"
            placeholder="Información que va a contener el Email..."
          />
          <p className="hidden peer-invalid:visible text-red-500 text-sm 2xl:text-lg peer-invalid:flex gap-2 items-center">
            <span className="text-xs border-2 rounded-full size-4 font-semibold inline-flex items-center justify-center">
              i
            </span>
            Ingresa un mensaje valido
          </p>
        </div>

        <div>
          <input
            type="submit"
            className="block mx-auto cursor-pointer text-center bg-purple-500 hover:bg-purple-700 disabled:bg-purple-500/30 disabled:hover:bg-purple-500/30 disabled:cursor-not-allowed transition-colors duration-300 font-semibold text-white py-3 px-10 rounded-lg 2xl:text-3xl"
            disabled={loading}
            value={loading ? 'Enviando...' : 'Enviar Mail'}
          />
        </div>
      </form>
    </>
  )
}
