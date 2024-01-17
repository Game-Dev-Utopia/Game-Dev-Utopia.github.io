import Games from '@/components/Games'
import DesignDetails from '@/components/DesignDetails'
export default function Page(){
  return (
    <div className=' h-[100vh]'>
    <div >
    </div>
    <div className='relative m-2 flex game-design-container'>
    <div className='border-b-[#FF6B00] border-2 border-t-0 border-r-0 border-l-0'>
    <Games />
    <DesignDetails />
    </div>
    </div>
    </div>
  )
}