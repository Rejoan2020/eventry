import React from 'react'
import EventDetails from '../../components/EventDetails'
import { getEvent } from '@/app/db/queries';

export async function generateMetadata({params}) {
  const {id} = await params; 
  const event = await getEvent(id);
  return { 
    title:`Eventry - ${event.name}`,
    description: event.description,
    image: event.imageUrl
  }
}

export default async function page({params}) {
  const {id} = await params; 
  return (
    <EventDetails id = {id}/>
  )
}
