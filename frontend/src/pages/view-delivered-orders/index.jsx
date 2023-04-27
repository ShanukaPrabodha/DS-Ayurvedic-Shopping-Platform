import React from "react";
import ViewDeliveryOrders from "./ViewDeliveredOrders";

// Import the OrderProvider from the OrderContext
import { OrderProvider } from "../../contexts/OrderContext";

const index = () => {
  return (
    <>
      {/* Wrap ViewDeliveryOrders with OrderProvider */}
      <OrderProvider>
        <ViewDeliveryOrders />
      </OrderProvider>
    </>
  );
};

export default index;
