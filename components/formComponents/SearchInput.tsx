'use client'
import React from 'react'
import { FiSearch } from 'react-icons/fi'
import { FaSearchLocation } from 'react-icons/fa'

interface Props {
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void
  type: string
  value: string
  name: string
  handleClick: (event: React.MouseEvent<HTMLElement>) => void
}
 
const SearchInput: React.FC<Props> = ({ handleClick, ...props }) => {
  return (
    <div className='flex content-center items-center shadow-md rounded-lg bg-secondary-grey py-2 px-3   border-solid  border-secondary-grey '>
      
      <input
        className='text-blue-500   
        border-none	outline-none 
        bg-secondary-grey
        focus:bg-secondary-grey
 

        
          placeholder-blue-500  '
        placeholder='search city or city,country'
        {...props}
      />
      <button onClick={handleClick} className=' text-blue-500    ml-4'>
        <span>
          <FaSearchLocation size={16} />
        </span>
      </button>
    </div>
  )
}

export default SearchInput
