import PassengerInput from './PassengerInput';
import ListPassenger from './ListPassenger';
import Header from './Header';
import { useMutation, useQuery } from '@apollo/client'
import { deletePassengers, getAllPassengers, insertPassengers } from '../config/typeDefs';

const Home = () => {
    const { data, loading: loadingData, error: errorData } = useQuery(getAllPassengers)
    const [deletePassenger, { loading: loadingDelete, error: errorDelete }] = useMutation(deletePassengers, {
        refetchQueries: [getAllPassengers]
    })
    const [insertPassenger, { loading: loadingInsert, error: errorInsert }] = useMutation(insertPassengers, {
        refetchQueries: [getAllPassengers]
    })
    
    const hapusPengunjung = (idx) => {
        deletePassenger({
            variables: {id : idx}
        })
    }
    
    const tambahPengunjung = (newData) => {
        insertPassenger({
            variables: newData
        })
    };
        return (
            <div>
                <Header/>
                <ListPassenger 
                    data={data}
                    loading={loadingData || loadingDelete || loadingInsert}
                    error={errorData || errorDelete || errorInsert}
                    hapusPengunjung={hapusPengunjung}
                />
                <PassengerInput
                    tambahPengunjung={tambahPengunjung}
                />
            </div>
        )
}

export default Home;