import React, { useState } from 'react';
import Image from 'next/image';
import Signature from './Signature';
import HCaptcha from '@hcaptcha/react-hcaptcha';

const OrderForm: React.FC = () => {
    const [formData, setFormData] = useState({
        fullName: '',
        projectRequirement: '',
        projectType: '',
        payCurrency: '',
        budget: '',
        deadline: '',
        referenceName: '',
        projectFiles: null as File | null,
        minimumPay: '',
        content: `First, you need to create robust product requirement documentation that clearly defines your goals and the scope of your work...`, // truncated for brevity
    });

    const [errors, setErrors] = useState<any>({});
    const [isCaptchaVerified, setIsCaptchaVerified] = useState(false);
    const [isSubmitSuccess, setIsSubmitSuccess] = useState(false);

    const HCAPTCHA_SITE_KEY = 'cc30dd1a-a148-4414-8f2a-548c2bc80cf2';

    // Handle hCaptcha verification
    const handleCaptchaChange = (token: string | null) => {
        if (token) {
            setIsCaptchaVerified(true);
        } else {
            setIsCaptchaVerified(false);
        }
    };

    // Handle form input changes
    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setFormData((prevState) => ({ ...prevState, [name]: value }));
    };

    // Handle file input changes
    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0]; 
        if (file) {
            setFormData((prevState) => ({
                ...prevState,
                projectFiles: file,
            }));
        }
    };

    // Validate the form
    const validateForm = () => {
        const newErrors: any = {};

        // Check required fields
        if (!formData.fullName) newErrors.fullName = 'Full Name is required.';
        if (!formData.projectRequirement) newErrors.projectRequirement = 'Project Requirement is required.';
        if (!formData.projectType) newErrors.projectType = 'Project Type is required.';
        if (!formData.payCurrency) newErrors.payCurrency = 'Pay Currency is required.';
        if (!formData.budget) newErrors.budget = 'Budget is required.';
        if (!formData.deadline) newErrors.deadline = 'Project Deadline is required.';
        if (!formData.referenceName) newErrors.referenceName = 'Reference Name is required.';
        if (!formData.projectFiles) newErrors.projectFiles = 'You must upload a file.';
        if (!formData.minimumPay) newErrors.minimumPay = 'Minimum Pay is required.';
        if (!isCaptchaVerified) newErrors.captcha = 'Please complete CAPTCHA verification.';

        setErrors(newErrors);

        // If there are no errors, the form is valid
        return Object.keys(newErrors).length === 0;
    };

    // Handle form submission
    const handleSubmit = () => {
        if (validateForm()) {
            setIsSubmitSuccess(true);
        } else {
            alert('Please fill out all required fields.');
        }
    };

    return (
        <div className="max-w-5xl -mt-15 mx-auto p-3 bg-white shadow-md rounded-md">
            {isSubmitSuccess ? (
                <div className="flex flex-col items-center justify-center p-6 bg-white rounded-lg shadow-lg w-[90%] max-w-md">
                    <div className="flex flex-col items-center">
                        <div className="bg-green-100 p-4 rounded-full mb-4">
                            <svg
                                className="h-8 w-8 text-red-600"
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                                fill="currentColor"
                            >
                                <path d="M10 15.172l-3.828-3.829L4 13.515 10 19.5 20.293 9.207l-1.415-1.414z" />
                            </svg>
                        </div>
                        <h2 className="text-2xl font-semibold text-red-600 mb-2">
                            Your order has been placed successfully
                        </h2>
                        <p className="text-center text-gray-700 mb-4">
                            Thank you so much for your order.
                        </p>

                        <button
                            type="button"
                            onClick={() => setIsSubmitSuccess(false)}
                            className="bg-yellow-500 text-white px-4 py-2 rounded hover:bg-yellow-600"
                        >
                            Check Status
                        </button>
                    </div>
                </div>
            ) : (
                <>
                    <div className='flex justify-between'>
                        <div className='flex justify-center text-center'>
                            <Image src="/logo.svg" alt='sign' width={80} height={20} />
                        </div>
                        <div className='flex-1'>
                            <h2 className="text-2xl font-bold flex justify-center">Stunning Design</h2>
                            <h3 className="text-xl flex justify-center ml-10 font-bold mb-4">Essential Details Of The Project</h3>
                        </div>
                        <div></div>
                    </div>

                    <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
                        <div>
                            <label className="block text-sm font-medium text-gray-700">Applicant&apos; Full Name</label>
                            <input
                                type="text"
                                name="fullName"
                                value={formData.fullName}
                                onChange={handleChange}
                                className="mt-1 block w-full border border-gray-300 rounded-md"
                            />
                            {errors.fullName && <p className="text-red-600">{errors.fullName}</p>}
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700">Project Requirement</label>
                            <select
                                name="projectRequirement"
                                value={formData.projectRequirement}
                                onChange={handleChange}
                                className="mt-1 block w-full border border-gray-300 rounded-md"
                            >
                                <option value="">Select type</option>
                                <option value="web">Normal</option>
                                <option value="app">Medium</option>
                                <option value="design">Urgent</option>
                            </select>
                            {errors.projectRequirement && <p className="text-red-600">{errors.projectRequirement}</p>}
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700">Type of Project</label>
                            <select
                                name="projectType"
                                value={formData.projectType}
                                onChange={handleChange}
                                className="mt-1 block w-full border border-gray-300 rounded-md"
                            >
                                <option value="">Select type</option>
                                <option value="web">Personal</option>
                                <option value="app">Government</option>
                                <option value="design">Private Company</option>
                            </select>
                            {errors.projectType && <p className="text-red-600">{errors.projectType}</p>}
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700">Pay Currency</label>
                            <input
                                type="text"
                                name="payCurrency"
                                value={formData.payCurrency}
                                onChange={handleChange}
                                className="mt-1 block w-full border border-gray-300 rounded-md"
                            />
                            {errors.payCurrency && <p className="text-red-600">{errors.payCurrency}</p>}
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700">Budget</label>
                            <input
                                type="number"
                                name="budget"
                                value={formData.budget}
                                onChange={handleChange}
                                className="mt-1 block w-full border border-gray-300 rounded-md"
                            />
                            {errors.budget && <p className="text-red-600">{errors.budget}</p>}
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700">Project Deadline</label>
                            <input
                                type="date"
                                name="deadline"
                                value={formData.deadline}
                                onChange={handleChange}
                                className="mt-1 block w-full border border-gray-300 rounded-md"
                            />
                            {errors.deadline && <p className="text-red-600">{errors.deadline}</p>}
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700">Reference Name</label>
                            <input
                                type="text"
                                name="referenceName"
                                value={formData.referenceName}
                                onChange={handleChange}
                                className="mt-1 block w-full border border-gray-300 rounded-md"
                            />
                            {errors.referenceName && <p className="text-red-600">{errors.referenceName}</p>}
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700">Upload Project File</label>
                            <input
                                type="file"
                                name="projectFiles"
                                onChange={handleFileChange}
                                className="mt-1 block w-full border border-gray-300 rounded-md"
                            />
                            {errors.projectFiles && <p className="text-red-600">{errors.projectFiles}</p>}
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700">Minimum Pay</label>
                            <input
                                type="text"
                                name="minimumPay"
                                value={formData.minimumPay}
                                onChange={handleChange}
                                className="mt-1 block w-full border border-gray-300 rounded-md"
                            />
                            {errors.minimumPay && <p className="text-red-600">{errors.minimumPay}</p>}
                        </div>
                    </div>

                    <div className="my-4">
                        <HCaptcha
                            sitekey={HCAPTCHA_SITE_KEY}
                            onVerify={handleCaptchaChange}
                        />
                        {errors.captcha && <p className="text-red-600">{errors.captcha}</p>}
                    </div>

                    <button
                        type="button"
                        onClick={handleSubmit}
                        className="mt-4 bg-yellow-500 text-white px-4 py-2 rounded hover:bg-yellow-600"
                    >
                        Submit
                    </button>
                </>
            )}
        </div>
    );
};

export default OrderForm;
