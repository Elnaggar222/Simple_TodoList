import Todo from "./Todo"

const Todos = (props) => {
    return (
        <div className="Todos-parent">
            {props.TodosList.map((eachtask) => (<Todo  
            eachtask={eachtask} 
            toggleDone={props.toggleDone} 
            deleteTask={props.deleteTask}
            editMode={props.editMode}
            usedMode={props.usedMode}
            key={eachtask.id}/>))}
            
            {props.TodosList.length === 0 && (<h3 className="no-Todo">لا يوجد مهام حالية ...</h3>)}
        </div>
    )
}

export default Todos