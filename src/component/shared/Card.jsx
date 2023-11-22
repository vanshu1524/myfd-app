import PropTypes from 'prop-types'

function Card({children, reverse}) {
  //return  <div className='card reverse'>
    //  {children}
    //</div>

    return (
        <div className="card"
        style={{
            backgroundColor: reverse ?' #fff' : 'rgba(0, 0, 0, 0.4)' ,
            color: reverse ? 'rgba(0, 0, 0, 0.4)' :  '#fff',
        }}
        >
            {children}
        </div>
    )
  
}
Card.defaultProps = {
    reverse: false,

}
 Card.propTypes = {
    children: PropTypes.node.isRequired,
    reverse: PropTypes.bool,
 }
export default Card
