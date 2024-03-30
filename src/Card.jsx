import p from './assets/Jane.jpg'
function Card()
{
    return(
        <div className="card">
            <img className="card-image" src={p} alt="Profile" style={{ width: '200px' }}></img>
            <h2 className="card-title">Janeesh</h2>
            <p className="card-text">I make you happy</p>
        </div>
        
    );
}
export default Card