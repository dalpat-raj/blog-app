import Spinner from "@/components/loader/Spinner";

interface ButtonWithSpinnerProps {
    loading: boolean; 
    children: React.ReactNode; 
  }

const ButtonWithSpinner: React.FC<ButtonWithSpinnerProps> = ({ loading, children}) => {
  return (
    <button 
      type="submit"
      className={`w-full h-full text-[14px] font-semibold bg-[--secondary] text-[--white] px-6 py-1 transition duration-200 hover:bg-[--secondary-dark] flex items-center justify-center rounded-md`}
      disabled={loading}
    >
      {loading ? <Spinner/> : children}
    </button>
  );
};

export default ButtonWithSpinner;
