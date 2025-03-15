import React, { useState } from 'react';
import { Clipboard, Check } from 'lucide-react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';


const customTheme = {
    'pre[class*="language-"]': {
        background: '#0a0a0a', // เข้มกว่าเล็กน้อยเพื่อให้ใกล้เคียงกับ Bearded Theme Black
    },
    'comment': { color: '#676e95' }, // สีเทาอมฟ้าสำหรับคอมเมนต์
    'property': { color: '#7dd3fc' }, // สีฟ้าอ่อนสำหรับ properties
    'keyword': { color: '#a78bfa' }, // สีม่วงอ่อนสำหรับ keywords
    'string': { color: '#bef264' }, // สีเขียวอ่อนสำหรับ strings
    'function': { color: '#60a5fa' }, // สีฟ้าสำหรับ functions
    'operator': { color: '#7dd3fc' }, // สีฟ้าอ่อนสำหรับ operators
    'punctuation': { color: '#7dd3fc' }, // สีฟ้าอ่อนสำหรับ punctuation
    'variable': { color: '#f07178' }, // สีแดงอ่อนสำหรับตัวแปร
    'number': { color: '#f78c6c' }, // สีส้มสำหรับตัวเลข
    'boolean': { color: '#ff5874' }, // สีชมพูเข้มสำหรับ boolean
    'constant': { color: '#a78bfa' }, // สีม่วงอ่อนสำหรับค่าคงที่
    'builtin': { color: '#fbbf24' }, // สีเหลืองสำหรับฟังก์ชัน built-in
    'attr-name': { color: '#a78bfa' }, // สีม่วงอ่อนสำหรับชื่อ attribute
    'attr-value': { color: '#bef264' }, // สีเขียวอ่อนสำหรับค่า attribute
    'class-name': { color: '#fbbf24' }, // สีเหลืองสำหรับชื่อคลาส
};

const CodeBlockWithCopyButton = ({ codeSnippet, language = 'jsx' }: { codeSnippet: string, language: string }) => {
    const [isCopied, setIsCopied] = useState(false);

    const copyToClipboard = () => {
        navigator.clipboard.writeText(codeSnippet).then(() => {
            setIsCopied(true);
            setTimeout(() => setIsCopied(false), 2000);
        });
    };

    return (
        <div className="relative h-[650px] w-full bg-neutral-900 rounded-lg border-[1.5px] border-neutral-900 overflow-auto">
            <button
                onClick={copyToClipboard}
                className="absolute top-2 right-5 p-2 bg-neutral-800 hover:bg-neutral-700 rounded-md transition-colors duration-200"
            >
                {isCopied ? (
                    <Check className="w-5 h-5 text-green-500" />
                ) : (
                    <Clipboard className="w-5 h-5 text-neutral-400" />
                )}
            </button>
            <div className="px-5 pb-5">
                <SyntaxHighlighter
                    customStyle={{ backgroundColor: 'transparent' }}
                    language={language}
                    style={customTheme}
                    className="text-[16px] h-full"
                >
                    {codeSnippet}
                </SyntaxHighlighter>
            </div>
        </div>
    );
};

export default CodeBlockWithCopyButton;