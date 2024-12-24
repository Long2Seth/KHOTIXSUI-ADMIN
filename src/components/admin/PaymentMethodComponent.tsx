'use client'

import React, { useState } from 'react';
import CardPayment from "@/components/admin/CardPayment";
import CreatePaymentMethod from "@/components/admin/CreatePaymentMethod";
import { Pagination } from "@/components/admin/Pagination";

type ProfileData = {
    image: string;
    name: string;
    type: string;
    remark: string;
}

const PaymentMethod: ProfileData[] = [
    {
        image: "/khqr.png",
        name: "PAYMENT #1QR",
        type: "KHQR",
        remark: "for event."
    },
    {
        image: "/visa.png",
        name: "PAYMENT #2Visa",
        type: "Visa",
        remark: "for event."
    },
    {
        image: "/khqr.png",
        name: "PAYMENT #3QR",
        type: "KHQR",
        remark: "for event."
    },
    {
        image: "/visa.png",
        name: "PAYMENT #4Visa",
        type: "Visa",
        remark: "for event."
    },
    {
        image: "/khqr.png",
        name: "PAYMENT #5QR",
        type: "KHQR",
        remark: "for event."
    },
    {
        image: "/visa.png",
        name: "PAYMENT #6Visa",
        type: "Visa",
        remark: "for event."
    }
];

export default function PaymentMethodComponent() {
    const [currentPage, setCurrentPage] = useState(1);
    const [itemsPerPage, setItemsPerPage] = useState(5);

    const totalItems = PaymentMethod.length;

    // Get current items
    const currentItems = PaymentMethod.slice(
        (currentPage - 1) * itemsPerPage,
        currentPage * itemsPerPage
    );

    return (
        <section className="p-10 ">
            <section className="w-full mx-auto">
                <section className="flex justify-between">
                    <div className="space-y-2 my-5">
                        <h1 className="text-title-color text-lg md:text-2xl xl:text-4xl font-bold dark:text-secondary-color-text">
                            PAYMENT METHODS
                        </h1>
                        <p className="text-description-color text-base md:text-lg xl:text-xl dark:text-dark-description-color">
                            Real-time insights for data-driven decisions
                        </p>
                    </div>
                    <CreatePaymentMethod />
                </section>
                <section className="grid grid-cols-1 gap-2 w-full">
                    {currentItems.map((profileData, index) => (
                        <CardPayment key={index} profileData={profileData} />
                    ))}
                </section>
            </section>

            <Pagination
                totalItems={totalItems}
                itemsPerPage={itemsPerPage}
                currentPage={currentPage}
                onPageChange={setCurrentPage}
                onItemsPerPageChange={setItemsPerPage}
            />
        </section>
    );
}