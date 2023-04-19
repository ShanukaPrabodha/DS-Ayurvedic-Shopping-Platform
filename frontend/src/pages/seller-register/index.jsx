import React from "react";
import SellerRegister from "./SellerRegister.";

import { SellerProvider } from "../../contexts/SellerContext";

const index = () => {
    return (
        <SellerProvider>
            <SellerRegister />
        </SellerProvider>
    );
};

export default index;