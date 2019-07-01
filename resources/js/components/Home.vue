<template>
    <div>
        <main class="flex-1 md:p-0 lg:pt-8 lg:px-8 md:ml-24 flex flex-col">
            <section class="p-4">
                <div class="md:flex">
                    <h2 class="md:w-1/3 uppercase tracking-wide text-sm sm:text-lg mb-6">Create New Location</h2>
                </div>
                <form class="w-full max-w-lg">
                    <div class="flex flex-wrap -mx-3 mb-6">
                        <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                            <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-first-name">
                                First Name
                            </label>
                            <input class="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-first-name" type="text" placeholder="Jane">
                            <p class="text-red-500 text-xs italic">Please fill out this field.</p>
                        </div>
                        <div class="w-full md:w-1/2 px-3">
                            <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-last-name">
                                Last Name
                            </label>
                            <input class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-last-name" type="text" placeholder="Doe">
                        </div>
                    </div>
                    <div class="flex flex-wrap -mx-3 mb-6">
                        <div class="w-full px-3">
                            <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-password">
                                Password
                            </label>
                            <input class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-password" type="password" placeholder="******************">
                            <p class="text-gray-600 text-xs italic">Make it as long and as crazy as you'd like</p>
                        </div>
                    </div>
                    <div class="flex flex-wrap -mx-3 mb-2">
                        <div class="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                            <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-city">
                                City
                            </label>
                            <input class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-city" type="text" placeholder="Albuquerque">
                        </div>
                        <div class="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                            <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-state">
                                State
                            </label>
                            <div class="relative">
                                <select class="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-state">
                                    <option>New Mexico</option>
                                    <option>Missouri</option>
                                    <option>Texas</option>
                                </select>
                                <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                                    <svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
                                </div>
                            </div>
                        </div>
                        <div class="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                            <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-zip">
                                Zip
                            </label>
                            <input class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-zip" type="text" placeholder="90210">
                        </div>
                    </div>
                </form>
                <form>
                    <div class="md:flex mb-8">
                        <div class="md:w-1/3">
                            <legend class="uppercase tracking-wide text-sm">Location</legend>
                            <p class="text-xs font-light text-red">This entire section is required.</p>
                        </div>
                        <div class="md:flex-1 mt-2 mb:mt-0 md:px-3">
                            <div class="mb-4">
                                <label class="block uppercase tracking-wide text-xs font-bold">Name</label>
                                <input class="w-full shadow-inner p-4 border-0" type="text" name="name" placeholder="Acme Mfg. Co.">
                            </div>
                            <div class="md:flex mb-4">
                                <div class="md:flex-1 md:pr-3">
                                    <label class="block uppercase tracking-wide text-charcoal-darker text-xs font-bold">Street Address</label>
                                    <input class="w-full shadow-inner p-4 border-0" type="text" name="address_street" placeholder="555 Roadrunner Lane">
                                </div>
                                <div class="md:flex-1 md:pl-3">
                                    <label class="block uppercase tracking-wide text-charcoal-darker text-xs font-bold">Building/Suite No.</label>
                                    <input class="w-full shadow-inner p-4 border-0" type="text" name="address_number" placeholder="#3">
                                    <span class="text-xs mb-4 font-thin">We lied, this isn't required.</span>
                                </div>
                            </div>
                            <div class="md:flex mb-4">
                                <div class="md:flex-1 md:pr-3">
                                    <label class="block uppercase tracking-wide text-charcoal-darker text-xs font-bold">Latitude</label>
                                    <input class="w-full shadow-inner p-4 border-0" type="text" name="lat" placeholder="30.0455542">
                                </div>
                                <div class="md:flex-1 md:pl-3">
                                    <label class="block uppercase tracking-wide text-charcoal-darker text-xs font-bold">Longitude</label>
                                    <input class="w-full shadow-inner p-4 border-0" type="text" name="lon" placeholder="-99.1405168">
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="md:flex mb-8">
                        <div class="md:w-1/3">
                            <legend class="uppercase tracking-wide text-sm">Contact</legend>
                        </div>
                        <div class="md:flex-1 mt-2 mb:mt-0 md:px-3">
                            <div class="mb-4">
                                <label class="block uppercase tracking-wide text-xs font-bold">Phone</label>
                                <input class="w-full shadow-inner p-4 border-0" type="tel" name="phone" placeholder="(555) 555-5555">
                            </div>
                            <div class="mb-4">
                                <label class="block uppercase tracking-wide text-charcoal-darker text-xs font-bold">URL</label>
                                <input class="w-full shadow-inner p-4 border-0" type="url" name="url" placeholder="acme.co">
                            </div>
                            <div class="mb-4">
                                <label class="block uppercase tracking-wide text-charcoal-darker text-xs font-bold">Email</label>
                                <input class="w-full shadow-inner p-4 border-0" type="email" name="email" placeholder="contact@acme.co">
                            </div>
                        </div>
                    </div>
                    <div class="md:flex">
                        <div class="md:w-1/3">
                            <legend class="uppercase tracking-wide text-sm">Social</legend>
                        </div>
                        <div class="md:flex-1 mt-2 mb:mt-0 md:px-3">
                            <div class="md:flex mb-4">
                                <div class="md:flex-1 md:pr-3">
                                    <label class="block uppercase tracking-wide text-charcoal-darker text-xs font-bold">Facebook</label>
                                    <div class="w-full flex">
                                        <span class="text-xs py-4 px-2 bg-grey-light text-grey-dark">facebook.com/</span>
                                        <input class="flex-1 shadow-inner p-4 border-0" type="text" name="facebook" placeholder="acmeco">
                                    </div>
                                </div>
                                <div class="md:flex-1 md:pl-3 mt-2 md:mt-0">
                                    <label class="block uppercase tracking-wide text-charcoal-darker text-xs font-bold">Twitter</label>
                                    <div class="w-full flex">
                                        <span class="text-xs py-4 px-2 bg-grey-light text-grey-dark">twitter.com/</span>
                                        <input class="flex-1 shadow-inner p-4 border-0" type="text" name="twitter" placeholder="acmeco">
                                    </div>
                                </div>
                            </div>
                            <div class="md:flex mb-4">
                                <div class="md:flex-1 md:pr-3">
                                    <label class="block uppercase tracking-wide text-charcoal-darker text-xs font-bold">Instagram</label>
                                    <div class="w-full flex">
                                        <span class="text-xs py-4 px-2 bg-grey-light text-grey-dark">instagram.com/</span>
                                        <input class="flex-1 shadow-inner p-4 border-0" type="text" name="instagram" placeholder="acmeco">
                                    </div>
                                </div>
                                <div class="md:flex-1 md:pl-3 mt-2 md:mt-0">
                                    <label class="block uppercase tracking-wide text-charcoal-darker text-xs font-bold">Yelp</label>
                                    <div class="w-full flex">
                                        <span class="text-xs py-4 px-2 bg-grey-light text-grey-dark">yelp.com/</span>
                                        <input class="flex-1 shadow-inner p-4 border-0" type="text" name="yelp" placeholder="acmeco">
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="md:flex mb-6">
                        <div class="md:w-1/3">
                            <legend class="uppercase tracking-wide text-sm">Description</legend>
                        </div>
                        <div class="md:flex-1 mt-2 mb:mt-0 md:px-3">
                            <textarea class="w-full shadow-inner p-4 border-0" placeholder="We build fine acmes." rows="6"></textarea>
                        </div>
                    </div>
                    <div class="md:flex mb-6">
                        <div class="md:w-1/3">
                            <legend class="uppercase tracking-wide text-sm">Cover Image</legend>
                        </div>
                        <div class="md:flex-1 px-3 text-center">
                            <div class="button bg-gold hover:bg-gold-dark text-cream mx-auto cusor-pointer relative">
                                <input class="opacity-0 absolute pin-x pin-y" type="file" name="cover_image">
                                Add Cover Image
                            </div>
                        </div>
                    </div>
                    <div class="md:flex mb-6 border border-t-1 border-b-0 border-x-0 border-cream-dark">
                        <div class="md:flex-1 px-3 text-center md:text-right">
                            <input type="hidden" name="sponsor" value="0">
                            <input class="button text-cream-lighter bg-brick hover:bg-brick-dark" type="submit" value="Create Location">
                        </div>
                    </div>
                </form>
            </section>
        </main>
        <p>Home</p>

        <div class="max-w-sm mx-auto flex p-6 bg-white rounded-lg shadow-xl">
            <div class="flex-shrink-0">
                <img class="h-12 w-12" src="/img/logo.svg" alt="ChitChat Logo">
            </div>
            <div class="ml-6 pt-1">
                <h4 class="text-xl text-gray-900 leading-tight">ChitChat</h4>
                <p class="text-base text-gray-600 leading-normal">You have a new message!</p>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        mounted() {
            console.log('Component mounted.')
        }
    }
</script>
