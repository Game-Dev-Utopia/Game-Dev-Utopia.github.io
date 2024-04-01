const Rules = ({ rules }) => {
    return (
        <ul className="space-y-3 list-disc px-4 list-outside leading-relaxed">
            {rules.map((rule, i) => <li key={i}>{rule}</li>)}
        </ul>
    )
}

export default Rules;
