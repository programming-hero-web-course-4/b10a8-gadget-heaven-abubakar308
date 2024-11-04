
const Card = ({gadget}) => {
    console.log(gadget.product_id)
    return (
        <div>
            <p>{gadget.product_title} </p>
        </div>
    );
};

export default Card;