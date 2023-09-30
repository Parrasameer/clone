import './Recomended.css'
function Recomended(pros) {
    return (
        <div>

            <div className=" recommended"> <div >
                <a>  <img src={pros.item.image} alt="" /></a>
                <div className="card-body">
                    <h5 className="card-title">{pros.item.name}</h5>
                    <p className="card-text">{pros.item.details}</p>

                </div>
            </div></div></div >
    )
}
export default Recomended