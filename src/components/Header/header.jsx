import styles from './header.module.css'
export function Header(){

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