function Greetings({ nome, mensagem = "Seja bem vindo(a)!"}) {
    return(
        <div className="greeting">
            <span className="greeting_eyebrow">React - Primeiros Passos</span>
            <h1>{nome}, {mensagem}</h1>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
                Dolorem, et impedit consequatur iste natus quas culpa nesciunt, 
                aliquid ad quibusdam dolore sint animi minus sapiente necessitatibus earum,
                molestias eaque magni!</p>
        </div>
    );
}
export default Greetings;