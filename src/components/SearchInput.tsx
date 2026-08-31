import React from "react";

interface SearchInputProps {
  query: string;
  setQuery: React.Dispatch<React.SetStateAction<string>>;
}

const SearchInput = ({ query, setQuery }: SearchInputProps) => {
  return (
    <div>
      <input
        type="text"
        value={query}
        onChange={(event: React.ChangeEvent<HTMLInputElement>) => setQuery(event.target.value)}
        className="border text-white"
        placeholder="Input Text"
      />
    </div>
  );
};

export default SearchInput;
