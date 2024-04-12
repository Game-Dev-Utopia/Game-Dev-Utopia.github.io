const FAQ = ({ faqs }) => {
    if (!faqs) return;
    return (
        <div>
            {
                faqs.map((faq, index) => (
                    <div key={index} className="flex flex-col p-2">
                        <h1 className="text-lg font-semibold">
                            <span className="text-red-500">Question:</span> {faq.Q}
                        </h1>
                        <p className="text-sm">
                            <span className="text-green-500">Answer:</span> {faq.A}
                        </p>
                    </div>
                ))
            }
        </div>
    )
}

export default FAQ;
