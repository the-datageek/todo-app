import styles from './header.module.css'
import {AiOutlinePlusCircle} from 'react-icons/ai'
import { useState } from 'react';
import {TiTick} from 'react-icons/ti'

export function Header({onAddTask}){
    const [title, setTitle] = useState('');
    
    // function to add task
    function handleSubmit(event){
        event.preventDefault();

        onAddTask(title)
        setTitle('');
    }

    function onChangeTitle(event){
        setTitle(event.target.value);
    }


    return(
        <header className={styles.header}>
            <p className={styles.logo}><TiTick  style={{fill: '#ef6817'}} size={40}/> My To-Do App</p>
            {/* <img src={todoLogo}/> */}
            
            <form onSubmit={handleSubmit} className={styles.newTaskForm}>
                <input
                    type="text"
                    placeholder="Add a New Task"
                    value={title}
                    onChange={onChangeTitle}
                />
                <button>
                Create
                <AiOutlinePlusCircle size={20}/>
                </button>
            </form>
        </header>
    )
}