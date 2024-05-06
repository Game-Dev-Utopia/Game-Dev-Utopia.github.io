import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuCheckboxItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,

} from "@/components/ui/dropdown-menu"
import React from 'react'
import { TiArrowSortedDown } from "react-icons/ti";

// import { FaCross } from "react-icons/fa"
import { RxCross2 } from "react-icons/rx";
const Filter = ({ addToFilterList, setItem, removeFromFilterList, filterCount, clearFilters }) => {

  const [select, setSelect] = React.useState({
    Puzzle: false,
    Action: false,
    Survival: false,
    Strategy: false,
    Adventure: false,
    Platformer: false,
    Shooting: false,
    Stealth: false,
    Incremental: false,
    Simulation: false,
    RPG: false,
    Casual: false,
    Mobile: false,
    PC: false,
    Quick: false,
    Heavy: false,
    '2D': false,
    '3D': false,
    Downloadable: false
  })

  // future scope: Add rating and downlaods filters 
  const menu = [
    {
      title: "Category",
      values: [
        { "id": 1, "name": "Puzzle" },
        { "id": 2, "name": "Action" },
        { "id": 3, "name": "Survival" },
        { "id": 4, "name": "Strategy" },
        { "id": 5, "name": "Adventure" },
        { "id": 6, "name": "Platformer" },
        { "id": 7, "name": "Shooting" },
        { "id": 8, "name": "Stealth" },
        { "id": 9, "name": "Incremental" },
        { "id": 10, "name": "Simulation" },
        { "id": 11, "name": "RPG" },
        { "id": 12, "name": "Casual" }
      ]
    },
    {
      title: "Dimensions",
      values: [
        { id: 1, name: "2D" },
        { id: 2, name: "3D" },
      ]
    },
    {
      title: "Game Size",
      values: [
        { id: 1, name: "Quick" },
        { id: 2, name: "Heavy" },
      ]
    },
    {
      title: "Device",
      values: [
        { id: 1, name: "Mobile" },
        { id: 2, name: "PC" },
      ]
    }
  ]

  const clrFiltersFn = () => {
    clearFilters();
    const keys = [
      "Puzzle",
      "Action",
      "Survival",
      "Strategy",
      "Adventure",
      "Platformer",
      "Shooting",
      "Stealth",
      "Incremental",
      "Simulation",
      "RPG",
      "Casual",
      'Mobile',
      'PC',
      'Quick',
      'Heavy',
      '2D',
      '3D',
      'Downloadable'
    ];
    setSelect(keys.reduce((obj, key) => ({ ...obj, [key]: false }), {}));
  }

  const [selectDownloadable, setSelectDownloadable] = React.useState(false)
  return (
    <div className="overflow-x-scroll">
      <div className='flex overflow-x-scroll gap-1 pt-1 pb-2 sm:pb-1 md:justify-center md:items-center bg-slate-900 mx-2'>
        <div
          className={`${filterCount > 0 ? "visible sm:hidden" : "hidden"} sm:mx-1.5 h-7 mx-0.5 min-w-fit justify-center text-center max-[400px]:text-xs my-2 px-3 sm:px-4 flex items-center font-medium text-sm gap-2 cursor-pointer shadow-sm bg-grad-hover bg-slate-800  shadow-gray-600 rounded-full`}
          onClick={clrFiltersFn}>
          <RxCross2 size={15} />
          Clear Filters
        </div>
        {
          menu.map((val, i) => (
            <div
              key={i}
              className={`text-white my-2 min-w-fit sm:w-auto px-1 sm:mx-1 cursor-pointer shadow-sm bg-grad-hover sm:justify-center items-center bg-slate-800 shadow-gray-600 rounded-full  ${'hover:shadow-lg'}`}>
              <DropdownMenu>
                <DropdownMenuTrigger
                  className="h-7 flex items-center justify-center outline-none font-medium text-sm "
                  onTouchMove={(e) => e.preventDefault()}>
                  {val.title}
                  <TiArrowSortedDown className="ml-0.5 relative top-[5%] sm:top-[12%]" />
                </DropdownMenuTrigger>

                <DropdownMenuContent
                  onScroll={(event) => event.preventDefault()}
                >
                  {val.values.map((value, item) => (
                    <DropdownMenuCheckboxItem
                      onSelect={(event) => event.preventDefault()}
                      key={value.id}
                      checked={select[value.name]}
                      onCheckedChange={() => {
                        // setSelect2D(!select[i])
                        setSelect((prev) => ({ ...prev, [value.name]: !prev[value.name] }))
                        if (!select[value.name]) {
                          addToFilterList(value.name)
                        } else {
                          removeFromFilterList(value.name)
                        }
                      }}
                    >
                      {value.name}
                    </DropdownMenuCheckboxItem>
                  ))}
                </DropdownMenuContent>
              </DropdownMenu>

            </div>

          ))
        }


        <div className={`sm:ml-1 mx-0.5 sm:bg-grad-hover my-2 h-7 text-center cursor-pointer justify-center min-w-fit px-4 max-[400px]:text-xs rounded-full items-center inline-flex text-sm font-medium shadow-sm shadow-gray-600 ${select.Downloadable ?
          " bg-grad text-white"
          :
          "bg-slate-800 hover:bg-slate-600 sm:hover:bg-gradient-to-r sm:from-cyan-500 sm:to-blue-500"}`}
          onClick={() => {
            setSelect((prev) => ({ ...prev, ["Downloadable"]: !prev["Downloadable"] }))
            if (!select["Downloadable"]) {
              addToFilterList("Downloadable")
            } else {
              removeFromFilterList("Downloadable")
            }
          }}
        >
          Downloadable
        </div>

        <div
          className={`${filterCount > 0 ? "hidden sm:flex sm:visible items-center" : "invisible"} sm:mx-1.5 h-7 mx-0.5 min-w-fit justify-center text-center max-[400px]:text-xs my-2 px-3 sm:px-4 flex items-center font-medium text-sm gap-2 cursor-pointer shadow-sm bg-grad-hover bg-slate-800  shadow-gray-600 rounded-full`}
          onClick={clrFiltersFn}>
          <RxCross2 size={18} />
          Clear Filters
        </div>

        {/* TODO: future scope all filters displayed under same hood(dropdown) */}
        {/* <Toggle className="my-2 mx-5">      //not  a toggle its a dropdown
          All
        </Toggle> */}
      </div>
    </div>
  )
}

export default Filter