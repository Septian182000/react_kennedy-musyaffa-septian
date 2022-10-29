import "./Home.css"
import { useState } from "react"
import { UpdateMutation } from "./Update"

const ListItem = (props) => {

    const baseUpdate = {
        nama: "",
        umur: "",
        jenis_kelamin: ""
    }

    const { id, nama, umur, jenis_kelamin } = props.data

    const [editingStatus, setEditingStatus] = useState(false)
    const [newUpdatePassenger, setNewUpdate] = useState(baseUpdate)
    const {updatePassenger} = UpdateMutation()

    const handleEditingStatus = () => {
        setEditingStatus(!editingStatus)
    }

    const handleInputUpdateData = (e) => {
        const { name, value } = e.target
        
        setNewUpdate({
            ...newUpdatePassenger,
            [name]: value
        })
    }

    const handleSubmittedUpdateData = () => {
        updatePassenger({
            variables: {
                id: id,
                nama: newUpdatePassenger.nama,
                umur: newUpdatePassenger.umur,
                jenis_kelamin: newUpdatePassenger.jenis_kelamin
            }
        })
    }

    return (
        <tbody>
        <>
      {editingStatus ? (    
        <tr>
          <td>
            <form onSubmit={handleSubmittedUpdateData}>
              <input name="nama" onChange={handleInputUpdateData} placeholder={nama} style={{padding: "10px"}} />
            </form>
          </td>
          <td>
            <form onSubmit={handleSubmittedUpdateData}>
              <input name="umur" onChange={handleInputUpdateData} placeholder={umur} style={{padding: "10px"}} />
            </form>
          </td>
          <td>
            <form onSubmit={handleSubmittedUpdateData}>
              <input name="jenisKelamin" onChange={handleInputUpdateData} placeholder={jenis_kelamin} style={{padding: "10px"}} />
            </form>
          </td>
          <td>
            <form onSubmit={handleSubmittedUpdateData}>
              <button type="submit" style={{border: "none", backgroundColor: "green", padding: "8px", width: "100%", borderRadius: "5px", color: "white", fontWeight: "bolder", cursor: "pointer"}}>Submit</button>
              <button style={{ marginTop: "10px", border: "none", backgroundColor: "red", padding: "8px", width: "100%", borderRadius: "5px", color: "white", fontWeight: "bolder", cursor: "pointer" }} onClick={handleEditingStatus}>
                Cancel
              </button>
            </form>
          </td>
        </tr>
      ) : (
        <tr>
          <td>{nama}</td>
          <td>{umur}</td>
          <td>{jenis_kelamin}</td>
          <td>
            <button onClick={handleEditingStatus} style={{border: "none", backgroundColor: "blueviolet", padding: "8px", width: "100%", borderRadius: "5px", color: "white", fontWeight: "bolder", cursor: "pointer"}}>Edit</button>
            <button style={{ marginTop: "10px", backgroundColor: "red", padding: "8px", width: "100%", borderRadius: "5px", border: "none", color: "white", fontWeight: "bolder", cursor: "pointer"}} onClick={() => props.hapusPengunjung(id)}>
              Hapus
            </button>
          </td>
        </tr>
            )}
            </>
    </tbody>
    )
}

export default ListItem;