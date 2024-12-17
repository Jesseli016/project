import React, { useState } from "react";
import Button from "./components/Button";
import Step from "./components/Step";
import OrderSummary from "./components/OrderSummary";

function App() {
  const steps = ["確認購物車", "付款與運送方式", "填寫資料", "完成訂購"];
  const [currentStep, setCurrentStep] = useState(1);

  // 訂單資訊
  const orderData = {
    itemsCount: 2,
    totalPrice: 998,
    shippingFee: 98,
    discount: 0,
  };

  return (
    <div className="max-w-4xl mx-auto p-6 bg-gray-100">
      <Step steps={steps} currentStep={currentStep} />

      <OrderSummary
        itemsCount={orderData.itemsCount}
        totalPrice={orderData.totalPrice}
        shippingFee={orderData.shippingFee}
        discount={orderData.discount}
      />

      <div className="flex justify-between mt-6">
        <Button label="返回上一步" onClick={() => setCurrentStep(currentStep - 1)} />
        <Button label="下一步" onClick={() => setCurrentStep(currentStep + 1)} />
      </div>
    </div>
  );
}

export default App;