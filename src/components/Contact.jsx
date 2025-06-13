import { useState } from "react";
import Label from "./Label";
import TitleSection from "./TitleSection";
import Alert from "./Alert";

export default function Contact() {

  const [ mailInfo, setMailInfo ] = useState({
    name: "",
    email: "",
    description: ""
  });

  const [alert, setAlert] = useState({})

  const resetForm = () => {
    setMailInfo({
      name: "",
      email: "",
      description: ""
    })
  }

  const handleChange = e => {
    setMailInfo({
      ...mailInfo,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    if ( Object.values(mailInfo).some( value => String(value).trim() === "" ) ) {
      setAlert({ msg: "Todos los campos son obligatorios", error: true })
      setTimeout(() => setAlert({}) ,4000)
      return;
    }

    setAlert({msg: "El Mail a sido enviado correctamente", error: false})
    setTimeout(() => setAlert({}), 4000)
    resetForm()
  }
  
  
  return (
    <>
      <TitleSection>Contacto</TitleSection>


      <form onSubmit={handleSubmit} className="bg-gray-card p-8 rounded-2xl space-y-4">

        <legend className="text-xl font-semibold mb-10">Llena el formulario y nos mantendremos en <span className="text-fuchsia-500">contacto via Mail</span>.</legend>

        { alert.msg && <Alert alert={alert} />}
        
        <div className="space-y-2">
          <Label id="name" camp="Nombre" />
          <input value={mailInfo.name} onChange={handleChange} className="border border-gray-300/30 rounded-md w-full py-1 px-2" type="text" id="name" name="name" placeholder="Tú Nombre..."/>
        </div>
        
        <div className="space-y-2">
          <Label id="email" camp="Email" />
          <input value={mailInfo.email} onChange={handleChange} className="border border-gray-300/30 rounded-md w-full py-1 px-2" type="email" id="email" name="email" placeholder="Tú Email de Contacto..."/>
        </div>

        <div className="space-y-2">
          <Label id="description" camp="Informacion" />
          <textarea value={mailInfo.description} onChange={handleChange} className="border border-gray-300/30 rounded-md w-full py-1 px-2" name="description" id="description" placeholder="Informacion que va a contener el Mail..."></textarea>
        </div>
        
        <div>
          <input type="submit" className="block mx-auto cursor-pointer text-center bg-purple-500 hover:bg-purple-700 transition-colors duration-300 font-semibold text-white py-3 px-10 rounded-lg" />
        </div>
      </form>
    </>
  )
}
