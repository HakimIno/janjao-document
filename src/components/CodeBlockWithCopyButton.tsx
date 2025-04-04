import { useState } from 'react';
import { Clipboard, Check } from 'lucide-react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';

const tropicalSeaTheme = {
    'pre[class*="language-"]': {
        background: '#1e2a44', // Deep navy blue, like a calm sea at dusk
    },
    'comment': { color: '#7f8fa6' }, // Soft blue-gray, like sea mist
    'property': { color: '#60a5fa' }, // Light sky blue, clean and crisp
    'keyword': { color: '#22d3ee' }, // Bright cyan, like sparkling ocean foam
    'string': { color: '#34d399' }, // Fresh teal, like sea glass
    'function': { color: '#60a5fa' }, // Light sky blue, matching properties
    'operator': { color: '#22d3ee' }, // Bright cyan, matching keywords
    'punctuation': { color: '#22d3ee' }, // Bright cyan, for consistency
    'variable': { color: '#60a5fa' }, // Light sky blue, unified with properties
    'number': { color: '#34d399' }, // Teal, matching strings
    'boolean': { color: '#22d3ee' }, // Bright cyan, matching keywords
    'constant': { color: '#22d3ee' }, // Bright cyan, matching keywords
    'builtin': { color: '#60a5fa' }, // Light sky blue, matching properties
    'attr-name': { color: '#22d3ee' }, // Bright cyan, matching keywords
    'attr-value': { color: '#34d399' }, // Teal, matching strings
    'class-name': { color: '#60a5fa' }, // Light sky blue, matching properties
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
        <div className="relative h-[650px] w-full bg-gradient-to-br from-[#1a1a1a] to-[#1a1a1a] rounded-lg border-[1.5px] border-[#00b7eb] overflow-auto">
            <button
                onClick={copyToClipboard}
                className="absolute top-2 right-5 p-2 bg-[#1e3a8a] hover:bg-[#172554] rounded-md transition-colors duration-200"
            >
                {isCopied ? (
                    <Check className="w-5 h-5 text-[#00cc99]" />
                ) : (
                    <Clipboard className="w-5 h-5 text-[#1e90ff]" />
                )}
            </button>
            <div className="px-5 pb-5">
                <SyntaxHighlighter
                    customStyle={{ backgroundColor: 'transparent' }}
                    language={language}
                    style={tropicalSeaTheme}
                    className="text-[16px] h-full"
                >
                    {codeSnippet}
                </SyntaxHighlighter>
            </div>
        </div>
    );
};

export default CodeBlockWithCopyButton;