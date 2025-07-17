import Item from './Item'
import styles from './List.module.css'


function List(){
    return(
        <>
        <h1>Minha lista</h1>
        <ul className={styles.lista}>
            <Item marca="Ferrari"/>
            <Item marca="BMW"/>
            <Item marca="Audi"/>
        </ul>
        
        </>
    )
}

export default List