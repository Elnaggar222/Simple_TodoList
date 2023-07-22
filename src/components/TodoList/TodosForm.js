import FeatherIcon from "feather-icons-react";
import { useState } from "react";

const TodosForm = ({ addtodoTask , TotoggleMode , usedMode , taskObjectToEdit }) => {
    const [newTaskTitle,setnewTaskTitle] = useState('')
    const [renderStop,setRenderStop] = useState(false)
    
    if(usedMode === 'edit' &&  !renderStop){
        setnewTaskTitle(taskObjectToEdit.title)
        setRenderStop(true)
    }

    const setTaskTitleState = (e) => {
        setnewTaskTitle(e.target.value)
    }
    const checkAndSentTitle = () => {
        setRenderStop(false)
        if(!newTaskTitle.trim()){
            return;
        } 
        addtodoTask(newTaskTitle.trim())
        setnewTaskTitle('');
    }
    return (
        <div className={`TodosForm-parent ${usedMode === 'Filter' ? 'done':''}`}>
            <div className={`circle-style ${usedMode==='edit'?"chage-color-circuit":""}`} onClick={TotoggleMode}> <FeatherIcon icon={usedMode==='edit' ? "alert-circle":"circle"} size="17" /> </div>
            <input value={newTaskTitle} onChange={setTaskTitleState} type="text" placeholder="أضف مهمة جديدة ..." />
            <button disabled={!newTaskTitle.trim()} onClick={checkAndSentTitle}>
                {(usedMode === 'edit') ? "تعديل.." : "إضافة"}  
            </button>
        </div>
    )
}

export default TodosForm