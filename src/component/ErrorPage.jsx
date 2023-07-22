import { Link, useRouteError } from 'react-router-dom';

const ErrorPage = () => {
    const { error, status } = useRouteError();
    return (
        <div className='text-center text-3xl text-error my-1'>
            <div className='w-[75%] mx-auto'>
                <img
                    className='mx-auto w-1/2 h-2/4'
                    src="https://img.freepik.com/free-vector/404-error-with-person-looking-concept-illustration_114360-7912.jpg?w=740&t=st=1686083121~exp=1686083721~hmac=f1688ef0fd5ec9dad7f7cf29d7402b255d0a7a3562c5f49112db98ee1af3459b"
                    alt="" />
            </div>
            <h2
                className='my-2 font-extrabold text-3xl'>
                <span
                    className='text-error'>
                    ERROR
                </span> {status || 404}
            </h2>
            <p
                className='font-bold my-4'>
                {error?.message}
            </p>
            <Link
                to='/'
                className='no-underline text-white px-5 py-3 font-bold rounded bg-error mb-20'
            >
                Back To Home
            </Link>
        </div>
    );
};

export default ErrorPage;
