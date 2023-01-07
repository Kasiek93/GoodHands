import { Link } from 'react-router-dom';

const Buttons = () => {
    return (
        <div className="buttons">
            <Link to="/oddaj-rzeczy" className="buttons-b">ODDAJ <br /> RZECZY</Link>
            <Link to="/zbiorka" className="buttons-b">ZORGANIZUJ <br /> ZBIÓRKĘ</Link>
        </div>
    )
}

export default Buttons;