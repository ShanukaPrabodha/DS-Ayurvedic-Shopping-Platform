import React from "react";
import BuyerRegister from "./BuyerRegister";

import { BuyerProvider } from "../../contexts/BuyerContext";

const index = () => {
    return (
        <BuyerProvider>
            <BuyerRegister />
        </BuyerProvider>
    );
};

export default index;