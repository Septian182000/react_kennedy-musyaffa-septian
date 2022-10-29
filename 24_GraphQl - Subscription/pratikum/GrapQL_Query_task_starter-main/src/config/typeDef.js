import { gql } from "@apollo/client";

export const getAllPassengers = gql`
  query MyQuery {
    passenger_list {
        id
        nama
        umur
        jenis_kelamin
    }
  }
`;

export const subsPassengers = gql`
  subscription MySubscription {
    passenger_list {
        id
        nama
        umur
        jenis_kelamin
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

export const deletePassengers = gql`
  mutation MyMutation($id: Int) {
    delete_passenger_list(where: {id: {_eq: $id}}) {
        returning {
            id
        }
    }
  }
`

export const insertPassengers = gql`
  mutation MyMutation($objects: [passenger_list_insert_input!]!) {
    insert_passenger_list(objects: $objects) {
      returning {
        id
        nama
        umur
        jenis_kelamin
      }
    }
  }
`
export const updatePassenger = gql`
  mutation MutationUpdate($id: Int, $nama: String, $umur: Int$, jenis_kelamin: String) {
    update_users(where: { id: { _eq: $id } }_set: { nama: $nama, umur: $umur, jenis_kelamin: $jenis_kelamin }) {
      returning {
        id
        nama
        umur
        jenis_kelamin
      }
    }
  }
`