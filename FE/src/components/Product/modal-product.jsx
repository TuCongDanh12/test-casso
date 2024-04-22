import React, { useState } from "react";
import { Modal, Flex, Image, Form, InputNumber } from "antd";
import LuckyPicture from "../../assets/pictures/lucky.png";
import { postProduct } from "../../api";
function ModalProduct({ setIsModalOpen, isModalOpen }) {
  const [quantity, setQuantity] = useState(10000);
  const data = {
    bookName: "BÍ MẬT CỦA SỰ MAY MẮN",
    amount: 10000,
    description: "Payment for order",
  };
  const handleOk = async (data) => {
    try {
      console.log(data);
      const res = await postProduct(data);
      console.log(res);
      if (res) {
        window.open(res.data.checkoutUrl, "_blank");
      }
    } catch (err) {
      console.error(err);
    }
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const handleQuantityChange = (value) => {
    setQuantity(value);
  };
  return (
    <>
      <Modal
        title="Chi tiết sản phẩm"
        visible={isModalOpen}
        onOk={() => handleOk(data)}
        onCancel={handleCancel}
      >
        <Flex gap={30}>
          <Image width={200} src={LuckyPicture} preview={false} alt="Lucky" />
          <div>
            <Form>
              <p className="font-bold text-xl mb-5">Bí mật của may mắn</p>
              <Form.Item label="Số lượng">
                <InputNumber
                  min={1}
                  value={quantity}
                  onChange={handleQuantityChange}
                />
              </Form.Item>
              <Form.Item label="Giá">
                <p>{quantity} đồng</p>
              </Form.Item>
            </Form>
          </div>
        </Flex>
      </Modal>
    </>
  );
}

export default ModalProduct;
