interface InputProps {
  reference: any;
  placeholder: string;
  className?: string;
  type?: string; 
}
export function Input({ reference, placeholder, className, type = "text" }: InputProps) {
  return (
    <input
      ref={reference}
      type={type} 
      placeholder={placeholder}
      className={`w-full px-4 py-3 text-lg border border-gray-300 rounded-lg focus:outline-none cursor-pointer focus:ring-2 focus:ring-[#7950f2] transition-all duration-200 max-[640px]:px-4 max-[640px]:py-1.5 max-[640px]:text-sm ${className || ""}`}
    />
  );
}