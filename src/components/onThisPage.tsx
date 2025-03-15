import React, { useState } from 'react'
import { Cover } from './ui/cover'
import { Link } from 'react-scroll'
import { SparklesCore } from './ui/sparkles'

interface Props {
    sections: any
}
const OnThisPage = ({ sections }: Props) => {
    const [activeSection, setActiveSection] = useState("");

    return (
        <div className="w-72 min-h-full  p-0 overflow-hidden fixed right-10 top-16 z-0   flex flex-col gap-3">
            <Cover className='font-sf-bold text-lg'>
                On this page
            </Cover>
            <div className="text-neutral-50 flex flex-col px-3">
                {sections.map((section: any) => (
                    <Link
                        key={section.id}
                        to={section.id}
                        spy={true}
                        smooth={true}
                        offset={-70}
                        duration={300}
                        className="r mb-1.5 text-sm flex items-center gap-2"
                        activeClass="active-overview"
                        onSetActive={() => setActiveSection(section.id)}
                    >
                        {activeSection === section.id ? (
                            <div className="flex  items-center gap-2 cursor-pointer">
                                <span className="relative flex h-1.5 w-1.5">
                                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-gradient-to-r from-cyan-500   to-teal-500 opacity-75"></span>
                                    <span className={`relative inline-flex rounded-full h-1.5 w-1.5 bg-gradient-to-r  from-cyan-500  to-teal-500 active-dot`}></span>
                                </span>
                                <div className="relative  inline-block w-max [filter:drop-shadow(0px_1px_3px_rgba(27,_37,_80,_0.14))]">
                                    <div className="absolute left-0 top-[1px] bg-clip-text bg-no-repeat text-transparent bg-gradient-to-r  from-teal-500  to-cyan-500 [text-shadow:0_0_rgba(0,0,0,0.1)]">
                                        <span className="">{section.title.replace('#', '')}</span>
                                    </div>
                                    <div className="relative bg-clip-text text-transparent bg-no-repeat bg-gradient-to-r from-cyan-500  to-teal-500 ">
                                        <span className="">{section.title.replace('#', '')}</span>
                                    </div>

                                </div>
                            </div>
                        ) : (
                            <div className="flex  items-center gap-2 cursor-pointer">
                                <span className="relative flex h-1.5 w-1.5">
                                    <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-neutral-700"></span>
                                </span>
                                <span>{section.title.replace('#', '')}</span>
                            </div>
                        )}

                    </Link>
                ))}
            </div>
        </div >
    )
}

export default OnThisPage