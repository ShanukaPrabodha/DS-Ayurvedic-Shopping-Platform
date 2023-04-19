import React from "react";
import SellerLogin from "./SellerLogin";

import { SellerProvider } from "../../contexts/SellerContext";

const index = () => {
    return (
        <SellerProvider>
            <SellerLogin />
        </SellerProvider>
    );
};

export default index;