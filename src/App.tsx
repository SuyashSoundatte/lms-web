import { useQuery } from '@tanstack/react-query';
import { apiRequest } from './api/api.request';

interface Todo {
    userId: number;
    id: number;
    title: string;
    completed: boolean;
}

const getTodo = async () => {
    const res = await apiRequest<Todo>({
        method: 'GET',
        url: 'https://jsonplaceholder.typicode.com/todos/1',
    });
    return res;
};

function App() {
    const { data } = useQuery({
        queryKey: ['todos'],
        queryFn: getTodo,
    });

    console.log(data);
    return (
        <>
            <div className="h-screen bg-[#212121] flex items-center justify-center">
                <div className="text-white text-4xl">
                    <h1 className="bg-blue-400 p-5 rounded-3xl">LMS Website</h1>
                </div>
            </div>
        </>
    );
}

export default App;
