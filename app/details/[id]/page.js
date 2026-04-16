import React from 'react'
import EventDetails from '../../components/EventDetails'

export default async function page({params}) {
  const {id} = await params; 
  return (
    <EventDetails id = {id}/>
  )
}
