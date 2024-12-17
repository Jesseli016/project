import React from 'react';
import { FaCheckCircle, FaArrowRight } from 'react-icons/fa';

const steps = [
	{ id: 1, title: '確認購物車', completed: true },
	{ id: 2, title: '付款與運送方式', completed: false },
	{ id: 3, title: '填寫資料', completed: false },
	{ id: 4, title: '完成訂購', completed: false },
];

const Step = function () {
	const currentStep = steps.find((step) => !step.completed)?.id || steps.length;

	return (
		<div className="flex items-center justify-center p-4 bg-gray-50">
			{steps.map((step, index) => (
				<div key={step.id} className="flex items-center">
					<div className="flex flex-col items-center">
						
						<div
							className={`w-10 h-10 flex items-center justify-center rounded-full border-2 font-bold shadow-md mb-2 ${step.completed
									? 'bg-blue-700 border-blue-700 text-white'
									: step.id === currentStep
										? 'bg-gray-700 border-gray-700 text-white'
										: 'bg-white text-blue-700 border-blue-700'
								}`}
						>
							{step.completed ? (
								<FaCheckCircle className="h-6 w-6 text-white" />
							) : (
								<span>{step.id}</span>
							)}
						</div>
						
						<div
							className={`text-center font-bold ${step.completed
									? 'text-blue-700'
									: step.id === currentStep
										? 'text-gray-700'
										: 'text-blue-700'
								}`}
						>
							{step.title}
						</div>
					</div>

					{index !== steps.length - 1 && (
						<div className="flex items-center mx-2">
							<FaArrowRight className="text-blue-700 h-6 w-6" />
						</div>
					)}
				</div>
			))}
		</div>
	);
};

export default Step;
