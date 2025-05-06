// components/landingPage/SuccessModal.tsx
"use client";

import { Button } from "@heroui/button";
import { Modal, ModalBody, ModalContent, ModalFooter, ModalHeader } from "@heroui/modal";
import { motion } from "framer-motion";
import { Check, Copy, Smartphone } from "lucide-react";
import { useState } from "react";

import { fontSubtitle, fontTitle } from "@/config/fonts";

interface SuccessModalProps {
  isOpen: boolean;
  onClose: () => void;
  diet: string;
}

export default function SuccessModal({ isOpen, onClose, diet }: SuccessModalProps) {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(diet);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <Modal
      backdrop="blur"
      classNames={{
        backdrop: "bg-black/70 backdrop-blur-md",
        base: "bg-white/90 dark:bg-black/90 backdrop-blur-lg",
      }}
      isOpen={isOpen}
      size="3xl"
      onClose={onClose}
    >
      <ModalContent>
        <ModalHeader>
          <motion.div
            animate={{ scale: [0.8, 1.2, 1] }}
            className="flex items-center gap-2 text-primary-600"
          >
            <Check className="h-6 w-6" />
            <h3 className={`${fontTitle.className} text-2xl`}>Dieta Gerada com Sucesso!</h3>
          </motion.div>
        </ModalHeader>
        <ModalBody>
          <div className="space-y-4">
            <p className={`${fontSubtitle.className} text-secondary-600`}>
              Sua dieta personalizada está pronta! Você também receberá uma cópia no WhatsApp.
            </p>
            
            <div className="relative">
              <pre className="bg-gray-100 dark:bg-gray-900 p-4 rounded-lg overflow-auto max-h-96 text-sm">
                {diet}
              </pre>
              <Button
                className="absolute top-2 right-2"
                color={copied ? "success" : "primary"}
                size="sm"
                variant="flat"
                onClick={handleCopy}
              >
                {copied ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
              </Button>
            </div>
          </div>
        </ModalBody>
        <ModalFooter>
          <Button
            className="gap-2"
            color="success"
            startContent={<Smartphone className="h-5 w-5" />}
            onClick={onClose}
          >
            Acompanhe pelo WhatsApp
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
}