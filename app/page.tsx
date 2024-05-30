'use client'
import {Button} from "@/app/ui/Button/Button";
import {useForm, SubmitHandler} from "react-hook-form"
import {signIn} from "next-auth/react";
import NextAuth from "next-auth";
import {useRouter} from "next/navigation";

type Inputs = {
    email: string
    password: string
}
export default function Home() {
    const {
        register,
        handleSubmit,
        watch,
        formState: {errors},
    } = useForm<Inputs>()
    const router = useRouter()
    const onSubmit = async (data: any) => {
        try {
            // Отправляем данные на сервер для аутентификации
            const res = await fetch('http://0.0.0.0:8000/api/auth/login/', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({email: data.email, password: data.password}),
            })
            // Если аутентификация прошла успешно, используем signIn для входа пользователя
            await signIn('credentials', {email: data.email, password: data.password, callbackUrl: '/'})
        } catch (error) {
            // Обработка ошибок аутентификации
            console.error('Authentication failed')
            // Перенаправляем пользователя на страницу со списком (заглушка)
            router.push('/base/list')
        }
    }
    return (
        <div className={'flex justify-center items-center h-lvh'} style={{
            backgroundImage: "url('/bg-login.jpg')",
            backgroundSize: 'cover',
            backgroundPosition: 'center'
        }}>
            <form className='flex flex-col bg-white w-2/12 shadow-white' onSubmit={handleSubmit(onSubmit)}>
                <h3 className='font-semibold text-3xl text-center pt-6 pb-8 text-primary'>Авторизация</h3>
                <div className='flex flex-col px-8'>
                    <label>Email:</label>
                    <input className='border-b-2 hover:border-b-blue-500' {...register("email", {required: true})}/>
                    {errors.email && <span className='text-red-600'>Email необходим!</span>}
                </div>
                <div className='flex flex-col px-8 pt-4'>
                    <label>Пароль:</label>
                    <input className='border-b-2 hover:border-b-blue-500'
                           type='password' {...register("password", {required: true})}/>
                    {errors.email && <span className='text-red-600'>Пароль необходим!</span>}
                </div>
                <Button className='m-8'>Войти</Button>
            </form>

        </div>

    )
}
