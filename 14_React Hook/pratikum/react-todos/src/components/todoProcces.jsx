import ListTodo from "./listTodo";

export default function WillProcces ({ listDataTodos, deleteData, checkData }) {
    const listTodos = listDataTodos.map(listData => (
        <ListTodo key={listData.id} value={listData} delete={deleteData} check={checkData}/>
    ));
    
    return (
        <div className="list-todos mt-4">
            <ul>
                {listTodos}
            </ul>
        </div>
    )
}