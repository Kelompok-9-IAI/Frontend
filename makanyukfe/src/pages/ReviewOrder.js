import React from "react"
import CouponItemReview from "../components/review/CouponItemReview"
import DelivItemReview from "../components/review/DelivItemReview"
import MenuItemReview from "../components/review/MenuItemReview"

export const ReviewOrder = () => {
  const order = [
    {
      _id: 1,
      itemName: "Tuna Aglio Olio",
      price: "70000",
    },
  ]
  return (
    <div>
      <div
        id="review__container"
        className="px-10 bg-slate-400 flex flex-col gap-3"
      >
        {/* title */}
        <div className="py-6 w-full flex justify-center items-center">
          <h1 className="text-h-sm font-bold">Review Pemesanan</h1>
        </div>
        {/* menu review*/}
        <div
          id="review__menu"
          className="flex flex-col gap-2 justify-center items-center"
        >
          {/* menu item */}
          <MenuItemReview />
          <MenuItemReview />
          <MenuItemReview />
        </div>
        {/* delivery options */}
        <div
          id="review__delivery"
          className="flex flex-col gap-2 justify-center items-center bg-slate-200 rounded-md p-3"
        >
          <div className="text-h-sm font-semibold py-3">
            Pilih metode pengantaran
          </div>
          <div
            id="delivery__options"
            className="w-full flex flex-col gap-2 justify-center items-center "
          >
            <DelivItemReview />
            <DelivItemReview />
          </div>
        </div>
        {/* coupon options */}
        <div
          id="review__delivery"
          className="flex flex-col gap-2 justify-center items-center bg-slate-200 rounded-md p-3"
        >
          <div className="text-h-sm font-semibold py-3">Gunakan kupon</div>
          <div
            id="delivery__options"
            className="w-full flex flex-col gap-2 justify-center items-center "
          >
            <CouponItemReview />
            <CouponItemReview />
          </div>
        </div>
        {/* payment options */}
        {/* total harga */}
        {/* button pembayaran */}
      </div>
    </div>
  )
}
