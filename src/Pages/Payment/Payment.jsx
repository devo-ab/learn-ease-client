import { useParams } from "react-router-dom";

const Payment = () => {

    const {id} = useParams();
    console.log("payment", id)

    return (
        <div>
            <h1>Payment</h1>
        </div>
    );
};

export default Payment;