function Streaming(props) {
    return (
        <div>
            <div class="card" >
                <img src={props.item.image} class="card-img-top" alt="..." />
                <div class="card-body">
                    <b> <p class="card-title streamingText ">{props.item.name}</p></b>
                    <p class="card-text">{props.item.detail}</p>

                </div>
            </div>

        </div>
    )
}


export default Streaming