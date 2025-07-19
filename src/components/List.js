import Item from './Item'
import styles from './List.module.css'


function List(){
    return(
        <>
        <h1>Minha lista</h1>
        <ul className={styles.lista}>
            <Item marca="Ferrari" ano_lancamento={1987}/>
            <Item marca="BMW" ano_lancamento={1977}/>
            <Item marca="Audi" ano_lancamento={2000}/>
            <Item marca="Chevrolet" ano_lancamento={1980}/>
            <Item/>
        </ul>
        
        </>
    )
}

export default List