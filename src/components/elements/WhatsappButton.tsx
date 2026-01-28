import Link from "next/link";
import { MessageCircle } from "lucide-react";

const WhatsAppButton = () => {
    const phoneNumber = "27660104581"; // full country code
    const message = "Hello! I have an enquiry about your accounting and tax services";
    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;

    return (
        <Link
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="
        fixed
        bottom-6
        right-6
        z-50
        flex
        items-center
        gap-2
        rounded-full
        bg-[#25D366]
        px-5
        py-3
        text-white
        font-semibold
        shadow-lg
        transition
        hover:scale-105
        hover:shadow-xl
        active:scale-95
      "
            aria-label="Chat with us on WhatsApp"
        >
            <MessageCircle className="w-5 h-5" />
            <span className="hidden sm:inline">WhatsApp</span>
        </Link>
    );
};

export default WhatsAppButton;
