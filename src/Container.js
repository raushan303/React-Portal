import { useState } from "react";
import Modal from "./Modal";

export default function Container() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <Modal
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        title="This is title"
        subtitle="This is subtitle"
      />
      <button onClick={() => setIsOpen(true)}>Open Modal </button>
    </>
  );
}
