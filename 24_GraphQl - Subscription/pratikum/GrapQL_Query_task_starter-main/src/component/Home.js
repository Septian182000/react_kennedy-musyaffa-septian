import React, { useState } from "react";
import { useLazyQuery, useMutation, useQuery, useSubscription} from "@apollo/client";
import { getAllPassengers, deletePassengers, insertPassengers, subsPassengers, getPassengersById, updatePassenger } from "../config/typeDef";
import PassengerInput from "./PassengerInput";
import ListPassenger from "./ListPassenger";
import UpdatePassenger from "./UpdatePassenger";
import Header from "./Header";

const Home = () => {
  const { error: errUserData } = useQuery(getAllPassengers);

  const { data: dataPassSub, error: errsubUserData } = useSubscription(subsPassengers);

  const [getData, { data: dataUserId }] = useLazyQuery(getPassengersById);

  const [CreatePassangers, { error: errorCreatePassangers }] = useMutation(
    insertPassengers,
    { refetchQueries: [getAllPassengers] }
  );

  const [updatePass, { error: errorUpdate }] = useMutation(updatePassenger, {
    refetchQueries: [getAllPassengers],
  });

  const [deletePass, { error: errorDeletePassangers }] = useMutation(
    deletePassengers,
    { refetchQueries: [getAllPassengers] }
  );

  const hapusPengunjung = (id) => {
    deletePass({
      variables: {
        id: id,
      },
    });
  };

  const [edit, setEdit] = useState({
    id: "",
    nama: "",
    umur: "",
    jenis_kelamin: "",
  });

  const onClickEdit = (dataChoice) => {
    setEdit(dataChoice);
  };

  const editPengunjung = (toUpdateData) => {
    updatePass({ variables: toUpdateData });
  };

  const tambahPengunjung = (newUser) => {
    CreatePassangers({
      variables: {
        objects: newUser,
      },
    });
  };

  if (errUserData) {
    console.log(errUserData);
    return null;
  } else if (errorCreatePassangers) {
    console.log(errorCreatePassangers);
    return null;
  } else if (errorDeletePassangers) {
    console.log(errorCreatePassangers);
    return null;
  } else if (errorUpdate) {
    console.log(errorCreatePassangers);
    return null;
  } else if (errsubUserData) {
    console.log(errsubUserData);
    return null;
  }

  return (
    <div>
      <Header />
      <ListPassenger
        data={dataPassSub}
        dataId={dataUserId}
        getdataId={getData}
        hapusPengunjung={hapusPengunjung}
        onClickEdit={onClickEdit}
      />
      <PassengerInput tambahPengunjung={tambahPengunjung} />
      <UpdatePassenger edit={edit} editPengunjung={editPengunjung} />
    </div>
  );
};

export default Home;
