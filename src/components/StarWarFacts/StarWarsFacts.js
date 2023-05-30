import FactsList from "../FactsList/FactsList";
import FormInputFacts from "../InputFacts/FormInputFacts";

export default function StarWarsFacts() {
    return (
        <div className="starwars-facts">
            <FormInputFacts />
            <FactsList />
        </div>
    )
}