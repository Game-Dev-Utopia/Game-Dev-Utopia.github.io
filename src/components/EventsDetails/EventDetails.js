"use client";
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation'
import eventsData from '../../utilities/EventDetailsData'
import Title from './Event-Details-Title';
import CountDown from './Event-Details-CountDown';
import Organisers from './Event-Details-Organisers';
import Prizes from './Event-Details-Prizes';
import {
    Accordion,
    AccordionItem,
    AccordionTrigger,
    AccordionContent
} from '../ui/accordion';

import Rules from './Event-Details-Rules';
import HintsAndTips from './Event-Details-Hints-and-Tips';
import Winners from './Event-Details-Winners';
import FAQ from './Event-Details-FAQ';
import Community from './Event-Details-Community';
import EventPageRegister from './Event-Details-Register';

import { getRequest } from '@/api/api';

const Break = () => {
    return (
        <>
            <br />
            <hr />
            <br />
        </>
    )
}


const EventPageLayout = ({ eventArray }) => {
    console.log(eventArray);
    const imageURL = eventArray?.imageURL
    const eventName = eventArray.eventName;
    const id = eventArray._id;
    const prizes = eventArray.prizes;
    const registrationDeadline = eventArray.registrationDeadline;
    const startsIn = eventArray.startsIn;
    const endsIn = eventArray.endsIn;
    const individualOrganizers = eventArray.individualOrganizer;
    const organisers = eventArray.organizers;
    const rules = eventArray.rules;
    const faqs = eventArray.faq;
    const starCount = 4.3;

    // Convert the dates to Date objects
    const startsInDate = new Date(startsIn);
    const endsInDate = new Date(endsIn);
    const currentDate = new Date();

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


    // Check if the dates are in the future and if they are present in the data
    const shouldRenderCountdown = (startsIn && startsInDate > currentDate) || (endsIn && endsInDate > currentDate);


    return (
        <div className='block sm:w-[80vw] lg:w-[50vw] mx-auto w-full h-full'>
            <Title name={eventName} rating={starCount} imgURL={imageURL} />
            <Break />
            {openRegisterModal === true && <EventPageRegister close={handleCloseModal} />}
            {shouldRenderCountdown && <>
                <CountDown
                    deadLine={registrationDeadline}
                    start={startsIn}
                    end={endsIn}
                    openRegisterPage={handleOpenModal}
                />
                <Break />
            </>}

            {
                (prizes.length > 0) &&
                <>
                    <Prizes prizes={prizes} />
                    <Break />
                </>
            }
            <Accordion type="multiple" collapsible="true" className="sm:w-[80%] md:w-[75%] lg:w-[100%] my-2 p-4 w-[100%] mx-auto">
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
                        {(shouldRenderCountdown || Winners.length > 0) ?
                            <Winners />
                            :
                            <p>Winners will be displayed here after the event ends.</p>
                        }

                    </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-5">
                    <AccordionTrigger>FAQs</AccordionTrigger>
                    <AccordionContent className="max-h-96 overflow-y-scroll">
                        {(faqs.length > 0) ?
                            <FAQ faqs={faqs} />
                            :
                            <h1>No FAQs Provided</h1>
                        }
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



const EventDetails = ({ params }) => {
    const id = params.id;
    console.log(id);

    const [event, setEvent] = useState(undefined);
    useEffect(() => {
        async function fetchData() {
            try {
                const response = await getRequest(`/api/event/getevent/${id}`)
                console.log(response);
                setEvent(response);
            } catch (error) {
                console.log(error);
            }
        }
        fetchData();
    }, [])
    return event ? <EventPageLayout eventArray={event} />
        : <></>
}

export default EventDetails;
