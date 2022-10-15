/* eslint-disable testing-library/no-unnecessary-act */
import Search from "./Search";
import { screen, render, act, fireEvent } from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import axios from "axios";

jest.mock('axios');

describe('Seacrh', () => {
    test('succeeded getting API', async() => {
        render(<Search/>)

        const stories = [
            {objectID: '1', title: "hello"},
            {objectID: '2', title: "React"}
        ]

        axios.get.mockImplementationOnce(() => 
            Promise.resolve({ data: { hits: stories } })
        )

        await act(async () => {
            await userEvent.click(screen.getByRole("button"))
        })

        const items = await screen.findAllByRole('listitem')

        expect(items).toHaveLength(2)
    })

    test('failed getting API', async() => {
        render(<Search/>)

        axios.get.mockImplementationOnce(() => 
            Promise.reject(new Error())
        )

        await act(async () => {
            await userEvent.click(screen.getByRole("button"))
        })

        const items = await screen.findByText("Ada yang error ...")

        expect(items).toBeInTheDocument()
    })

    test('input avalue to API', async() => {
        render(<Search/>)

        axios.get.mockImplementationOnce(() => 
            Promise.resolve({ data: { value: "" } })
        )

        await act(async () => {
            await fireEvent.input(screen.getByRole("textbox"),
            { target: { value: "Avenger" } }
            )
        })

        const items = await screen.findByPlaceholderText(/Tulis Cerita/)

        expect(items).toHaveValue("Avenger")
    })
})