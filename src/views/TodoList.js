import TodosForm from "../components/TodoList/TodosForm"
import Todos from "../components/TodoList/Todos"
import { useState } from "react"

// const initialList = [
//     { id: 1, title: "شراء مستلزمات", done: false },
//     { id: 2, title: "شراء منتجات", done: true },
//     { id: 3, title: "مشاهدة الكورس", done: false },
//     { id: 4, title: "كتابة الكود", done: true },
// ]

const TodoList = ({ getLength }) => {

    const initialList = localStorage.getItem('todosList') ? JSON.parse(localStorage.getItem('todosList')) : []
    const [todosList,setTodosList] = useState(initialList)

    // Modes are => ( Add or Filter or edit )
    const [usedMode,setMode] = useState('Add')
    const [taskObjectToEdit,settaskObjectToEdit] = useState(null)

    const toggleDone = (id) => {
        const newTodosList = todosList.map((eachtask) => {
            if(eachtask.id === id){
                eachtask.done = !eachtask.done    
            }
            return eachtask;
        })
        setTodosList(newTodosList)
    }

    const deleteTask = (id) => {
        const newTodosList = todosList.filter((eachtask) => {
            return eachtask.id !== id;
        })
        setTodosList(newTodosList)
    }

    const addtodoTask = (taskTitle) => {
        if(usedMode !== 'edit'){

        
        const newTaskToAdd = {
            id: Date.now(),
            title: taskTitle,
            done: false
        }
        setTodosList((todosList) => {
            return [newTaskToAdd , ...todosList]
        })
    
    }else if(usedMode === 'edit'){
        const todoListAfterEditDone = todosList.map((ele) => {
            if(ele.id === taskObjectToEdit.id){
                ele.title = taskTitle
            }   
            return ele
        })
        // settaskObjectToEdit(null)
        setTodosList(todoListAfterEditDone)
        setMode('Add')
    }
}
    const TotoggleMode = () => {
        if(usedMode === 'edit'){
            return ;
        }
        if(usedMode === 'Filter'){
            setMode('Add')
        }else{
            setMode('Filter')
        }
    }
    
    
    const editMode = (taskObjectToEdit) => {
        setMode('edit')
        settaskObjectToEdit(taskObjectToEdit)
    }
    
    let currentTodos = [...todosList]

    if(usedMode ==='edit' && taskObjectToEdit!==null ){    //  شغال عادى من غير الشرط التانى
        currentTodos = [taskObjectToEdit]
    }

    if(usedMode === 'Filter'){
        currentTodos = todosList.filter((ele)=>!ele.done)
    }

    const setToLocalStorage = () => {
        localStorage.setItem('todosList',JSON.stringify(todosList))
    }

    setToLocalStorage()

    // getLength(todosList.length)

    return (
        <div className="TodoList-parent">
            
            <TodosForm 
            addtodoTask={addtodoTask} 
            TotoggleMode={TotoggleMode} 
            usedMode={usedMode}
            taskObjectToEdit={taskObjectToEdit}
            />
            
            <Todos 
            TodosList={currentTodos} 
            toggleDone={toggleDone} 
            deleteTask={deleteTask} 
            editMode={editMode}
            usedMode={usedMode}
            />
            {getLength(todosList.length)}
        </div>
    )
}

export default TodoList