"use client"
import Image from 'next/image';

const Diamonds = ({image1,image2,image3})=>
{
    console.log("From diamonds");
    console.log(image1,image2,image3);
    
    return(
        <>
            <div className="hidden lg:block absolute right-5 top-0 mt-14 ">
                <div className="relative -left-[60%]">
                    <div className="absolute rotate-45 w-[180px]  h-[180px] left-[15%] top-[15.4%] shadow-[0_20px_50px_rgba(8,_112,_184,_0.7)]">
                    </div>
                    <div className="bg-clip-text border-gray-200">
                        <Image
                            width={200}
                            height={200}
                            alt="Coding Image"
                            src={image1}
                            className={`w-[250px] aspect-square DiamondClipPath`}
                        />
                    </div>
                </div>


                <div className="relative -translate-y-[40%]">
                    <div className="absolute rotate-45 w-[180px] z-[-1] h-[180px] left-[15%] top-[15.4%] shadow-[0_20px_50px_rgba(8,_112,_184,_0.7)]">
                    </div>
                    <div className="bg-clip-text border-gray-200">
                        <Image
                            width={200}
                            height={200}
                            alt="Coding Image"
                            src={image2}
                            className={`w-[250px] h-[250px] aspect-square DiamondClipPath`}
                        />
                    </div>
                </div>

                <div className="relative -left-[60%] -translate-y-[80%]">
                    <div className="absolute rotate-45 w-[180px] z-[-1] h-[180px] left-[15%] top-[15.4%] shadow-[0_20px_50px_rgba(8,_112,_184,_0.7)]">
                    </div>
                    <div className="bg-clip-text border-gray-200">
                        <Image
                            width={200}
                            height={200}
                            alt="Coding Image"
                            src={image3}
                            className={`w-[250px] aspect-square DiamondClipPath`}
                        />
                    </div>
                </div>
            </div>


            <div className="block lg:hidden h-[300px] right-14 bottom-4">
            </div>
            <div className="block h-[400px] lg:hidden absolute right-[50%] top-5">
                <div className="relative left-[50%]">
                    <div className="absolute rotate-45 w-[100px]  h-[100px] left-[15%] top-[15.4%] shadow-[0_20px_50px_rgba(8,_112,_184,_0.7)]">
                    </div>
                    <div className="bg-clip-text border-gray-200">
                        <Image
                            width={200}
                            height={200}
                            alt="Coding Image"
                            src={image1}
                            className={`w-[150px] aspect-square DiamondClipPath`}
                        />
                    </div>
                </div>

                <div className="relative -left-[3%] bottom-[15%]">
                    <div className="absolute rotate-45 w-[100px]  h-[100px] left-[15%] top-[15.4%] shadow-[0_20px_50px_rgba(8,_112,_184,_0.7)]">
                    </div>
                    <div className="bg-clip-text border-gray-200">
                        <Image
                            width={200}
                            height={200}
                            alt="Coding Image"
                            src={image2}
                            className={`w-[150px] aspect-square DiamondClipPath`}
                        />
                    </div>
                </div>
                <div className="relative left-[105%] bottom-[52.5%]">
                    <div className="absolute rotate-45 w-[100px]  h-[100px] left-[15%] top-[15.4%] shadow-[0_20px_50px_rgba(8,_112,_184,_0.7)]">
                    </div>
                    <div className="bg-clip-text border-gray-200">
                        <Image
                            width={200}
                            height={200}
                            alt="Coding Image"
                            src={image3}
                            className={`w-[150px] aspect-square DiamondClipPath`}
                        />
                    </div>
                </div>
            </div>
        </>
    )
}
export default Diamonds