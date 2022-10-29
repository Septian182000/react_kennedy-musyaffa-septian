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

export const insertPassengers = gql `
    mutation MyMutation($nama: String, $umur: Int, $jenis_kelamin: String) {
        insert_passenger_list_one(object: {nama: $nama, umur: $umur, jenis_kelamin: $jenis_kelamin}) {
            id
        }
    }
`

export const deletePassengers = gql `
    mutation MyMutation($id: Int) {
        delete_passenger_list(where: {id: {_eq: $id}}) {
            returning {
                id
            }
        }
    }
`

export const updatePassengers = gql `
    mutation MyMutation($id: Int, $nama: String, $umur: Int, $jenis_kelamin: String) {
        update_passenger_list(where: {id: {_eq: $id}}, _set: {nama: $nama, umur: $umur, jenis_kelamin: $jenis_kelamin}) {
            returning {
                id
                nama
                jenis_kelamin
                umur
            }
        }
    }
  
`