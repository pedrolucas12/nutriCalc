

export default function Footer() {
    return (
        <footer className="w-full flex items-center justify-center py-3 bg-primary">
        <div className="container mx-auto px-6 text-center">
            <p className="text-gray-500 text-sm">
            © {new Date().getFullYear()} Dieta Personalizada. Todos os direitos
            reservados.
            </p>
        </div>
        </footer>
    );
    }