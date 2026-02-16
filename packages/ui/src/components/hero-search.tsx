import React from 'react';
import { Input } from '../primitives/input';
import { Button } from '../primitives/button';

interface HeroSearchProps {
  placeholder?: string;
  onSearch?: (value: string) => void;
  className?: string;
}

export function HeroSearch({ 
  placeholder = "SUV under $35K with low miles",
  onSearch,
  className = ""
}: HeroSearchProps) {
  const [searchValue, setSearchValue] = React.useState("");

  const handleSearch = () => {
    if (onSearch) {
      onSearch(searchValue);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      handleSearch();
    }
  };

  return (
    <div className={`flex items-center justify-between rounded-full ${className}`} style={{
      backgroundColor: 'rgba(255, 255, 255, 0.9)',
      height: '56px',
      paddingLeft: '16px',
      paddingRight: '4px',
      paddingTop: '4px',
      paddingBottom: '4px'
    }}>
      <div className="flex items-center gap-2 flex-1">
        <svg 
          width="19.5" 
          height="19.127" 
          viewBox="0 0 20 20" 
          fill="none" 
          xmlns="http://www.w3.org/2000/svg"
          className="flex-shrink-0"
          style={{ minWidth: '19.5px', minHeight: '19.127px' }}
        >
          <path 
            d="M17.5 17.5L13.169 13.169M13.169 13.169C14.3413 11.9967 14.9998 10.4072 14.9998 8.74956C14.9998 7.09195 14.3413 5.50219 13.169 4.33C11.9967 3.15782 10.4072 2.49932 8.74956 2.49932C7.09195 2.49932 5.50219 3.15782 4.33 4.33C3.15782 5.50219 2.49932 7.09195 2.49932 8.74956C2.49932 10.4072 3.15782 11.9967 4.33 13.169C5.50219 14.3413 7.09195 14.9998 8.74956 14.9998C10.4072 14.9998 11.9967 14.3413 13.169 13.169Z" 
            stroke="var(--color-text-light)" 
            strokeWidth="2" 
            strokeLinecap="round" 
            strokeLinejoin="round"
          />
        </svg>
        
        <Input
          type="text"
          placeholder={placeholder}
          value={searchValue}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => setSearchValue(e.target.value)}
          onKeyPress={handleKeyPress}
          className="flex-1 !border-none shadow-none focus-visible:ring-0 text-[15px] bg-transparent p-0 h-auto text-black placeholder:text-black"
        />
      </div>

      <div className="flex items-center gap-3">
        <button
          type="button"
          className="flex-shrink-0 flex items-center justify-center"
          style={{ width: '40px', height: '40px' }}
          aria-label="Voice search"
        >
          <svg 
            width="10.182" 
            height="16" 
            viewBox="0 0 16 16" 
            fill="none" 
            xmlns="http://www.w3.org/2000/svg"
            style={{ minWidth: '10.182px', minHeight: '16px' }}
          >
            <path 
              d="M8 1C6.9 1 6 1.9 6 3V8C6 9.1 6.9 10 8 10C9.1 10 10 9.1 10 8V3C10 1.9 9.1 1 8 1ZM8 8.67C7.63 8.67 7.33 8.37 7.33 8V3C7.33 2.63 7.63 2.33 8 2.33C8.37 2.33 8.67 2.63 8.67 3V8C8.67 8.37 8.37 8.67 8 8.67ZM11.33 7.33C11.33 9.35 9.74 10.97 7.73 11.27V13.33H8C8.37 13.33 8.67 13.63 8.67 14C8.67 14.37 8.37 14.67 8 14.67C7.63 14.67 7.33 14.37 7.33 14C7.33 13.63 7.63 13.33 8 13.33H7.27V11.27C5.26 10.97 3.67 9.35 3.67 7.33C3.67 6.96 3.97 6.67 4.33 6.67C4.7 6.67 5 6.96 5 7.33C5 8.81 6.19 10 7.67 10C9.14 10 10.33 8.81 10.33 7.33C10.33 6.96 10.63 6.67 11 6.67C11.37 6.67 11.67 6.96 11.67 7.33Z" 
              fill="var(--color-text-light)"
            />
          </svg>
        </button>

        <Button 
          onClick={handleSearch}
          className="bg-[color:var(--color-brand-primary)] hover:bg-[color:var(--color-brand-primary-dark)] text-white rounded-full text-[14px] font-semibold"
          style={{ height: '40px', width: '90px' }}
        >
          Search
        </Button>
      </div>
    </div>
  );
}
