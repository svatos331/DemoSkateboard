

export const Listmusic = ({ data }) => {
    return (
        <li className="anim">
            <div className="plItem">
                <span className="plNum">{data.track}</span>
                <span className="plTitle">{data.name}</span>
                <span className="plLength">{data.duration}</span>
            </div>
        </li>
    )
}





