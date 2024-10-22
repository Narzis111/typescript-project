import Image from "next/image";
import canoe from "../../public/canoe.jpg";
import OrderNowButton from "./OrderNowButton";

function OrderCard() {
  return (
    <article className="border border-gray-300 rounded bg-white px-3 py-2 pb-4">
      <h3 className="mb-2 px-2 py-1 font-semibold">Stunning Design</h3>
      <Image src={canoe} alt="order card image" />
     
      {/* Order button component  */}
     <OrderNowButton />
    </article>
  );
}

export default OrderCard;
