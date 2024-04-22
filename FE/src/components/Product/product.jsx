import React, { useState } from "react";
import { Flex, Image, Button } from "antd";
import ModalProduct from "./modal-product";
import LuckyPicture from "../../assets/pictures/lucky.png";

function Product() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const showModal = () => {
    setIsModalOpen(true);
  };
  return (
    <div className="relative">
      <Flex
        vertical
        align="center"
        className="border border-gray-300 rounded-lg w-[200px] bg-blue-100 relative cursor-pointer group"
      >
        <Image width={200} src={LuckyPicture} preview={false} alt="Lucky" />
        <p className="font-bold text-xl">Bí mật của may mắn</p>
        <p className="text-lg italic">
          <strong>10.000</strong> đồng
        </p>
        <Button
          onClick={showModal}
          className="hidden group-hover:flex items-center justify-center absolute top-[50%] left-[50%] transform translate-x-[-50%] -translate-y-[-50%] bg-white p-4 rounded-md shadow-md w-[100px] "
        >
          Mua
        </Button>
        <ModalProduct
          setIsModalOpen={setIsModalOpen}
          isModalOpen={isModalOpen}
        />
      </Flex>
    </div>
  );
}

export default Product;
