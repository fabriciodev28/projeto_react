function Evento(){

    function meuEvento(){
        console.log("Clicado")
    }


    return(
        <>
        <p>Clique no botão abaixo</p>
        <button onClick={meuEvento}>Click!</button>
        </>
    )
}

export default Evento