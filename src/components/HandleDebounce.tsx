import React, { useEffect, useState } from "react";
import SearchInput from "./SearchInput";

const HandleDebounce = () => {
  const [query, setQuery] = useState<string>("");

  useEffect(() => {
    const id = setTimeout(() => {
      console.log(`結果: ${query}`);
    }, 1000);
    return () => {
      clearTimeout(id);
      console.log("更新");
    };
  }, [query]);
  return (
    <div>
      <SearchInput query={query} setQuery={setQuery} />
    </div>
  );
};

export default HandleDebounce;
