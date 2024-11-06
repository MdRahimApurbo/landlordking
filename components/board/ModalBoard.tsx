"use client";
import { useStore } from "@/lib/store/Provider";
import {
  Button,
  Modal,
  ModalBody,
  ModalContent,
  ModalHeader,
  useDisclosure,
} from "@nextui-org/react";
import { useEffect, useState } from "react";
import Ball from "../main/Ball";

const ModalBoard = () => {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const { defaultModal } = useStore((state) => state);
  const [selectedColor, setSelectedColor] = useState<string>("");

  useEffect(() => {
    if (defaultModal) {
      onOpen();
    }
  }, [defaultModal, onOpen]);

  return (
    <div>
      <Modal
        isOpen={isOpen}
        onOpenChange={onOpenChange}
        isDismissable={false}
        backdrop="blur"
        classNames={{
          base: "bg-transparent shadow-none",
          body: "bg-transparent",
        }}
        hideCloseButton
      >
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1 text-2xl text-center">
                Player Select Color
              </ModalHeader>
              <ModalBody>
                <div className="flex flex-col gap-5">
                  <div className="grid grid-cols-3  place-content-center place-items-center gap-5">
                    <Ball
                      onPress={() => setSelectedColor("yellow")}
                      color="bg-yellow-400"
                      w={14}
                      h={14}
                    />
                    <Ball
                      onPress={() => setSelectedColor("red")}
                      color="bg-red-400"
                      w={14}
                      h={14}
                    />
                    <Ball
                      onPress={() => setSelectedColor("orange")}
                      color="bg-orange-400"
                      w={14}
                      h={14}
                    />
                    <Ball
                      onPress={() => setSelectedColor("green")}
                      color="bg-green-400"
                      w={14}
                      h={14}
                    />
                    <Ball
                      onPress={() => setSelectedColor("blue")}
                      color="bg-blue-400"
                      w={14}
                      h={14}
                    />
                    <Ball
                      onPress={() => setSelectedColor("purple")}
                      color="bg-purple-400"
                      w={14}
                      h={14}
                    />
                    <Ball
                      onPress={() => setSelectedColor("gray")}
                      color="bg-gray-400"
                      w={14}
                      h={14}
                    />
                    <Ball
                      onPress={() => setSelectedColor("pink")}
                      color="bg-pink-400"
                      w={14}
                      h={14}
                    />
                    <Ball
                      onPress={() => setSelectedColor("black")}
                      color="bg-black"
                      w={14}
                      h={14}
                    />
                  </div>
                  <Button
                    variant="flat"
                    color="primary"
                    size="sm"
                    onPress={onClose}
                    className="bg-primary text-white w-fit mx-auto"
                  >
                    Join Game
                  </Button>
                </div>
              </ModalBody>
            </>
          )}
        </ModalContent>
      </Modal>
    </div>
  );
};

export default ModalBoard;
