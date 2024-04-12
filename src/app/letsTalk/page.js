'use client';
import LetsTalk from "@/components/Letstalk/LetsTalk"
import { Lets_talkData } from "@/utilities/LetsTalkData"

const page = () => {
  return (
    <LetsTalk data={Lets_talkData} />
  )
}

export default page