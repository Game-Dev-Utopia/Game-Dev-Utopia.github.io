"use client";
import React from 'react'
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"
import Winner from "@/components/EventsDetails/Event-Details-Winners"
import Link from 'next/link';

const EventsLowerHalf = () => {

    const [faqs, setFaqs] = React.useState([
        {
            Q: "Is this event accessible?",
            A: "Yes.",
        },
        {
            Q: "Location of the event?",
            A: "Pune",
        }
    ])

    return (
        <div>
            <Accordion type="multiple" collapsible className="sm:w-[80%] md:w-[75%] lg:w-[100%] my-2 p-4 w-[100%] mx-auto">
                <AccordionItem value="item-1">
                    <AccordionTrigger>RULES</AccordionTrigger>
                    <AccordionContent className="">
                        <ul className="space-y-3 list-disc px-4 list-outside leading-relaxed">
                            <li >Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt, alias eos! Consequatur voluptatum odio nobis qui non fuga, </li>
                            <li >dolore, reprehenderit molestias blanditiis eveniet beatae tempore dolores vel? Expedita incidunt eos nam nihil.</li>
                            <li >Rahul Rajiv Gandhi is an Indian politician and a member of the Indian Parliament, who represents the constituency of Wayanad, Kerala in the Lok Sabha.</li>
                            <li >Born in New Delhi, Gandhi spent his early childhood between Delhi and Dehradun and stayed away from the public sphere for much of his childhood and early youth. </li>
                            <li >In 2004, Gandhi announced his entrance to politics and successfully contested the general elections held that year from Amethi, a seat that was earlier held by his father; he won again from the constituency in 2009 and 2014. </li>
                            <li >Amidst calls from Congress party veterans for his greater involvement in party politics and national government, he was elected Congress vice-president in 2013, having served as the general secretary previously.</li>
                        </ul>
                    </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-2">
                    <AccordionTrigger>HINTS AND TIPS</AccordionTrigger>
                    <AccordionContent>
                        Currently there are no hints available. Please check back later.
                    </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-3">
                    <AccordionTrigger>WINNERS</AccordionTrigger>
                    <AccordionContent>
                        {/* Winners will be displayed here after the event ends. */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-10 items-center md:justify-center">
                            <Winner prize={"1st"} name={"Kiran Kankariya"} image={"https://github.com/shadcn.png"} medalColor={"#ffcf40"} />
                            <Winner prize={"2nd"} name={"Himanshu Pandey"} image={"https://github.com/shadcn.png"} />
                            <Winner prize={"3rd"} name={"Bhavyam Sanghavi"} image={"https://github.com/shadcn.png"} medalColor={"#b08d57"} />
                            <Winner prize={"4th"} name={"Kiran Kankariya"} image={"https://github.com/shadcn.png"} medalColor={"#383bff"} />
                        </div>
                    </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-4">
                    <AccordionTrigger>FAQs</AccordionTrigger>
                    <AccordionContent className="max-h-96 overflow-y-scroll">
                        {
                            faqs.map((faq, index) => (
                                <div key={index} className="flex flex-col p-2">
                                    <h1 className="text-lg font-semibold underline">Question: {faq.Q}</h1>
                                    <p className="text-sm">Answer: {faq.A}</p>
                                </div>
                            ))
                        }
                    </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-5">
                    <AccordionTrigger>COMMUNITY</AccordionTrigger>
                    <AccordionContent>
                        Suggested communities will appear here.
                        <div className="flex flex-col p-2">
                            <h1 className="text-xl font-semibold">GameDevUtopia</h1>
                            <p className="text-base">A brief about club</p>
                            <Link href={"https://discord.com/"} className='text-sm underline'> Join our community </Link>
                        </div>
                    </AccordionContent>
                </AccordionItem>

            </Accordion >
        </div>
    )
}

export default EventsLowerHalf;