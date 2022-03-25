import { MdVisibility } from 'react-icons/md'

function Forum() {
  return (
    <div className='bg-white w-full h-full p-4 shadow-md rounded-md'>
      <span className='px-4 py-2 w-3/12 shadow-sm border-2 border-gray-800 flex justify-center flex-col rounded-md bg-white m-2'>
        <div className='font-bold'>Group Name</div>
        <div className='flex justify-between'>
          <div>15 Members</div>
          <div className=''><MdVisibility /></div>
        </div>
        <button className='bg-gray-800 text-white py-2 px-2 rounded-md my-3 hover:bg-gray-700'>Join</button>
      </span>
      <span className='px-4 py-2 w-3/12 shadow-sm border-2 border-gray-800 flex justify-center flex-col rounded-md bg-white m-2'>
        <div className='font-bold'>Group Name</div>
        <div className='flex justify-between'>
          <div>15 Members</div>
          <div className=''><MdVisibility /></div>
        </div>
        <button className='bg-gray-800 text-white py-2 px-2 rounded-md my-3 hover:bg-gray-700'>Join</button>
      </span>
      <span className='px-4 py-2 w-3/12 shadow-sm border-2 border-gray-800 flex justify-center flex-col rounded-md bg-white m-2'>
        <div className='font-bold'>Group Name</div>
        <div className='flex justify-between'>
          <div>15 Members</div>
          <div className=''><MdVisibility /></div>
        </div>
        <button className='bg-gray-800 text-white py-2 px-2 rounded-md my-3 hover:bg-gray-700'>Join</button>
      </span>
    </div>
  )
}

export default Forum