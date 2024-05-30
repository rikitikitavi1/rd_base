import Link from "next/link";

export default function LoginPage() {
    const submitHandler = (e: any) => {
        e.preventDefault()

    }
    return (
        <div className='flex justify-center items-center h-lvh'>
            <div className='bg-white h-1/5 w-3/12 rounded-md shadow-white'>
                <p className='text-black font-bold text-3xl p-5 text-center'>Авторизация</p>

                <form className='flex justify-center flex-col items-center text-black'>
                    <p className='pr-2'>Email:</p>
                    <input className='bg-black text-white w-2/3 rounded-md p-1'></input>
                    <p className='pr-2'>Пароль:</p>
                    <input className='bg-black text-white w-2/3 rounded-md p-1'></input>
                    {/*<button type='submit' className='bg-black text-white mt-10 rounded-md w-1/5 h-8'>*/}
                    <Link href='/base/list'>
                        <span className='bg-black text-white mt-10 rounded-md w-1/5 h-8'>
                            Войти
                        </span>
                    </Link>
                    {/*</button>*/}
                </form>
            </div>

        </div>
    )
}
