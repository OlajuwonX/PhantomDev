
import {InfiniteMovingCards} from "./ui/infinite.card";
import {testimonials} from "../data/data";

const Clients = () => {
    return (
        <div className='py-10 px-5 md:px-10 lg:px-12' id='testimonials'>
            <h1 className='flex uppercase text-2xl lg:text-3xl font-bold pb-4'>
                Feedback & Reactions
            </h1>
            <div className='m-5 flex flex-col items-center max-lg:mt-6'>
                <InfiniteMovingCards
                    items={testimonials}
                    direction='right'
                    speed='slow'
                />
            </div>
        </div>
    )
}

export default Clients