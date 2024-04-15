import React from 'react'
import DNDCard from '../card'

const DNDCanvas = ({ items }: { items: any }) => {
  console.log(items)
  return (
    <div className='w-[80%] bg-[#8B93FF] p-8 flex justify-center items-center rounded-md'>
      <DNDCard name={'Air Condition'} description={'Jio Home living'} items={items} />
    </div>
  )
}

export default DNDCanvas