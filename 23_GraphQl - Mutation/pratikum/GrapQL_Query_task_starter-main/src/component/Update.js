import { useMutation } from "@apollo/client"
import { updatePassengers } from "../config/typeDefs"

export const UpdateMutation = () => {
    const [updatePassenger] = useMutation(updatePassengers)
    return {
        updatePassenger
    }
}