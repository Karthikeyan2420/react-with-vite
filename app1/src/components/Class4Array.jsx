
export const Class4Array = (props) => {
    const {items}=props;
  return (
    <div>
        <ul>
            {items.map((item)=>(<li key={item.id}>{item.name}</li>))}
        </ul>
    </div>
  )
}

Class4Array.prototype={
    items: PropTypes.arrayOf(
        PropTypes.shape({
        id: PropTypes.number.isRequired,
        name: PropTypes.string.isRequired
        })
    ).isRequired,
}