import React from "react"

function MenuItemReview() {
  return (
    <div className="w-full p-3 rounded-md bg-slate-200 flex gap-4">
      {/* menu image */}
      <div
        id="menu__image"
        className="basis-1/3 max-w-[90px] max-h-[90px] flex justify-center items-center rounded-md"
      >
        <img
          src="https://theplantbasedschool.com/wp-content/uploads/2022/04/Aglio-olio-1-1.jpg"
          alt="menu image"
        />
      </div>
      {/* menu detail */}
      <div
        id="menu__detail"
        className="basis-2/3 text-b-lg flex flex-col gap-1"
      >
        <div id="menu__name" className="font-semibold">
          Tuna Aglio Olio
        </div>
        <div id="menu__price">70.000</div>
        <div id="menu__num">
          <div className="w-8 flex items-center justify-center bg-white rounded-md">
            1
          </div>
        </div>
      </div>
    </div>
  )
}

export default MenuItemReview
