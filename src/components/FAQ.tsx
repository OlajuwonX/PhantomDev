import {Accordion, AccordionContent, AccordionItem, AccordionTrigger} from "./ui/accordion"
import {ServicesData} from "../data/data";
import ScrollReveal from "./ui/scrollreveal";

const Faq = () => {
    return (
        <div id="my-services"
             className="py-10 px-5 lg:py-10 lg:px-12 bg-white dark:bg-black"
        >
            <p className="text-2xl lg:text-3xl pb-5 font-semibold md:font-bold lg:font-bold uppercase">My Services</p>
            <Accordion
                type="single"
                collapsible
                className="w-full md:w-[60%] lg:w-[80%]"
            >
                {ServicesData.map(({id, name, description, listHeader, list}) => (
                <AccordionItem value={String(id)}>
                    <ScrollReveal delay={0.1 * id + 0.1}>
                        <AccordionTrigger className="text-[16px] border-b-1">{name}</AccordionTrigger>
                        <AccordionContent className="flex flex-col gap-2 mt-[4px]">
                            <p className="text-[15px] md:text-[16px] lg:text-[17px]">
                                {description}
                            </p>
                            <h3 className="text-[15px] md:text-[16px] lg:text-[17px] font-semibold">
                                {listHeader}
                            </h3>
                            <ul className="list-item">
                                {list.map((item, index) =>(
                                    <li key={index}
                                        className="pb-[5px] list-item text-[15px] md:text-[16px] lg:text-[17px]"
                                    >{item}</li>
                                ))}
                            </ul>
                        </AccordionContent>
                    </ScrollReveal>

                </AccordionItem>
                ))}
            </Accordion>
        </div>
    )
}
export default Faq
