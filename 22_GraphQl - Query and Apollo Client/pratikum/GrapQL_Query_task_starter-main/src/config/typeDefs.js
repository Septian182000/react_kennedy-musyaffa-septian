import { gql } from "@apollo/client"

export const getAllPassengers = gql`
    query MyQuery {
        passenger_list {
            id
            jenis_kelamin
            nama
            umur
        }
    }
`

export const getPassengersById = gql`
    query MyQuery($id: Int!) {
        passenger_list(where: {id: {_eq: $id}}) {
            id
            jenis_kelamin
            nama
            umur
        }
    }
`