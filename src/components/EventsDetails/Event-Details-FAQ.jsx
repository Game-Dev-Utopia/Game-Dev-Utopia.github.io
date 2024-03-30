const FAQ = ({ faqs }) => {
    if (!faqs) return;
    return (
        <div>
            {
                faqs.map((faq, index) => (
                    <div key={index} className="flex flex-col p-2">
                        <h1 className="text-lg font-semibold underline">Question: {faq.Q}</h1>
                        <p className="text-sm">Answer: {faq.A}</p>
                    </div>
                ))
            }
        </div>
    )
}

export default FAQ;
