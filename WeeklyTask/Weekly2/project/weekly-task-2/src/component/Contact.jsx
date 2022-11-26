import { useState } from 'react'
import contact from '../assets/image/genshin.svg.png'

export default function Contact() {
    const data = {
        firstNama: "",
        lastNama: "",
        email: "",
        reason: ""
    }

    const [input, setInput] = useState(data)

    const handlerOnChange = (e) => {
        const { name, value } = e.target
        
        setInput({
            ...input,[name] : value
        })
    }

    const handleOnSubmit = (e) => {
        e.preventDefault()

        if(input.firstNama === "" || input.lastNama === "" || input.email === "" || input.reason ===""){
            alert('Silahkan isi data pada form dengan lengkap ya')
        }else {
            alert(`
                Data dengana biodata : 

                Nama depan: ${input.firstNama}
                Nama belakang: ${input.lastNama}
                Email : ${input.email}
                Dengan Alasan : ${input.reason}

                Diterima!!
            `)
            
        }
        console.log(input)
    }

    return(
        <div className="contact container">
            <h1 className="title-contact text-center">Contact Us</h1>
            <div className="form d-flex flex-row justify-content-between">
                <div className="poster-contact w-50">
                    <img src={contact} alt="" className='w-100'/>
                </div>
                <div className="form-input">
                    <form className="d-flex flex-column" onSubmit={handleOnSubmit}>
                        <label className="mb-2" for="inputNama">First Name</label>
                        <input 
                            name="firstNama"
                            className="mb-4 rounded fs-5" 
                            type="text" 
                            placeholder="First Name" 
                            onChange={handlerOnChange}/>

                        <label className="mb-2 " for="inputLastNama">Last Name</label>
                        <input 
                            name="lastNama"
                            className="mb-4 rounded fs-5" 
                            type="text" 
                            placeholder="Last Name" 
                            onChange={handlerOnChange}/>

                        <label className="mb-2" for="inputEmail">Email</label>
                        <input 
                            name="email"
                            className="mb-4 rounded fs-5" 
                            type="text" 
                            placeholder="Email" 
                            onChange={handlerOnChange}/>

                        <label className="mb-2" for="inputNama">Reason</label>
                        <textarea 
                            name="reason" 
                            className="mb-4 rounded" 
                            rows="4" 
                            onChange={handlerOnChange}></textarea>

                        <button className="rounded py-2 w-25" type="submit">Submit</button>
                    </form>
                </div>
            </div>
        </div>
    )
}