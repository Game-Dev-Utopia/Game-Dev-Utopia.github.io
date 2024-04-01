"use client";
import React, { useState } from 'react';
import { FiSearch } from 'react-icons/fi';
import Fuse from 'fuse.js';
import Data from '../data/fuse.json';

const Search = () => {
    // const [query,setQuery]=useState('');
    // const fuse=new Fuse(Data,{
    //     keys:[
    //         'category','title','developer'
    //     ],
    //     includeScore=true
    // })

    // const results=fuse.search(query);
    // const gameResult=query ? results.map(results=>results.item):Data;

    // function handleSearch({target={}})
    // {
    //     const {value}=target;
    //     setQuery(value);
    // }
    const fuseOptions = {
      // isCaseSensitive: false,
      // includeScore: false,
      // shouldSort: true,
      // includeMatches: false,
      // findAllMatches: false,
      // minMatchCharLength: 1,
      // location: 0,
      // threshold: 0.6,
      // distance: 100,
      // useExtendedSearch: false,
      // ignoreLocation: false,
      // ignoreFieldNorm: false,
      // fieldNormWeight: 1,
      keys: [
        "title",
        "author.firstName"
      ]
    };
    const [inputValue, setInputValue] = useState('');
    const handleChange = (e) => {
        setInputValue(e.target.value);
      };
      const fuse = new Fuse(Data, fuseOptions);
      const res = fuse.search(inputValue);
  return (
    <div className=''>
<div className='backdrop-blur-md bg-slate-700 shadow-xl relative min-w-[10rem] w-1/4 h-8 bg-transparent rounded-3xl'>
<input    
    className='bg-transparent w-full h-full text-center rounded-3xl outline-none focus:outline-1 focus:outline-[yellow]'
      type="text"
      value={inputValue}
      onChange={handleChange}
      placeholder="Search..."
    />
    <FiSearch className="absolute w-8 h-8 top-0 right-0 pr-2 py-1" />
</div>
    <div className={'absolute z-10 w-1/4 h-40 overflow-scroll ' + (inputValue.length > 0 ? '' : 'hidden')}>
      {
        res.map((item) => {
          return (
            <div key={item.item.id} className='flex gap-2 bg-slate-800 text-white rounded-sm p-2 border-t-2 max-w-md'>
              <h1>{item.item.title}</h1>
              <p>{item.item.author.firstName}</p>
            </div>
          )
        })
        }
    </div>
    </div>
  )
}

export default Search;
