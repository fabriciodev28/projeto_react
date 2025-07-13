function Pessoa({name, idade, profissao}){

    return(
        <div>
            <p>Olá, {name}!</p>
            <p>idade: {idade}!</p>
            <p>profissão: {profissao}!</p>
        </div>
    )

}

export default Pessoa