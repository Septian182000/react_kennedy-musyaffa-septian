const nama = document.getElementById("inputNama");
const lastName = document.getElementById("inputLastNama")
const email = document.getElementById("inputEmail")
const reason = document.getElementById("inputReason")

const handleSubmit = (e) => {
    const inputfirstNama = nama.value
    const inputLastName = lastName.value
    const inputEmail = email.value
    const inputReason = reason.value

    if(inputfirstNama == "" || inputLastName == "" || inputEmail == "" || inputReason == ""){
        alert("Data tidak boleh ada yang kosong")
    } else {
        alert(`
        First Name : ${inputfirstNama}
        Last Name : ${inputLastName}
        
        Email : ${inputEmail}

        Reason : ${inputReason}
        `)
    }

    e.preventDefault()
}