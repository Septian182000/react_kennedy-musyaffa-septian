export default function ListTodo(props) {
    return (
        <>
            <div className={props.value.completed ? 'completed' : 'unCompleted'}>
                <div className="list">
                    <div>
                        <input
                            type="checkbox"
                            onClick={() => props.check(props.value)}
                            defaultChecked={props.value.completed ? true : !true}
                        />
                    </div>    
                    <div>
                        <p>{props.value.title}</p>
                    </div>
                    <div>
                        <i className="fa-solid fa-trash delete" onClick={() => props.delete(props.value.id)}></i>
                    </div>
                </div>
            </div>
        </>
    )
}