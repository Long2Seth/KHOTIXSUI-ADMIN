'use client'

import CardPayment from "@/components/admin/CardPayment";
import CreatePaymentMethod from "@/components/admin/CreatePaymentMethod";

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
    return (
        <section className="p-10">
            <div className="w-full mx-auto">
                <div className=" flex justify-between ">
                    <div className=" space-y-2 my-5 ">
                        <h1 className="text-title-color text-lg md:text-2xl xl:text-4xl font-bold dark:text-secondary-color-text">
                            PAYMENT METHODS
                        </h1>
                        <p className="text-description-color text-base md:text-lg xl:text-xl">
                            Real-time insights for data-driven decisions
                        </p>
                    </div>
                    <CreatePaymentMethod/>
                    {/*<Button className=" text-secondary-color-text bg-primary-color dark:bg-primary-color hover:bg-primary-color/80 rounded-[6px] ">*/}
                    {/*    Create*/}
                    {/*</Button>*/}
                </div>
                <section className="grid grid-cols-1 gap-2 w-full">
                    {PaymentMethod.map((profileData, index) => (
                        <CardPayment key={index} profileData={profileData}/>
                    ))}
                </section>
            </div>
        </section>
    );
}