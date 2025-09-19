import {Accordion, AccordionContent, AccordionItem, AccordionTrigger} from "./ui/accordion"
import {ServicesData} from "../data/data";

const Faq = () => {
    return (
        <div id="my-services"
             className="py-7 px-8 lg:py-9 lg:px-12 bg-white dark:bg-black"
        >
            <p className="text-2xl lg:text-3xl font-semibold md:font-bold lg:font-bold">My Services</p>
            <Accordion
                type="single"
                collapsible
                className="w-full md:w-[60%] lg:w-[80%]"
            >
                {ServicesData.map(({id, name, description, listHeader, list}) => (
                <AccordionItem value={String(id)}>
                            <AccordionTrigger className="text-xl border-b-1">{name}</AccordionTrigger>
                            <AccordionContent className="flex flex-col gap-2 mt-[4px]">
                                <p className="text-sm md:text-[16px] lg:text-[17px]">
                                    {description}
                                </p>
                                <h3 className="text-sm md:text-[16px] lg:text-[17px] font-semibold">
                                    {listHeader}
                                </h3>
                                <ul className="list-item">
                                {list.map((item, index) =>(
                                    <li key={index}
                                    className="pb-[5px] list-item text-sm md:text-[16px] lg:text-[17px]"
                                    >{item}</li>
                                ))}
                                </ul>
                            </AccordionContent>
                </AccordionItem>
                ))}
            </Accordion>
        </div>
    )
}
export default Faq
