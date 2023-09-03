import { useRouter } from 'next/router';
import { MdRefresh } from 'react-icons/md';

const RestartButton: React.FC = () => {
  const router = useRouter();

  const handleClick = () => {
    router.push('/landing');
  };

  return (
    <button className="ml-24 ml-24 pl-24 " onClick={handleClick}>
      <div className='p-2 text-lg bg-transparent text-gray-600 rounded-lg border border-gray-600 shadow-lg'>
        <MdRefresh size={20} style={{ transform: 'scaleX(-1)' }} />
      </div>
    </button>
  );
};

export default RestartButton;