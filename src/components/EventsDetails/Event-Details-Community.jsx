import Link from 'next/link';

const Community = () => {
    return (
        <div>
            Suggested communities will appear here.
            <div className="flex flex-col p-2">
                <h1 className="text-xl font-semibold">GameDevUtopia</h1>
                <p className="text-base">A brief about club</p>
                <Link href={"https://discord.com/"} className='text-sm underline'> Join our community </Link>
            </div>
        </div>
    )
}

export default Community
