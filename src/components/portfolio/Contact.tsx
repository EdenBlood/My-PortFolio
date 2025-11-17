import { useRef, useState } from 'preact/hooks'
import Label from '@/components/ui/Label'
import Alert from '@/components/ui/Alert'
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

export default function Contact({ t }: { t: any }) {
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
      setAlert({ msg: t['required-fields'], error: true })
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

      setAlert({ msg: t['success-message'], error: false })

      resetForm()
      setLoading(false)
      setTimeout(() => setAlert({ msg: '', error: false }), 4000)
    } catch (error) {
      setAlert({ msg: t['error-message'], error: true })
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
        <legend className="text-lg md:text-4xl lg:text-xl 2xl:text-4xl font-semibold mb-10">
          {t['legend-white']}{' '}
          <span className="text-fuchsia-500">{t['legend-color']}</span>
        </legend>

        {alert.msg && <Alert msg={alert.msg} error={alert.error} />}

        <div className="space-y-2 2xl:space-y-3">
          <Label id="name" camp={t['name']} t={t['required-field']} />
          <input
            value={mailInfo.name}
            onChange={handleChange}
            disabled={loading}
            className="border-2 border-gray-300/30 rounded-md w-full py-1 px-2 2xl:py-2 2xl:px-4 text-base md:text-xl lg:text-base 2xl:text-2xl peer invalid:border-red-500 invalid:text-red-500 focus:outline-none disabled:cursor-not-allowed disabled:opacity-75"
            type="text"
            id="name"
            name="name"
            placeholder={t['name-placeholder']}
            maxLength={20}
          />
          <p className="hidden peer-invalid:visible text-red-500 text-sm 2xl:text-lg peer-invalid:flex gap-2 items-center">
            <span className="text-xs border-2 rounded-full size-4 font-semibold inline-flex items-center justify-center">
              i
            </span>
            {t['name-field-info']}
          </p>
        </div>

        <div className="space-y-2 2xl:space-y-3">
          <Label id="email" camp={t['email']} t={t['required-field']} />
          <input
            value={mailInfo.email}
            onChange={handleChange}
            disabled={loading}
            className="border-2 border-gray-300/30 rounded-md w-full py-1 px-2 2xl:py-2 2xl:px-4 text-base md:text-xl lg:text-base 2xl:text-2xl peer invalid:border-red-500 invalid:text-red-500 focus:outline-none disabled:cursor-not-allowed disabled:opacity-75"
            type="email"
            id="email"
            name="email"
            placeholder={t['email-placeholder']}
            maxLength={30}
          />
          <p className="hidden peer-invalid:visible text-red-500 text-sm 2xl:text-lg peer-invalid:flex gap-2 items-center">
            <span className="text-xs border-2 rounded-full size-4 font-semibold inline-flex items-center justify-center">
              i
            </span>
            {t['email-field-info']}
          </p>
        </div>

        <div className="space-y-2 2xl:space-y-3">
          <Label id="message" camp={t['message']} t={t['required-field']} />
          <textarea
            value={mailInfo.message}
            onChange={handleChange}
            disabled={loading}
            className="border-2 border-gray-300/30 rounded-md w-full py-1 px-2 2xl:py-2 2xl:px-4 text-base md:text-xl lg:text-base 2xl:text-2xl peer invalid:border-red-500 invalid:text-red-500 focus:outline-none disabled:cursor-not-allowed disabled:opacity-75"
            name="message"
            id="message"
            placeholder={t['message-placeholder']}
          />
          <p className="hidden peer-invalid:visible text-red-500 text-sm 2xl:text-lg peer-invalid:flex gap-2 items-center">
            <span className="text-xs border-2 rounded-full size-4 font-semibold inline-flex items-center justify-center">
              i
            </span>
            {t['message-field-info']}
          </p>
        </div>

        <div>
          <input
            type="submit"
            className="block mx-auto cursor-pointer text-center bg-purple-600 not-disabled:hover:bg-purple-700 disabled:bg-purple-500/30  disabled:cursor-not-allowed transition-colors duration-300 font-medium text-white py-3 px-10 rounded-lg md:text-2xl lg:text-lg 2xl:text-3xl"
            disabled={loading}
            value={loading ? t['sending'] : t['send']}
          />
        </div>
      </form>
    </>
  )
}
