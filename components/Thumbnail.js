import { FireIcon, UserIcon, StarIcon, CalendarIcon} from "@heroicons/react/solid"
import Image from "next/image"
import { forwardRef, useState } from "react"
import Modal from "react-modal"

const Thumbnail = forwardRef(({ result }, ref) => {

    const BASE_URL = "https://image.tmdb.org/t/p/original/";
    
    var DATE;

    result.release_date != undefined? DATE = (result.release_date).split('-')[0] : DATE = "N/A"

    const [modalIsOpen, setModalIsOpen] = useState(false)

    return (
        <div ref={ref} className="p-2 group cursor-pointer">
            <Image
                className="rounded-lg sm:hover:animate-pulse"
                layout="responsive"
                src={
                    `${BASE_URL}${result.backdrop_path || result.poster_path}` ||
                    `${BASE_URL}${result.poster_path}`
                }
                onClick={() => setModalIsOpen(true)}
                height={1080} width={1920} />

            <div className="p-2">
                <h2 className="mt-1 text-2xl text-white transition-all duration-100 ease-in-out group-hover:text-red-500">{result.title || result.original_name}</h2>
            </div>

            <div className="flex justify-center items-center">
                <Modal
                    className="h-3/6 w-11/12 mt-20 sm:h-3/5 sm:w-4/5 sm:mt-40 m-auto lg:w-3/6 p-4 border-none rounded-md outline-none"
                    closeTimeoutMS={2000}
                    isOpen={modalIsOpen}
                    portalClassName="modal"
                    onRequestClose={() => setModalIsOpen(false)}
                    ariaHideApp={false}
                >
                    <div className="text-base sm:text-xl md:text-2xl text-justify" >
                        <h2 className="flex justify-center items-center text-base pt-4 ssm:text-lg sm:text-2xl sm:pt-2 lg:text-4xl text-red-500" ><FireIcon className="h-8 text-red-500" />{result.title || result.original_name}
                            <FireIcon className="h-8 text-red-500" /></h2>
                        <h3 className="flex justify-center items-center p-4 sm:pt-2 text-gray-300" >{result.overview}</h3>
                        <h3 className="flex justify-center items-center space-x-4 sm:pt-2 text-gray-300" ><CalendarIcon className="h-7 mr-2 text-blue-500" />{DATE}<StarIcon className="h-7 mx-2 text-yellow-400" />
                            {result.vote_average}<UserIcon className="h-7 ml-2 text-gray-300" />{result.vote_count}</h3>
                    </div>
                </Modal>

            </div>

        </div>
    );
})

export default Thumbnail
