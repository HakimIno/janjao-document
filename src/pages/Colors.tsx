import React, { useEffect, useState } from 'react'
import { Element, Events, Link, scrollSpy } from 'react-scroll';
import { Cover } from '../components/ui/cover';
import OnThisPage from '../components/onThisPage';
import { SolarCheckCircleBoldDuotone, SolarCopyBoldDuotone } from '../shared/icons/Solar';

interface ColorGroups {
    [key: string]: {
        light: string[];
        dark: string[];
    };
}

const Colors = () => {

    const colrs: ColorGroups = {
        tomato: {
            light: [
                '#fffcfc',
                '#fff8f7',
                '#fff0ee',
                '#ffe6e2',
                '#fdd8d3',
                '#fac7be',
                '#f3b0a2',
                '#ea9280',
                '#e54d2e',
                '#db4324',
                '#ca3214',
                '#341711',
            ],
            dark: [
                '#feefec',
                '#f16a50',
                '#ec5e41',
                '#e54d2e',
                '#a42a12',
                '#7f2315',
                '#652016',
                '#541c15',
                '#481a14',
                '#3b1813',
                '#2a1410',
                '#1d1412',
            ],
        },
        red: {
            light: [
                '#fffcfc',
                '#fff8f8',
                '#ffefef',
                '#ffe5e5',
                '#fdd8d8',
                '#f9c6c6',
                '#f3aeaf',
                '#eb9091',
                '#e5484d',
                '#dc3d43',
                '#cd2b31',
                '#381316',
            ],
            dark: [
                '#feecee',
                '#ff6369',
                '#f2555a',
                '#e5484d',
                '#aa2429',
                '#822025',
                '#671e22',
                '#541b1f',
                '#481a1d',
                '#3c181a',
                '#291415',
                '#1f1315',
            ],
        },
        crimson: {
            light: [
                '#fffcfd',
                '#fff7fb',
                '#feeff6',
                '#fce5f0',
                '#f9d8e7',
                '#f4c6db',
                '#edadc8',
                '#e58fb1',
                '#e03177',
                '#e93d82',
                '#d31e66',
                '#3d0d1d',
            ],
            dark: [
                '#feecf4',
                '#f76190',
                '#f04f88',
                '#e93d82',
                '#ae1955',
                '#801d45',
                '#641d3b',
                '#541b33',
                '#481a2d',
                '#3c1827',
                '#27141c',
                '#1d1418',
            ],
        },
        pink: {
            light: [
                '#fffcfe',
                '#fff7fc',
                '#feeef8',
                '#fce5f3',
                '#f9d8ec',
                '#f3c6e2',
                '#ecadd4',
                '#e38ec3',
                '#d6409f',
                '#d23197',
                '#cd1d8d',
                '#3b0a2a',
            ],
            dark: [
                '#feebf7',
                '#f65cb6',
                '#e34ba9',
                '#d6409f',
                '#a71873',
                '#7a1d5a',
                '#601d48',
                '#501b3f',
                '#451a37',
                '#3a182f',
                '#271421',
                '#1f121b',
            ],
        },
        plum: {
            light: [
                '#fefcff',
                '#fff8ff',
                '#fceffc',
                '#f9e5f9',
                '#f3d9f4',
                '#ebc8ed',
                '#dfafe3',
                '#cf91d8',
                '#ab4aba',
                '#a43cb4',
                '#9c2bad',
                '#340c3b',
            ],
            dark: [
                '#fbecfc',
                '#d864d8',
                '#bd54c6',
                '#ab4aba',
                '#883894',
                '#692d6f',
                '#542658',
                '#48214b',
                '#3e1d40',
                '#341a34',
                '#251425',
                '#1d131d',
            ],
        },
        purple: {
            light: [
                '#fefcfe',
                '#fdfaff',
                '#f9f1fe',
                '#f3e7fc',
                '#eddbf9',
                '#e3ccf4',
                '#d3b4ed',
                '#be93e4',
                '#8e4ec6',
                '#8445bc',
                '#793aaf',
                '#2b0e44',
            ],
            dark: [
                '#f7ecfc',
                '#bf7af0',
                '#9d5bd2',
                '#8e4ec6',
                '#7938b2',
                '#5f2d84',
                '#4e2667',
                '#432155',
                '#3a1e48',
                '#301a3a',
                '#221527',
                '#1b141d',
            ],
        },
        violet: {
            light: [
                '#fdfcfe',
                '#fbfaff',
                '#f5f2ff',
                '#ede9fe',
                '#e4defc',
                '#d7cff9',
                '#c4b8f3',
                '#aa99ec',
                '#6e56cf',
                '#644fc1',
                '#5746af',
                '#20134b',
            ],
            dark: [
                '#f1eefe',
                '#9e8cfc',
                '#7c66dc',
                '#6e56cf',
                '#5842c3',
                '#443592',
                '#392c72',
                '#32275f',
                '#2c2250',
                '#251e40',
                '#1c172b',
                '#17151f',
            ],
        },

        indigo: {
            light: [
                '#fdfdfe',
                '#f8faff',
                '#f0f4ff',
                '#e6edfe',
                '#d9e2fc',
                '#c6d4f9',
                '#aec0f5',
                '#8da4ef',
                '#3e63dd',
                '#3a5ccc',
                '#3451b2',
                '#101d46',
            ],
            dark: [
                '#eef1fd',
                '#849dff',
                '#5373e7',
                '#3e63dd',
                '#2f4eb2',
                '#273e89',
                '#22346e',
                '#1f2c5c',
                '#1c274f',
                '#192140',
                '#15192d',
                '#131620',
            ],
        },
        blue: {
            light: [
                '#fbfdff',
                '#f5faff',
                '#edf6ff',
                '#e1f0ff',
                '#cee7fe',
                '#b7d9f8',
                '#96c7f2',
                '#5eb0ef',
                '#0091ff',
                '#0081f1',
                '#006adc',
                '#00254d',
            ],
            dark: [
                '#eaf6ff',
                '#52a9ff',
                '#369eff',
                '#0091ff',
                '#0954a5',
                '#0a4481',
                '#0d3868',
                '#0f3058',
                '#102a4c',
                '#10243e',
                '#0f1b2d',
                '#0f1720',
            ],
        },
        cyan: {
            light: [
                '#fafdfe',
                '#f2fcfd',
                '#e7f9fb',
                '#d8f3f6',
                '#c4eaef',
                '#aadee6',
                '#84cdda',
                '#3db9cf',
                '#05a2c2',
                '#0894b3',
                '#0c7792',
                '#04313c',
            ],
            dark: [
                '#e1f8fa',
                '#00c2d7',
                '#00b1cc',
                '#05a2c2',
                '#00647d',
                '#045063',
                '#064150',
                '#073844',
                '#07303b',
                '#072830',
                '#061e24',
                '#07191d',
            ],
        },
        teal: {
            light: [
                '#fafefd',
                '#f1fcfa',
                '#e7f9f5',
                '#d9f3ee',
                '#c7ebe5',
                '#afdfd7',
                '#8dcec3',
                '#53b9ab',
                '#12a594',
                '#0e9888',
                '#067a6f',
                '#10302b',
            ],
            dark: [
                '#e1faf4',
                '#0ac5b3',
                '#10b3a3',
                '#12a594',
                '#0c6d62',
                '#0b544a',
                '#09443c',
                '#083932',
                '#07312b',
                '#062923',
                '#04201b',
                '#091915',
            ],
        },
        green: {
            light: [
                '#fbfefc',
                '#f2fcf5',
                '#e9f9ee',
                '#ddf3e4',
                '#ccebd7',
                '#b4dfc4',
                '#92ceac',
                '#5bb98c',
                '#30a46c',
                '#299764',
                '#18794e',
                '#153226',
            ],
            dark: [
                '#e5fbeb',
                '#4cc38a',
                '#3cb179',
                '#30a46c',
                '#236e4a',
                '#1b543a',
                '#164430',
                '#133929',
                '#113123',
                '#0f291e',
                '#0c1f17',
                '#0d1912',
            ],
        },
        grass: {
            light: [
                '#fbfefb',
                '#f3fcf3',
                '#ebf9eb',
                '#dff3df',
                '#ceebcf',
                '#b7dfba',
                '#97cf9c',
                '#65ba75',
                '#46a758',
                '#3d9a50',
                '#297c3b',
                '#1b311e',
            ],
            dark: [
                '#e5fbeb',
                '#63c174',
                '#55b467',
                '#46a758',
                '#2f6e3b',
                '#245530',
                '#1d4427',
                '#193921',
                '#16301d',
                '#132819',
                '#0f1e13',
                '#0d1912',
            ],
        },
        orange: {
            light: [
                '#fefcfb',
                '#fef8f4',
                '#fff1e7',
                '#ffe8d7',
                '#ffdcc3',
                '#ffcca7',
                '#ffb381',
                '#fa934e',
                '#f76808',
                '#ed5f00',
                '#bd4b00',
                '#451e11',
            ],
            dark: [
                '#feeadd',
                '#ff8b3e',
                '#ff802b',
                '#f76808',
                '#943e00',
                '#763205',
                '#5f2a06',
                '#4f2305',
                '#441f04',
                '#391a03',
                '#2b1400',
                '#1f1206',
            ],
        },
        brown: {
            light: [
                '#fefdfc',
                '#fcf9f6',
                '#f8f1ea',
                '#f4e9dd',
                '#efddcc',
                '#e8cdb5',
                '#ddb896',
                '#d09e72',
                '#ad7f58',
                '#a07653',
                '#886349',
                '#3f2c22',
            ],
            dark: [
                '#faf0e5',
                '#dba16e',
                '#bd8b60',
                '#ad7f58',
                '#775940',
                '#5c4332',
                '#493528',
                '#3e2c22',
                '#36261e',
                '#2e201a',
                '#221813',
                '#191513',
            ],
        },
        sky: {
            light: [
                '#f9feff',
                '#f1fcff',
                '#e4f9ff',
                '#d5f4fd',
                '#c1ecf9',
                '#a4dff1',
                '#79cfea',
                '#2ebde5',
                '#68ddfd',
                '#5fd4f4',
                '#0078a1',
                '#003242',
            ],
            dark: [
                '#eaf8ff',
                '#2ec8ee',
                '#8ae8ff',
                '#68ddfd',
                '#005d85',
                '#064b6b',
                '#083e59',
                '#08354c',
                '#082d41',
                '#082636',
                '#071d2a',
                '#0c1820',
            ],
        },
        mint: {
            light: [
                '#f9fefd',
                '#effefa',
                '#e1fbf4',
                '#d2f7ed',
                '#c0efe3',
                '#a5e4d4',
                '#7dd4c0',
                '#40c4aa',
                '#70e1c8',
                '#69d9c1',
                '#147d6f',
                '#09342e',
            ],
            dark: [
                '#e7fcf7',
                '#95f3d9',
                '#70e1c8',
                '#25d0ab',
                '#006d5b',
                '#00564a',
                '#01453d',
                '#033a34',
                '#04312c',
                '#052926',
                '#05201e',
                '#081917',
            ],
        },
        lime: {
            light: [
                '#fcfdfa',
                '#f7fcf0',
                '#eefadc',
                '#e4f7c7',
                '#d7f2b0',
                '#c9e894',
                '#b1d16a',
                '#94ba2c',
                '#99d52a',
                '#93c926',
                '#5d770d',
                '#263209',
            ],
            dark: [
                '#effbdd',
                '#c4f042',
                '#99d52a',
                '#87be22',
                '#536716',
                '#415215',
                '#344213',
                '#2b3711',
                '#252e0f',
                '#1e260d',
                '#181d08',
                '#141807',
            ],
        },
        yellow: {
            light: [
                '#fdfdf9',
                '#fffce8',
                '#fffbd1',
                '#fff8bb',
                '#fef2a4',
                '#f9e68c',
                '#efd36c',
                '#ebbc00',
                '#f5d90a',
                '#f7ce00',
                '#946800',
                '#35290f',
            ],
            dark: [
                '#fffad1',
                '#ffef5c',
                '#f5d90a',
                '#f0c000',
                '#705e00',
                '#594a05',
                '#493c00',
                '#3e3000',
                '#352800',
                '#2c2100',
                '#221a00',
                '#1c1500',
            ],
        },
        amber: {
            light: [
                '#fefdfb',
                '#fff9ed',
                '#fff4d5',
                '#ffecbc',
                '#ffe3a2',
                '#ffd386',
                '#f3ba63',
                '#ee9d2b',
                '#ffb224',
                '#ffa01c',
                '#ad5700',
                '#4e2009',
            ],
            dark: [
                '#fef3dd',
                '#ffcb47',
                '#ffb224',
                '#f1a10d',
                '#824e00',
                '#693f05',
                '#573300',
                '#4a2900',
                '#3f2200',
                '#341c00',
                '#271700',
                '#1f1300',
            ],
        },
        gray: {
            light: [
                '#fcfcfc',
                '#f8f8f8',
                '#f3f3f3',
                '#ededed',
                '#e8e8e8',
                '#e2e2e2',
                '#dbdbdb',
                '#c7c7c7',
                '#8f8f8f',
                '#858585',
                '#6f6f6f',
                '#171717',
            ],
            dark: [
                '#ededed',
                '#a0a0a0',
                '#7e7e7e',
                '#707070',
                '#505050',
                '#3e3e3e',
                '#343434',
                '#2e2e2e',
                '#282828',
                '#232323',
                '#1c1c1c',
                '#161616',
            ],
        },
        mauve: {
            light: [
                '#fdfcfd',
                '#f9f8f9',
                '#f4f2f4',
                '#eeedef',
                '#e9e8ea',
                '#e4e2e4',
                '#dcdbdd',
                '#c8c7cb',
                '#908e96',
                '#86848d',
                '#6f6e77',
                '#1a1523',
            ],
            dark: [
                '#ededef',
                '#a09fa6',
                '#7e7d86',
                '#706f78',
                '#504f57',
                '#3e3e44',
                '#34343a',
                '#2e2e32',
                '#28282c',
                '#232326',
                '#1c1c1f',
                '#161618',
            ],
        },
        slate: {
            light: [
                '#fbfcfd',
                '#f8f9fa',
                '#f1f3f5',
                '#eceef0',
                '#e6e8eb',
                '#dfe3e6',
                '#d7dbdf',
                '#c1c8cd',
                '#889096',
                '#7e868c',
                '#687076',
                '#11181c',
            ],
            dark: [
                '#ecedee',
                '#9ba1a6',
                '#787f85',
                '#697177',
                '#4c5155',
                '#3a3f42',
                '#313538',
                '#2b2f31',
                '#26292b',
                '#202425',
                '#1a1d1e',
                '#151718',
            ],
        },
        sage: {
            light: [
                '#fbfdfc',
                '#f8faf9',
                '#f1f4f3',
                '#ecefed',
                '#e6e9e8',
                '#dfe4e2',
                '#d7dcda',
                '#c2c9c6',
                '#8a918e',
                '#808784',
                '#6a716e',
                '#111c18',
            ],
            dark: [
                '#eceeed',
                '#99a29e',
                '#75817b',
                '#66736d',
                '#4a524e',
                '#393f3c',
                '#303633',
                '#2a2f2c',
                '#252a27',
                '#1f2421',
                '#191d1b',
                '#141716',
            ],
        },
        olive: {
            light: [
                '#fcfdfc',
                '#f8faf8',
                '#f2f4f2',
                '#ecefec',
                '#e6e9e6',
                '#e0e4e0',
                '#d8dcd8',
                '#c3c8c2',
                '#8b918a',
                '#818780',
                '#6b716a',
                '#141e12',
            ],
            dark: [
                '#eceeec',
                '#9aa299',
                '#778175',
                '#687366',
                '#4c514b',
                '#3b3f3a',
                '#313530',
                '#2b2f2a',
                '#262925',
                '#20241f',
                '#1a1d19',
                '#151715',
            ],
        },
        sand: {
            light: [
                '#fdfdfc',
                '#f9f9f8',
                '#f3f3f2',
                '#eeeeec',
                '#e9e9e6',
                '#e3e3e0',
                '#dbdbd7',
                '#c8c7c1',
                '#90908c',
                '#868682',
                '#706f6c',
                '#1b1b18',
            ],
            dark: [
                '#ededec',
                '#a1a09a',
                '#7f7e77',
                '#717069',
                '#51504b',
                '#3e3e3a',
                '#353431',
                '#2e2e2b',
                '#282826',
                '#232320',
                '#1c1c1a',
                '#161615',
            ],
        },
        gold: {
            light: [
                '#fdfdfc',
                '#fbf9f2',
                '#f5f2e9',
                '#eeeadd',
                '#e5dfd0',
                '#dad1bd',
                '#cbbda4',
                '#b8a383',
                '#978365',
                '#8c795d',
                '#776750',
                '#3b352b',
            ],
            dark: [
                '#f7f4e7',
                '#bfa888',
                '#a59071',
                '#978365',
                '#6b5d48',
                '#504737',
                '#3e382c',
                '#353026',
                '#2e2a21',
                '#26231c',
                '#1c1a15',
                '#171613',
            ],
        },
        bronze: {
            light: [
                '#fdfcfc',
                '#fdf8f6',
                '#f8f1ee',
                '#f2e8e4',
                '#eaddd7',
                '#e0cec7',
                '#d1b9b0',
                '#bfa094',
                '#a18072',
                '#977669',
                '#846358',
                '#43302b',
            ],
            dark: [
                '#f9ede7',
                '#cba393',
                '#b08c7d',
                '#a18072',
                '#74594e',
                '#57433c',
                '#453530',
                '#3b2e29',
                '#332824',
                '#2a211f',
                '#1f1917',
                '#191514',
            ],
        },
    }

    const colorNames = Object.keys(colrs);

    const [isClick, setIsClick] = useState("")

    const [copied, setCopied] = useState(false);

    const handleCopy = (color: string) => {
        navigator.clipboard.writeText(color);
        setCopied(true);
    };

    useEffect(() => {
        setCopied(false)
    }, [isClick])

    const ColorGrid = ({ colors, type }: { colors: any[], type: 'light' | 'dark' }) => {
        return (
            <div className="w-full overflow-x-auto">
                <div className="min-w-full">
                    <div className="grid" style={{ gridTemplateColumns: '70px repeat(12, 70px)', gap: '1px' }}>
                        {/* Header */}
                        <div className="h-12 bg-transparent" />
                        {[...Array(12)].map((_, idx) => (
                            <div key={idx} className="h-12 flex items-center justify-center text-xs font-sf-semibold">
                                {idx + 1}
                            </div>
                        ))}

                        {/* Color rows */}
                        {colorNames.map((name) => (
                            <React.Fragment key={name}>
                                <div className="h-16 flex items-center text-xs font-sf-bold">
                                    {name.charAt(0).toUpperCase() + name.slice(1)}
                                </div>
                                {colrs[name][type].map((color, index) => (
                                    <div key={index} className="relative">
                                        <button
                                            onClick={() => setIsClick(color)}
                                            className={`w-full h-16 shadow-xl transition-all duration-200
                                                ${color === isClick ? "border border-white-400 rounded-md scale-100" : "rounded-sm hover:scale-100"}
                                            `}
                                            style={{ backgroundColor: color }}
                                        />
                                        {isClick === color && (
                                            <div className="absolute left-1/2 transform -translate-x-1/2 mt-4 w-44 
                                                bg-neutral-900 border border-neutral-800 shadow-2xl rounded-lg p-3 
                                                text-sm z-50 flex flex-col gap-2">
                                                <div className="flex items-center justify-between">
                                                    <div className="flex items-center gap-2">
                                                        <div
                                                            className="w-5 h-5 rounded-md"
                                                            style={{ backgroundColor: color }}
                                                        />
                                                        <p className="font-sf-semibold text-neutral-300">
                                                            {color}
                                                        </p>
                                                    </div>
                                                    <button
                                                        onClick={(e) => {
                                                            e.stopPropagation();
                                                            handleCopy(color);
                                                        }}
                                                        className="hover:scale-110 transition-transform"
                                                        aria-label="Copy color code"
                                                    >
                                                        {copied ? (
                                                            <SolarCheckCircleBoldDuotone
                                                                className="h-5 w-5 text-green-500"
                                                            />
                                                        ) : (
                                                            <SolarCopyBoldDuotone
                                                                className="h-5 w-5 text-neutral-300"
                                                            />
                                                        )}
                                                    </button>
                                                </div>
                                                <div className="border-t border-neutral-800" />
                                                <button
                                                    onClick={() => setIsClick("")}
                                                    className="text-red-500 text-xs font-sf-semibold hover:text-red-400"
                                                >
                                                    Close
                                                </button>
                                            </div>
                                        )}
                                    </div>
                                ))}
                            </React.Fragment>
                        ))}
                    </div>
                </div>
            </div>
        );
    };


    const sections = [
        {
            id: 'light-colors',
            title: 'Light',
            content: () => <ColorGrid colors={colorNames} type="light" />
        },
        {
            id: 'dark-colors',
            title: 'Dark',
            content: () => <ColorGrid colors={colorNames} type="dark" />
        }
    ];

    useEffect(() => {
        scrollSpy.update();

        return () => {
            Events.scrollEvent.remove('begin');
            Events.scrollEvent.remove('end');
        };
    }, []);

    return (
        <div className="w-full">
            <div className="max-w-full px-0 lg:px-8 mx-0 lg:mx-20">
                <div className="">
                    {sections.map((section, index) => (
                        <Element
                            name={section.id}
                            key={section.id}
                            className={`
                                bg-neutral-950 rounded-lg mb-6 p-6
                                ${index > 0 ? 'border-t border-neutral-900' : ''}
                            `}
                        >
                            <h2 className="text-xl font-bold text-white mb-6">
                                {section.title}
                            </h2>
                            {section.content()}
                        </Element>
                    ))}
                </div>
            </div>

            {/* Right sidebar */}
            <div className="hidden lg:block w-72 flex-shrink-0">
                <div className="sticky top-16">
                    <OnThisPage sections={sections} />
                </div>
            </div>
        </div>
    )
}

export default Colors