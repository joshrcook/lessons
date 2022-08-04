import React from 'react';
import Home from './Home';

function App() {
    const [homes, setHomes] = React.useState();

    React.useEffect(() => {
        fetch('https://data.mongodb-api.com/app/challenges-xlbkk/endpoint/featuredRentalListings')
            .then((response) => {
                return response.json();
            })
            .then((data) => {
                setHomes(data);
            });
    }, []);

    return (
        <div class="container max-w-5xl mx-auto p-2 md:p-8">
            <div class="bg-zinc-100 rounded-3xl p-5 md:p-10">
                <h1 class="text-2xl md:text-3xl font-semibold text-zinc-800">Featured Homes</h1>
                <div class="mt-4 md:mt-6">
                    {homes && homes.map((home) => {
                        return (
                            <Home title={home.title} price={home.pricePerWeek} beds={home.beds} baths={home.baths} reviews={home.reviews} rating={home.rating} pets={home.petsAllowed} image={home.imageUrl} />
                        )
                    })}
                </div>
                <div class="text-center mt-8">
                    <button class="border-2 border-zinc-200 h-12 rounded-lg px-8 font-semibold text-zinc-800">View
                        all</button>
                </div>
            </div>
        </div>
    );
}

export default App;
