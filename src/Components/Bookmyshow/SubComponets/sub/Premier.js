import './Premier.css'

function Premier(props) {
    return (<div className='premier'>
        <div class="card" >
            <img src={props.item.image} class="card-img-top" alt="..." />
            <div class="card-body">
                <h5 class="card-title premierText">{props.item.name}</h5>
                <h8 className='card-title premierText'>{props.item.detail}</h8>

            </div>
        </div>
    </div>)
}

export default Premier