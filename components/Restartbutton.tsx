import { useRouter } from 'next/router';
import { MdRefresh } from 'react-icons/md';

const RestartButton: React.FC = () => {
  const router = useRouter();

  const handleClick = () => {
    router.push('/landing');
  };

  return (
    <button className="p-2 text-lg bg-transparent text-gray-600 m-2 rounded-lg border border-gray-600" onClick={handleClick}>
      <MdRefresh size={20} style={{ transform: 'scaleX(-1)' }} />
    </button>
  );
};

export default RestartButton;