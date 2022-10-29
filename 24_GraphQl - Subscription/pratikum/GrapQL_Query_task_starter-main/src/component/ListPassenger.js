import ListItem from "./ListItem";

import { useState } from "react";

const ListPassenger = (props) => {
  const { data, dataId, getdataId, hapusPengunjung, onClickEdit } = props;
  const [userId, setUserId] = useState(0);

  const handleDataId = (e) => {
    if (e.target) {
      setUserId(e.target.value);
    }
  };

  const handleGetData = () => {
    getdataId({
      variables: {
        id: userId,
      },
    });
  };

  return (
    <div>
      <table cellPadding="5px" cellSpacing="0" style={{ margin: "auto" }}>
        <thead bgcolor="red">
          <td>Nama</td>
          <td>Umur</td>
          <td>Jenis Kelamin</td>
          <td bgcolor="white" className="removeBorder"></td>
        </thead>
        {dataId
          ? dataId?.passenger_list?.map((item) => (
              <ListItem
                key={item.id}
                data={item}
                hapusPengunjung={hapusPengunjung}
                onEdit={onClickEdit}
              />
            ))
          : data?.passenger_list?.map((item) => (
              <ListItem
                key={item.id}
                data={item}
                hapusPengunjung={hapusPengunjung}
                onEdit={onClickEdit}
              />
            ))}
      </table>
    </div>
  );
};

export default ListPassenger;
