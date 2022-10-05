import { useState ,useRef } from 'react'
import './style.css'

export default function Form() {
    const baseData = {
        nama : "",
        email : "",
        noHandphone : "",
        pendidikan : "",
        kelas : "",
        harapan : "",
        surat : "",
    }

    const [data, setData] = useState(baseData)
    const [setErrMsg] = useState("")
    const [errMsgName, setErrorMessageName] = useState("")
    const [errMsgEmail, setErrorMessageEmail] = useState("")
    const [errMsgHandphone, setErrorMessageHandphone] = useState("")
    const suratKesungguhan = useRef('')
    const nameRegex = new RegExp(/^[A-Za-z ]*$/);
    const emailRegex = new RegExp(/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/)
    const handPhoneRegex = new RegExp(/[0-9]/g)

    const handlerName = e => {
        const name = e.target.name
        const value = e.target.value

        if(name === "nama"){
            if(nameRegex.test(value)){
                setErrorMessageName("")
            } else {
                setErrorMessageName({nama: "Nama Harus Berupa Huruf"})
            }
        }

        // submitValidation(nameRegex.test(value))

        setData({
            ...data,
            [name]: value,
        })
    }

    const handlerEmail = e => {
        const name = e.target.name
        const value = e.target.value

        if(name === "email"){
            if(emailRegex.test(value)){
                setErrorMessageEmail("")
            } else {
                setErrorMessageEmail({email: "Email Tidak Sesuai"})
            }
        }
        
        // submitValidation(emailRegex.test(value))
        
        setData({
            ...data,
            [name]: value,
        })
    }

    const handlerHandphone = e => {
        const name = e.target.name
        const value = e.target.value
        
        if(name === "noHandphone"){
            if(!handPhoneRegex.test(value)){
                setErrorMessageHandphone({noHandphone: "No Handphone tidak sesuai"})
            }
            else if(value.length < 9){
                setErrorMessageHandphone({noHandphone: "Nomor minimal 9 angka"})
            } 
            else if(value.length > 14){
                setErrorMessageHandphone({noHandphone: "Nomor maksimal 14 angka"})
            }
            else {
                setErrorMessageHandphone("")
            }
        }

        // submitValidation(handPhoneRegex.test(value))

        setData({
            ...data,
            [name]: value,
        })
    }
    
    const handlerAnotherInput = e => {
        const name = e.target.name
        const value = e.target.value

        setData({
            ...data,
            [name]: value,
        })
    }

    // const submitValidation = (e) => {
    //     const button = document.querySelector(".submit")

    //     if(e){
    //         button.disabled = false
    //     } else {
    //         button.disabled = true
    //     }
    // }


    const handleSubmit = e => {
        console.log("data", data);
        e.preventDefault()
        if(
            errMsgName !== "" ||
            errMsgEmail !== "" ||
            errMsgHandphone !== ""
        ){
            setErrMsg(alert('Data pendaftar tidak sesuai'))
        }
        else {
            setData(baseData)
            setErrMsg(alert(`Data pendaftar "${data.nama}" Berhasil Diterima!`))
            setErrMsg("")
        }
    }

    const resetData = () => {
        setData(baseData)
        setErrMsg("")
    }


    return (
        <div className='container'>
            <h2 className='title'>Pendaftaran Peserta Coding Bootcamp</h2>
            <div className='formInput'>
                <form onSubmit={handleSubmit}>
                    <label>Nama Lengkap :
                        <input
                            type="text"
                            name="nama"
                            value={data.nama}
                            onChange={handlerName}
                            required
                        ></input>
                    </label>
                    <span>{errMsgName.nama}</span>
                    <label>Email :
                        <input
                            type="text"
                            name="email"
                            value={data.email}
                            onChange={handlerEmail}
                            required
                        ></input>
                    </label>
                    <span>{errMsgEmail.email}</span>
                    <label>No Handphone :
                        <input
                            type="number"
                            name="noHandphone"
                            value={data.noHandphone}
                            onChange={handlerHandphone}
                            required
                        ></input>
                    </label>
                    <span>{errMsgHandphone.noHandphone}</span>
                    <label>
                        Latar Belakang Pendidikan :
                        <br></br>
                        <div className="radio-pendidikan">
                            <div className="form-check form-check-inline">
                                <input 
                                    className="form-check-input" 
                                    type="radio" 
                                    name="pendidikan"
                                    value="IT"
                                    checked={data.pendidikan === "IT"}
                                    onChange={handlerAnotherInput}
                                    required/>
                                <label className="form-check-label">IT</label>
                            </div>
                            <div className="form-check form-check-inline">
                                <input 
                                    className="form-check-input" 
                                    type="radio" 
                                    name="pendidikan" 
                                    value="Non IT"
                                    checked={data.pendidikan === "Non IT"}
                                    onChange={handlerAnotherInput}
                                    required/>
                                <label className="form-check-label">Non IT</label>
                            </div>
                        </div>
                    </label>
                    <label>Kelas Coding yang Dipilih
                    <select 
                        className="form-select" 
                        aria-label="Default select example"
                        name="kelas"
                        value={data.kelas}
                        onChange={handlerAnotherInput}
                        required>
                            <option name="" value="" selected>Open this select menu</option>
                            <option value="golang">Coding Backend with Golang</option>
                            <option value="react">Coding Frontend with React</option>
                            <option value="fullstack">Fullstack Developer</option>
                    </select>
                    </label>
                    <label>Foto Surat Kesungguhan :
                        <input
                            type="file"
                            name="surat"
                            ref={suratKesungguhan}
                            required
                        />
                    </label>
                    <label>Harapan Untuk Bootcamp Ini :
                        <br></br>
                        <textarea
                            rows="5"
                            name="harapan"
                            value={data.harapan}
                            onChange={handlerAnotherInput}
                            required
                        />
                    </label>
                    <div className='button'>
                        <input type="Submit" value="Submit" className="submit"/>
                        <input type="Submit" value="Reset" onClick={resetData} className="reset"/>
                    </div>
                </form>
            </div>
        </div>
    )
}