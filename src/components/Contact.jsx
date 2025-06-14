import { useRef, useState } from "react";
import Label from "./Label";
import TitleSection from "./TitleSection";
import Alert from "./Alert";
import emailjs from "@emailjs/browser";

export default function Contact() {

  const form = useRef(null);

  const [ mailInfo, setMailInfo ] = useState({
    name: "",
    email: "",
    message: ""
  });

  const [alert, setAlert] = useState({})

  const [ loading, setLoading ] = useState(false);

  const resetForm = () => {
    setMailInfo({
      name: "",
      email: "",
      message: ""
    })
  }

  const handleChange = e => {
    setMailInfo({
      ...mailInfo,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true);

    // Validar que todos los campos tengan información    
    if ( Object.values(mailInfo).some( value => String(value).trim() === "" ) ) {
      setAlert({ msg: "Todos los campos son obligatorios", error: true })
      setTimeout(() => setAlert({}) ,4000)
      return;
    }

    try {
      const result = await emailjs.sendForm(
        import.meta.env.PUBLIC_SERVICE_ID,
        import.meta.env.PUBLIC_TEMPLATE_ID,
        form.current,
        import.meta.env.PUBLIC_PUBLIC_KEY
      );

      console.log("Éxito:", result.text);
      
      setAlert({ msg: "Correo enviado correctamente", error: false });

      resetForm();
      setLoading(false);
      setTimeout(() => setAlert({}) ,4000)
    } catch (error) {
      console.error("Error al enviar correo:", error);
      setAlert({ msg: "Hubo un error al enviar el correo", error: true });
      setLoading(false);
      setTimeout(() => setAlert({}) ,4000)
    }
  }
  
  
  return (
    <>
      <TitleSection>Contacto</TitleSection>


      <form ref={form} onSubmit={handleSubmit} className="bg-gray-card p-8 rounded-2xl space-y-4">

        <legend className="text-xl font-semibold mb-10">Llena el formulario y nos mantendremos en <span className="text-fuchsia-500">contacto via Mail</span>.</legend>

        { alert.msg && <Alert alert={alert} />}
        
        <div className="space-y-2">
          <Label id="name" camp="Nombre" />
          <input value={mailInfo.name} onChange={handleChange} className="border border-gray-300/30 rounded-md w-full py-1 px-2" type="text" id="name" name="name" required placeholder="Tú Nombre..."/>
        </div>
        
        <div className="space-y-2">
          <Label id="email" camp="Email" />
          <input value={mailInfo.email} onChange={handleChange} className="border border-gray-300/30 rounded-md w-full py-1 px-2" type="email" id="email" name="email" required placeholder="Tú Email de Contacto..."/>
        </div>

        <div className="space-y-2">
          <Label id="message" camp="Información" />
          <textarea value={mailInfo.message} onChange={handleChange} className="border border-gray-300/30 rounded-md w-full py-1 px-2" name="message" id="message" required placeholder="Información que va a contener el Mail..."></textarea>
        </div>
        
        <div>
          <input type="submit" className="block mx-auto cursor-pointer text-center bg-purple-500 hover:bg-purple-700 disabled:bg-purple-500/30 disabled:hover:bg-purple-500/30 disabled:cursor-not-allowed transition-colors duration-300 font-semibold text-white py-3 px-10 rounded-lg" disabled={loading} value={ loading ? "Enviando..." : "Enviar Mail"} />
        </div>
      </form>
    </>
  )
}
