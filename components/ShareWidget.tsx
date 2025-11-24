import React, { useState } from 'react';
import { Twitter, Facebook, Linkedin, Link as LinkIcon, Check } from 'lucide-react';

interface ShareWidgetProps {
  title?: string;
  text: string;
  url?: string;
  compact?: boolean;
  className?: string;
}

const ShareWidget: React.FC<ShareWidgetProps> = ({ 
  title, 
  text, 
  url, 
  compact = false,
  className = '' 
}) => {
  const [copied, setCopied] = useState(false);
  const shareUrl = url || window.location.href;
  const encodedText = encodeURIComponent(text);
  const encodedUrl = encodeURIComponent(shareUrl);

  const handleCopy = () => {
    navigator.clipboard.writeText(shareUrl);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className={`${className} ${compact ? 'flex items-center gap-2' : 'flex flex-col gap-3'}`}>
      {!compact && title && (
        <h4 className="text-xs font-bold text-slate-500 uppercase tracking-wider">{title}</h4>
      )}
      <div className="flex gap-2">
        <a
          href={`https://twitter.com/intent/tweet?text=${encodedText}&url=${encodedUrl}`}
          target="_blank"
          rel="noopener noreferrer"
          className="p-2 bg-slate-100 hover:bg-[#1DA1F2] hover:text-white rounded-full transition-colors text-slate-600"
          aria-label="Share on Twitter"
        >
          <Twitter className="w-4 h-4" />
        </a>
        <a
          href={`https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`}
          target="_blank"
          rel="noopener noreferrer"
          className="p-2 bg-slate-100 hover:bg-[#4267B2] hover:text-white rounded-full transition-colors text-slate-600"
          aria-label="Share on Facebook"
        >
          <Facebook className="w-4 h-4" />
        </a>
        <a
          href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodedUrl}`}
          target="_blank"
          rel="noopener noreferrer"
          className="p-2 bg-slate-100 hover:bg-[#0077b5] hover:text-white rounded-full transition-colors text-slate-600"
          aria-label="Share on LinkedIn"
        >
          <Linkedin className="w-4 h-4" />
        </a>
        <button
          onClick={handleCopy}
          className={`p-2 rounded-full transition-colors ${
            copied ? 'bg-green-100 text-green-600' : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
          }`}
          aria-label="Copy Link"
        >
          {copied ? <Check className="w-4 h-4" /> : <LinkIcon className="w-4 h-4" />}
        </button>
      </div>
    </div>
  );
};

export default ShareWidget;