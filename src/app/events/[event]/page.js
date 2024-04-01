'use client';
import { useRouter } from 'next/navigation'
import eventsData from '@/utilities/EventDetailsData'
import Title from '@/components/EventsDetails/Event-Details-Title';
import CountDown from '@/components/EventsDetails/Event-Details-CountDown';
import Organisers from '@/components/EventsDetails/Event-Details-Organisers';
import Prizes from '@/components/EventsDetails/Event-Details-Prizes';
import {
    Accordion,
    AccordionItem,
    AccordionTrigger,
    AccordionContent
} from '@/components/ui/accordion';

import Rules from '@/components/EventsDetails/Event-Details-Rules';
import HintsAndTips from '@/components/EventsDetails/Event-Details-Hints-and-Tips';
import Winners from '@/components/EventsDetails/Event-Details-Winners';
import FAQ from '@/components/EventsDetails/Event-Details-FAQ';
import Community from '@/components/EventsDetails/Event-Details-Community';
import EventPageRegister from '@/components/EventsDetails/Event-Details-Register';
import { useEffect, useState } from 'react';

const Break = () => {
    return (
        <>
            <br />
            <hr />
            <br />
        </>
    )
}

const EventPageLayout = ({ params }) => {
    const videoUrl = params.videoUrl;
    const eventName = params.eventName;
    const starCount = params.starCount;
    const prizes = params.prizes;
    const registrationDeadline = params.registrationDeadline;
    const startsIn = params.startsIn;
    const endsIn = params.endsIn;
    const individualOrganizers = params.individualOrganizer;
    const organisers = params.organizers;
    const rules = params.rules;
    const faqs = params.faq;

    const [openRegisterModal, setOpenRegisterModal] = useState(false);
    const handleOpenModal = () => {
        console.log("clicked");
        setOpenRegisterModal(true);
    }
    const handleCloseModal = () => {
        setOpenRegisterModal(false);
    }

    useEffect(() => {
        // Add body-no-scroll class to body element when modal is opened
        if (openRegisterModal === true) {
            document.body.classList.add('body-no-scroll');
        } else {
            // Remove body-no-scroll class from body element when modal is closed
            document.body.classList.remove('body-no-scroll');
        }
        // Cleanup function to remove the class when component unmounts
        return () => {
            document.body.classList.remove('body-no-scroll');
        };
    }, [openRegisterModal]);

    return (
        <div className='block sm:w-[50vw] sm:mx-[25vw] w-full h-full'>
            <Title name={eventName} rating={starCount} />
            <Break />
            {openRegisterModal === true && <EventPageRegister close={handleCloseModal} />}
            <CountDown deadLine={registrationDeadline} start={startsIn} end={endsIn} openRegisterPage={handleOpenModal} />
            <Break />
            <Prizes prizes={prizes} />
            <Break />


            <Accordion type="multiple" collapsible className="sm:w-[80%] md:w-[75%] lg:w-[100%] my-2 p-4 w-[100%] mx-auto">
                <AccordionItem value="item-1">
                    <AccordionTrigger>ORGANIZERS</AccordionTrigger>
                    <AccordionContent className="">
                        <Organisers organisers={organisers} />
                    </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-2">
                    <AccordionTrigger>RULES</AccordionTrigger>
                    <AccordionContent className="">
                        <Rules rules={rules} />
                    </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-3">
                    <AccordionTrigger>HINTS AND TIPS</AccordionTrigger>
                    <AccordionContent>
                        <HintsAndTips />
                    </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-4">
                    <AccordionTrigger>WINNERS</AccordionTrigger>
                    <AccordionContent>
                        {/* Winners will be displayed here after the event ends. */}
                        <Winners />
                    </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-5">
                    <AccordionTrigger>FAQs</AccordionTrigger>
                    <AccordionContent className="max-h-96 overflow-y-scroll">
                        <FAQ faqs={faqs} />
                    </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-6">
                    <AccordionTrigger>COMMUNITY</AccordionTrigger>
                    <AccordionContent>
                        <Community />
                    </AccordionContent>
                </AccordionItem>
            </Accordion >
        </div>
    )

}


const page = ({ params }) => {
    const router = useRouter(); // Whats this for?
    const eventName = params.event;
    var event = null;


    for (let index = 0; index < eventsData.events.length; index++) {
        const element = eventsData.events[index];
        if (element.eventName.replace(" ", "").toLowerCase() == eventName.toLowerCase())
            event = element;

    }
    // console.log(event);
    if (event == null)
        return <p>{eventName}: Does not exist </p>

    return <EventPageLayout params={event} />
}

export default page;
