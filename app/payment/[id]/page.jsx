import Payment from '@/app/components/Payment'; 
import React from 'react'

export default async function page({params}) {
    const {id} = await params;
    console.log("Payment ID:", id);

    return (
        <Payment eventId = {id}/>
    )
}
