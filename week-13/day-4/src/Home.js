

function Home(props) {

    return (
        <div
            class="overflow-hidden flex flex-col md:flex-row items-center bg-white md:p-8 p-6 gap-x-8 rounded-3xl mt-10 first:mt-0">
            <div class="w-full md:w-auto">
                <div class="aspect-square w-full md:w-48 flex-shrink-0 flex-grow-0 bg-zinc-200 rounded-2xl bg-center bg-cover" style={{
                    backgroundImage: 'url(' + props.image + ')'
                }}></div>
            </div>
            <div class="w-full">
                <div class="flex justify-between text-lg md:text-xl flex-col md:flex-row">
                    <div class="font-semibold text-zinc-800 mt-4 md:mt-0">{props.title}</div>
                    <div class="text-rose-500 font-semibold mt-1 md:mt-0">${props.price}/week</div>
                </div>
                <div
                    class="flex flex-col md:flex-row items-start md:items-center text-sm md:text-base md:gap-5 text-zinc-500 mt-2">
                    <div class="flex items-center gap-2">
                        <i class="fa-solid fa-bed"></i>
                        <span>{props.beds} beds</span>
                    </div>
                    <div class="flex items-center gap-2">
                        <i class="fa-solid fa-shower"></i>
                        <span>{props.baths} baths</span>
                    </div>
                    <div class="flex items-center gap-2">
                        <i class="fa-solid fa-paw"></i>
                        {props.petsAllowed == true && <span>pets allowed</span>}
                        {props.petsAllowed == false && <span>no pets allowed</span>}
                    </div>
                </div>

                <div
                    class="border-t border-zinc-200 mt-3 pt-3 md:mt-6 md:pt-6 flex flex-col md:flex-row gap-y-2 items-center justify-between">
                    <div class="flex gap-1 md:gap-2 text-zinc-600 text-sm md:text-base">
                        <i class="fa-solid fa-star leading-6 text-yellow-400"></i> <span
                            class="leading-7">{props.rating}&nbsp;({props.reviews}&nbsp;reviews)</span>
                    </div>
                    <div class="w-full md:w-auto">
                        <button
                            class="h-12 bg-rose-500 text-white px-8 font-semibold rounded-lg w-full">Book
                            Now</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home;