interface InputProps { 
  placeholder: string; 
  reference?: any;
}

export function Input({ placeholder, reference }: InputProps) {
  return (
    <div className="w-full" >
      <input
        ref={reference}
        placeholder={placeholder}
        type="text"
        className="w-full px-4 py-3 border-2 border-purple-900 rounded-lg text-lg m-2 text-center placeholder-gray-500"
      />
    </div>
  );
}
