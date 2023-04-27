import React from "react";
import BuyerConfirmOrders from "./BuyerConfirmOrders";

import { BuyerProvider } from "../../contexts/BuyerContext";
import { OrderProvider } from "../../contexts/OrderContext";

const index = () => {


    return (
        <>
            <OrderProvider>
                <BuyerProvider>
                    <BuyerConfirmOrders />
                </BuyerProvider>
            </OrderProvider>
        </>
    );
};

export default index;