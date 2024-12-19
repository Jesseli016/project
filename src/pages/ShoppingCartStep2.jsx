import React, { useState } from "react";
import StepIcon from "../components/StepIcon";
import PaymentOptions from "../components/PaymentOptions";
import OrderSummary from "../components/OrderSummary";
import Button from "../components/Button";

function App() {
  const [currentStep, setCurrentStep] = useState(2);
  const [selectedPayment, setSelectedPayment] = useState("");

  const paymentOptions = [
    { id: "cod", label: "宅配貨到付款" },
    { id: "credit", label: "信用卡付款" },
  ];

  const orderData = {
    itemsCount: 2,
    totalPrice: 998,
    shippingFee: 98,
    discount: 0,
  };

  return (
    <div className="max-w-4xl mx-auto p-6 bg-gray-100 min-h-screen">
      <h1 className="text-2xl font-bold mb-6 text-center">結帳流程</h1>

      {/* 步驟圖示 */}
      <StepIcon step={currentStep.toString()} />

      {/* 付款方式選擇 */}
      <PaymentOptions
        options={paymentOptions}
        selectedOption={selectedPayment}
        onSelect={setSelectedPayment}
      />

      {/* 訂單摘要 */}
      <OrderSummary
        itemsCount={orderData.itemsCount}
        totalPrice={orderData.totalPrice}
        shippingFee={orderData.shippingFee}
        discount={orderData.discount}
      />

      {/* 按鈕 */}
      <div className="flex justify-between mt-6">
        <Button
          label="返回上一步"
          onClick={() => setCurrentStep((prev) => Math.max(prev - 1, 1))}
          className="bg-gray-300 hover:bg-gray-400"
        />
        <Button
          label="下一步"
          onClick={() => setCurrentStep((prev) => Math.min(prev + 1, 4))}
          disabled={!selectedPayment}
          className={
            selectedPayment
              ? "bg-blue-500 text-white hover:bg-blue-600"
              : "bg-gray-300 text-gray-500 cursor-not-allowed"
          }
        />
      </div>
    </div>
  );
}

export default App;