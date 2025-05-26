import { useNavigate } from "react-router";
import Header from "../components/Header";
import CustomForm from "../components/CustomForm";

export default function Checkout(){
    
    return(<>
                <Header heading={"Checkout"} ></Header>
                <CustomForm heading="Payment Details">


                </CustomForm>
                </>
        
    )
}