export default function SectionsOverlay() {
  return (
    <aside className='absolute top-0 left-0 z-50 flex w-screen h-screen pointer-events-none'>
      <div className='border-2 w-[50%] h-[calc(100%-3rem)] border-dashed border-gray-500 m-6 mr-3 p-2'>
        <p>Left</p>
      </div>
      <div className='m-6 ml-3 border-2 w-[50%] h-[calc(100%-3rem)] border-dashed border-gray-500 p-2'>
        <p>Right</p>
      </div>
    </aside>
  )
}
