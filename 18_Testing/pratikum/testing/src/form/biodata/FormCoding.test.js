import NameForm from "./FormCoding";
import { screen, render, fireEvent } from "@testing-library/react"
import userEvent from "@testing-library/user-event"

describe('NameForm', () => {
    test('render NameForm component', () => {
        render(<NameForm/>)
        expect(screen.getByText("Pendaftaran Peserta Coding Bootcamp")).toBeInTheDocument()
        expect(screen.getByLabelText(/Nama Lengkap:/)).toBeInTheDocument()
        expect(screen.getByLabelText(/Email:/)).toBeInTheDocument()
        expect(screen.getByLabelText(/No Handphone:/)).toBeInTheDocument()
        expect(screen.getByLabelText(/Latar Belakang Pendidikan:/)).toBeInTheDocument()
        expect(screen.getByLabelText(/Kelas Coding yang Dipilih:/)).toBeInTheDocument()
        expect(screen.getByLabelText(/Harapan Untuk Coding Bootcamp Ini:/)).toBeInTheDocument()
    })

    test('input data with a value', () => {
        render(<NameForm/>)

        fireEvent.input(screen.getByRole("textbox",
            { name: /nama/i }),
            { target: { value: "Kennedy" } }
        )

        fireEvent.input(screen.getByRole("textbox",
            { name: /email/i }),
            { target: { value: "astaga@gmail.com"} }
        )

        fireEvent.input(screen.getByRole("spinbutton",
            { name: /no handphone/i }),
            { target: { value: "086666666" } }    
        )

        fireEvent.change(screen.getByRole("radio",
            { name: /pendidikan/i })
        )

        fireEvent.click(screen.getByLabelText(/IT/),
            { target: { value: "IT" } }
        )

        const programClass = screen.getByRole("combobox", 
            { name: /kelas/i }
        )  // variable to include combobox

        userEvent.selectOptions(programClass, "fullstack")

        fireEvent.input(screen.getByRole("textbox",
            { name: /harapan/i }),
            { target: { value: "Jangan cepet-cepet saya keteteran" } }
        )

        expect(screen.getByLabelText(/Nama Lengkap:/)).toHaveValue("Kennedy")
        expect(screen.getByLabelText(/Email:/)).toHaveValue("astaga@gmail.com")
        expect(screen.getByLabelText(/No Handphone:/)).toHaveDisplayValue("086666666")
        expect(screen.getByLabelText(/Latar Belakang Pendidikan:/)).toBeChecked(true)
        expect(screen.getByLabelText(/Kelas Coding yang Dipilih:/)).toHaveValue("fullstack")
        expect(screen.getByLabelText(/Harapan Untuk Coding Bootcamp Ini:/)).toHaveValue("Jangan cepet-cepet saya keteteran")

        // test for upload Image
        const imageFile = new File(
            ["test"],
            "test.pdf",
            { name: /surat kesungguhan/i },
            {type: "image/*,.pdf"}
        )
        const imageInput = screen.getByLabelText(/Foto Surat Kesungguhan/)

        expect(imageInput.files.length).toBe(0)
        userEvent.upload(imageInput, imageFile)
        expect(imageInput.files.length).toBe(1)
    })

    test('validation on name', () => {
        render(<NameForm/>)

        fireEvent.input(screen.getByRole("textbox",
            { name: /nama/i } ),
            { target: { value: "gaboleh ada angka ya 123" } }
        )

        expect(screen.getByText("Nama Lengkap Harus Berupa Huruf")).toBeInTheDocument()
    })

    test('validation on email', () => {
        render(<NameForm/>)

        fireEvent.input(screen.getByRole("textbox",
            { name: /email/i } ),
            { target: { value: "anjaygmail.com" } }
        )

        expect(screen.getByText("Email Tidak Sesuai")).toBeInTheDocument()
    })

    test('validation on handphone', () => {
        render(<NameForm/>)

        fireEvent.input(screen.getByRole("spinbutton",
            { name: /no handphone/i }),
            { target: { value: "0824243" } }
        )

        expect(screen.getByText("No Handphone Tidak Sesuai")).toBeInTheDocument()
    })

    test('when the input is empty', () => {
        render(<NameForm/>)

        const alert = jest.spyOn(window, "alert").mockImplementation() // variable to get a alert from javascript
        
        fireEvent.input(screen.getByRole("textbox",
            { name: /nama/i }),
            { target: { value: "" } }
        )

        fireEvent.input(screen.getByRole("textbox",
            { name: /email/i }),
            { target: { value: "" } }
        )

        fireEvent.input(screen.getByRole("spinbutton",
            { name: /no handphone/i }),
            { target: { value: "" } }    
        )

        fireEvent.input(screen.getByRole("textbox",
            { name: /harapan/i }),
            { target: { value: "" } }
        )

        fireEvent.change(screen.getByRole("radio",
            { name: /pendidikan/i })
        )

        fireEvent.click(screen.getByLabelText(/IT/),
            { target: { value: "" } }
        )

        const programClass = screen.getByRole("combobox", 
            { name: /kelas/i }
        )  // variable to include combobox

        userEvent.selectOptions(programClass, "")

        fireEvent.click(screen.getByRole("button", {name: /submit/i}))

        expect(screen.getByLabelText(/Nama Lengkap:/)).toHaveValue("")
        expect(screen.getByLabelText(/Email:/)).toHaveValue("")
        expect(screen.getByLabelText(/No Handphone:/)).toHaveDisplayValue("")
        expect(screen.getByLabelText(/Harapan Untuk Coding Bootcamp Ini:/)).toHaveValue("")
        expect(screen.getByLabelText(/Latar Belakang Pendidikan:/)).not.toBeChecked()
        expect(screen.getByLabelText(/Kelas Coding yang Dipilih:/)).toHaveValue("")

        expect(screen.getByLabelText(/Nama Lengkap:/)).toBeRequired()
        expect(screen.getByLabelText(/Email:/)).toBeRequired()
        expect(screen.getByLabelText(/Latar Belakang Pendidikan:/)).toBeRequired()
        expect(screen.getByLabelText(/Kelas Coding yang Dipilih:/)).toBeRequired()
        expect(screen.getByLabelText(/Harapan Untuk Coding Bootcamp Ini:/)).toBeRequired()
        expect(alert).not.toBe()
    })
})