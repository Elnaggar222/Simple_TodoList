import FeatherIcon from "feather-icons-react";
const Todo = ({ eachtask , toggleDone , deleteTask , editMode , usedMode }) => {
    return (
        <div className={`Todo-parent ${ eachtask.done ? 'done':'' }`}>
            <div className="circle-style" onClick={()=> toggleDone(eachtask.id)}> <FeatherIcon icon={eachtask.done ? "check-circle":"circle"} size="17" /> </div>
            <div className="wirtten-task"> {eachtask.title} </div>
            {usedMode !== 'edit' && (
            <div className="Icons-parent">
                    <div className="Toedit" onClick={() => editMode(eachtask)} > <FeatherIcon icon="edit" size="17" /> </div>
                    <div className="Totrash" onClick={()=>deleteTask(eachtask.id)}> <FeatherIcon icon="trash-2" size="17" /> </div>
            </div>
            )}
        </div>
    )
}

export default Todo